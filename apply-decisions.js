#!/usr/bin/env node
// Copies the editorial decisions out of Fable's decisions file into cards.json, word for word.
//
//   node apply-decisions.js [path/to/decisions.md]
//
// The build session must not retype or reinterpret the decisions, so this takes the LAST fenced json
// block in the file (a revision replaces the earlier block), checks it parses and has the expected shape,
// and writes it unchanged. Default source: review/card-decisions-fable-2026-09-14.md
const fs = require('fs');
const path = require('path');

const src = process.argv[2] || path.join(__dirname, 'review', 'card-decisions-fable-2026-09-14.md');
const text = fs.readFileSync(src, 'utf8');
const blocks = [...text.matchAll(/```json\s*\n([\s\S]*?)\n```/g)].map((m) => m[1]);
if (!blocks.length) { console.error('No fenced json block found in ' + src); process.exit(1); }
const raw = blocks[blocks.length - 1];

let data;
try { data = JSON.parse(raw); } catch (e) { console.error('The json block does not parse: ' + e.message); process.exit(1); }

const expectedSides = ['ricos', 'tideSpot', 'mayhem', 'checkFirst', 'stratos', 'confession', 'yetiFilm', 'pbrSponsor'];
const expectedRounds = ['once-or-again', 'line-or-cast', 'them-or-you', 'own-or-rent'];
const problems = [];
expectedSides.forEach((k) => { if (!data.sides || !data.sides[k]) problems.push('missing side ' + k); });
expectedRounds.forEach((id) => { if (!(data.rounds || []).some((r) => r.id === id)) problems.push('missing round ' + id); });
if (problems.length) { console.error('Decisions are incomplete:\n  - ' + problems.join('\n  - ')); process.exit(1); }

const out = path.join(__dirname, 'cards.json');
fs.writeFileSync(out, JSON.stringify(data, null, 2) + '\n', 'utf8');
console.log('cards.json written from ' + path.basename(src) + ' (json block ' + blocks.length + ' of ' + blocks.length + ')');
console.log('  ' + Object.keys(data.sides).length + ' sides, ' + data.rounds.length + ' rounds, copy keys: ' + (Object.keys(data.copy || {}).join(', ') || 'none'));
