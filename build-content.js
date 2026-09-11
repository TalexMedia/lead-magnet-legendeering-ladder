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
    spec: [['Format', 'A docuseries following one football team through a season, narrated by Jill Scott. The same people turn up in every episode, so you find out what happens to them.'], ['A company that did it', 'Specsavers, The Best Worst Team. Eight parts, on its own channel.'], ['Episode length', '10-20 minutes per episode']],
    // Watch time leads, not views. A view count on a brand's channel largely reports what the
    // brand paid to promote; minutes watched reports what someone chose to give it. Since this
    // rung is about format, the honest evidence is that people sat through five minutes of it.
    stats: [['5 min', 'Average Watch Time Per Episode'], ['+35%', 'Brand Consideration'], ['23.3M', 'YouTube Views']],
    note: 'Figures from the campaign\'s award entry as reported by The Drum, 13 November 2024. <a href="https://www.thedrum.com/news/2024/11/13/here-s-how-specsavers-won-over-gen-z-sponsoring-the-nation-s-worst-football-team" target="_blank" rel="noopener">Source</a>' },
  sgts: { id: 'sgts-tv', name: 'Specsavers, "Should\'ve gone to Specsavers"', officialChannel: true,
    scale: 'Commercial · One spot, a line that ran twenty years', title: 'A new world every time, held together by one line',
    video: { id: 'OMQiJojeryw', label: "Should've Gone To Specsavers 2024 TV Advert", caption: "Should've Gone To Specsavers, 2024 &middot; Specsavers" },
    spec: [['Format', 'A television commercial. New cast, new setting, new joke, same closing line. Nobody in it ever appears twice, so there is nobody to follow.'], ['A company that did it', 'Specsavers, since 2003, on its own channel. The same company that makes The Best Worst Team.'], ['Episode length', 'One film']],
    stats: [['30 sec', 'How Long It Asks For'], ['20 yrs', 'The Line Has Run'], ['New cast', 'Every Single Time']],
    note: 'Published on Specsavers\' own channel on 1 February 2024. This campaign ran for twenty years and built one of the best known lines in Britain, which is exactly the point of the round: it passes the repetition test and the round still turns on something else. No view count is shown on either card here, because a view count on a brand channel largely reports what the brand paid to promote. Minutes watched is the fairer measure, and it is on the other card.' },

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
    spec: [['Format', 'An animated commercial. The same look and the same shape of joke, a new one every time, running from at least 2000 through this 2011 film.'], ['A company that did it', 'Red Bull, on its own channel. The same company and the same channel as the jump.'], ['Episode length', 'Thirty seconds, again and again for years']],
    stats: [['251,520', 'YouTube Views, 11 Sep 2026'], ['11 yrs', 'Same Format, At Least'], ['The can', 'What It Is About']],
    note: 'Published on Red Bull\'s own channel on 26 January 2011; view count read on 11 September 2026. Both films in this round sit on the same channel, so the two counts are measuring the same thing.' },

  // ---- Round 4, YETI ---------------------------------------------------------------
  // Mailchimp was here until 11 September. Tom and Evan both dropped it on the call for one
  // reason: the Serial read is "too far in the past". Tom: "I'd be willing to bet that Yeti does
  // a fair amount of sponsorship of things." He was right. YETI has sponsored PBR since 2013.
  yetiFilm: { id: 'yeti-presents', name: 'YETI, YETI Presents', officialChannel: true,
    scale: 'Long-Form Episodic · Documentary', title: 'A film it made, on a channel it owns',
    video: { id: 'OmrufRLGdAk', label: 'YETI Presents, A Thousand Casts', caption: 'A Thousand Casts &middot; YETI' },
    spec: [['Format', 'A documentary film series about the people who live the way YETI customers want to live. The product is barely in it.'], ['A company that did it', 'YETI, on its own channel, about a dozen films a year since 2015.'], ['Episode length', 'This one runs 28 minutes']],
    stats: [['1,368,483', 'YouTube Views, 11 Sep 2026'], ['Since 2015', 'YETI Presents Has Run'], ['Its own', 'Whose Channel It Sits On']],
    note: 'Published on YETI\'s own channel on 15 August 2023; view count read on 11 September 2026. The two films in this round sit on different channels, which is the whole point of the round rather than a flaw in it: one audience is YETI\'s and one is somebody else\'s.' },
  pbrSponsor: { id: 'pbr-sponsor', name: 'YETI, sponsoring the PBR bull riding award', officialChannel: true,
    scale: 'Sponsorship · A name on someone else\'s award', title: 'Its name on an award inside somebody else\'s show',
    video: { id: '6ti-Ky0zYhA', label: '2026 PBR YETI Bucking Bull Champion Ransom', caption: 'The 2026 PBR YETI Bucking Bull Champion &middot; PBR' },
    spec: [['Format', 'A season award named after the sponsor, inside coverage that Professional Bull Riders makes and owns.'], ['A company that did it', 'YETI, which first sponsored PBR in 2013 and has sponsored it again since 2017.'], ['Episode length', 'This segment runs 7 minutes']],
    stats: [['13,672', 'YouTube Views, 11 Sep 2026'], ['Since 2013', 'YETI Has Sponsored PBR'], ['PBR\'s', 'Whose Channel It Sits On']],
    note: 'Published on PBR\'s own channel on 17 May 2026; view count read on 11 September 2026. The sponsorship history is as reported by Front Office Sports in October 2019. This is a real and long-running sponsorship of a major sport, not a misstep.' }
};

