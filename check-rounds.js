// Build gate for the Legendeering ladder.
// Every rule here came from a decision on a call, so the reason is recorded next to the check.
// build-content.js calls check(SIDES, ROUNDS, COPY, lib) and refuses to write on any failure.

// Tom Langan set this order on the 2026-09-10 call. The rounds have to BUILD, one lesson at a
// time, instead of asking the same question four times. The order is the teaching, so it is fixed.
const RUNGS = [
  { id: 'repetition', label: 'Repetition' },
  { id: 'format', label: 'Format and theme' },
  { id: 'audience', label: 'Audience over product' },
  { id: 'ownership', label: 'Own it, do not rent it' }
];

// Phrases that must never reach the page. Each one is a specific instruction, not a style opinion.
const BANNED = [
  { text: 'in Tom\'s words', why: 'Evan cut this phrasing from the why questions on 2026-09-10.' },
  { text: 'No film to show', why: 'Evan: every side must be a real film. The poster fallback is gone.' }
];

// A TELL is any wording on a card that announces which side loses before the viewer has decided.
// This is not fussiness. The first build shipped with every losing card labelled "The other way",
// so a viewer could score full marks without reading anything, which is precisely the criticism
// Tom made of the previous version: he said he "very quickly was like, oh, it's obviously always
// the episodic". The page has to make someone think, so the two cards must be described in the
// same neutral register and the verdict must live only in the reveal.
const TELLS = [
  'the other way', 'the old way', 'the wrong way', 'the better way', 'the right way',
  'what not to do', 'instead of this', 'obviously', 'of course'
];

function check(SIDES, ROUNDS, COPY, lib) {
  const problems = [];
  const fail = (m) => problems.push(m);

  // The four rungs, in Tom's order, no substitutions.
  if (ROUNDS.length !== RUNGS.length) fail('expected ' + RUNGS.length + ' rounds, found ' + ROUNDS.length);
  ROUNDS.forEach((r, i) => {
    if (!RUNGS[i]) return;
    if (r.rung !== RUNGS[i].id) fail('round ' + (i + 1) + ' should be rung "' + RUNGS[i].id + '", found "' + r.rung + '"');
  });

  // Every side is a real film that will actually embed. An id that fails YouTube's oEmbed endpoint
  // will not play inside the card, so ids are verified by hand before they are written in here.
  Object.keys(SIDES).forEach((k) => {
    const s = SIDES[k];
    if (!s.video || !/^[A-Za-z0-9_-]{11}$/.test(s.video.id || '')) fail('side "' + k + '" has no valid film id');
    else if (!s.video.label || !s.video.caption) fail('side "' + k + '" has a film with no label or caption');
    if (!s.note || !s.note.trim()) fail('side "' + k + '" has no source note');

    // A film that is not on the brand's own channel has to say so on the card. We are not passing
    // a fan upload off as an official one.
    if (s.officialChannel === false && !/upload|recording|posted by|not an official/i.test(s.note || '')) {
      fail('side "' + k + '" is not on an official channel and its note does not disclose that');
    }
  });

  ROUNDS.forEach((r) => {
    const at = 'round "' + r.id + '"';
    if (!Array.isArray(r.sides) || r.sides.length !== 2) fail(at + ' needs exactly two sides');
    else r.sides.forEach((k) => { if (!SIDES[k]) fail(at + ' names an unknown side "' + k + '"'); });
    if (!r.sides || !r.sides.includes(r.winner)) fail(at + ' has a winner that is not one of its sides');

    // The measure is the whole argument. Evan, 2026-09-11: it is not views, it is which one is
    // better, with views only supporting it. So a round has to name its measure AND cite a source
    // with a year in it, or the verdict is just our opinion.
    if (!r.measure || !r.measure.trim()) fail(at + ' does not name the measure it is judged on');
    if (!r.cite || !/\b(19|20)\d{2}\b/.test(r.cite)) fail(at + ' has no dated source for its verdict');
    if (!r.url) fail(at + ' has no link to its source');

    // One right answer, and the wrong answers belong to the other side so nothing contradicts itself.
    const opts = (r.why && r.why.options) || [];
    if (opts.length < 3) fail(at + ' needs at least three why options');
    const right = opts.filter((o) => o.side === r.winner).length;
    if (right !== 1) fail(at + ' has ' + right + ' why options on the winning side, needs exactly one');
  });

  // Scoring copy has to match the number of rounds, or the result screen lies about the total.
  const total = ROUNDS.length * 2;
  if (!COPY.tiers || COPY.tiers[0].from !== total) fail('top tier should be ' + total + ' points');
  if (!COPY.resultHeading || COPY.resultHeading.indexOf('of ' + total + '.') === -1) {
    fail('result heading does not say "of ' + total + '."');
  }

  // Nothing we were told to remove creeps back in.
  const everything = JSON.stringify([SIDES, ROUNDS, COPY]);
  BANNED.forEach((b) => {
    if (everything.indexOf(b.text) !== -1) fail('banned phrase "' + b.text + '" is still present. ' + b.why);
  });

  // No card may give the answer away before the viewer picks. Only the text a viewer sees on the
  // pick screen is checked: the scale label, the card title and the three stat captions.
  Object.keys(SIDES).forEach((k) => {
    const s = SIDES[k];
    const onTheCard = [s.scale, s.title]
      .concat((s.stats || []).map((row) => row[1]))
      .concat((s.spec || []).map((row) => row[0]))
      .join(' ')
      .toLowerCase();
    TELLS.forEach((t) => {
      if (onTheCard.indexOf(t) !== -1) {
        fail('side "' + k + '" gives the answer away on the card with the phrase "' + t + '". Describe both sides in the same neutral register and keep the verdict in the reveal.');
      }
    });
  });

  // Library blocks are reused exactly. If one needs changing, Tom edits the live card and we
  // re-extract, never the other way round.
  Object.keys(SIDES).forEach((k) => {
    const s = SIDES[k];
    if (!s.fromLibrary) return;
    const b = lib[s.id];
    if (!b) { fail('side "' + k + '" claims to come from the library but block "' + s.id + '" is missing'); return; }
    ['scale', 'spec', 'stats', 'note', 'video'].forEach((f) => {
      if (JSON.stringify(s[f]) !== JSON.stringify(b[f])) fail('library side "' + s.id + '" has drifted from the block on field "' + f + '"');
    });
    if (s.title !== b.cardTitle) fail('library side "' + s.id + '" has drifted from the block on the card title');
  });

  return problems;
}

module.exports = { check, RUNGS };
