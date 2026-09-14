// Regenerates content.js and stamps a content hash onto the script URL in index.html.
// Run from this folder:  node build-content.js
//
// TWO KINDS OF CONTENT, KEPT APART ON PURPOSE.
//
// Structure lives in this file: which film is on which card, who wins each round, the round order,
// the principle tags, and the verbatim source quotes. These were settled with Tom and Evan.
//
// Editorial content lives in cards.json: every caption, category, title, spec row, stat and source
// note, plus each round's headline, question and answers. Evan, 14 September 2026, asked that Fable make
// these decisions "because these decisions are important", so cards.json holds Fable's decisions and
// this build applies them word for word. It does not reinterpret them, and it refuses to run if any card
// or field is missing, so nothing can fall back to an unapproved value.
//
// WHAT THE PAGE IS FOR. Evan: "This is not a strategy doc. This is a lead magnet which is designed to
// show the principles of Legendeering in an interactive way." A card carries only what explains its
// round. Nothing is imported from the strategy-doc block library; check-rounds.js enforces that.
//
// Every figure in cards.json was read on 14 September 2026 from YouTube's own data for each film, or is
// from a source named in its note. Every film was confirmed to embed through YouTube's oEmbed endpoint.
const fs = require('fs');
const path = require('path');
const { check } = require('./check-rounds');
const libPath = path.join(__dirname, '..', '..', 'ProspectAudit', 'templates', 'format-blocks.json');
const lib = JSON.parse(fs.readFileSync(libPath, 'utf8')).blocks;

// ---- Structure --------------------------------------------------------------------------------
const SIDES = {
  ricos:      { id: 'ricos-tacos',      name: 'P&G, Rico\'s Tacos',                        officialChannel: true, video: { id: 'PeUsXJ4ccXY', label: 'Rico\'s Tacos, Episode 1: Flavor Has a Price' } },
  tideSpot:   { id: 'tide-school-lunch', name: 'P&G, a Tide commercial',                   officialChannel: true, video: { id: 'xPHs8yT8cPM', label: 'Tide, School Lunch' } },
  mayhem:     { id: 'mayhem',            name: 'Allstate, Mayhem',                         officialChannel: true, video: { id: 'InPoTHIrnp0', label: 'Mayhem: Action Hero, an Allstate commercial' } },
  checkFirst: { id: 'check-first',       name: 'Allstate, Check First',                    officialChannel: true, video: { id: 'I6QksAqf0jk', label: 'Allstate Check First, Swim Meet' } },
  stratos:    { id: 'stratos',           name: 'Red Bull, the Stratos jump',               officialChannel: true, video: { id: 'FHtvDA0W34I', label: "Felix Baumgartner's supersonic freefall from 128k', Mission Highlights" } },
  confession: { id: 'confession',        name: 'Red Bull, a Gives You Wiiings cartoon',    officialChannel: true, video: { id: '0b3OPo9wHuk', label: 'Confession, a 2011 Red Bull cartoon advert' } },
  yetiFilm:   { id: 'yeti-presents',     name: 'YETI, YETI Presents',                      officialChannel: true, video: { id: 'OmrufRLGdAk', label: 'YETI Presents, A Thousand Casts' } },
  pbrSponsor: { id: 'pbr-sponsor',       name: 'YETI, sponsoring the PBR bull riding award', officialChannel: true, video: { id: '6ti-Ky0zYhA', label: '2026 PBR YETI Bucking Bull Champion Ransom' } }
};

const ROUNDS = [
  { rung: 'repetition', id: 'once-or-again', lens: ['Consistency Is Key'], sides: ['ricos', 'tideSpot'], winner: 'ricos',
    quote: '"You need it to be episodic, because a series earns you a return visit and a one off never does."',
    cite: 'Tom Langan, Welcome to The Taco Drama, 30 July 2026', url: 'https://www.linkedin.com/pulse/welcome-taco-drama-tom-langan-wusce' },
  { rung: 'format', id: 'line-or-cast', lens: ['Consistency Is Key', 'It\'s Not About You. It\'s About Them.'], sides: ['mayhem', 'checkFirst'], winner: 'mayhem',
    quote: 'MarketCast measured insurance mascots from January 2024 to February 2025 and put Mayhem first for likeability and for the most memorable ads. In a separate survey, 31 percent of people asked picked Mayhem as the mascot they would most like to grab a beer with, second only to Jake from State Farm.',
    cite: 'MarketCast via MarTech Edge, 1 April 2025, and Insurity via Business Wire, 7 March 2024', url: 'https://martechedge.com/news/liberty-mutuals-limu-emu-leads-the-pack-in-insurance-mascot-performance-marketcast-finds' },
  { rung: 'audience', id: 'them-or-you', lens: ['Give Without Expectation', 'It\'s Not About You. It\'s About Them.'], sides: ['stratos', 'confession'], winner: 'stratos',
    quote: '"They didn\'t gate it behind a sign-up. They didn\'t cut away to a guy chugging a can the second Felix landed."',
    cite: 'Tom Langan, Where the Rubber Meets The Restaurant, 10 June 2026', url: 'https://www.linkedin.com/pulse/where-rubber-meets-restaurant-tom-langan-gllme' },
  { rung: 'ownership', id: 'own-or-rent', lens: ['Give Without Expectation', 'It\'s Not About You. It\'s About Them.'], sides: ['yetiFilm', 'pbrSponsor'], winner: 'yetiFilm',
    quote: 'PBR makes the film and owns the channel it sits on. YETI Presents started in 2015, two years before the sponsorship resumed.',
    cite: 'PBR, 17 May 2026, and Front Office Sports, October 2019', url: 'https://www.youtube.com/watch?v=6ti-Ky0zYhA' }
];

