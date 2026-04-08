/**
 * Post-processes TypeDoc markdown output for Starlight compatibility:
 * - Adds YAML frontmatter (title) to every .md file
 * - Renames README.md -> index.md
 * - Renames modules.md -> index.md
 * - Fixes internal links (README.md -> index.md, modules.md -> index.md)
 */

import fs from 'fs';
import path from 'path';

const apiDir = 'src/content/docs/api/typescript';

// Remove root README (duplicate of project README)
const rootReadme = path.join(apiDir, 'README.md');
if (fs.existsSync(rootReadme)) fs.unlinkSync(rootReadme);

// Remove _media dir if generated
const mediaDir = path.join(apiDir, '_media');
if (fs.existsSync(mediaDir)) fs.rmSync(mediaDir, { recursive: true });

let processed = 0;
let renamed = 0;
let fixed = 0;

function processDir(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) { processDir(fullPath); continue; }
    if (!entry.name.endsWith('.md')) continue;

    let content = fs.readFileSync(fullPath, 'utf8');

    // Fix links before renaming
    const original = content;
    content = content.replace(/\(([^)]*?)README\.md([^)]*?)\)/g, '($1index.md$2)');
    content = content.replace(/\(([^)]*?)modules\.md([^)]*?)\)/g, '($1index.md$2)');
    if (content !== original) fixed++;

    // Add frontmatter if missing
    if (!content.startsWith('---')) {
      let title = entry.name.replace('.md', '');
      if (title === 'README' || title === 'modules') title = 'Overview';

      const headingMatch = content.match(/^#+\s+(.+)$/m);
      if (headingMatch) title = headingMatch[1].replace(/[\"\\]/g, '');

      content = `---\ntitle: "${title}"\n---\n\n${content}`;
      processed++;
    }

    // Rename README.md -> index.md, modules.md -> index.md
    let targetPath = fullPath;
    if (entry.name === 'README.md' || entry.name === 'modules.md') {
      targetPath = path.join(dir, 'index.md');
      renamed++;
    }

    if (targetPath !== fullPath && fs.existsSync(fullPath)) fs.unlinkSync(fullPath);
    fs.writeFileSync(targetPath, content);
  }
}

processDir(apiDir);
console.log(`API docs processed: ${processed} files, ${renamed} renamed, ${fixed} links fixed`);
