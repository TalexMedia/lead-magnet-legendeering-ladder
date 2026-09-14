# Independent review of the changed lines after the final review: "Which one worked?" (v10 Legendeering ladder)

**Reviewed:** the seven changed lines in `review/changed-lines-after-final-review-2026-09-14.diff`, read inside the full current `copy-deck.md` so every substitution and neighbouring field was checked in context. Read first: `Writing/reviewer-brief.md`, `Writing/RULES.md`, `Writing/profiles/public-general.md`. Then the previous review (`independent-review-final-fable-cards-2026-09-14.md`), the build session's adjudication (`adjudication-final-fable-cards-2026-09-14.md`) with its two still-frame tiles in `review/evidence/`, the writer's "Revision after final review" in `card-decisions-fable-2026-09-14.md` including its final JSON, and `lint-adjudications.json`. The copy deck matches the writer's final JSON on every changed field.

**Reviewer:** a fresh Claude Fable 5.1 context. I wrote none of this copy and did none of the earlier reviews, adjudications or lint passes.

**Files edited:** none except this report. No sub-agents were spawned.

**Media:** no video was opened or played and no browser or Firecrawl was used. I viewed the two JPEG tiles of YouTube's published stills. Facts about descriptions, titles and dates are taken as recorded in my brief and the adjudication.

**Date:** 14 September 2026.

---

## Part 1. The two blockers

### Finding 1: "None | Published Memorability Score" widened "we found none" into "there is none"

**RESOLVED.** Current text, Check First stats: "None found | Published Memorability Score". The note beneath still reads "We found no published memorability score for this campaign." The stat now states the same scope as the note and stands alone as "no published memorability score was found". Across from Mayhem's "#1 | Most Memorable Ads, Insurance Mascots" it no longer reads as a measured zero.

### Finding 3: "A new cast in each spot" and "New cast | For Each Spot" unscoped

**RESOLVED.** Current text, category line (pick screen): "Commercial · A different cast in each spot we checked". Stat 1: "New cast | In Each Spot We Checked". Cast row (unchanged): "Different people in each of the Check First spots we checked: Swim Meet, Superstitious and Outfit." All three fields now carry the same scope, and `lint-adjudications.json` (id cf508c67264c) records the evidence: three stills for each of the six uploads. I checked the two tiles myself. Across the three spots the people differ: a curly-haired man in a raglan top (Swim Meet), a blonde woman in a BYU shirt with flatmates (Superstitious), a young man in a Duke sweatshirt with a mother and a daughter in a Carolina cardigan (Outfit). Within each spot the :30 and :15 rows show the same people, which also settles the previous review's finding 2 ("with the same cast") on evidence rather than by copy change.

Whether the scoped category line is a pick-screen tell is answered under Part 3.

---

## Part 2. The judgment calls

| # | Change | Correct? | New problem? |
|---|---|---|---|
| 4 | Option C: "Repeating one line in every spot" became "A campaign name that repeats in every spot gives people as much to hold on to as one character does." | Yes. Under the chip "About Check First, Swim Meet" the option now claims only what the page shows, the campaign name in every upload title. Nothing on the page now says or implies a spoken line. | One, LOW, in Part 3 finding 1: the distractor is a little less tempting than the catchphrase belief it replaced, and the round now uses three different words for the thing that repeats on the losing side. Not a rule violation. |
| 5 | Option B: "each new film" became "each new spot". | Yes. One screen, one word. "he" has Mayhem in the same sentence. | None. The cast row's "a 30-second film and a 15-second cut" still uses "film" for an upload, which is a different unit from the spot and is used consistently. |
| 6 | Round 4 credit "PBR, 17 May 2026, and YETI, 15 August 2023" kept with one link. Rejected. | The reason is sound. The panel makes one claim per film, so the credit must name both. The YETI half has a route: the film is embedded on the card and its note gives the channel and date. Cutting YETI from the credit would leave the second sentence of the panel without a named source, which is worse than a credit whose single link reaches one of its two names. | Residual, LOW: a reader who clicks "source" expecting YETI lands on PBR. A second link is an engine change, and nobody asked for one. Not a copy problem. |
| 7 | Side name became "A Thousand Casts, the YETI Presents film". | Yes. Every substitution now reads as one noun phrase: "The one that worked was A Thousand Casts, the YETI Presents film." "About A Thousand Casts, the YETI Presents film." The definite article follows the same pattern as "Confession, the cartoon" and "School Lunch, the Tide commercial", and the category line and "Since 2015" stat make plain that the series has many films. | None. |
| 8 | Pick-screen row became "A commercial for Allstate car insurance." | Yes. The row no longer repeats the caption and the title. It describes this spot, and the Swim Meet description on record ("save hundreds on car insurance") supports it. | None as written. See the caution in Part 5: the claim is scoped to this commercial, and it must stay that way, because the Superstitious stills show a "$5/mo" figure that does not look like a car policy. The page never says the campaign is for car insurance, so nothing needs to change. |
| 10 | "in Allstate's description" became "in Allstate's YouTube description of every spot we checked". | Yes. Names where the sentence sits. The lint file records that all six uploads open with it. | None. |

---

## Part 3. New findings on the changed lines

### Clear violations

None.

### Judgment calls

#### 1. Round 2 now names the repeating thing three ways, and synthesis 2's "line" rests on a description sentence

**Text and locations:** "What repeats" row: "The campaign name, Check First, and the same opening sentence in Allstate's YouTube description of every spot we checked: "Checking first is smart."" Option C: "A campaign name that repeats in every spot gives people as much to hold on to as one character does." Synthesis 2: "a line that repeats is not the same as a cast that returns" and "however familiar the line".