// Interface and closing copy, as reviewed and receipted on 14 September. cards.json may override a key.
const COPY = {
  brand: 'Talex Media',
  eyebrow: 'A choose your own adventure case study · draft for Tom',
  title: 'Which one worked?',
  lead: 'Each of the four rounds shows one company two ways. Pick the one that worked, then say why.',
  gate: '"If you stripped your name and your product off this piece of content, would anyone still want to watch it?"',
  gateCite: 'Tom Langan, What\'s 100 Years Old is New Again, 22 May 2026',
  gateUrl: 'https://www.linkedin.com/pulse/whats-100-years-old-new-again-tom-langan-6bm2e',
  start: 'Start round one',
  roundLabel: 'Round {n} of {total}',
  pickStep: 'Pick',
  pickLead: 'Which one {measure}?',
  pickInstruction: 'Choose the one you think worked.',
  lock: 'Lock in my pick',
  revealStep: 'What worked',
  calledWinner: 'You called it.',
  missedWinner: 'You picked {pick}. The one that worked was {winner}.',
  youSaidRight: 'Your pick. Right.',
  youSaidWrong: 'Your pick',
  realOrder: 'What worked',
  cmpYou: 'You said',
  cmpReal: 'Real',
  whyStep: 'Why did it work?',
  whyLead: 'The one that worked is {winner}.',
  choose: 'Lock in my answer',
  whyRight: 'Right.',
  whyWrong: 'Not this one.',
  whyRevealStep: 'The reason',
  optionTrueOf: 'About {name}',
  winnerFact: 'Why it worked',
  yourAnswer: 'Your answer',
  sourceLabel: 'The source',
  nextRound: 'Round {n}',
  seeResult: 'See my result',
  resultStep: 'Your result',
  resultHeading: 'You called {n} of 8.',
  resultHigh: 'You read these the way we do.',
  resultLow: 'Instinct went one way and the examples went another.',
  highFrom: 6,
  scoreLabel: 'Points', streakLabel: 'Streak', plusOne: '+1',
  medalNames: ['Gold', 'Silver'],
  tiers: [ { from: 8, name: 'Perfect read' }, { from: 6, name: 'Sharp eye' }, { from: 0, name: 'First look' } ],
  logRight: 'called it', logMissed: 'missed it', reasonRow: 'Reason', recordPick: 'Pick',
  synthesisHeading: 'Put the four rounds together',
  synthesis: [
    'A series gives people a reason to come back. A single film does not.',
    'Coming back is not enough on its own. People grow fond of a cast and come back to see what happens to those people next. A new cast every time gives an audience nobody to grow fond of.',
    'People return for something they want to watch, not for something about the product.',
    'When you own the show, the audience is yours, not rented.'
  ],
  synthesisClose: 'Could your company make a show that comes back every week or every month, with a format and a cast your audience gets to know? Could you make that show for your audience rather than about your company, and own it rather than rent space in somebody else\'s show?',
  // The heading is Evan's wording, kept by his decision on 14 September.
  cta: { heading: 'Do you have the team to make it?', copy: 'If you have the idea but not the team to make it, Talex is the team.', button: 'Book A Call With Our Team', url: 'https://calendly.com/talextom/20-min-discovery-call' },
  share: 'Send this to a colleague', shared: 'Link copied', startOver: 'Start over',
  sample: 'Every film plays on the page, and each card names where its figures came from. Draft: the why-answers are not yet approved by Tom.',
  ordinals: ['first', 'second']
};

