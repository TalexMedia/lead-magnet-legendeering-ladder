// Regenerates content.js and stamps a content hash onto the script URL in index.html.
// Run from this folder:  node build-content.js
//
// THE RULE THAT SHAPES EVERY ROUND: one company, two ways.
// Evan, 11 September 2026, rejecting a pair that set Apple against Progressive: "one is a way
// bigger company and it's spent way more on it, and the series loses to that." Right. Comparing
// two companies compares two budgets. Putting one company's own two approaches side by side holds
// the budget, the brand and the audience still, so the approach is the only thing left changing.
//
// THE RULE ON EVIDENCE: a view count on a brand's own channel mostly reports what the brand paid to
// promote. GEICO's own uploads ran from 3,246 to 21 million views, several posted the same day. So a
// view count may settle a round only where both films sit on the same channel, and no round rests on
// views alone where the work itself has been measured.
//
// THE RULE ON TELLS: a card on the pick screen describes what the thing IS, never why it wins. The
// verdict lives only in the reveal. check-rounds.js enforces this on titles, categories, every spec
// row, every stat caption, the headline and the measure.
//
// Every film id below was confirmed through YouTube's oEmbed endpoint, which also proves it embeds.
// Every film length was read from YouTube's own lengthSeconds on 14 September 2026.
const fs = require('fs');
const path = require('path');
const { check } = require('./check-rounds');
const libPath = path.join(__dirname, '..', '..', 'ProspectAudit', 'templates', 'format-blocks.json');
const lib = JSON.parse(fs.readFileSync(libPath, 'utf8')).blocks;

function fromBlock(id, extra) {
  const b = lib[id]; if (!b) throw new Error('missing block ' + id);
  return Object.assign({ id, scale: b.scale, title: b.cardTitle, video: b.video, spec: b.spec, stats: b.stats, note: b.note, fromLibrary: true }, extra || {});
}

