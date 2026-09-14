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