**Rule:** RULES.md, Voice: "Name the person, company, channel, show or action"; Clarity: the reader understands on the first read.

**Reasoning:** The cast-versus-catchphrase distinction is still made, and I would not hold the release for it. The reveal tile shows a name and a quoted sentence repeating before the reader reaches option C, so when the synthesis says "a line that repeats", the reader has seen a line that repeats. The distinction the round teaches is cast versus anything-that-is-not-a-cast, and both the name and the sentence sit on the not-a-cast side. Two things are weaker than before, though. First, "campaign name" is a less sincere temptation than "line" was: marketers believe in taglines, few believe an audience holds on to a campaign name, so option C now does less of the correcting work the writer said this rung exists to do. Second, the reader meets "opening sentence", "campaign name" and "line" for one idea across three screens, and has to do the joining. Neither is a rule breach. The synthesis wording is Evan's lesson and is not mine to touch.

**Correction:** None required for release. The cheapest way to restore the stronger distractor is the one the previous reviewer and the writer both named: Evan or Tom watches one 30-second Check First spot and says whether "check Allstate first" or "Checking first is smart" is spoken or shown. If yes, option C returns to "line" and the three terms collapse to one. If nobody watches, leave it as it is.

**Confidence:** LOW.

#### 2. "we checked" puts the page's own voice on a pick-screen field for the first time

**Text and location:** Category line, pick screen: "Commercial · A different cast in each spot we checked".

**Rule:** The writer's own pick-screen principle: the four visible fields "describe what the thing is and nothing more"; RULES.md, "A heading, label or stat caption must stand alone."

**Reasoning:** I checked this specifically as a possible tell and it is not one. The headline above both cards already says "Mayhem, or a new cast each time?", so the category line adds no information about which side wins; it identifies which side is which, exactly as "The same character since 2010" does opposite. "We checked" says what was done, not what was found to work. It is, however, the only field on any pick screen that speaks in the first person; every other "we" on the page sits on a reveal note. The landing notice ("each card names where its figures came from") makes "we" readable as Talex, so the line stands alone. I record the asymmetry so nobody mistakes it for an oversight; the scoping is required by the facts rule and the alternatives ("in each of three spots") would imply the campaign has three spots, which is worse.

**Correction:** None.

**Confidence:** LOW.

### Checked and passed on the changed lines

- **"A commercial for Allstate car insurance."** Not a tell. It names the product, which the reader could infer from the caption anyway, and Mayhem's commercials sell the same company. Its shape differs from the Mayhem row ("starring Allstate's character Mayhem"), but that difference is the round's variable, already declared in the headline.
- **"A different cast in each spot we checked" against option A's "A fresh cast in every spot".** The category line describes and is scoped; option A argues and is a wrong answer, adjudicated as such in the lint file. The two do not contradict.
- **Option C under its chip.** "About Check First, Swim Meet: a campaign name that repeats in every spot." True of the side, on the record: every upload title begins "Allstate Check First".
- **Option B.** 19 words, one subject, the noun in the sentence.
- **"None found" as a stat figure.** Reads as a statement about the evidence, not about the spots. No criticism of the Check First work anywhere on the changed lines.
- **"What repeats" row.** One colon, one quotation, the quoted sentence exactly as recorded for all six descriptions.
- **Side-name substitutions for round 4.** Read every interface string with the new name in place: miss verdict, why lead, chip, screen-reader label, tile heading, compact recap. All read as one thing.

---

## Part 4. Release verdict

**READY.** Both blockers are resolved in the current text, the third blocker from the previous review ("with the same cast") is settled by the stills, and no changed line introduces a violation. The two judgment calls above are LOW and can be taken or left. The page is released as what it says it is: a draft for Tom with why-answers awaiting his approval.

Any copy edit after this review invalidates it and needs a fresh lint, review and receipt, per `Writing/profiles/public-general.md`.

---

## Part 5. Checks considered and passed

- **Facts on changed lines.** Scope on every "each" and "every" traced to the lint file's recorded evidence and to the stills I viewed. "Car insurance" is supported for Swim Meet by its recorded description and is claimed only for this commercial. Caution for the future: the Superstitious :30 and :15 stills show a phone reading "$5/mo", so the campaign as a whole should never be described as car insurance; the current text does not.
- **Pick-screen tells.** Every pick-screen field on both round 2 cards read against the round's question. Nothing new answers "Which one do people remember?".
- **Frame.** No changed line frames a brand's film as an ad viewers tolerated. Both Allstate approaches are described as work Allstate makes.
- **Talex rules.** No em dash, en dash, spaced double hyphen, section symbol or exclamation mark on any changed line; the middle dot in the category line is the page's established separator. No "land" or "own" as a figurative verb. No reveal construction, aphorism or tagline ending. Contractions and register unchanged.
- **Named nouns.** "he" in option B has Mayhem in the sentence. "we" on the category line resolves through the landing notice. "the YETI Presents film" resolves to the film in the same phrase.
- **Sentence shape.** Longest changed prose sentence is option C at 19 words. Stats and category lines are label units under the profile.
- **Fixed text.** The closing question, "Do you have the team to make it?", "It's Not About You. It's About Them." and the eyebrow were not in the diff and are not reopened. All three Tom Langan quotations unchanged.
- **Lint adjudications.** All ten reasons read against the current text. The "every" and "each" reasons already cover the new wording of option C, the category line, the stat and option B, and the "each" reason records the still-frame basis. The basis line names the post-review build (`content.js?v=86c90373eb`).
- **Copy deck against the writer's JSON.** Every changed field identical.