const SIDES = {
  // ---- Round 1, P&G ----------------------------------------------------------------
  ricos: fromBlock('sitcom-ricos-tacos', { name: "P&G, Rico's Tacos", officialChannel: true }),
  tideSpot: { id: 'tide-school-lunch', name: 'P&G, a Tide commercial', officialChannel: true,
    scale: 'Commercial · One film', title: 'A thirty-second commercial',
    video: { id: 'xPHs8yT8cPM', label: 'Tide, School Lunch', caption: 'School Lunch &middot; Tide' },
    spec: [['Format', 'A television commercial for Tide.'], ['A company that did it', 'P&G, on Tide\'s own channel, October 2025.'], ['Episode length', 'One film']],
    stats: [['26,840', 'YouTube Views, 11 Sep 2026'], ['1', 'Film'], ['30 sec', 'Length']],
    note: 'Tide\'s own channel, 15 October 2025. Views read 11 September 2026.' },

  // ---- Round 2, Allstate -----------------------------------------------------------
  // Specsavers was here until 14 September. Evan asked for an American company, because Specsavers
  // is British and US prospects will not recognise it. GEICO was tried first and rejected: its view
  // counts track media spend, and Tom's "good news" campaign is not on its channel. Allstate runs both
  // shapes on its own channel at the same time: Mayhem, one character since 2010, and Check First,
  // a new cast in each film. Mayhem is measured on the work itself, not on views.
  //
  // THE LIMIT, stated on the card: both measures rank Mayhem against other insurers' mascots. Nobody
  // has published a score comparing Mayhem with Allstate's own Check First films. Specsavers had the
  // same gap, since every figure it carried was about the series.
  mayhem: { id: 'mayhem', name: 'Allstate, Mayhem', officialChannel: true,
    scale: 'Commercial · The same character since 2010', title: 'Mayhem, played by Dean Winters',
    video: { id: 'InPoTHIrnp0', label: 'Mayhem: Action Hero, an Allstate commercial', caption: 'Mayhem: Action Hero &middot; Allstate' },
    spec: [['Format', 'A commercial starring Allstate\'s character Mayhem.'], ['A company that did it', 'Allstate, on its own channel.'], ['Episode length', 'This one runs 60 seconds']],
    stats: [['#1', 'Most Memorable Ads, Insurance Mascots'], ['31%', 'Chose Him To Grab A Beer With'], ['+8%', 'Likeability, Above The Norm']],
    note: '<a href="https://martechedge.com/news/liberty-mutuals-limu-emu-leads-the-pack-in-insurance-mascot-performance-marketcast-finds" target="_blank" rel="noopener">MarketCast</a> measured insurance mascots from January 2024 to February 2025, reported by MarTech Edge on 1 April 2025. The beer figure is from an Insurity survey, 7 March 2024. Both rank Mayhem against other insurers\' mascots, not against Allstate\'s own commercials.' },
  checkFirst: { id: 'check-first', name: 'Allstate, Check First', officialChannel: true,
    scale: 'Commercial · A new cast in each film', title: 'A brother who checks Allstate first',
    video: { id: 'I6QksAqf0jk', label: 'Allstate Check First, Swim Meet', caption: 'Check First: Swim Meet &middot; Allstate' },
    spec: [['Format', 'A commercial in Allstate\'s Check First campaign, with a new cast in each film.'], ['A company that did it', 'Allstate, on its own channel.'], ['Episode length', 'This one runs 30 seconds']],
    stats: [['30 sec', 'Length'], ['New cast', 'Each Film'], ['Same brand', 'As Mayhem']],
    note: 'Allstate\'s own channel, 3 September 2026. We found no published memorability score for this campaign.' },

  // ---- Round 3, Red Bull -----------------------------------------------------------
  stratos: { id: 'stratos', name: 'Red Bull, the Stratos jump', officialChannel: true,
    scale: 'Live Event · Streamed free, then cut into films', title: 'A jump from the edge of space, streamed live',
    video: { id: 'FHtvDA0W34I', label: "Felix Baumgartner's supersonic freefall from 128k', Mission Highlights", caption: 'Mission Highlights &middot; Red Bull Stratos' },
    spec: [['Format', 'A live event streamed free to anyone who wanted it, then the films cut from it.'], ['A company that did it', 'Red Bull, 14 October 2012, on its own channel.'], ['Episode length', 'The stream ran the whole mission']],
    stats: [['49,046,929', 'YouTube Views, 11 Sep 2026'], ['8M', 'Watching Live At Once'], ['Free', 'No Sign-Up, No Gate']],
    note: 'More than 8 million people watched the jump live at the same time, a YouTube record then. The Drum, Forbes and Tubefilter reported it on 14 and 15 October 2012. Red Bull\'s own channel; views read 11 September 2026.' },
  confession: { id: 'confession', name: 'Red Bull, a Gives You Wiiings cartoon', officialChannel: true,
    scale: 'Commercial · Animated, thirty seconds', title: 'A thirty-second cartoon with a new joke each time',
    video: { id: '0b3OPo9wHuk', label: 'Confession, a 2011 Red Bull cartoon advert', caption: 'Confession, 2011 &middot; Red Bull' },
    spec: [['Format', 'An animated commercial. The same look and a new joke every time, running from at least 2000 through this 2011 film.'], ['A company that did it', 'Red Bull, on its own channel.'], ['Episode length', 'Thirty seconds']],
    stats: [['251,520', 'YouTube Views, 11 Sep 2026'], ['11 yrs', 'Same Format, At Least'], ['30 sec', 'Length']],
    note: 'Red Bull\'s own channel, 26 January 2011; views read 11 September 2026. Both films sit on the same channel, so the two counts compare fairly.' },

  // ---- Round 4, YETI ---------------------------------------------------------------
  // Mailchimp was here until 11 September. Tom and Evan both dropped it on the call because the 2014
  // Serial read was "too far in the past". YETI has sponsored PBR since 2013.
  yetiFilm: { id: 'yeti-presents', name: 'YETI, YETI Presents', officialChannel: true,
    scale: 'Long-Form Episodic · Documentary', title: 'A film it made, on a channel it owns',
    video: { id: 'OmrufRLGdAk', label: 'YETI Presents, A Thousand Casts', caption: 'A Thousand Casts &middot; YETI' },
    spec: [['Format', 'A documentary film series. This one follows a fly fishing trip to Bhutan.'], ['A company that did it', 'YETI, on its own channel, since 2015.'], ['Episode length', 'This one runs 28 minutes']],
    stats: [['1,368,483', 'YouTube Views, 11 Sep 2026'], ['Since 2015', 'YETI Presents Has Run'], ['Its own', 'Whose Channel It Sits On']],
    note: 'YETI\'s own channel, 15 August 2023; views read 11 September 2026. The two films sit on different channels, and that is the point of the round.' },
  pbrSponsor: { id: 'pbr-sponsor', name: 'YETI, sponsoring the PBR bull riding award', officialChannel: true,
    scale: 'Sponsorship · A name on someone else\'s award', title: 'Its name on an award inside somebody else\'s show',
    video: { id: '6ti-Ky0zYhA', label: '2026 PBR YETI Bucking Bull Champion Ransom', caption: 'The 2026 PBR YETI Bucking Bull Champion &middot; PBR' },
    spec: [['Format', 'A season award named after the sponsor, inside coverage that Professional Bull Riders makes and owns.'], ['A company that did it', 'YETI, which first sponsored PBR in 2013 and has sponsored it again since 2017.'], ['Episode length', 'This segment runs seven and a half minutes']],
    stats: [['13,672', 'YouTube Views, 11 Sep 2026'], ['Since 2013', 'YETI Has Sponsored PBR'], ['PBR\'s', 'Whose Channel It Sits On']],
    note: 'Published on PBR\'s own channel on 17 May 2026; view count read on 11 September 2026. The sponsorship history is as reported by Front Office Sports in October 2019.' }
};

