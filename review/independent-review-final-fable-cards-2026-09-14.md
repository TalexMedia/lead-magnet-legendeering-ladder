# Final independent writing review: "Which one worked?" lead magnet (v10 Legendeering ladder)

**Reviewed:** the current `ReverseLeadMagnet/v10-legendeering-ladder/copy-deck.md` (every reader-visible string, including the interface labels the deck now lists), with `review/changed-lines-after-review-2026-09-14.diff` as the map of what changed, read against `Writing/reviewer-brief.md`, `Writing/RULES.md` and `Writing/profiles/public-general.md`. Also read: the earlier independent review, the build session's adjudication, the writer's "Revision after independent review" in `card-decisions-fable-2026-09-14.md`, `lint-adjudications.json`, and `content.js` and `index.html` to see how side names are substituted into the interface strings.

**Reviewer:** a fresh Claude Fable 5.1 context. I did not write this copy, I did not do the earlier review, and I did not take part in the build, adjudication or lint sessions.

**Files edited:** none except this report.

**Media:** no video was opened, embedded or played, and no browser was used. One fact check was made with curl: the YouTube watch-page title and description fields of Swim Meet :30 and :15 and Outfit :30 and :15. All four descriptions open "Checking first is smart. So check Allstate first and you could save hundreds on car insurance. You're in good hands with Allstate." Everything else was taken from the build session's facts of 14 September 2026 as listed in my brief.

**Date:** 14 September 2026.

---

## Part 1. Status of each finding from the earlier review

| # | Earlier finding | Status | Current text and reason |
|---|---|---|---|
| 1 | "each film" wrong at film scope, unscoped | PARTLY RESOLVED | The unit is fixed: "Commercial · A new cast in each spot", "New cast \| For Each Spot", and the cast row "Different people in each of the Check First spots we checked: Swim Meet, Superstitious and Outfit." The cast row carries the scope; the category line and the stat still say "each spot" for a campaign with at least six spots (iSpot lists Basketball, Graduation and Bark) of which three were checked. The earlier reviewer's ruling asked for scope on all three fields, then proposed unscoped wording for two of them; the writer followed the wording. See new finding 3. The new second sentence of the cast row also introduces a claim the build session recorded as unchecked. See new finding 2. |
| 2 | Quoted line cut short; "the same line" overstated | RESOLVED | The pick-screen row is now "A commercial in Allstate's Check First campaign." The one identical sentence sits on a reveal row, quoted in full and scoped: "The campaign name, Check First, and the same opening sentence in Allstate's description of every spot we checked: "Checking first is smart."" I confirmed the sentence on four of the six uploads today. The "Same line" stat is gone. |
| 3 | 30-word sentence, "people asked" | RESOLVED | "A separate Insurity survey of more than 1,000 US adults asked which mascot they would most like to grab a beer with. 31 percent picked Mayhem, second only to Jake from State Farm at 34 percent." Sentences of 19 and 13 words, the sample named, both figures matching the Business Wire release as recorded. |
| 4 | The "line" side rests on description text | RESOLVED on the card | Nothing on the card now says or implies the line is spoken or shown. "What repeats" names the campaign name and the description sentence, and says "description". One residue sits outside the card, in how option C renders with its "About Check First, Swim Meet" chip. See new finding 4. |
| 5 | "the one people remember" asserts a comparison no source makes | RESOLVED, with one new problem | Why question is now "Allstate makes both. Why do people remember Mayhem?" The missing score is now a stat, but its wording widened the note's claim. See new finding 1. |
| 6 | "A brother who checks Allstate first" | RESOLVED | The brother was verified by the adjudicator (Auralcrave, 9 September 2026), so the fact part was rightly rejected. The relevance part was accepted and the title is now "Swim Meet, one of the Check First spots", which names the format and not the plot. A small redundancy follows from it; see judgment call 8. |
| 7 | Copy deck missed interface strings | RESOLVED | The deck now lists 40 interface labels and I reviewed them. "Sharp eye" is "Close read". |
| 8 | Round 2 runtimes do not explain the rung | RESOLVED | Both cut: "A commercial starring Allstate's character Mayhem." and "A commercial in Allstate's Check First campaign." Rounds 3 and 4 keep theirs, with the writer's reason recorded. |
| 9 | 2015/2017 chronology has no stated point | RESOLVED for the panel; ACCEPTED-AS-REJECTED for the stats | Panel is now "PBR makes the film about its award and owns the channel that film sits on. YETI makes A Thousand Casts and owns the channel that film sits on." The writer's reason for keeping "Since 2015" and "Since 2017" (an established show, not a new deal) is sound: those two stats answer a sceptic's objection rather than teach the rung, which the writer's own principle allows ("help the prospect trust the evidence"). |
| 10 | Round 2 panel repeats the Mayhem note | RESOLVED | The panel now gives MarketCast one sentence with no dates and gives the rest to the Insurity finding, which the card note only summarises. |
| 11 | Result line is figurative | RESOLVED | "Your instinct and the examples disagreed." |
| 12 | Round 4 pick row carries the why-answer | RESOLVED | "A documentary in the YETI Presents series. This one follows a fly fishing trip to Bhutan and runs 28 minutes." The PBR category line "Sponsorship · Inside PBR's own coverage" stays, and the writer's reason (it describes the thing) holds; the caption under each film named the channel from the start anyway. |
| 13 | "Wiiings" and "Wings" both appear | RESOLVED | The side name is now "Confession, the cartoon" and the note gives the exhibition title in full and in quotation marks: "Gives You Wings. 30 Years of Cartoons by Red Bull", 2017. |
| 14 | Side names read badly once substituted | RESOLVED | I read every substituted sentence; see Part 3. One name still reads as a list of two things. See judgment call 7. |
| 15 | Two long closing questions | ACCEPTED-AS-REJECTED | The closing is Evan's and fixed. The writer's reason is also right on the merits: "on a channel you own" narrows "own the show" to owning a channel, and lesson 4 is about owning the show. |
| 16 | "Choose your own adventure" does not branch | ACCEPTED-AS-HELD | Held for Evan and Tom, as instructed. Not reopened. |