const ROUNDS = [
  { rung: 'repetition', id: 'once-or-again', job: 'P&G: one film, or a show twice a week?',
    // Evan, on the call with Tom, 11 September: Give Without Expectation comes off round one
    // "because we want that to come after". It belongs to round three. One rung, one idea.
    lens: ['Consistency Is Key'],
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
    sides: ['bestWorst', 'sgts'], winner: 'bestWorst', measure: 'the one people gave real time to',
    quote: '"Gen Z audiences and younger are social natives, they spend less time watching TV, than any other age group, so a large proportion of our target audience were simply not as familiar with the Specsavers\' brand." "what was once a celebrated slogan, SGTS, that had worked wonders ATL, wasn\'t working for this audience, it was seen as the \'ultimate dad gag\'."',
    cite: 'The Drum, from the campaign\'s award entry, 13 November 2024', url: 'https://www.thedrum.com/news/2024/11/13/here-s-how-specsavers-won-over-gen-z-sponsoring-the-nation-s-worst-football-team',
    // Tom and Evan pinned this distinction down on the 11 September call and asked for it to be
    // said plainly, because it is subtle. Tom: the audience "develops a relationship with" the
    // character. Evan: they grow fond of them, so the next one arrives and they are looking
    // forward to seeing what situation that character is in. A line cannot do that.
    teach: 'A line repeating is not the same as a cast returning. People grow fond of a cast, and come back to see what happens to them next. A line gives them nothing to grow fond of.',
    why: { question: 'A commercial asks for thirty seconds. Why did people give this five minutes an episode?', options: [
      { side: 'sgts', text: 'A line people already know does the work before the film even starts.' },
      { side: 'bestWorst', text: 'People came to know the team, so every new episode was a chance to see what happened to them next.' },
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

  { rung: 'ownership', id: 'own-or-rent', job: 'YETI: make the film, or put your name on someone else\'s?',
    lens: ['Give Without Expectation', 'It\'s Not About You. It\'s About Them.'],
    sides: ['yetiFilm', 'pbrSponsor'], winner: 'yetiFilm', measure: 'the one whose audience YETI keeps',
    quote: '"Ransom bucks off Brady Fielder in the Championship Round to become the 2026 PBR YETI Bucking Bull Champion." That is PBR\'s film, on PBR\'s channel, describing PBR\'s award. YETI\'s name is on it for as long as YETI pays for it. YETI Presents started in 2015, two years before the sponsorship resumed, and the two have run alongside each other ever since.',
    cite: 'PBR, 17 May 2026, and Front Office Sports, October 2019', url: 'https://www.youtube.com/watch?v=6ti-Ky0zYhA',
    teach: 'Renting puts your name in front of a crowd. Owning the film means the crowd is yours after it ends.',
    why: { question: 'Both are YETI. Why does the film do more for YETI in the long run?', options: [
      { side: 'yetiFilm', text: 'It sits on a channel YETI owns, so everyone it brings in stays with YETI afterwards.' },
      { side: 'pbrSponsor', text: 'A sponsorship puts the name in front of a crowd that has already gathered.' },
      { side: 'pbrSponsor', text: 'Naming an award costs less than producing a documentary.' } ] } }
];

const COPY = {
  brand: 'Talex Media',
  eyebrow: 'A choose your own adventure case study · draft for Tom',
  title: 'Which one worked?',
  lead: 'Four rounds. Each one is a single company shown two ways, so you are never comparing a big brand against a small one. Pick the one that worked, then say why.',
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
  // The four rounds are meant to add up to one sentence in the viewer's own head. This is where
  // they get added up. Tom, on the call: the viewer should end at "what we really want is to own
  // our own episodic series that's entertaining for our audience, that is tied to our brand, that
  // we have control over and that people will come back to watch over and over and over again."
  synthesisHeading: 'Put the four rounds together',
  synthesis: [
    'A single film is watched once. A series gives people a reason to come back.',
    'Coming back is not enough on its own. A cast and a world are what they come back to.',
    'They return for something they want to watch, not for something about the product.',
    'And when you own it, the audience is yours instead of rented by the month.'
  ],
  // Evan, 11 September: the close should put the four lessons back to the reader as one question
  // about their own company, and that question should hand straight off to the ask. Each clause
  // below is one rung, in the order the rounds ran.
  synthesisClose: 'So here is the question for your own company. Could you make a show that comes back every week or every month, with a format and a cast your audience gets to know? One made for them rather than about you, and owned by you rather than rented from somebody else.',
  cta: { heading: 'Do you have the team to make it?', copy: 'Most companies get to an idea on their own. The crew is the part that is usually missing, and that is the part we do.', button: 'Book A Call With Our Team', url: 'https://calendly.com/talextom/20-min-discovery-call' },
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
