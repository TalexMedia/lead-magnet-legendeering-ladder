// Regenerates content.js and stamps a content hash onto the script URL in index.html.
// Run from this folder:  node build-content.js
//
// THE RULE THAT SHAPES EVERY ROUND: one company, two ways.
// Evan, 11 September 2026, rejecting a pair that set Apple against Progressive: "one is a way
// bigger company and it's spent way more on it, and the series loses to that." Right. Comparing
// two companies compares two budgets. Putting one company's own two approaches side by side holds
// the budget, the brand and the audience still, so the approach is the only thing left changing.
//
// Every film id below was confirmed through YouTube's oEmbed endpoint on 11 September 2026, which
// also proves it will embed. Every view count was read the same day and carries that date on the card.
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
    scale: 'Commercial · One film', title: 'One film, made about the product',
    video: { id: 'xPHs8yT8cPM', label: 'Tide, School Lunch', caption: 'School Lunch &middot; Tide' },
    spec: [['Format', 'A commercial. One film, about the product, with no next episode.'], ['A company that did it', "P&G, on Tide's own channel, October 2025. The same company that makes Rico's Tacos."], ['Episode length', 'One film']],
    stats: [['26,840', 'YouTube Views, 11 Sep 2026'], ['1', 'Film'], ['30 sec', 'Length']],
    note: "Published on Tide's own channel on 15 October 2025. View count read on 11 September 2026. Both sides of this round are P&G, so the company, the budget and the audience are the same and only the approach changes." },

  // ---- Round 2, Specsavers ---------------------------------------------------------
  bestWorst: { id: 'best-worst-team', name: 'Specsavers, The Best Worst Team', officialChannel: true,
    scale: 'Long-Form Episodic · Docuseries', title: 'One team, one season, the same faces every episode',
    video: { id: 'NdL2VYNYpQE', label: "There's More to Cwm, Specsavers' Best Worst Team, Series 2, Episode 1", caption: "There's More to Cwm &middot; Specsavers' Best Worst Team" },
    spec: [['Format', 'A docuseries following one football team through a season, narrated by Jill Scott.'], ['A company that did it', 'Specsavers, The Best Worst Team. Eight parts, on its own channel.'], ['Episode length', '10-20 minutes per episode']],
    stats: [['23.3M', 'YouTube Views'], ['5 min', 'Average Watch Time'], ['+35%', 'Brand Consideration']],
    note: 'Figures from the campaign\'s award entry as reported by The Drum, 13 November 2024. <a href="https://www.thedrum.com/news/2024/11/13/here-s-how-specsavers-won-over-gen-z-sponsoring-the-nation-s-worst-football-team" target="_blank" rel="noopener">Source</a>' },
  sgts: { id: 'sgts-tv', name: 'Specsavers, "Should\'ve gone to Specsavers"', officialChannel: true,
    scale: 'Commercial · One spot, a line that ran twenty years', title: 'A new world every time, held together by one line',
    video: { id: 'OMQiJojeryw', label: "Should've Gone To Specsavers 2024 TV Advert", caption: "Should've Gone To Specsavers, 2024 &middot; Specsavers" },
    spec: [['Format', 'A television commercial. New cast, new setting, new joke, same closing line.'], ['A company that did it', 'Specsavers, since 2003, on its own channel. The same company that makes The Best Worst Team.'], ['Episode length', 'One film']],
    stats: [['10.5M', 'YouTube Views, 11 Sep 2026'], ['30%', 'Of Gen Z Reached By TV Ads'], ['"Dad gag"', 'What Gen Z Called The Line']],
    note: 'Reach and the "ultimate dad gag" line from The Drum, 13 November 2024. Published on Specsavers\' own channel on 1 February 2024; view count read on 11 September 2026. This campaign repeated for twenty years and built one of the best known lines in Britain, which is the point of the round: repeating is not the same as returning.' },

  // ---- Round 3, Red Bull -----------------------------------------------------------
  stratos: { id: 'stratos', name: 'Red Bull, the Stratos jump', officialChannel: true,
    scale: 'Give Without Expectation · Live and free', title: 'A jump from the edge of space, given away live',
    video: { id: 'FHtvDA0W34I', label: "Felix Baumgartner's supersonic freefall from 128k', Mission Highlights", caption: 'Mission Highlights &middot; Red Bull Stratos' },
    spec: [['Format', 'A live event streamed free to anyone who wanted it, then the films cut from it.'], ['A company that did it', 'Red Bull, 14 October 2012, on its own channel.'], ['Episode length', 'The stream ran the whole mission']],
    stats: [['49,046,929', 'YouTube Views, 11 Sep 2026'], ['8M', 'Watching Live At Once'], ['Free', 'No Sign-Up, No Gate']],
    note: 'More than 8 million concurrent viewers, a YouTube record at the time, reported by The Drum, Forbes and Tubefilter on 14 and 15 October 2012 and confirmed by YouTube. Published on Red Bull\'s own channel on 14 October 2012; view count read on 11 September 2026.' },
  confession: { id: 'confession', name: 'Red Bull, a Gives You Wiiings cartoon', officialChannel: true,
    scale: 'Commercial · Animated, thirty seconds', title: 'The cartoon where somebody drinks the product',
    video: { id: '0b3OPo9wHuk', label: 'Confession, a 2011 Red Bull cartoon advert', caption: 'Confession, 2011 &middot; Red Bull' },
    spec: [['Format', 'A thirty-second animated commercial, the house style Red Bull ran for years.'], ['A company that did it', 'Red Bull, on its own channel. The same company, the same channel, as the jump.'], ['Episode length', 'Thirty seconds']],
    stats: [['251,520', 'YouTube Views, 11 Sep 2026'], ['30 sec', 'Long'], ['The can', 'What It Is About']],
    note: 'Published on Red Bull\'s own channel on 26 January 2011; view count read on 11 September 2026. Both films in this round sit on the same channel, so the two counts are measuring the same thing.' },

  // ---- Round 4, Mailchimp ----------------------------------------------------------
  secondAct: fromBlock('docuseries-mailchimp-second-act', { name: 'Mailchimp, Second Act', officialChannel: true }),
  serialRead: { id: 'serial-read', name: 'Mailchimp, sponsoring Serial', officialChannel: false,
    scale: 'Sponsorship · A read at the top of the show', title: 'Twenty seconds at the top of somebody else\'s show',
    video: { id: 'GkPZP2NADYg', label: 'The MailKimp read at the top of Serial, a listener\'s upload', caption: 'The MailKimp read, Serial season one &middot; a listener\'s upload' },
    spec: [['Format', 'A sponsor read before the show the listener actually came for. This is the famous MailKimp one.'], ['A company that did it', 'Mailchimp, 2014, before it built its own studio.'], ['Episode length', 'About twenty seconds']],
    stats: [['81%', 'Spike In Mentions, Premiere Week'], ['19%', 'Audible, The Next Best'], ['"Paying rent"', 'What Mailchimp Called It']],
    note: 'ListenFirst Media data reported by Marketing Dive, 21 December 2015: mentions rose 81 percent around the Serial premiere, ahead of Audible at 19 percent, while Squarespace fell. This sponsorship was a win. Neither Mailchimp nor Serial ever posted the read, so the film here is a listener\'s upload of it.' }
};