---

## Part 2. New findings on the changed lines

### Clear violations

#### 1. "None | Published Memorability Score" widens "we found none" into "there is none"

**Text and location:** Check First reveal tile, stat 2: "None | Published Memorability Score". The card's note, one screen lower: "We found no published memorability score for this campaign."

**Rule:** RULES.md, Facts and scope: "Keep the source's scope"; "A heading, label or stat caption must stand alone." public-general.md: a stat is a separate unit that "must make sense in isolation."

**Why it fails:** Read on its own, the stat states that no published memorability score exists. What the build session can support is that it did not find one. Those are different claims, and the second is the only one the workspace holds. The stat also sits directly across from Mayhem's "#1 | Most Memorable Ads, Insurance Mascots", so a reader compares "#1" with "None" as if both were measured results. MarketCast tracks Allstate's ads at the ad level, so a score for Check First spots may well exist somewhere; the page should not bet against that. The earlier reviewer's suggested caption ended in "Found", and the writer dropped the word.

**Correction:** "None found | Published Memorability Score" (figure and caption), or "None | Memorability Score We Could Find". The first keeps the caption identical in shape to the other stats.

**Confidence:** HIGH.

#### 2. "with the same cast" is asserted for all three spots, and the build session recorded that it was not checked

**Text and location:** Check First reveal tile, "The cast" row, second sentence: "Each spot is published as a 30-second film and a 15-second cut with the same cast."

**Rule:** RULES.md, Facts and scope: "Every factual claim needs a source"; "Treat `all`, `every`, `both`, `each` ... as factual claims"; "Do not invent ... participation."

