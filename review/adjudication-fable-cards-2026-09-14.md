# Adjudication: independent review of Fable's card decisions

Review adjudicated: `review/independent-review-fable-cards-2026-09-14.md` (a fresh Claude Fable 5.1 context).
Adjudicated by: the build session (Claude Opus 5), 14 September 2026. Each finding was checked against the
source. The build session does not write card copy. Every finding that changes words goes to the Fable
card-decisions context, which decides the wording and returns a revised json block. `apply-decisions.js`
then applies that block word for word.

## Facts checked for this adjudication

- **Swim Meet is about a brother.** Auralcrave, 9 September 2026, read with curl: "the sports-obsessed brother in the September 2026 "Swim Meet" campaign spot" and "the clever brother who checks Allstate first before saving on his car insurance, but isn't quite clever enough to stop himself from shouting "Go!" at his brother's swim meet".
- **Whether the Check First line is spoken or shown in the spots: NOT VERIFIED.** iSpot's pages for the Check First spots Basketball, Graduation and Bark carry no transcript. YouTube's caption endpoint returned nothing to the reviewer. The films are not played in this workflow. The only evidence for a repeated line is the YouTube description text.
- **Check First descriptions, 14 September 2026.** Swim Meet :30 and :15, and Outfit :30, read "Checking first is smart. So check Allstate first and you could save hundreds on car insurance." Superstitious :30 and :15 read "Checking first is smart. So check Allstate first and you could save." The first sentence is identical in all five. The second sentence has two versions.
- **The campaign has more spots than the three checked.** iSpot lists Basketball (February 2026), Graduation (January 2026) and Bark.
- **Insurity survey.** The Business Wire release, 7 March 2024, read with curl, says: "This survey was conducted online in January 2024, and more than 1,000 adult participants were randomly selected across the United States". It also says: "When asked which mascot they would most like to grab a beer with, 34% of respondents responded with Jake from State Farm ... closely followed by Allstate's Mayhem at 31%."

## Rulings

| # | Finding | Ruling | Action |
|---|---|---|---|
| 1 | "each film" wrong at film scope, unscoped | VALID. Each spot is published as a :30 and a :15 cut with one cast, so "each film" is false and contradicts the card's own note. The headline and synthesis 2 pass, as the reviewer said. | Fable rewords the category line, cast row and stat. |
| 2 | Quoted line cut short, "same line" overstated | VALID. Verified above: only the first sentence is the same in every description, and the quoted second sentence is not Swim Meet's. | Fable rewords "What it is" and the stat. |
| 3 | 30-word authored sentence, "people asked" | VALID. The sample is verified above. | Fable splits and names the sample. |
| 4 | The "line" side rests on description text | VALID. Whether the line is spoken is not verified, so the card must not claim the line is in the films. The "no" branch of the reviewer's correction applies. | Fable decides how round 2 carries the catchphrase point without that claim. |
| 5 | "the one people remember" is a comparison no source makes | VALID. Both sources rank Mayhem against other insurers' mascots. | Fable decides the question wording and whether to show the missing score as a stat. |
| 6 | "A brother who checks Allstate first" unverified and off the rung | FACT PART REJECTED: the brother is verified above. The relevance part is a judgment call. | Fable decides whether the title stays. |
| 7 | Copy deck missed interface strings | VALID, and a tooling fault, not copy. FIXED: `extract-copy.js` now reads every COPY key from `index.html`, so the deck lists 40 interface strings. The regenerated deck lints PASS with the same adjudications. | Final review covers the full deck. "Sharp eye" goes to Fable (LOW). |
| 8 | Round 2 runtimes do not explain the rung | Judgment call, Evan's relevance rule applies. | Fable. |
| 9 | Round 4 2015/2017 chronology has no stated point | Judgment call. | Fable. |
| 10 | Round 2 source panel repeats the Mayhem note | Judgment call. | Fable, together with finding 3. |
| 11 | "Instinct went one way and the examples went another." is figurative | Judgment call, LOW. | Fable. |
| 12 | Round 4 pick screen carries the why-answer | Judgment call, LOW. The pick question is not answered, so the gate's no-tells rule is met. | Fable. |
| 13 | "Wiiings" and "Wings" both appear | Judgment call, LOW. Both are correct to their sources. | Fable. |
| 14 | Side names read awkwardly inside "You picked {pick}" | Judgment call, LOW. Side names live in `build-content.js`, so a change needs a `name` field in cards.json, which the build would apply mechanically. | Fable. |
| 15 | Two long closing questions in a row | Judgment call, LOW. The reviewer's version ("on a channel you own") narrows "own the show" to owning a channel, which changes lesson 4. | Fable, with that note. |
| 16 | "choose your own adventure" does not branch | Judgment call, LOW. The eyebrow is not among the two items Evan kept. | Fable. |