// ---- Apply the editorial decisions from cards.json, word for word ------------------------------
const cardsPath = path.join(__dirname, 'cards.json');
if (!fs.existsSync(cardsPath)) { console.error('BUILD REFUSED: cards.json is missing. It holds the editorial decisions.'); process.exit(1); }
const cards = JSON.parse(fs.readFileSync(cardsPath, 'utf8'));
const missing = [];
const SIDE_FIELDS = ['caption', 'scale', 'title', 'spec', 'stats', 'note'];
Object.keys(SIDES).forEach((k) => {
  const c = cards.sides && cards.sides[k];
  if (!c) { missing.push('sides.' + k); return; }
  SIDE_FIELDS.forEach((f) => { if (c[f] === undefined || c[f] === '') missing.push('sides.' + k + '.' + f); });
  if (missing.length) return;
  SIDES[k].video.caption = c.caption;
  SIDES[k].scale = c.scale;
  SIDES[k].title = c.title;
  SIDES[k].spec = c.spec;
  SIDES[k].stats = c.stats;
  SIDES[k].note = c.note;
  // Optional: the side's name, as it reads inside "You picked {pick}" and "About {name}".
  if (c.name !== undefined) SIDES[k].name = c.name;
});
Object.keys(cards.sides || {}).forEach((k) => { if (!SIDES[k]) missing.push('unknown side in cards.json: ' + k); });
ROUNDS.forEach((r) => {
  const c = (cards.rounds || []).find((x) => x.id === r.id);
  if (!c) { missing.push('rounds.' + r.id); return; }
  ['job', 'measure', 'whyQuestion', 'options'].forEach((f) => { if (c[f] === undefined || c[f] === '') missing.push('rounds.' + r.id + '.' + f); });
  r.job = c.job;
  r.measure = c.measure;
  r.why = { question: c.whyQuestion, options: c.options };
});
// Copy overrides. roundNQuote and roundNCite address a round; any other key must already exist in COPY,
// so a mistyped key fails loudly instead of silently changing nothing.
Object.keys(cards.copy || {}).forEach((key) => {
  const m = key.match(/^round([1-4])(Quote|Cite)$/);
  if (m) { ROUNDS[+m[1] - 1][m[2].toLowerCase()] = cards.copy[key]; return; }
  // synthesisLineN replaces one line of the closing synthesis, counted from 1.
  const sl = key.match(/^synthesisLine([1-9])$/);
  if (sl) {
    const i = +sl[1] - 1;
    if (i >= COPY.synthesis.length) { missing.push('copy key points past the end of the synthesis: ' + key); return; }
    COPY.synthesis[i] = cards.copy[key]; return;
  }
  if (!(key in COPY)) { missing.push('copy key not recognised: ' + key); return; }
  COPY[key] = cards.copy[key];
});
if (missing.length) {
  console.error('BUILD REFUSED: cards.json is incomplete or has keys the build does not know:');
  missing.forEach((x) => console.error('  - ' + x));
  process.exit(1);
}

// ---- Gate, write, stamp ------------------------------------------------------------------------
const head = [
  '/* Every word the page shows lives in this file. Generated by build-content.js from cards.json; do not edit by hand.',
  '   Every card is written for this lead magnet. Nothing is imported from the strategy-doc block library. */',
  ''
].join('\n');

const problems = check(SIDES, ROUNDS, COPY, lib);
if (problems.length) {
  console.error('BUILD REFUSED, ' + problems.length + ' problem(s):');
  problems.forEach((p) => console.error('  - ' + p));
  process.exit(1);
}

const out = head +
  'window.SIDES = ' + JSON.stringify(SIDES, null, 2) + ';\n\n' +
  'window.ROUNDS = ' + JSON.stringify(ROUNDS, null, 2) + ';\n\n' +
  'window.COPY = ' + JSON.stringify(COPY, null, 2) + ';\n';
fs.writeFileSync(path.join(__dirname, 'content.js'), out, 'utf8');

const hash = require('crypto').createHash('sha256').update(out).digest('hex').slice(0, 10);
const idxPath = path.join(__dirname, 'index.html');
const idx = fs.readFileSync(idxPath, 'utf8');
const stamped = idx.replace(/<script src="content\.js(\?v=[0-9a-f]+)?"><\/script>/, '<script src="content.js?v=' + hash + '"></script>');
if (stamped === idx && !idx.includes('content.js?v=' + hash)) throw new Error('could not find the content.js script tag in index.html');
fs.writeFileSync(idxPath, stamped, 'utf8');

console.log('all checks passed');
console.log('index.html stamped: content.js?v=' + hash);
console.log('content.js written, ' + out.length + ' chars; ' + Object.keys(SIDES).length + ' sides; ' + ROUNDS.length + ' rounds');
ROUNDS.forEach((r, i) => console.log('  round ' + (i + 1) + ' [' + r.rung + '] ' + r.sides.map((k) => SIDES[k].video.id).join(' vs ')));