**Why it fails:** The build session's own record for 14 September says the Outfit :15 thumbnail shows a mother character where the :30 thumbnail shows a young man, that iSpot's "Mom" credit "fits one spot with both characters", and that "the cast match between the two Outfit cuts was not checked frame by frame." So for one of the three spots the only evidence on file points the other way, and the sentence says "Each spot". The sentence exists to explain why the unit is the spot and not the film. It can do that without the cast claim, because the note already says the Swim Meet :15 is the same spot.

**Correction:** "Each spot is published twice, as a 30-second film and a 15-second cut." The note's "Allstate published the same spot as a 15-second cut on 31 August 2026" then carries the Swim Meet-specific fact, which is the film on the card. If the build owner wants the cast claim back, it needs a check of the Outfit cuts first and a line in `lint-adjudications.json` saying what was seen.

**Confidence:** HIGH that the sentence outruns the record; the correction is the build owner's call.

#### 3. "A new cast in each spot" and "New cast | For Each Spot" are unscoped where the cast row is scoped

**Text and locations:** Check First category line (pick screen): "Commercial · A new cast in each spot". Stat 1 (reveal): "New cast | For Each Spot". Compare the cast row: "Different people in each of the Check First spots we checked: Swim Meet, Superstitious and Outfit."

**Rule:** RULES.md, Facts and scope: "Treat ... `each` ... as factual claims" and "a subset cannot become the company." The lint adjudication for "each" justifies all three strings with the same evidence, three thumbnails.

**Why it fails:** The channel search returned six uploads of three spots; iSpot lists at least three more spots (Basketball, Graduation, Bark) that nobody checked. "Each spot" on the category line and the stat is therefore a claim about at least six spots supported by three. The headline "a new cast each time?" was passed by the earlier reviewer as a statement of Allstate's approach at the level of the principle, and I agree with that for a headline phrased as a question. A category line and a stat caption are descriptions of the thing, and they read as fact.

**Correction:** Stat: "New cast | In Each Spot We Checked". Category line, either scope it, "Commercial · A different cast in each spot we checked", or record in `lint-adjudications.json` a source that describes the campaign's premise as a new person in each spot (press coverage of the campaign, if the workspace research holds it), which would support the line at the campaign level. One of the two before release.

**Confidence:** MEDIUM. The rule is clear; whether a campaign-level source exists is something the build owner may already know.

### Judgment calls

#### 4. Option C is chipped "About Check First, Swim Meet", which turns a general argument into a claim about the spot

