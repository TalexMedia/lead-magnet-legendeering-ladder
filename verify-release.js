#!/usr/bin/env node
// One command to answer: is the copy on this page still the copy that passed independent review?
//
//   node verify-release.js
//
// It runs the Talex release checks from Writing/README.md in order and stops at the first failure:
//   1. build-content.js    the content gate (rounds, films, sources, tells)
//   2. extract-copy.js     regenerate copy-deck.md, every word a viewer sees
//   3. talex-lint.py       the Talex lint, public profile, with the written warning decisions
//   4. review-receipt.py   the receipt still matches the reviewed text, character for character
//
// If step 4 fails after an edit, that is the system working: any copy change after review voids the
// receipt. Get the changed passage reviewed by a fresh context, then record a new receipt.
const { spawnSync } = require('child_process');
const path = require('path');

const here = __dirname;
const root = path.join(here, '..', '..');
const deck = path.join(here, 'copy-deck.md');
const adjudications = path.join(here, 'lint-adjudications.json');
const receipt = path.join(here, 'review', 'review-receipt.json');
const py = process.platform === 'win32' ? 'python' : 'python3';

const steps = [
  { name: 'Content gate', cmd: 'node', args: [path.join(here, 'build-content.js')] },
  { name: 'Extract copy deck', cmd: 'node', args: [path.join(here, 'extract-copy.js')] },
  { name: 'Talex lint', cmd: py, args: [path.join(root, 'Writing', 'talex-lint.py'), deck, '--profile', 'public', '--adjudications', adjudications] },
  { name: 'Review receipt', cmd: py, args: [path.join(root, 'Writing', 'review-receipt.py'), 'verify', deck, '--profile', 'public', '--receipt', receipt] }
];

for (const s of steps) {
  const r = spawnSync(s.cmd, s.args, { cwd: root, encoding: 'utf8' });
  const text = ((r.stdout || '') + (r.stderr || '')).trim();
  const firstLine = text.split('\n').find((l) => l.trim()) || '';
  if (r.status !== 0) {
    console.log('BLOCKED at ' + s.name);
    console.log(text);
    process.exit(1);
  }
  console.log('ok   ' + s.name.padEnd(18) + firstLine);
}
console.log('\nRELEASE OK: the copy on this page is the copy that passed independent review.');