const ROUNDS = [
  { rung: 'repetition', id: 'once-or-again', job: 'P&G: one film, or a show twice a week?',
    lens: ['Consistency Is Key', 'Give Without Expectation'],
    sides: ['ricos', 'tideSpot'], winner: 'ricos', measure: 'the one people came back for',
    quote: '"Instead of buying 30 seconds inside someone else\'s show, P&G decided to simply own the program outright." "You need it to be episodic, because a series earns you a return visit and a one off never does." "Attention you earn beats attention you rent every single time, because it arrives with a little trust already attached to it."',
    cite: 'Tom Langan, Welcome to The Taco Drama, 30 July 2026', url: 'https://www.linkedin.com/pulse/welcome-taco-drama-tom-langan-wusce',
    teach: 'A series earns a return visit. A one-off never does.',
    why: { question: 'Why did the show work?', options: [
      { side: 'ricos', text: 'A series gives people a reason to come back, so the attention arrives with trust already attached.' },
      { side: 'tideSpot', text: 'Thirty seconds in prime time puts it in front of more people at once.' },
      { side: 'tideSpot', text: 'One polished film costs far less to make than twenty-two episodes.' } ] } },

  { rung: 'format', id: 'line-or-cast', job: 'Specsavers: a line everyone knows, or a team they know?',
    lens: ['Consistency Is Key', 'It\'s Not About You. It\'s About Them.'],
    sides: ['bestWorst', 'sgts'], winner: 'bestWorst', measure: 'the one that reached the people the ads could not',
    quote: '"Gen Z audiences and younger are social natives, they spend less time watching TV, than any other age group, so a large proportion of our target audience were simply not as familiar with the Specsavers\' brand." "what was once a celebrated slogan, SGTS, that had worked wonders ATL, wasn\'t working for this audience, it was seen as the \'ultimate dad gag\'."',
    cite: 'The Drum, from the campaign\'s award entry, 13 November 2024', url: 'https://www.thedrum.com/news/2024/11/13/here-s-how-specsavers-won-over-gen-z-sponsoring-the-nation-s-worst-football-team',
    teach: 'Repeating is not the same as returning. People come back for a cast and a world, not for a line.',
    why: { question: 'The line ran for twenty years. Why did the series reach people it could not?', options: [
      { side: 'sgts', text: 'A line people already know does the work before the ad even starts.' },
      { side: 'bestWorst', text: 'The same team came back every episode, so there was something to follow rather than a joke to catch.' },
      { side: 'sgts', text: 'One spot can run everywhere at once, which a ten-minute episode cannot.' } ] } },

  { rung: 'audience', id: 'them-or-you', job: 'Red Bull: the edge of space, or thirty seconds about the can?',
    lens: ['Give Without Expectation', 'It\'s Not About You. It\'s About Them.'],
    sides: ['stratos', 'confession'], winner: 'stratos', measure: 'the one people chose to watch',
    quote: '"They didn\'t gate it behind a sign-up. They didn\'t cut away to a guy chugging a can the second Felix landed." "None of these brands led with the sale. They led with something their community actually wanted, and they trusted the relationship to pay them back. It did, every time."',
    cite: 'Tom Langan, Where the Rubber Meets The Restaurant, 10 June 2026', url: 'https://www.linkedin.com/pulse/where-rubber-meets-restaurant-tom-langan-gllme',
    teach: 'Give people something they actually want and the brand comes along for the ride.',
    why: { question: 'Both films are Red Bull, on the same channel. Why did one get two hundred times the audience?', options: [
      { side: 'stratos', text: 'It was something people wanted to watch, given away free, with nothing asked in return.' },
      { side: 'confession', text: 'A thirty-second cartoon is cheap enough to run all year.' },
      { side: 'confession', text: 'Putting the product on screen is what turns attention into sales.' } ] } },

  { rung: 'ownership', id: 'own-or-rent', job: 'Mailchimp: make the show, or buy twenty seconds inside one?',
    lens: ['Give Without Expectation', 'It\'s Not About You. It\'s About Them.'],
    sides: ['secondAct', 'serialRead'], winner: 'secondAct', measure: 'the one that brought in the customers worth having',
    quote: '"It felt like, as long as we\'re sponsoring shows, we\'re paying rent to get in front of people. We\'re interrupting the thing that they want to be engaged with." "They tend to be really, really similar to our most valuable customers," said Mark DiCristina. "They tend to pay us more. They tend to pay us more quickly. They tend to be more engaged."',
    cite: 'Mark DiCristina, Mailchimp, quoted by Tim Peterson, Digiday, 29 July 2019', url: 'https://digiday.com/future-of-tv/mailchimp-has-cut-back-on-traditional-brand-advertising-to-invest-in-producing-original-shows-podcasts/',
    teach: 'Renting gets you in front of people. Owning the show gets you the ones who become customers.',
    why: { question: 'The sponsorship beat every other sponsor on the show. Why did Mailchimp move the money anyway?', options: [
      { side: 'secondAct', text: 'The people its own shows brought in looked like its most valuable customers.' },
      { side: 'serialRead', text: 'A hit show hands you an audience that already trusts the host.' },
      { side: 'serialRead', text: 'Sponsoring costs less than producing a series of your own.' } ] } }
];