**Text and location:** Round 2, why-reveal screen. Option C: "Repeating one line in every spot gives people as much to hold on to as one character does." Under it the page renders the chip "About Check First, Swim Meet" (`optionTrueOf`, filled with the option's side name).

**Rule:** RULES.md, Facts and scope: "Do not combine true facts into a false implication."

**Reasoning:** The earlier reviewer allowed option C as a general statement, and as a sentence it is one. The chip is what changes it. Every option on this screen is labelled with the side it argues for, and the other wrong options' premises are true of their side (the Tide film is one film; the cartoon does put the can on screen). Under this chip, "repeating one line in every spot" reads as something Check First does, and the only thing the page has shown repeating is a sentence in Allstate's YouTube descriptions. The "What repeats" row on the tile keeps the scope honest for a reader who connects the two. A reader who does not will assume a spoken tagline. That may well be true; nobody in this workflow has watched a spot.

**Correction:** The cheapest route is a person, not a rewrite: Evan or Tom watches one 30-second Check First spot and says whether "check Allstate first" (or "Checking first is smart") is spoken or shown. If yes, add the fact to the adjudication and change nothing. If no, reword option C to a premise the page supports: "A campaign name that repeats in every spot gives people as much to hold on to as one character does."

**Confidence:** MEDIUM.

#### 5. "film" and "spot" alternate inside one set of options

**Text and location:** Round 2 options. A: "A fresh cast in every spot ..."; B: "... each new film is a chance to see what situation he is in next."; C: "Repeating one line in every spot ...".

**Rule:** RULES.md, Voice: "Name the person, company, channel, show or action"; consistency within a screen.

**Reasoning:** The writer changed "film" to "spot" in A and C to match the card and left B as "film". Mayhem's commercials are spots too. On one screen the two words look like they mean different things.

**Correction:** B: "People have grown fond of Mayhem, so each new spot is a chance to see what situation he is in next."

**Confidence:** LOW.

#### 6. Round 4 source panel credits two sources and links one

**Text and location:** Round 4 "The source" panel. Credit: "PBR, 17 May 2026, and YETI, 15 August 2023 · source". The `source` link goes to a single YouTube watch page (the PBR film).

**Rule:** public-general.md: "Use exact, supportable proof"; the reader should be able to reach what the credit names.

**Reasoning:** The credit names two uploads and the panel makes a claim about each; the link reaches one. The YETI film is embedded on the round's pick card, so a reader can find it, but the credit says otherwise.

**Correction:** Either link the credit's two names separately (a small render change) or make the credit match the link: "PBR, 17 May 2026 · source" and let the YETI half of the panel rest on the card, which already names YETI's channel.

**Confidence:** LOW.

#### 7. "YETI Presents, A Thousand Casts" reads as two items when substituted

**Text and location:** Round 4 verdict on a miss: "You picked YETI's PBR sponsorship. The one that worked was YETI Presents, A Thousand Casts." Also the reveal tile heading and "About YETI Presents, A Thousand Casts".

**Reasoning:** Every other new name puts the specific thing first and the category second ("Confession, the cartoon", "Stratos, the jump"). This one runs series then film, and in a sentence it reads as a list of two things. The PBR side is fine: "YETI's PBR sponsorship" reads as one noun phrase everywhere.

**Correction:** "A Thousand Casts, the YETI Presents film". Then: "The one that worked was A Thousand Casts, the YETI Presents film."

**Confidence:** LOW.

#### 8. The Check First pick card says "Check First" three times and "commercial" twice

**Text and location:** Pick screen, Check First card: caption "Check First: Swim Meet · Allstate"; category line "Commercial · A new cast in each spot"; title "Swim Meet, one of the Check First spots"; first row "A commercial in Allstate's Check First campaign."

**Rule:** RULES.md, Clarity: cut what adds no information. The writer's own principle for the pick screen: four fields that "describe what the thing is and nothing more."

**Reasoning:** After the retitle, the first row repeats the caption and the title. It could say what the campaign sells, which the reader does not yet know and which the description supports ("save hundreds on car insurance").

**Correction:** "What it is: A commercial for Allstate car insurance."

**Confidence:** LOW.

#### 9. "Different people in each of the Check First spots we checked" rests on one frame per spot

**Text and location:** Check First reveal tile, "The cast" row, first sentence.

**Reasoning:** The evidence recorded is that the three thumbnails show different people. A thumbnail is one frame, and "different people" can be read as no overlap at all. The claim is scoped and modest, and the adjudication records the thumbnail basis, so I pass it. Recording it here so the reason is visible if anyone asks how it was checked.

**Correction:** none needed; keep the recorded reason.

**Confidence:** LOW.

#### 10. "in Allstate's description" could name where

**Text and location:** "What repeats" row: "the same opening sentence in Allstate's description of every spot we checked".

**Reasoning:** "Description" means the YouTube description box, which the note's "Allstate's own channel" makes likely but does not say. A reader could take it as a press description.

**Correction:** "in Allstate's YouTube description of every spot we checked".

**Confidence:** LOW.

---

## Part 3. How the new side names read inside the interface strings

Each substitution read as a sentence:

- Round 1 miss: "You picked School Lunch, the Tide commercial. The one that worked was Rico's Tacos, the series." Reads well. "The one that worked is Rico's Tacos, the series." Reads well. Chips: "About Rico's Tacos, the series" and "About School Lunch, the Tide commercial". Fine.
- Round 2 miss: "You picked Check First, Swim Meet. The one that worked was Mayhem." Reads well. "About Mayhem" and "About Check First, Swim Meet". Fine.
- Round 3 miss: "You picked Confession, the cartoon. The one that worked was Stratos, the jump." Reads well. "About Stratos, the jump". Fine.
- Round 4 miss: "You picked YETI's PBR sponsorship. The one that worked was YETI Presents, A Thousand Casts." The first name is fine; the second is judgment call 7.
- Screen-reader labels: "Your pick. Right.: Mayhem" and "Your pick: Check First, Swim Meet". Fine.
- Reveal tile headings and the compact recap tiles show the bare names above a stat. All eight read as headings.

No side name appears on the pick screen, so none of them is a tell.

---

## Part 4. Release verdict

**Not ready as it stands. Three items block release; all three are one-line changes on the Check First tile.**

1. Finding 1: "None | Published Memorability Score" must become "None found | Published Memorability Score" or equivalent. It widens the only claim the workspace holds.
2. Finding 2: "with the same cast" must come off the cast row's second sentence, or the Outfit cuts must be checked and the check recorded.
3. Finding 3: the stat "New cast | For Each Spot" needs "We Checked" or a recorded campaign-level source; the category line needs the same treatment or a recorded reason.

After those, any later copy edit invalidates this review and needs a fresh lint and receipt, per the profile.

Finding 4 (option C under its chip) is a MEDIUM judgment call that a 30-second watch by Evan or Tom settles. I recommend doing that before Tom sees the draft, but it does not block on its own because the tile's "What repeats" row states the true scope. Findings 5 to 10 are LOW and can be taken or left.

---

## Part 5. Checks considered and passed

- **Facts on changed lines.** Swim Meet :30 published 3 September 2026 and :15 on 31 August 2026, matching the stat and note. All four descriptions I read open "Checking first is smart." The Insurity figures (34 and 31 percent, more than 1,000 US adults, January 2024) match the recorded release. The MarketCast sentence matches the recorded MarTech Edge claims (top for likeability and most memorable ads among insurance mascots). The Kunstmeile Krems title matches the recorded exhibition title. A Thousand Casts on YETI's channel, 15 August 2023, and the PBR film on PBR's channel, 17 May 2026, match the round 4 credit. "PBR makes the film about its award" is consistent with the card's "coverage that Professional Bull Riders makes".
- **Pick-screen tells.** Nothing new on any pick-screen field answers its round's question. The Check First pick card now says less than before, not more. The round 4 YETI row no longer carries the why-answer.
- **Frame.** No changed line frames a brand's film as an ad viewers tolerated, and no line criticises the Check First work. "None found" (once fixed) is a statement about the evidence, not the spots, as the writer said.
- **Talex rules on changed lines.** No em dash, en dash, section symbol or exclamation mark. No "land" or "own" as a figurative verb; every "owns" in the round 4 panel is literal. No reveal construction. No aphorism or tagline ending. Every "own" adjudicated in the lint file is literal or possessive.
- **Named nouns.** "that film" in the round 4 panel resolves to the film in the same sentence both times. "he" in option B has Mayhem in the same sentence. "Each spot" in the cast row follows the three named spots.
- **Sentence shape.** The split round 2 panel runs 14, 19 and 13 words. The round 4 panel's two parallel sentences are deliberate and short. No changed prose sentence exceeds 25 words. Source notes are exempt under the profile and were not scored.
- **Locked and fixed text.** "Do you have the team to make it?", "It's Not About You. It's About Them.", the closing question and the eyebrow were not touched by the diff and are not reopened here. All three Tom Langan quotations are unchanged from the version the earlier reviewer verified verbatim.
- **Lint adjudications.** The ten reasons in `lint-adjudications.json` were read against the current text. Nine hold. The "each" reason (id cf508c67264c) is the one that supports finding 3 with three thumbnails for an unscoped campaign claim, and its "Each spot is published as a 30-second film and a 15-second cut" entry does not cover the "with the same cast" clause that finding 2 concerns.
- **Interface labels.** All 40 read as labels. "Close read" is plain. "You called it." and "Right." render as separate status lines.
