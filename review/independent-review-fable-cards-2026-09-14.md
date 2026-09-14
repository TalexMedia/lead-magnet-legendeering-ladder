# Independent writing review: "Which one worked?" lead magnet (v10 Legendeering ladder)

**Reviewed:** `ReverseLeadMagnet/v10-legendeering-ladder/copy-deck.md` (every reader-visible string in page order, built from Fable's `cards.json` decisions of 14 September 2026), read against `Writing/reviewer-brief.md`, `Writing/RULES.md` and `Writing/profiles/public-general.md`, with `lint-adjudications.json`, `build-content.js`, `cards.json`, `index.html` (render order only) and the view counts read on 14 September 2026 as context.

**Reviewer:** a fresh Claude Fable 5.1 context that did not write this copy and did not take part in the build or lint sessions.

**Files edited:** none except this report.

**Media:** no video was opened, embedded or played, and no browser was used. Facts were checked by reading page data with curl (YouTube watch-page JSON fields, the MarTech Edge article, the YouTube blog, the Kunstmeile Krems page) and one search-tool lookup of the Insurity release. An attempt to read the caption text of two Check First spots returned an empty response from YouTube's caption endpoint, so nothing about what is spoken in those films was verified.

**Date:** 14 September 2026.

---

## Rulings on the held items, in one place

| Item | Ruling |
|---|---|
| H1 cast wording | Headline and synthesis pass. Category line, cast row and stat fail at the "film" scope; use "spot" and scope to the spots checked. See finding 1. |
| H2 quoted line | The quotation is not verbatim for the film on the card, and "the same line" overstates. Quote the opening sentence only. See finding 2. |
| H3 30-word source sentence | Split it, and name who was asked. See finding 3. |
| H4 earns its place | Three items do not: the runtimes in round 2, the 2015/2017 chronology in round 4, and the round 2 source panel repeating the Mayhem source note. See findings 8 to 10. |
| H5 pick-screen leaks | No pick-screen text answers its round's pick question. Round 4 pre-loads the why-answer, but that is by design. See passed checks and judgment call 12. |
| H6 teaches the rung | Yes, in order. The cast-versus-catchphrase distinction is stated clearly in option C and synthesis 2, but the "line" side is evidenced only by YouTube descriptions. See finding 4. |
| H7 frame and language | No frame failures. A handful of low-confidence language items. See judgment calls. |

---

## Part A. Clear violations

### 1. "each film" is wrong at the film level, and unscoped (H1)

**Text and locations, round 2, Check First card:**
- Category line (pick screen): "Commercial · A new cast in each film"
- Cast row (after the pick): "A different cast in each Check First film."
- Stat (after the pick): "New cast | In Each Film"

**Rule:** RULES.md, Facts and scope: "Treat `all`, `every`, `both`, `each`, counts ... as factual claims" and "Keep the source's scope."

**Why it fails:** The build session's own data shows Swim Meet published as a :30 (3 September) and a :15 (31 August) sharing one cast, and Superstitious the same. On YouTube each cut is a separate film. So there are films in this campaign with the same cast as another film, and the card's own source note says so ("the same cast also appears in a 15-second cut"). A card that says "each film" in three places and then contradicts itself in the note asks the reader to trust the note over the card. The second problem is scope: the evidence covers three spots (Swim Meet, Superstitious, Outfit). The note says "every Check First film we checked"; the cast row and stat drop the "we checked."

**What passes:** The headline "Mayhem, or a new cast each time?" and synthesis line 2 "A new cast every time" describe Allstate's approach at the level of the principle. A :15 cut of the same spot is not a new "time," so both are accurate and can stay.

**Correction:**
- Category line: "Commercial · A new cast for each new spot"
- Cast row: "A different cast in each Check First spot we checked. Each spot is cut as a 30-second and a 15-second film with the same cast."
- Stat: "New cast | For Each Spot"
- Source note: keep, but the second sentence can then shorten to "Allstate published the same spot as a 15-second cut on 31 August 2026."

**Confidence:** HIGH.

### 2. The quoted Allstate line is not verbatim for the film on the card, and "the same line" overstates (H2)

**Text and location, round 2, Check First card, "What it is" (pick screen):** "Allstate describes each film with the same line: "Checking first is smart. So check Allstate first and you could save.""
**Also, the stat:** "Same line | In Allstate's Description Of Each Film"

**Rule:** RULES.md, Facts and scope: "Keep the source's scope"; "Do not combine true facts into a false implication." Quotation marks assert verbatim text.

**Why it fails:** I re-read the Swim Meet :30 watch page today. Its description is "Checking first is smart. So check Allstate first and you could save hundreds on car insurance. You're in good hands with Allstate." The card quotes a sentence that ends "you could save." That is the Superstitious wording, not this film's. Cutting a quotation short and closing it with a full stop, inside quotation marks, presents a sentence Allstate did not write for this film. And across the five descriptions the build session read, what is identical is the opening sentence, "Checking first is smart." The second sentence has two variants. "The same line" is true only for the opening sentence, which is exactly what the source note already says ("carries the same opening line"). The "What it is" row and the stat widened the note.

**Correction:**
- "What it is": "A commercial in Allstate's Check First campaign. Allstate opens its description of every Check First spot we checked with the same sentence: "Checking first is smart." This one runs 30 seconds."
- Stat: "Same opening line | In Every Description We Checked"
- If the build owner prefers to keep the longer quotation, it must be the film's own: ""Checking first is smart. So check Allstate first and you could save hundreds on car insurance."" and the claim must be "opens with the same sentence," not "the same line."

**Confidence:** HIGH.

### 3. A 30-word authored sentence with a vague subject in the round 2 source panel (H3)

**Text and location, round 2, "The source" panel, second sentence:** "In a separate survey, 31 percent of people asked picked Mayhem as the mascot they would most like to grab a beer with, second only to Jake from State Farm."

**Rule:** RULES.md, Clarity and sentence shape (vary length; name the noun); the readability target of 25 words; RULES.md Voice, "Name the person, company ... instead of leaning on abstractions."

**Why it fails:** This is new writing, not a quotation, and it runs 30 words. "People asked" is an abstraction standing in for a known fact: Insurity surveyed more than 1,000 US adults online in January 2024 (Insurity press release, 7 March 2024; I confirmed the wording "grab a beer with" and the 34 to 31 split today). The credit line names Insurity but the sentence does not.

**Correction:** "A separate Insurity survey of more than 1,000 US adults asked which mascot they would most like to grab a beer with. 31 percent picked Mayhem, second only to Jake from State Farm."

**Confidence:** HIGH that it should be split; the wording is the build owner's call.

### 4. The "repeating line" side of round 2 is evidenced by YouTube descriptions, which viewers do not watch (H6, H2)

**Text and locations:** Check First "What it is" (the description quotation); stat "Same line | In Allstate's Description Of Each Film"; wrong option C "Repeating one line in every film gives people as much to hold on to as one character does."; synthesis 2 "a line that repeats is not the same as a cast that returns."

**Rule:** RULES.md, Facts and scope: "Do not combine true facts into a false implication."

**Why it fails:** Evan asked for a clear cast-versus-catchphrase distinction. Option C and synthesis 2 make it clearly, and they speak of a line "in every film," a line the audience meets. The only evidence on the card is that Allstate types the same sentence into each film's description box. A description is metadata; it is not something an audience "holds on to." If "Checking first is smart" (or "check Allstate first") is spoken or shown in each spot, the card should say so and the round is sound. If it is not, the "line" half of the contrast rests on text nobody watches, and the round is really "recurring cast versus one-off cast," with the catchphrase point unsupported. I could not settle this without watching, and the caption endpoint returned nothing.

**Correction:** The build owner confirms whether the line is in the films. If yes: "What it is" becomes "Each Check First spot ends on the same line, "check Allstate first," and Allstate opens every description with "Checking first is smart."" and the stat becomes "Same line | Spoken In Each Spot." If no: drop the "same line" stat, keep the description sentence in the source note only, and let option C and synthesis 2 carry the catchphrase point as a general statement (they already do).

**Confidence:** MEDIUM. The fix depends on a fact I could not check.

### 5. Round 2's comparative questions assert a comparison no source makes

**Text and locations, round 2:** pick question "Which one do people remember?"; why-question "Allstate makes both. Why is Mayhem the one people remember?"; interface after a wrong pick "The one that worked was Allstate, Mayhem."

**Rule:** RULES.md, Facts and scope: "Do not combine true facts into a false implication."

**Why it fails:** Both sources rank Mayhem against other insurers' mascots. The Mayhem note says so plainly, and the Check First note says "We found no published memorability score for this campaign." So "Mayhem is the one people remember" (of these two) is an inference the page draws, presented as a measured result. The design of the round is fixed and not reopened here; the wording can still stop claiming more than the sources. The why-question's "the one" is the comparative word that does the damage.

**Correction:** Why-question: "Allstate makes both. Why do people remember Mayhem?" Pick question can stay as a question. Consider replacing the Check First card's third stat "3 Sep 2026 | Published" (which teaches nothing about the rung) with "None | Published Memorability Score Found," so the honest gap sits where the reader looks, not only in the note.

**Confidence:** MEDIUM.

### 6. "A brother who checks Allstate first" is unverified and off the rung

**Text and location, round 2, Check First card title (pick screen):** "A brother who checks Allstate first"

**Rule:** RULES.md, Facts and scope: "Every factual claim needs a source"; Evan's brief: a card carries only what explains its round.

**Why it fails:** Nothing in the verified facts, the watch-page title, description or keywords says the Swim Meet spot is about a brother. The workspace research (`american-round2-insurers-2026-09-14.md`) mentions "brother/sister-style protagonists" from press coverage of the campaign in general, not this spot. It is also the only card title on the page that describes a plot; every other title names a format. The plot is not what round 2 teaches.

**Correction:** "A commercial with its own cast" (parallel to "Mayhem, played by Dean Winters," and it states the contrast the round is about). If the build owner has watched the spot and confirms the brother, the title is factually fine but still off the rung.

**Confidence:** MEDIUM.

### 7. The copy deck is not every reader-visible string, so some strings escaped lint and this review

**Text and location:** `copy-deck.md` header: "Every reader-visible string on ... extracted from content.js in page order."

**Rule:** public-general.md: "Run the full-file Talex lint, independent review ... before publication."

**Why it fails:** `index.html` renders these COPY keys that the deck omits: `pickStep` "Pick", `revealStep` "What worked", `whyRevealStep` "The reason", `realOrder` "What worked" (an h2), `roundLabel` "Round {n} of {total}", `nextRound` "Round {n}", `resultStep` "Your result", `scoreLabel` "Points", `streakLabel` "Streak", `plusOne` "+1", `cmpYou` "You said", `cmpReal` "Real", `logRight` "called it", `logMissed` "missed it", `recordPick` "Pick", `reasonRow` "Reason", `shared` "Link copied", the tier names "Perfect read", "Sharp eye", "First look", and the aria labels "Gold", "Silver", "Your pick. Right.", "Your pick". None of these is a writing problem on its own ("Sharp eye" is the only figurative one, and it is a badge). The problem is the receipt: the lint and this review were run on an artifact that claims completeness and is not complete.

**Correction:** Extend `extract-copy.js` to emit an "Interface labels" list that covers every COPY key `index.html` reads, then re-lint. No copy change is needed unless the build owner wants "Sharp eye" plainer ("Good read").

**Confidence:** HIGH on the omission; LOW that any of the strings needs rewording.

---

## Part B. Judgment calls

### 8. Runtimes in round 2 do not explain the rung (H4)

**Text:** Mayhem "What it is": "This one runs 60 seconds." Check First "What it is": "This one runs 30 seconds."
**Rule:** Evan's brief: only information relevant to what the round explains.
**Reasoning:** Round 2 is about a recurring cast. Sixty versus thirty seconds teaches nothing about it, and the round 1 lengths already established that these are all short. A runtime is a courtesy before pressing play, which is the only argument for keeping it. Rounds 3 and 4 are borderline for the same reason (90 seconds; 28 minutes; seven and a half minutes), though round 4's 28 minutes does help show the film is a show rather than a spot.
**Correction:** Cut both round 2 runtimes. Leave rounds 3 and 4 to the build owner.
**Confidence:** MEDIUM.

### 9. Round 4 source panel: the 2015/2017 chronology is stated but its point is not (H4)

**Text:** "YETI Presents started in 2015, two years before the sponsorship resumed."
**Rule:** RULES.md, Clarity: cut sentences that add no information; Evan's brief on relevance.
**Reasoning:** The rung is ownership. The reader is told two dates and left to work out why they matter. If the point is that YETI built its own show before it went back to renting space, say that; if there is no point, cut it. The same applies to the stats "Since 2015 | YETI Presents Has Run" and "Since 2017 | YETI Has Sponsored PBR": they show longevity, not ownership. The "Owns The Channel" stats carry the round on their own.
**Correction:** Either "YETI Presents started in 2015. YETI had its own show two years before it went back to sponsoring PBR." or cut the sentence.
**Confidence:** LOW.

### 10. Round 2 source panel repeats the Mayhem source note (H4)

**Text:** First sentence of the round 2 "The source" panel: "MarketCast measured insurance mascots from January 2024 to February 2025 and put Mayhem first for likeability and for the most memorable ads." The Mayhem card's note, shown a screen earlier, opens "MarketCast measured insurance mascots from January 2024 to February 2025, reported by MarTech Edge on 1 April 2025."
**Rule:** RULES.md, Clarity: "Cut ... closing summaries that add no information."
**Reasoning:** The other three rounds put something new in the source slot (a Tom Langan quotation, or in round 4 the ownership fact). Round 2 restates the card. Since there is no quotation to put here, the slot could carry the Insurity sentence alone, which is the one fact the card note only summarises.
**Correction:** Source panel: "An Insurity survey of more than 1,000 US adults asked which mascot they would most like to grab a beer with. 31 percent picked Mayhem, second only to Jake from State Farm." Credit stays as is.
**Confidence:** LOW.

### 11. Result-screen line is figurative

**Text:** "Instinct went one way and the examples went another."
**Rule:** RULES.md, Voice: "Prefer literal statements to metaphors."
**Correction:** "Your instinct and the examples disagreed."
**Confidence:** LOW.

### 12. Round 4 pick screen carries the why-answer (H5)

**Text:** YETI "What it is" (pick screen): "A documentary in the YETI Presents series, on YETI's own channel." PBR category line: "Sponsorship · Inside PBR's own coverage."
**Reasoning:** The pick question "Which one did more for YETI?" is not answered by either line, so this is not a leak under H5. But the correct why-option ("The film sits on a channel YETI owns") is in the reader's hand before the pick. The headline already frames the round as make-versus-sponsor, and the reveal repeats ownership as a stat, so hiding it would change the design, which is not mine to reopen. Recording it so the build owner can decide whether "on YETI's own channel" should move from the pick-screen row to the reveal.
**Confidence:** LOW.

### 13. "Gives You Wiiings" and "Gives You Wings" both appear

**Text:** Side name (shown in "You picked ..." and "The one that worked is ..."): "Red Bull, a Gives You Wiiings cartoon." Confession note: "the Kunstmeile Krems exhibition Gives You Wings, 2017."
**Reasoning:** Both are correct to their sources (Red Bull's current slogan spelling; the museum's exhibition title, confirmed today, ran 28 May 2017 to 11 March 2018). To a reader they look like a typo.
**Correction:** In the note: 'the Kunstmeile Krems exhibition "Gives You Wings. 30 Years of Cartoons by Red Bull", 2017' (the full title makes the spelling look deliberate).
**Confidence:** LOW.

### 14. Side names read awkwardly once substituted

**Text:** "You picked YETI, sponsoring the PBR bull riding award. The one that worked was YETI, YETI Presents."
**Reasoning:** The interface fills {pick} and {winner} with the side names. "YETI, YETI Presents" doubles the name, and "YETI, sponsoring the PBR bull riding award" is a phrase, not a name. The copy deck shows the names only as headings, so the substituted sentences were never read as sentences.
**Correction:** Rename the sides "the YETI Presents film" and "the PBR award YETI sponsors"; similarly "the Rico's Tacos series" and "the Tide commercial", "Mayhem" and "a Check First commercial", "the Stratos jump" and "the Red Bull cartoon".
**Confidence:** LOW.

### 15. Closing question: two 25-word questions in a row

**Text:** "Could your company make a show that comes back every week or every month, with a format and a cast your audience gets to know? Could you make that show for your audience rather than about your company, and own it rather than rent space in somebody else's show?"
**Rule:** RULES.md, Clarity: avoid uniform sentence lengths.
**Correction:** "Could your company make a show that comes back every week or every month, with a format and a cast your audience gets to know? Could you make it for your audience rather than about your company, on a channel you own?"
**Confidence:** LOW.

### 16. Eyebrow: "A choose your own adventure case study"

**Reasoning:** The page does not branch; every reader sees the same four rounds. "Choose your own adventure" is a borrowed book-series name used as a metaphor. It is in the receipted COPY block, so this is for Evan, not the build owner.
**Correction:** "A pick-the-winner case study · draft for Tom"
**Confidence:** LOW.

---

## Part C. Checks considered and passed

**Verbatim quotations.** All three Tom Langan quotations (gate; round 1; round 3) match the workspace's captured newsletter text word for word, and the three titles and dates (22 May, 10 June, 30 July 2026) match the capture. Not reopened.

**Figures against sources, re-read today.**
- MarTech Edge, 1 April 2025: Mayhem holds "the top spots in Likeability and Most Memorable Ads"; Likeability "+8% above the norm"; study period January 2024 to February 2025. Card stats and note correct.
- Insurity release, 7 March 2024: "grab a beer with"; Jake 34 percent, Mayhem 31 percent. Correct.
- YouTube blog, 14 October 2012: "more than 8 million concurrent livestreams" and "the most concurrent views ever on YouTube." Card stat and note correct.
- Kunstmeile Krems: "Red Bull's first animated commercials followed in 1989"; exhibition "Gives You Wings. 30 Years of Cartoons by Red Bull", 28 May 2017 to 11 March 2018. Correct.
- Swim Meet :30 watch page: published 3 September 2026, description as the build session recorded. Correct (see finding 2 for how the card quotes it).
- Rico's Tacos, from the 14 September read: 22 episodes, total 1,305,315, episode 1 200,495 in 70 seconds, lengths 49 to 148 seconds, lowest from episode 11 on 49,593, episodes 9 and 10 at 1,080 and 78, dates 23 June to 28 August. "About twice a week" is 22 episodes in nine and a half weeks. All card figures correct.
- Round 3 ratio: 49,048,257 to 251,604 is 195, so "nearly two hundred times" is right.
- Runtimes: 60, 30, 90, 30, 1,709 ("28 minutes"), 450 ("seven and a half minutes") seconds. Correct.
- YETI 2013/lapse/2017 and YETI Presents 2015: taken from the build session's verification; not re-read.

**Pick-screen leaks (H5).** Rounds 1 to 3: no caption, category line, title, first spec row, headline or question states views, memorability or the answer. The principle tags render on the reveal step, not the pick step (index.html line 464), so "Consistency Is Key" does not tip the pick. Round 4: see judgment call 12.

**Order of the rungs (H6).** Round 1 repetition, round 2 cast, round 3 audience, round 4 ownership; the synthesis restates them in the same order and the closing question walks them in order.

**Frame (H7).** No card frames a brand's film as an ad viewers tolerated. Both commercials in rounds 1 and 3 are described as what they are. No "land" or "own" as figurative verbs: every "own" is literal ownership or a possessive. No em dashes, en dashes, section symbols or exclamation marks in new prose. No "X isn't Y, it's Z" reveals outside the fixed principle name. No selling inside card prose; the only selling sentence is the call to action, where it belongs. No criticism of any company's work.

**Named nouns.** "those people" in synthesis 2, "the film" in round 4, "This one" in the spec rows (the film on the card): each resolves to a noun in the same sentence or row.

**Lint adjudications.** The nine cleared warnings in `lint-adjudications.json` were read against the current text and each reason holds. The two held items are ruled above (findings 1 to 3).

**Locked text.** The CTA heading, the principle name, the eyebrow and draft notice, and the credited quotations were checked for integrity and not proposed for change, except that the eyebrow is referred to Evan as a low-confidence style note (16).
