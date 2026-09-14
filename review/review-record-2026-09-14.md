# Review record: Which one worked? One company, two ways

Artifact: `ReverseLeadMagnet/v10-legendeering-ladder/copy-deck.md`, every word a viewer sees on
https://talexmedia.github.io/lead-magnet-legendeering-ladder/, generated from `build-content.js`.
Profile: `Writing/profiles/public-general.md`. Authority: `Writing/README.md` version 2026-09-11.2.
Date: 2026-09-14.

This single file is the review evidence the receipt fingerprints. Every reviewer report and every
adjudication is embedded below word for word, so that changing any of them breaks the receipt.

## The release sequence, as run

| Step | What happened | Result |
|---|---|---|
| Facts and structure | Films confirmed through oEmbed; runtimes read from YouTube lengthSeconds; MarketCast, Insurity, YouTube blog and Kunstmeile Krems sources read first hand | Done |
| Talex lint | `talex-lint.py --profile public` | PASS, every warning adjudicated in `lint-adjudications.json` |
| Independent review 1 | Fresh Claude Fable 5.1 context, full artifact | 10 clear violations, 16 judgment calls, 3 for Evan |
| Fixes | Build owner adjudicated all 29 | 24 fixed, 2 fixed with stronger sources, 1 held, 3 referred to Evan |
| Talex lint again | | PASS |
| Final review | Second fresh Claude Fable 5.1 context, changed passages | 0 not resolved, 0 clear violations, 3 low judgment calls |
| Fixes | All 3 plus one noted scope issue applied | 5 lines changed |
| Review of changed lines | Third fresh Claude Fable 5.1 context, the 5 changed lines | All 5 fix their issue, no new problem, 1 low judgment call |
| Talex lint again | | PASS |
| Receipt | `review-receipt.py record`, then `verify` | See `review-receipt.json` |

## Last open item, held with a written reason

**R1, from the review of changed lines. Held.** The reviewer noted that rounds 1 and 3 both measure view
counts, phrased differently ("Which one got more views?" and "Which one was watched more?"), and
suggested making them identical. The reviewer judged it low confidence and said the receipt could be
recorded either way. Held, because Tom and Evan designed the four rounds to ask four different questions,
and two rounds carrying word for word the same question would work against that. Both phrasings are
accurate to view counts, which was the fix required.

## Items referred to Evan

Three items are Evan's to decide and are not blocking: the call to action heading he chose, which is a
question the page then speaks to; three observations on the locked Rico's Tacos block, which can only
change by re-extracting the live card; and the principle name "It's Not About You. It's About Them.",
which uses a sentence shape the rules otherwise ban. Detail in adjudication 1, items E1 to E3.

---

# Embedded: independent review 1

# Independent review 1: Which one worked? (v10 Legendeering ladder)

Reviewed: `ReverseLeadMagnet/v10-legendeering-ladder/copy-deck.md`, checked against the live
`content.js` at https://talexmedia.github.io/lead-magnet-legendeering-ladder/content.js on
2026-09-14. The landing, synthesis, closing and CTA strings on the live file match the deck word
for word. Profile: `Writing/profiles/public-general.md`. Reviewer did not write the copy and has
edited no file.

Locked text, kept separate: the Rico's Tacos card (block `sitcom-ricos-tacos`), every quotation in
quotation marks credited to Tom Langan, and the CTA heading Evan chose. Source notes and quoted
examples are reviewed for fact and scope only.

## CLEAR VIOLATIONS

**F1. Round 2 why option C, and Result screen synthesis item 2.** HIGH.
Current: "A line people can repeat is easier to recall than a character." and "A line gives an
audience nothing to grow fond of."
Rule: RULES.md, wrong frame / unclear meaning; reviewer brief weight 1. The round never shows a
repeating line. The losing side is described on its headline ("a new cast each time"), its category
("A new cast in each film"), its format row and its stat tile as a cast that changes. "A line" first
appears in option C with nothing on the page for the reader to attach it to, then returns as the
lesson in the synthesis. The reader is being told what round 2 taught about a thing round 2 never
showed.
Fix, option C: "A new face in every film is easier to notice than the same character again."
Fix, synthesis 2: "Coming back is not enough on its own. People grow fond of a cast and come back
to see what happens to those people next. A new cast every time gives an audience nothing to grow
fond of."
Alternative: if Check First does repeat a line in every film, say so on the Check First format row
and keep "a line", but that needs a source; the research file only records "closes on Allstate's
'you're in good hands' positioning".