const ROUNDS = [
  { rung: 'repetition', id: 'once-or-again', job: 'P&G: one film, or a twenty-two episode series?',
    // Evan, 11 September: Give Without Expectation comes off round one "because we want that to
    // come after". One rung, one idea.
    lens: ['Consistency Is Key'],
    sides: ['ricos', 'tideSpot'], winner: 'ricos', measure: 'did more people watch',
    quote: '"You need it to be episodic, because a series earns you a return visit and a one off never does."',
    cite: 'Tom Langan, Welcome to The Taco Drama, 30 July 2026', url: 'https://www.linkedin.com/pulse/welcome-taco-drama-tom-langan-wusce',
    why: { question: 'Why did the show work?', options: [
      { side: 'ricos', text: 'A series gives people a reason to come back.' },
      { side: 'tideSpot', text: 'Thirty seconds in prime time puts it in front of more people at once.' },
      { side: 'tideSpot', text: 'One polished film costs far less to make than twenty-two episodes.' } ] } },

  { rung: 'format', id: 'line-or-cast', job: 'Allstate: Mayhem, or a new cast each time?',
    lens: ['Consistency Is Key', 'It\'s Not About You. It\'s About Them.'],
    sides: ['mayhem', 'checkFirst'], winner: 'mayhem', measure: 'do people remember',
    // Plain sourced fact rather than a quotation. Tom and Evan's point on the 11 September call was
    // that the audience does not need to trust a character, only like them. Wanting a beer with
    // someone is liking them.
    quote: 'MarketCast measured insurance mascots from January 2024 to February 2025 and put Mayhem first for likeability and for the most memorable ads. In a separate survey, 31 percent of people asked picked Mayhem as the mascot they would most like to grab a beer with.',
    cite: 'MarketCast via MarTech Edge, 1 April 2025, and Insurity via Business Wire, 7 March 2024', url: 'https://martechedge.com/news/liberty-mutuals-limu-emu-leads-the-pack-in-insurance-mascot-performance-marketcast-finds',
    why: { question: 'Allstate makes both. Why is Mayhem the one people remember?', options: [
      { side: 'checkFirst', text: 'A fresh cast in every film keeps a campaign from going stale.' },
      { side: 'mayhem', text: 'People have come to know him, so each new film is a chance to see what he gets up to next.' },
      { side: 'checkFirst', text: 'A line people can repeat is easier to recall than a character.' } ] } },

  { rung: 'audience', id: 'them-or-you', job: 'Red Bull: a jump from the edge of space, or a thirty-second cartoon?',
    lens: ['Give Without Expectation', 'It\'s Not About You. It\'s About Them.'],
    sides: ['stratos', 'confession'], winner: 'stratos', measure: 'did more people choose to watch',
    quote: '"They didn\'t gate it behind a sign-up. They didn\'t cut away to a guy chugging a can the second Felix landed."',
    cite: 'Tom Langan, Where the Rubber Meets The Restaurant, 10 June 2026', url: 'https://www.linkedin.com/pulse/where-rubber-meets-restaurant-tom-langan-gllme',
    why: { question: 'Both films are Red Bull, on the same channel. Why did one get nearly two hundred times the audience?', options: [
      { side: 'stratos', text: 'It was something people wanted to watch, given away free, with nothing asked in return.' },
      { side: 'confession', text: 'A thirty-second cartoon is cheap enough to run all year.' },
      { side: 'confession', text: 'Putting the product on screen is what turns attention into sales.' } ] } },

  { rung: 'ownership', id: 'own-or-rent', job: 'YETI: make the film, or put your name on someone else\'s?',
    lens: ['Give Without Expectation', 'It\'s Not About You. It\'s About Them.'],
    sides: ['yetiFilm', 'pbrSponsor'], winner: 'yetiFilm', measure: 'leaves YETI with the audience afterwards',
    quote: 'PBR makes the film and owns the channel it sits on. YETI Presents started in 2015, two years before the sponsorship resumed.',
    cite: 'PBR, 17 May 2026, and Front Office Sports, October 2019', url: 'https://www.youtube.com/watch?v=6ti-Ky0zYhA',
    why: { question: 'Both are YETI. Why does the film do more for YETI in the long run?', options: [
      { side: 'yetiFilm', text: 'It sits on a channel YETI owns, so the audience it brings in is YETI\'s to keep.' },
      { side: 'pbrSponsor', text: 'A sponsorship puts the name in front of a crowd that has already gathered.' },
      { side: 'pbrSponsor', text: 'Naming an award costs less than producing a documentary.' } ] } }
];