const COPY = {
  brand: 'Talex Media',
  eyebrow: 'A choose your own adventure case study · draft for Tom',
  title: 'Which one worked?',
  lead: 'Four rounds. Each one is a single company shown two ways, so the budget and the brand are the same on both sides and the only thing that changes is the approach. Pick the one that worked, then say why.',
  gate: '"If you stripped your name and your product off this piece of content, would anyone still want to watch it? If the answer is yes, you have earned the right to put your name back on. If the answer is no, you are making a commercial and calling it content."',
  gateCite: 'Tom Langan, What\'s 100 Years Old is New Again',
  gateUrl: 'https://www.linkedin.com/pulse/whats-100-years-old-new-again-tom-langan-6bm2e',
  start: 'Start round one',
  roundLabel: 'Round {n} of {total}',
  pickStep: 'Pick',
  pickLead: 'Which one is {measure}?',
  pickInstruction: 'Click the one you think worked. Click it again to change your mind.',
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
  whyRight: 'Right. That is the stated reason.',
  whyWrong: 'Not the stated reason.',
  whyRevealStep: 'The reason',
  optionTrueOf: 'About {name}',
  winnerFact: 'The stated reason',
  yourAnswer: 'Your answer',
  takeawayLabel: 'What it teaches',
  sourceLabel: 'The source',
  approval: 'Prepared for Talex review. Not yet approved by Tom.',
  nextRound: 'Round {n}',
  seeResult: 'See my result',
  resultStep: 'Your result',
  resultHeading: 'You called {n} of 8.',
  resultSub: 'Four picks and four reasons. Here is how each round went.',
  resultHigh: 'You read these the way we do. That is the conversation worth having.',
  resultLow: 'Instinct went one way and the examples went another. That gap is the work we do every day, and it is a normal place to start.',
  highFrom: 6,
  scoreLabel: 'Points', streakLabel: 'Streak', plusOne: '+1',
  medalNames: ['Gold', 'Silver'],
  tiers: [ { from: 8, name: 'Perfect read' }, { from: 6, name: 'Sharp eye' }, { from: 0, name: 'First look' } ],
  logRight: 'called it', logMissed: 'missed it', reasonRow: 'Reason',
  cta: { heading: 'Want your own?', copy: 'Tell us what your video needs to do, and we will talk through which of these fits.', button: 'Book A Call With Our Team', url: 'https://calendly.com/talextom/20-min-discovery-call' },
  share: 'Send this to a colleague', shared: 'Link copied', print: 'Print my result', startOver: 'Start over',
  sample: 'Every round is one company two ways, so nothing here turns on one brand being bigger than another. Every film is real, plays on the page, and links to its source. Figures were read on 11 September 2026 and are dated on each card. The why-answers are prepared by Talex and not yet approved by Tom.',
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