**F2. Round 4, Check: YETI sponsoring PBR card, stat tile 2.** HIGH.
Current: "Since 2013 | YETI Has Sponsored PBR"
Rule: RULES.md facts and scope; source `yeti-ownership-round-2026-09-11.md` and Front Office
Sports, October 2019: a one-year deal in 2013, a hiatus, resumed 2017. The tile states one
continuous sponsorship from 2013. The spec row on the same card gets it right ("first sponsored PBR
in 2013 and has sponsored it again since 2017"), so the card contradicts itself.
Fix: "Since 2017 | YETI Has Sponsored PBR" and leave the 2013 first year in the spec row.

**F3. Round 4, both cards, stat tile 3.** HIGH.
Current: "Its own | Whose Channel It Sits On" (YETI) and "PBR's | Whose Channel It Sits On" (PBR).
Rule: RULES.md, "A heading, label or stat caption must stand alone"; name the noun. "Its own" names
nothing, and "It" in the caption points at a film that is not named in the tile.
Fix: "YETI's | Channel The Film Sits On" and "PBR's | Channel The Film Sits On".

**F4. Round 2, Mayhem card, stat tile 2.** MEDIUM.
Current: "31% | Chose Him To Grab A Beer With"
Rule: RULES.md, stat caption must stand alone; pronoun with no noun in the tile.
Fix: "31% | Would Grab A Beer With Mayhem"

**F5. Round 3, Stratos card, source note.** MEDIUM.
Current: "The Drum, Forbes and Tubefilter reported it on 14 and 15 October 2012."
Rule: RULES.md, every factual claim needs a source appropriate to the document; public profile,
exact supportable proof. `ladder-rungs-3-4-2026-09-11.md` records Forbes returning HTTP 403 and
`comparisons-2026-09-10.md` records Tubefilter returning empty. README line 132 lists only The
Drum among these as fetched, and no research file records The Drum's Stratos article URL or date.
The page is citing three outlets the build read none or one of.
Fix: cite only what was read first hand, with its date, for example "as The Drum reported on
[date]" once fetched; or fall back to the source the build does hold: "More than 8 million people
watched the jump live at the same time, a YouTube record then, as Tom Langan records in Where the
Rubber Meets The Restaurant, 10 June 2026."

**F6. Round 3, Confession card, format row and stat tile 2.** MEDIUM.
Current: "running from at least 2000 through this 2011 film" and "11 yrs | Same Format, At Least"
Rule: RULES.md facts and scope. The only source for the year 2000 in the research folder is the
title of a third-party nostalgia re-upload on "Cath's Retro Replay" (`ladder-rungs-3-4`, line 47),
which the same file rejects as not Red Bull's and not a media partner's. A fan channel's video
title is not a source for a dated claim on a Talex page, and the "11 yrs" tile is arithmetic on it.
Fix, format: "An animated commercial. The same look and a new joke every time."
Fix, tile: "26 Jan 2011 | Published" (from Red Bull's own upload date, already in the note).

**F7. Round 4, YETI Presents card and PBR card, card titles (pick screen).** MEDIUM.
Current: "A film it made, on a channel it owns" and "Its name on an award inside somebody else's show"
Rule: RULES.md, a heading or label must stand alone; name the noun. The side name is not rendered
on the pick card (index.html `card()` shows caption, scale, title and the first spec row only), so
"it" and "Its" hang on the film caption.
Fix: "A film YETI made, on a channel YETI owns" and "YETI's name on an award inside PBR's show".

**F8. Round 3, Stratos card, Episode length row.** MEDIUM.
Current: "The stream ran the whole mission"
Rule: RULES.md, do not invent runtimes; unclear meaning. The film on the card is the 1:30 highlights
cut. Every other card gives the length of the film shown; this row answers about a different thing
and gives no figure.
Fix: "This highlights film runs 90 seconds"

**F9. Result screen, low-score line.** MEDIUM.
Current: "Instinct went one way and the examples went another. That is a normal place to start."
Rule: RULES.md, no reassurance kickers; do not append a second sentence to land the first.
Fix: "Instinct went one way and the examples went another."

**F10. Result screen, closing question, first sentence.** MEDIUM.
Current: "So here is the question for your own company."
Rule: RULES.md, cut preambles. The sentence announces a question instead of asking it.
Fix: delete it and open on the question, naming the company: "Could your company make a show that
comes back every week or every month, with a format and a cast your audience gets to know? Could
you make it for your audience rather than about your company, and own it rather than rent space in
somebody else's?"
Note: the shape of this passage is Evan's instruction of 11 September; the wording is not marked as
his verbatim text, so it receives the gate.

## JUDGMENT CALLS

**F11. Round 4, question under the headline.** MEDIUM.
Current: "Which one leaves YETI with the audience afterwards?"
Rule: the tell test in the brief; README rule "a card on the pick screen says what the thing is,
never why it wins". Read together with the pick-screen titles (F7), the measure states the round's
verdict, that ownership keeps the audience, before the pick. The measure is honest, but a viewer can
answer it from the wording alone.
Fix: "Which one did more for YETI?"

**F12. Round 2, source quote and Mayhem source note.** MEDIUM.
Current: "In a separate survey, 31 percent of people asked picked Mayhem as the mascot they would
most like to grab a beer with."
Rule: RULES.md, do not combine true facts into a false implication. Insurity put Jake from State
Farm first at 34 percent and Mayhem second at 31. Next to two "#1" and "above the norm" tiles, the
bare 31 percent reads as another first place.
Fix: add ", second only to Jake from State Farm" to the sentence in the source quote.

**F13. Round 2, Check First card, stat tiles 2 and 3.** MEDIUM.
Current: "New cast | Each Film" and "Same brand | As Mayhem"
Rule: public profile, exact supportable proof; RULES.md, respect the work. A figures panel with no
figures, and the third tile defines the losing side by the winner. The note already states the
honest gap. The Tide and Confession cards manage three factual tiles each.
Fix: "3 Sep 2026 | Published" and, if confirmed first hand, "2023 | Check First Began" (the research
file gives Wieden+Kennedy 2023 to 2026 but does not cite a source for the year).

**F14. Landing screen, notice.** MEDIUM.
Current: "Every film is real and plays on the page"
Rule: RULES.md, clarity. "Real" answers an internal worry (earlier prototypes used animatic
placeholders) that a viewer does not share; to a viewer it raises the question of what an unreal
film would be.
Fix: "Every film plays on the page, and each card names where its figures came from."

**F15. Round 3, why question.** MEDIUM.
Current: "Why did one get nearly two hundred times the audience?"
Rule: RULES.md, keep the source's scope. The figures are view counts; views are not people. The
arithmetic (49,046,929 over 251,520 is 195) supports "nearly two hundred times".
Fix: "Why did one get nearly two hundred times the views?"

**F16. Round 3, Stratos card, format row (pick screen).** LOW.
Current: "A live event streamed free to anyone who wanted it, then the films cut from it."
Rule: the tell test. "To anyone who wanted it" is the correct why answer ("given away free, with
nothing asked in return") stated before the pick. "Streamed free" alone describes the thing.
Fix: "A live event streamed free, then the films cut from it."

**F17. Result screen, synthesis item 1.** LOW.
Current: "A single film is watched once."
Rule: RULES.md, unsupported certainty. Round 1 showed a series out-viewing one film; it did not show
that a film is watched once, and the Tide film has 26,840 views.
Fix: "A series gives people a reason to come back. A single film does not."

**F18. Result screen, CTA copy.** LOW.
Current: "Most companies get to an idea on their own."
Rule: RULES.md, quantity-implying words are factual claims. "Most" has no source; the sentence is
Talex's positioning, so the build owner may hold it with a written reason.
Fix: "A company can get to an idea on its own. The crew is the part that is missing, and that is the
part we do."

**F19. Round 1, Tide card, format row; and why option B.** LOW.
Current: "A television commercial for Tide." and "Thirty seconds in prime time puts it in front of
more people at once."
Rule: RULES.md facts. Nothing in the research folder records a television airing or a prime-time
buy for School Lunch; the category line says only "Commercial". Option B is a distractor, but it is
phrased as a fact about this film.
Fix: "A thirty-second commercial for Tide." and "Thirty seconds on television puts it in front of
more people at once."

**F20. Round 2, why option B.** LOW.
Current: "each new film is a chance to see what he gets up to next"
Rule: address the actual reader. "Gets up to" is a British idiom; Evan swapped Specsavers out of this
round because US prospects would not recognise it.
Fix: "each new film is a chance to see what he does next"

**F21. Round 4, category line, card title and closing question.** LOW.
Current: "someone else's award", "somebody else's show", "somebody else"
Rule: RULES.md clarity; one word for one thing.
Fix: use "somebody else's" in all three, or name PBR on the card (see F7).

**F22. Result screen, synthesis item 4.** LOW.
Current: "And when you own the show, the audience is yours, not rented."
Rule: RULES.md, no flourish ending; a list item opening on "And" turns the four lessons into a
crescendo. "Rented" is Tom's own idiom and can stay.
Fix: "When you own the show, the audience is yours, not rented."

**F23. Round 3, why option B.** LOW.
Current: "A thirty-second cartoon is cheap enough to run all year."
Rule: RULES.md, respect the work. "Cheap" is the one word on the page that could read as belittling a
losing side.
Fix: "A thirty-second cartoon costs little enough to run all year."

**F24. Landing screen, lead.** LOW.
Current: "Four rounds, each one a single company shown two ways."
Rule: RULES.md, a prose sentence has a subject and a verb; this one has no main verb.
Fix: "Each of the four rounds shows one company two ways. Pick the one that worked, then say why."

**F25. Landing screen, gate credit.** LOW.
Current: "Tom Langan, What's 100 Years Old is New Again"
Rule: consistency with the other three Tom credits, which carry dates.
Fix: "Tom Langan, What's 100 Years Old is New Again, 22 May 2026"

**F26. Rounds 1 to 4, the spec label "Episode length" on non-series cards.** LOW.
Current: "Episode length: One film", "Episode length: Thirty seconds", "Episode length: This one
runs 60 seconds"
Rule: RULES.md clarity. A commercial has no episodes; the label is inherited from the strategy-doc
block spec.
Fix: "Length" on the Tide, Mayhem, Check First, Confession and PBR cards.

## FOR EVAN

**E1. CTA heading, Evan's wording.** "Do you have the team to make it?" is followed by "The crew is
the part that is usually missing, and that is the part we do." That is a question the writer answers
in the next line, which RULES.md bans. Preserved as Evan's choice; recorded as a conflict.

**E2. Locked Rico's Tacos block, three observations, no rewording proposed.**
- Its counts were read on 24 August 2026; the Tide side was read on 11 September 2026. The two
  sides of round 1 are dated eighteen days apart, and "17 of 22 Episodes Out So Far" will age.
- The locked note carries the FloQast PBC comparison (22 minutes, 213,014 views) and a second link.
  In a round whose question is "one film, or a twenty-two episode series", a second long-form
  example from a different company has nothing to do with the pick and can be mistaken for part of
  the evidence.
- The locked spec says the series runs "on channels the company owns", while the README records the
  embedded film on MinivelaTV, the media partner's channel. Round 1 is the one round settled by views
  across two different channels, which the build's own evidence rule says a view count cannot settle,
  and unlike round 4 the notes do not say the channels differ.

**E3. Principle tag "It's Not About You. It's About Them."** This is the reveal construction RULES.md
bans, kept because it is the name of a Legendeering principle. Recorded, no change proposed.

## CHECKS CONSIDERED AND PASSED

- Live `content.js` matches the copy deck for every landing, synthesis, closing and CTA string.
- No em dash, en dash, spaced hyphen, section symbol or exclamation point anywhere in new prose.
- No buzzwords, superlatives or uniqueness claims; no figurative "land" or "own" (every "own" is
  literal ownership; "landed" is inside Tom's quote).
- Tom Langan quotes in rounds 1 and 3 and the gate extract match `tom-newsletter-2026-09-10.md`
  character for character; the gate is a shorter exact extract, as allowed.
- Mayhem figures match the build owner's first-hand read: top spot for Most Memorable Ads,
  likeability +8% above the norm, January 2024 to February 2025, 31 percent in the Insurity survey.
- Dates checked against the research files: Mayhem since 2010; Check First film 3 September 2026;
  YETI Presents since 2015; A Thousand Casts 15 August 2023; PBR film 17 May 2026; Confession
  26 January 2011; Stratos 14 October 2012; YETI Presents started two years before the 2017 resumption.
- View counts match the dated reads: 26,840; 49,046,929; 251,520; 1,368,483; 13,672.
- Runtimes match YouTube: 30 sec, 60 sec, 30 sec, 30 sec, 28 minutes, seven and a half minutes.
- "Nearly two hundred times": 195, correct.
- Round 2 source note states the honest limit (mascots ranked against other insurers, not against
  Check First), and the Check First note states that no memorability score was found.
- Tell test on rounds 1 to 3: headlines, category lines, titles and format rows describe each side
  in the same register; no verdict wording before the pick (round 4 and one Stratos row raised in
  F11 and F16).
- Mocking test: no card, note or answer criticises the Tide, Check First, Confession or PBR sides;
  the only borderline word is "cheap" (F23).
- Quantifiers "all", "every", "both", "each", "never" checked against the cards; the written
  adjudications in `lint-adjudications.json` hold.
- One main action per screen; interface labels make sense in isolation.
- No plot outline, no pricing, no invented testimonials or results.

---

# Embedded: adjudication of review 1

# Adjudication of independent review 1

Build owner: Claude Opus 5, the build session. Date: 2026-09-14.
Review adjudicated: `independent-review-1-2026-09-14.md`, by a fresh Claude Fable 5.1 context that did
not write the copy.

Under `Writing/RULES.md`, every finding is fixed, held with a written reason, or referred to Evan. The
build owner verified the rule, the source, the scope and any locked text before each decision. Where a
finding depended on a source, the source was read first hand.

## Summary

| Decision | Count |
|---|---|
| Fixed | 24 |
| Fixed with a stronger source than the reviewer proposed | 2 (F5, F6) |
| Held with a written reason | 1 (part of F13) |
| Referred to Evan | 3 (E1, E2, E3) |

One further fix was made that the reviewer did not raise as a finding: round 1 compares view counts
across two different channels, which the page's own evidence rule requires the card to state. The Tide
note now says so.

## Clear violations

**F1. Fixed.** Verified: since round 2 became Allstate, the losing side is shown only as a new cast in
each film, never as a repeating line, so "a line" had nothing on the page to refer to. Option C is now
"A new face in every film is easier to notice than the same character again." Synthesis item 2 now ends
"A new cast every time gives an audience nobody to grow fond of." "Nobody" is used rather than the
reviewer's "nothing", because a cast is people and the sentence contrasts with "people grow fond of a
cast". NOTE FOR EVAN: this is a direct consequence of swapping Specsavers for Allstate. With Specsavers
the page showed a line; with Allstate it shows a rotating cast. The lesson is the same, a returning
character against no returning character, but the wording had to follow the example.

**F2. Fixed.** Verified against the YETI research and Front Office Sports, October 2019: a 2013 deal,
a lapse, resumed in 2017. The tile now reads "Since 2017 | YETI Has Sponsored PBR". The spec row keeps
the 2013 first year.

**F3. Fixed.** Tiles now read "YETI's | Channel The Film Sits On" and "PBR's | Channel The Film Sits On".

**F4. Fixed, with different wording.** The reviewer proposed "Would Grab A Beer With Mayhem", which
widens the claim: the survey asked which mascot people would MOST like to have a beer with, not whether
they would. The caption is "Chose Mayhem For A Beer", which names the noun and keeps the choice.

**F5. Fixed, with a stronger source.** Verified: the build had not read Forbes, Tubefilter or The Drum
first hand. Rather than fall back to Tom's newsletter, YouTube's own blog was read first hand. "Mission
complete: Red Bull Stratos lands safely back on Earth", 14 October 2012, says "At peak, you were
watching more than 8 million concurrent livestreams" and "for creating a livestream with the most
concurrent views ever on YouTube". The note now cites YouTube with a link. The same read showed a scope
error the reviewer did not raise: the old copy said "8 million people", but YouTube counted streams, and
one stream is not one person. The stat now reads "8M+ | Live Streams At Once".

**F6. Fixed, with a stronger source.** Verified: "at least 2000" rested only on a fan re-upload's title.
Rather than drop the point, which round 3 needs to show the cartoon format returned for years, a proper
source was found and read first hand. The Kunstmeile Krems exhibition "Gives You Wings. 30 Years of
Cartoons by Red Bull", 2017, says "Red Bull's first animated commercials followed in 1989" and that they
began "a campaign strategy that has remained unchanged to this day". The format row now says Red Bull
has used the style since 1989, the tile reads "Since 1989 | Red Bull Cartoon Ads", and the note cites the
exhibition with a link. "A new joke every time" became "a new story each time", which is what the source
describes.

**F7. Fixed.** Titles now read "A film YETI made, on a channel YETI owns" and "YETI's name on an award
inside PBR's show".

**F8. Fixed.** Verified from YouTube's lengthSeconds: the highlights film is 90 seconds. The row reads
"Length: This highlights film runs 90 seconds".

**F9. Fixed.** "That is a normal place to start." deleted as a reassurance kicker.

**F10. Fixed.** The preamble is gone and the closing opens on the question, naming the company:
"Could your company make a show that comes back every week or every month, with a format and a cast your
audience gets to know? Could you make it for your audience rather than about your company, and own it
rather than rent space in somebody else's show?" "Show" was added to the reviewer's text, which ended
on "somebody else's" with no noun. The shape remains Evan's instruction of 11 September.

## Judgment calls

**F11. Fixed.** Round 4's measure is now "did more for YETI". The old wording stated the verdict before
the pick.

**F12. Fixed.** Both the source quote and the Mayhem note now say Mayhem came second to Jake from State
Farm, so the 31 percent cannot read as another first place beside the two top-spot figures.

**F13. Partly fixed, partly held.** "Same brand | As Mayhem" defined the losing side by the winner, and is
replaced with "3 Sep 2026 | Published", taken from Allstate's own upload date. HELD: "New cast | Each
Film" stays. The campaign's format is the fact the round turns on, so a figure would add nothing, and the
research records the rotating cast from coverage of the campaign. The reviewer's "2023 | Check First
Began" was not added, because the research gives no source for the year.

**F14. Fixed.** "Real" removed from the landing notice.

**F15. Fixed.** "Nearly two hundred times the views". The figures are views, not people. 49,046,929
divided by 251,520 is 195.

**F16. Fixed.** "To anyone who wanted it" removed from the Stratos format row, since it stated the
correct answer before the pick.

**F17. Fixed.** Synthesis item 1 is now "A series gives people a reason to come back. A single film does
not." The old "A single film is watched once" was unsupported certainty.

**F18. Fixed, with different wording.** Verified: "most companies" is a quantity with no source. The
reviewer's replacement, "The crew is the part that is missing", removed "usually" and so asserted the
reader lacks a crew, which widens the claim. The copy is now a conditional offer: "If you have the idea
but not the team to make it, Talex is the team." It uses "team" to match Evan's heading, names Talex,
makes no quantity claim, and, being conditional, no longer answers the heading's question outright,
which narrows the conflict recorded at E1.

**F19. Fixed.** Verified: nothing records a television or prime-time airing for School Lunch. The format
row reads "A commercial for Tide." Option B reads "Thirty seconds on television puts it in front of more
people at once", which argues for the commercial approach in general rather than asserting a fact about
this film.

**F20. Fixed.** "What he gets up to next" became "what he does next", for a US reader.

**F21. Fixed.** "Somebody else's" is used throughout round 4 and the closing question, including the
round 4 headline, which the reviewer did not list.

**F22. Fixed.** Synthesis item 4 no longer opens on "And".

**F23. Fixed.** "Cheap" became "costs little enough".

**F24. Fixed.** The landing lead now has a main verb: "Each of the four rounds shows one company two ways."

**F25. Fixed.** The gate credit carries its date, 22 May 2026, matching the other Tom Langan credits.

**F26. Fixed.** "Episode length" became "Length" on every card that is not a series: Tide, Mayhem, Check
First, Stratos, Confession and PBR. YETI Presents is a series and keeps "Episode length". The Rico's
Tacos card is locked and keeps its own label.

## Referred to Evan

**E1. The call to action heading.** "Do you have the team to make it?" is Evan's wording. RULES.md bans a
question the writer immediately answers. Preserved as Evan's choice. The copy beneath it was rewritten as
a conditional offer under F18, which narrows the conflict but does not remove it, because the heading is
still a question the page then speaks to. Evan's decision.

**E2. The locked Rico's Tacos card.** Three observations, none reworded, because the block can only be
changed by editing the live strategy card and re-extracting it:
- Its counts were read on 24 August 2026, the Tide side on 11 September 2026, so round 1's two sides are
  dated eighteen days apart, and "17 of 22 Episodes Out So Far" will age.
- Its note carries a FloQast PBC comparison and a second link that have nothing to do with round 1's
  question, and a viewer could mistake it for part of the evidence.
- Its spec says the series runs "on channels the company owns", but the embedded film sits on MinivelaTV,
  the media partner's channel. That also means round 1 compares views across two different channels.
  The Tide note now states that the channels differ, but the locked claim itself stands until the block
  is re-extracted. Evan's decision on whether to update the block.

**E3. The principle tag "It's Not About You. It's About Them."** Its sentence shape is the reveal
construction RULES.md bans. It is kept because it is the name of a Legendeering principle rather than
new prose. Recorded, no change.

## Checks after applying the fixes

- `node build-content.js`: all content gate checks pass, including the stricter tell scan.
- `talex-lint.py --profile public` with `lint-adjudications.json`: PASS. One new warning, "only" in
  "second only to Jake from State Farm", was checked true against the Insurity source and adjudicated.
- The copy now reads 1,827 words.

Because copy changed after review 1, `Writing/README.md` requires the changed passages to be reviewed
again by a fresh context before a receipt is recorded. See `independent-review-final-2026-09-14.md`.

---

# Embedded: final review

# Independent review, final: Which one worked? (v10 Legendeering ladder)

Reviewed: `ReverseLeadMagnet/v10-legendeering-ladder/copy-deck.md` as it stands on 2026-09-14 after the
adjudication of review 1, with `build-content.js` read for context. Reviewer: a fresh Claude Fable 5.1
context that did not write the copy and did not do review 1. No file other than this report was edited.
No video was opened. Profile: `Writing/profiles/public-general.md`.

Locked text, kept separate: the Rico's Tacos card in round 1, every quotation in quotation marks credited
to Tom Langan, and the CTA heading "Do you have the team to make it?" (Evan's wording, recorded at E1).

## 1. RESOLUTION CHECK

- F1. RESOLVED. Option C: "A new face in every film is easier to notice than the same character again."
  Synthesis 2 ends "A new cast every time gives an audience nobody to grow fond of." Nothing on the page
  now refers to a repeating line. "Nobody" is the right word: a cast is people, and the sentence before it
  says "People grow fond of a cast".
- F2. RESOLVED. "Since 2017 | YETI Has Sponsored PBR"; the spec row keeps 2013 as the first year. The
  source quote ("two years before the sponsorship resumed") agrees.
- F3. RESOLVED. "YETI's | Channel The Film Sits On" and "PBR's | Channel The Film Sits On" stand alone.
- F4. RESOLVED as to the rule (the noun is named). Wording is a judgment call, see N1.
- F5. RESOLVED. The note cites YouTube's own blog with a link and date, and the stat now counts streams,
  not people. Source verified, see section 3.
- F6. RESOLVED. The year 2000 and the "11 yrs" arithmetic are gone. The 1989 claim rests on the
  Kunstmeile Krems page, verified in section 3.
- F7. RESOLVED. "A film YETI made, on a channel YETI owns" and "YETI's name on an award inside PBR's show".
- F8. RESOLVED. "Length: This highlights film runs 90 seconds."
- F9. RESOLVED. The low-score line ends at "the examples went another."
- F10. RESOLVED. The closing opens on the question and names the company. See N2 for a pronoun note.
- F11. RESOLVED. "Which one did more for YETI?" describes the measure without the verdict.
- F12. RESOLVED. "second only to Jake from State Farm" in the quote and "came second to Jake from State
  Farm" in the note. The 31 percent can no longer read as a first place.
- F13. RESOLVED for the changed tile ("3 Sep 2026 | Published", from Allstate's upload). The hold on
  "New cast | Each Film" has a written reason, which is what RULES.md requires.
- F14. RESOLVED. "Every film plays on the page, and each card names where its figures came from." Checked:
  every card's note names the channel or the outlet its figures came from.
- F15. RESOLVED. "nearly two hundred times the views". 49,046,929 / 251,520 = 195.
- F16. RESOLVED. Format row: "A live event streamed free, then the films cut from it."
- F17. RESOLVED. "A series gives people a reason to come back. A single film does not."
- F18. RESOLVED. "If you have the idea but not the team to make it, Talex is the team." No quantity claim.
- F19. RESOLVED. "A commercial for Tide." Option B argues the approach, not a fact about this film.
- F20. RESOLVED. "what he does next".
- F21. RESOLVED. "somebody else's" in the headline, the category line, the card title and the closing.
- F22. RESOLVED. Synthesis 4 opens "When you own the show".
- F23. RESOLVED. "costs little enough to run all year".
- F24. RESOLVED. "Each of the four rounds shows one company two ways."
- F25. RESOLVED. "Tom Langan, What's 100 Years Old is New Again, 22 May 2026".
- F26. RESOLVED. "Length" on Tide, Mayhem, Check First, Stratos, Confession and PBR; "Episode length" on
  YETI Presents (a series) and on the locked Rico's Tacos card.

NOT RESOLVED: none.

The build owner's departures from review 1's wording:

- F1 "nobody" for "nothing": sound, for the reason given above.
- F4 "Chose Mayhem For A Beer": sound on scope. Review 1's "Would Grab A Beer With Mayhem" turned a
  most-preferred choice among mascots into a plain willingness, which widens the claim. The chosen
  caption is compressed to the point of ambiguity, see N1.
- F10 adding "show": sound. Review 1's text ended on "somebody else's" with no noun.
- F18 the conditional offer: sound. Review 1's "the part that is missing" asserted the reader lacks a
  crew; the conditional makes no claim about the reader and no quantity claim.
- F5 and F6 new sources: sound, and both verified first hand below.

## 2. NEW FINDINGS

### Clear violations

None.

### Judgment calls

**N1. Round 2, Mayhem card, stat tile 2.** LOW.
Current: "31% | Chose Mayhem For A Beer"
Rule: RULES.md, a stat caption must stand alone; clarity on first read. "For a beer" can be read as the
thing received rather than the occasion, so a reader may take the tile as an exchange. The scope is
right; the phrasing is what is unclear.
Fix: "31% | Would Most Like A Beer With Mayhem". It keeps the "most like" of the Insurity question and
names the noun.

**N2. Result screen, closing question, second sentence.** LOW.
Current: "Could you make it for your audience rather than about your company, and own it rather than
rent space in somebody else's show?"
Rule: RULES.md, name the noun when a pronoun could point to more than one thing. Both "it"s reach back
to "a show" in the previous sentence, past "a format", "a cast" and "your audience". The reading is
recoverable, but the noun is not in the sentence.
Fix: "Could you make that show for your audience rather than about your company, and own it rather
than rent space in somebody else's show?"

**N3. Round 3, Confession card, title against format row.** LOW.
Current: title "A thirty-second cartoon with a new joke each time"; format row "with a new story each
time".
Rule: RULES.md clarity, one word for one thing (the same principle applied at F21). Both lines sit on the
pick card together. "Story" is the sourced word; "joke" is a fair description of the 2011 film but not
of the campaign the format row describes.
Fix: title "A thirty-second cartoon with a new story each time".

**Outside the changed passages, noted only.** The round 1 and round 3 measures still say "Which one did
more people watch?" and "Which one did more people choose to watch?" while the evidence is view counts.
This is the same views-versus-people distinction the build owner accepted at F15 for the round 3 why
question. LOW; the settled examples are far enough apart that the figures would not mislead, but "Which
one got more views?" would match the tiles. No change required for the receipt.

## 3. SOURCE CHECK

**YouTube blog, 14 October 2012.** Read first hand via WebFetch and via r.jina.ai (verbatim text).
Title "Mission complete: Red Bull Stratos lands safely back on Earth", by Tim Katz, published
2012-10-14. Exact wording: "At peak, you were watching more than 8 million concurrent livestreams of
this mission" and "for creating a livestream with the most concurrent views ever on YouTube". The
page's note, "YouTube reported more than 8 million concurrent livestreams at the peak, the most
concurrent views of any livestream on YouTube at the time", matches the source in wording and scope.
"At the time" is a correct, narrower rendering of YouTube's "ever", written from 2012. The tile
"8M+ | Live Streams At Once" counts streams, as the source does. SUPPORTED.

**Kunstmeile Krems, Gives You Wings.** WebFetch returned the page truncated. The curl route through
r.jina.ai returned the full text. Exact wording: "Red Bull's first animated commercials followed in
1989"; the commercials "marked the beginning of a campaign strategy that has remained unchanged to this
day: well-known characters, historical events or everyday things with which a broad audience can
identify are used in a charmingly exaggerated story with an unexpected twist. Art director Horst Sambo
created a unique, unmistakable style with the graphic implementation." The exhibition is titled
"Gives You Wings. 30 Years of Cartoons by Red Bull" and the page opens "Red Bull is celebrating its 30th
anniversary in 2017".

- "Red Bull's first cartoon commercials ran in 1989" (note): SUPPORTED. The source says "animated";
  the exhibition itself calls them cartoons, so the word is the source's own.
- "the cartoon style Red Bull has used since 1989" (format row) and "Since 1989 | Red Bull Cartoon Ads"
  (tile): SUPPORTED. The source dates the style to 1989 and says the strategy was unchanged as of 2017;
  the film on the card is from 2011, inside that span. The present perfect "has used" reaches to 2026,
  which the source does not cover, but the claim the reader takes from the card (this 2011 film is in a
  style that started in 1989 and kept running) is inside scope. No rewording needed.
- "with a new story each time": SUPPORTED as a description of the campaign. The source describes a
  strategy built on a story with a twist drawn from many characters, events and everyday things. It does
  not use the phrase "each time", so the copy is a summary, not a quotation, and the note correctly does
  not put it in quotation marks.
- "2017" in the note: supported by the 30th-anniversary opening and the "30 Years" title. The fetched
  page did not show exhibition dates.

## 4. RELEASE RECOMMENDATION

CLEAR FOR RECEIPT WITH NOTED JUDGMENT CALLS. Every fixed finding from review 1 is resolved in the text as
it stands, the two new sources say what the page says they say, and the build owner's five departures
from review 1's wording are each sound on scope or clarity. The three judgment calls above are wording
choices, not rule violations or unsupported claims, and the receipt can be recorded on the current text
whether or not they are taken.

## 5. CHECKS CONSIDERED AND PASSED

- Every changed passage read fresh for pronouns without a noun in the same unit (one LOW note, N2).
- No new reveal construction, theatrical question or writer-answered question in the changed passages;
  the closing questions are addressed to the reader and left open; E1 stands as recorded.
- No stacked short sentences of concern: synthesis 1 is two sentences of nine and five words inside a
  list item, which the public profile evaluates as its own unit.
- No em dash, en dash, spaced hyphen, section symbol or exclamation point in any changed text.
- Tell test on the changed pick-screen text: "Streamed free" (category and format row), "the cartoon
  style Red Bull has used since 1989", "A film YETI made, on a channel YETI owns", "YETI's name on an
  award inside PBR's show" and "Which one did more for YETI?" describe each side without stating the
  verdict.
- Mocking test: the changed text does not belittle the Tide, Check First, Confession or PBR sides;
  "cheap" is gone.
- Figurative "land" and "own": none; every "own" is literal ownership; "landed" is inside Tom's quote.
- Quantifiers in changed text: "Every film plays on the page", "each card names where its figures came
  from", "every week or every month", "a new cast in each film", "a new story each time". The first two
  hold against all eight cards; the others describe the proposal or the sourced campaign format.
- Round 4 dates consistent across tile, spec row and source quote: 2013 first deal, 2017 resumption,
  2015 YETI Presents.
- Round 2 figures unchanged and consistent: 31 percent, second to Jake from State Farm, in tile, note and
  quote.
- "8M+" and "Since 1989" tiles match their notes and their sources.
- Locked Rico's Tacos card and every Tom Langan quotation left as they stand; no rewording proposed.
- The extra unraised fix (Tide note: "The two films in this round sit on different channels.") states a
  fact recorded in the README and matches the round 4 note's register.

---

# Embedded: adjudication of the final review

# Adjudication of the final review

Build owner: Claude Opus 5, the build session. Date: 2026-09-14.
Review adjudicated: `independent-review-final-2026-09-14.md`, by a fresh Claude Fable 5.1 context that
did not write the copy and did not perform review 1.

## What the final review found

- All 26 fixed findings from review 1: RESOLVED. None NOT RESOLVED.
- The build owner's five departures from review 1's wording (F1, F4, F5, F6, F10, F18): judged sound.
- Both new sources, read first hand by the reviewer: supported. YouTube's blog of 14 October 2012 matches
  in wording and scope. The Kunstmeile Krems exhibition supports "since 1989".
- No clear violations. Three low-confidence judgment calls and one note outside the changed passages.
- Recommendation: CLEAR FOR RECEIPT WITH NOTED JUDGMENT CALLS.

## Decisions

The receipt could have been recorded here, holding the three judgment calls with written reasons. All four
items were instead fixed, because each is a genuine improvement and Evan asked for everything to be right.
Because fixing them is a copy edit after review, the five changed lines were sent to a further fresh
reviewer before any receipt was recorded. See `independent-review-changed-lines-2026-09-14.md`.

**N1. Fixed.** "31% | Chose Mayhem For A Beer" read as an exchange. Now "31% | Would Most Like A Beer With
Mayhem", which follows the survey's own question.

**N2. Fixed.** In the closing question, "Could you make it" pointed back to the previous sentence. Now
"Could you make that show for your audience rather than about your company".

**N3. Fixed.** The Red Bull cartoon's title said "a new joke each time" while its format row said "a new
story each time". The title now says "a new story each time".

**Note outside the changed passages. Fixed.** Rounds 1 and 3 asked which one "more people" watched while
the cards show view counts, the same distinction already fixed under F15. Round 1 now asks "Which one got
more views?" and round 3 asks "Which one was watched more?". The two are worded differently so the four
rounds still ask four different questions.

## Checks after applying

- `node build-content.js`: all content gate checks pass, including the tell scan on the two new measures.
- `talex-lint.py --profile public` with `lint-adjudications.json`: PASS. No new warnings.

---

# Embedded: review of the five changed lines

# Independent review, changed lines only: Which one worked? (v10 Legendeering ladder)

Reviewed: the five lines in `ReverseLeadMagnet/v10-legendeering-ladder/copy-deck.md` changed after the
final review of 2026-09-14, read in the context of their card or screen. Reviewer: a fresh Claude Fable 5.1
context that did not write the copy and did not do review 1 or the final review. No file other than this
report was edited. No video was opened. Profile: `Writing/profiles/public-general.md`.

Scope: only the five changed lines. Everything else on the page keeps the final review's clearance.

## 1. LINE BY LINE

**1. Round 1, question under the headline. "Which one got more views?"**
FIXES IT. The tiles on both cards are view counts, and the question now asks for the thing the tiles
show. NO NEW PROBLEM. "Which one" points at the film or the series named in the headline, the question
gives no verdict away, and a viewer can still get it wrong.

**2. Round 2, Mayhem card, stat tile 2. "31% | Would Most Like A Beer With Mayhem"**
FIXES IT. The exchange reading is gone; the caption now says what the Insurity question asked, and "most"
keeps the source's most-preferred scope rather than a plain willingness. NO NEW PROBLEM. The comparison
set (other insurers' mascots) is not in the tile, but the source note directly beneath supplies it, and a
tile of this length cannot carry it. The figure, date and second place are unchanged in the note and the
quote.

**3. Round 3, question under the headline. "Which one was watched more?"**
FIXES IT. No person count is asserted; "watched more" is a fair reading of a view count. NO NEW PROBLEM
under the rules. It does now measure the same thing as round 1 in different words, which is a wording
choice, not a violation; see R1.

**4. Round 3, cartoon card title. "A thirty-second cartoon with a new story each time"**
FIXES IT. The title and the format row now use the same phrase, which the final review verified against
the Kunstmeile Krems source. NO NEW PROBLEM. The phrase repeats on the card, but that is what N3 asked for.
It does not tip the winner: the cartoon is the repeating, consistent side of this round and it loses, so a
viewer carrying round 2's lesson would if anything be pulled the wrong way.

**5. Result screen, closing question, second sentence. "Could you make that show for your audience
rather than about your company, and own it rather than rent space in somebody else's show?"**
FIXES IT. "That show" reaches back to "a show that comes back every week or every month" in the sentence
before, and the remaining "it" now has its noun in the same sentence. NO NEW PROBLEM. "Own" is literal
ownership of the show. The question is addressed to the reader and left open.

## 2. NEW FINDINGS

### Clear violations

None.

### Judgment calls

**R1. Rounds 1 and 3, the question under each headline.** LOW.
Current: round 1 "Which one got more views?"; round 3 "Which one was watched more?"
Rule: RULES.md clarity, one word for one thing (the principle the build owner applied at F21 and N3).
Both rounds measure YouTube views, so asking the same question twice is honest and not a problem in
itself; the evidence is the same kind in both rounds and rounds 2 and 4 already carry the different
measures. What is inconsistent is two phrasings for one measure, and round 3's own why-question already
says "get nearly two hundred times the views", so the round's pick question and its why-question use
different words for the same count.
Fix: round 3 "Which one got more views?", matching round 1 and round 3's why-question. Keeping the two
phrasings would not block the receipt.

## 3. RELEASE RECOMMENDATION

CLEAR FOR RECEIPT WITH NOTED JUDGMENT CALLS. Each of the five changes does what it was applied to do, none
widens or narrows a factual claim, none adds a pronoun without its noun, and none gives away a winner
before the pick. R1 is a wording choice and the receipt can be recorded whether or not it is taken.

## 4. CHECKS CONSIDERED AND PASSED

- Scope of each claim against its source as recorded in the final review: the beer tile keeps "most" and
  the 31 percent; "a new story each time" is the sourced campaign description; the two view questions
  claim only views.
- Pronouns: "which one" in lines 1 and 3 has its referents in the headline directly above; "that show"
  and "it" in line 5 resolve inside their own sentences.
- Tell test on the two pick-screen questions and the cartoon title: none states or hints at the verdict.
- Stat caption standing alone: "31% | Would Most Like A Beer With Mayhem" reads as one statement; the
  comparison set follows in the note on the same card.
- Rounds 1 and 3 still read as real questions a viewer could get wrong.
- No em dash, en dash, spaced hyphen, section symbol or exclamation point in the five lines.
- No reveal construction, writer-answered question, figurative "land" or "own", or closing flourish.
- Title case in the new tile matches the other tiles on the page ("Live Streams At Once", "Each Film").
- The rest of the Mayhem card (the note's "came second to Jake from State Farm" and the quote's "second
  only to") still agrees with the changed tile.
- Locked text untouched: the Rico's Tacos card, every Tom Langan quotation, and the CTA heading.