const COPY = {
  brand: 'Talex Media',
  eyebrow: 'A choose your own adventure case study · draft for Tom',
  title: 'Which one worked?',
  lead: 'Four rounds, each one a single company shown two ways. Pick the one that worked, then say why.',
  // Cut to the question alone, an exact extract. The full quote goes on to call the other approach
  // "a commercial and calling it content", which judges the losing sides before round one starts.
  gate: '"If you stripped your name and your product off this piece of content, would anyone still want to watch it?"',
  gateCite: 'Tom Langan, What\'s 100 Years Old is New Again',
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
  resultLow: 'Instinct went one way and the examples went another. That is a normal place to start.',
  highFrom: 6,
  scoreLabel: 'Points', streakLabel: 'Streak', plusOne: '+1',
  medalNames: ['Gold', 'Silver'],
  tiers: [ { from: 8, name: 'Perfect read' }, { from: 6, name: 'Sharp eye' }, { from: 0, name: 'First look' } ],
  logRight: 'called it', logMissed: 'missed it', reasonRow: 'Reason', recordPick: 'Pick',
  // The four rounds add up to one sentence in the viewer's own head. Tom, on the call: the viewer
  // should end at "what we really want is to own our own episodic series that's entertaining for
  // our audience, that is tied to our brand, that we have control over and that people will come
  // back to watch over and over and over again." Line 2 carries Tom and Evan's point that the
  // audience grows fond of a cast, which the per-round "What it teaches" panel used to say; that
  // panel is gone because it told the lesson a fourth time.
  synthesisHeading: 'Put the four rounds together',
  synthesis: [
    'A single film is watched once. A series gives people a reason to come back.',
    'Coming back is not enough on its own. People grow fond of a cast and come back to see what happens to those people next. A line gives an audience nothing to grow fond of.',
    'People return for something they want to watch, not for something about the product.',
    'And when you own the show, the audience is yours, not rented.'
  ],
  // Evan, 11 September: put the four lessons back to the reader as a question about their own
  // company, handing straight off to the ask. One rung per clause, in the order the rounds ran.
  synthesisClose: 'So here is the question for your own company. Could you make a show that comes back every week or every month, with a format and a cast your audience gets to know? Could you make it for them rather than about you, and own it rather than rent it from somebody else?',
  cta: { heading: 'Do you have the team to make it?', copy: 'Most companies get to an idea on their own. The crew is the part that is usually missing, and that is the part we do.', button: 'Book A Call With Our Team', url: 'https://calendly.com/talextom/20-min-discovery-call' },
  share: 'Send this to a colleague', shared: 'Link copied', startOver: 'Start over',
  sample: 'Every film is real and plays on the page, and each card names where its figures came from. Draft: the why-answers are not yet approved by Tom.',
  ordinals: ['first', 'second']
};

const head = [
  '/* Every word the page shows lives in this file.',
  '   Sides marked fromLibrary are copied byte for byte from ProspectAudit/templates/format-blocks.json by build-content.js.',
  '   Never edit those here. Edit the live card, re-extract, run build-content.js again.',
  '   Everything else is authored text with verbatim quotes from the source named in each round. */',
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
