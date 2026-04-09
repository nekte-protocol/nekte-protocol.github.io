/**
 * Generates Python API documentation using pdoc and converts to Starlight-compatible markdown.
 *
 * pdoc generates HTML by default, but with --output-directory it generates per-module markdown.
 * We run pdoc in text mode, then create structured .md files with Starlight frontmatter.
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const outDir = 'src/content/docs/api/python';
const modules = [
  // Domain layer
  { module: 'nekte.domain.types', category: 'domain', title: 'Types' },
  { module: 'nekte.domain.budget', category: 'domain', title: 'Budget' },
  { module: 'nekte.domain.hash', category: 'domain', title: 'Hash' },
  { module: 'nekte.domain.errors', category: 'domain', title: 'Errors' },
  { module: 'nekte.domain.task', category: 'domain', title: 'Task Lifecycle' },
  { module: 'nekte.domain.sse', category: 'domain', title: 'SSE Events' },
  // Application layer
  { module: 'nekte.application.client', category: 'application', title: 'NekteClient' },
  { module: 'nekte.application.server', category: 'application', title: 'NekteServer' },
  { module: 'nekte.application.cache', category: 'application', title: 'Cache' },
  { module: 'nekte.application.task_registry', category: 'application', title: 'TaskRegistry' },
  { module: 'nekte.application.capability_registry', category: 'application', title: 'CapabilityRegistry' },
  { module: 'nekte.application.delegate_stream', category: 'application', title: 'DelegateStream' },
  // Ports
  { module: 'nekte.ports.transport', category: 'ports', title: 'Transport' },
  { module: 'nekte.ports.cache_store', category: 'ports', title: 'CacheStore' },
  { module: 'nekte.ports.auth', category: 'ports', title: 'Auth' },
  { module: 'nekte.ports.delegate_handler', category: 'ports', title: 'DelegateHandler' },
  { module: 'nekte.ports.stream_writer', category: 'ports', title: 'StreamWriter' },
  // Adapters
  { module: 'nekte.adapters.http_transport', category: 'adapters', title: 'HttpTransport' },
  { module: 'nekte.adapters.memory_cache_store', category: 'adapters', title: 'InMemoryCacheStore' },
];

// Create output directories
for (const cat of ['domain', 'application', 'ports', 'adapters']) {
  fs.mkdirSync(path.join(outDir, cat), { recursive: true });
}

let generated = 0;
let skipped = 0;

for (const { module: mod, category, title } of modules) {
  try {
    const doc = execSync(`python3 -m pdoc --text ${mod}`, {
      encoding: 'utf8',
      timeout: 15000,
    }).trim();

    if (!doc) { skipped++; continue; }

    // Convert pdoc text output to markdown
    let md = doc
      // Convert "Module nekte.foo.bar" headers
      .replace(/^(Module|Class|Function) (.+)$/gm, '## $1: `$2`')
      // Convert indented signatures to code blocks
      .replace(/^    (.+\(.*\).*)$/gm, '```python\n$1\n```')
      // Keep the rest as-is (pdoc text is already quite readable)
      ;

    const content = `---
title: "${title}"
description: "Python API — ${mod}"
---

# ${title}

\`${mod}\`

${md}
`;

    const filePath = path.join(outDir, category, `${title.toLowerCase().replace(/\s+/g, '-')}.md`);
    fs.writeFileSync(filePath, content);
    generated++;
  } catch (err) {
    // Module might not exist in this version — skip gracefully
    console.warn(`Skipped ${mod}: ${err.message?.split('\n')[0]}`);
    skipped++;
  }
}

// Create index page
fs.writeFileSync(path.join(outDir, 'index.md'), `---
title: "Python SDK"
description: "API reference for the NEKTE Python SDK (nekte-python)"
---

# Python SDK API Reference

Auto-generated from [\`nekte-protocol/nekte-python\`](https://github.com/nekte-protocol/nekte-python).

## Domain Layer
Core types, schemas, hashing, budget resolution, task state machine, and SSE events.

## Application Layer
High-level client and server implementations, cache, task registry, and streaming.

## Ports
Abstract interfaces (Transport, CacheStore, Auth, DelegateHandler, StreamWriter).

## Adapters
Concrete implementations (HttpTransport, InMemoryCacheStore).
`);

console.log(`Python docs: ${generated} generated, ${skipped} skipped`);
