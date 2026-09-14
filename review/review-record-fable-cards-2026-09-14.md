# Review record: Which one worked? One company, two ways (Fable card rework)

Artifact: `ReverseLeadMagnet/v10-legendeering-ladder/copy-deck.md`, every word a viewer sees on
https://talexmedia.github.io/lead-magnet-legendeering-ladder/, generated from `build-content.js` and the
editorial decisions in `cards.json` (content.js?v=86c90373eb).
Profile: `Writing/profiles/public-general.md`. Authority: `Writing/README.md` version 2026-09-11.2.
Date: 2026-09-14.

Why this release exists: Evan ruled on 14 September 2026 that the page is a lead magnet, not a strategy doc.
Each card may carry only what explains its round's principle. He also ruled that Fable makes those
decisions. The writer is therefore the Claude Fable 5.1 card-decisions context. The reviewers are three
other fresh Claude Fable 5.1 contexts, none of which wrote copy. The build session (Claude Opus 5)
applied Fable's decisions word for word, gathered facts and adjudicated findings, and wrote no card copy.
This record supersedes `review-record-2026-09-14.md`, which covered the version before the rework.

Every reviewer report and adjudication is embedded below word for word, so changing any of them breaks
the receipt.

## The release sequence, as run

| Step | What happened | Result |
|---|---|---|
| Card decisions | Fable card-decisions context rewrote every card for the page's goal; applied by `apply-decisions.js` | Gate PASS |
| Talex lint | `talex-lint.py --profile public`, every trigger listed by a probe using the linter's own sentence split | PASS, 10 warnings adjudicated; 2 held for review |
| Local play-through | Browser pane, desktop 1200x900 and mobile 375x812, all four rounds and the result, no video played | No errors, no horizontal overflow on any of 15 screens |
| Independent review | Fresh Fable context, full artifact | 7 clear findings, 9 judgment calls |
| Adjudication | Facts checked (Auralcrave, Insurity via Business Wire, Allstate channel data); copy deck extended to all 40 interface strings | Text findings sent to Fable |
| Fable revision 1 | Applied word for word | Gate PASS, lint PASS |
| Final review | Second fresh Fable context, changed lines plus full deck | 3 blockers |
| Adjudication | YouTube stills for all six Check First uploads (`review/evidence/`) settled one blocker on evidence | 2 blockers sent to Fable |
| Fable revision 2 | Applied word for word | Gate PASS, lint PASS |
| Review of changed lines | Third fresh Fable context | Both blockers RESOLVED, no violations, verdict READY |
| Receipt | `review-receipt.py record`, then `verify` | See `review-receipt.json` |

## Open items, held with a written reason

- **Eyebrow "choose your own adventure"** (first review, finding 16). Held for Evan and Tom. It is the project's working name.
- **Whether the Check First line is spoken in the films.** Not verified, because no film is played in this workflow. Option C now speaks of the campaign name, which the upload titles support. If Evan or Tom watches one spot and hears the line, option C can return to "line", which needs a new review.
- **Two LOW judgment calls from the review of changed lines.** The repeating thing has three names across round 2, and "we checked" is the page's own voice on a pick-screen field. The reviewer required no change.


---

# Embedded verbatim: `review/card-decisions-fable-2026-09-14.md`

# Card decisions, Legendeering ladder, 14 September 2026

Decided by Fable 5.1 at Evan's request. Not a review of the build session's draft in `build-content.js`; that draft was read and set aside.

## 1. The principle applied

Every line on a card has one job: help the prospect understand this round's principle, or help the prospect trust the evidence for it. A line that does neither goes, however true it is. The engine shapes the rest. The pick screen shows only the caption, the category line, the title and the first spec row, so those four fields describe what the thing is and nothing more. The reveal tile shows the name, three stats, the remaining spec rows and the note, and never re-shows the pick-screen fields, so the reveal tile has to carry the round's variable on its own. Stats are evidence where evidence exists. Where the round's evidence is structural rather than measured (rounds 2 and 4), the stats state the structure plainly and the note says what was not found. Nothing from the strategy-doc block library survives: no comparisons to other companies, no sitcom references, no runtime classes, no "A company that did it".

## 2. The cards

### Round 1, P&G, the repetition rung

**Card: Rico's Tacos**

| Field | Old | Decision | Reason |
|---|---|---|---|
| Caption | Episode 1, Flavor Has a Price · Rico's Tacos | Episode 1: Flavor Has a Price · MinivelaTV | The caption's job is whose channel the film is on. The two films in this round sit on different channels, so the channel has to be visible from the start. |
| Category line | Short-Form Episodic · Scripted comedy, under 2 minutes | Series · 22 short episodes | Runtime class is strategy-doc language. The round's variable is one film against a series, so the line says series and how many. |
| Title | A short scripted comedy | A scripted comedy in short episodes | Same thing, with the episodes named so "short" cannot be read as a short series. |
| Spec row 1 (pick screen) | Format: A short form scripted series designed to be easy to consume on the go (aka a Taco Drama) following a standard sitcom format. | What it is: A scripted comedy about a taco stand, told in short episodes, made by P&G with Albertsons Media Collective and Minivela. | Describes the thing and who made it, which is the "P&G" in the headline. The Taco Drama definition and the sitcom framing sell a format; this page is not selling a format. |
| Spec row 2 (reveal) | Entertainment reference: Abbott Elementary and Superstore | How often: A new episode about twice a week, from 23 June to 28 August 2026. | Repetition is the rung. Cadence is the plainest statement of repetition, and the dates say how long the series kept it up. |
| Spec row 3 (reveal) | A company that did it: Albertsons with Procter & Gamble... running on channels the company owns. | Episode length: 49 seconds to two and a half minutes. Episode 1 runs 70 seconds. | Answers the cost objection in the why options without arguing. The old row named the maker in strategy-doc form and made a channel claim the embedded film does not support. |
| Spec row 4 | Episode length: 1-2 minutes per episode | Cut | Folded into row 3 with the real range. |
| Stat 1 | 200,363 · Views, Episode One | 1,305,315 · Views Across 22 Episodes, 14 Sep 2026 | The measure is views, and the repetition argument is cumulative: 22 films for one property added up to 1.3 million. |
| Stat 2 | 940K · Views, All Episodes | 200,495 · Views, Episode 1 | One episode against one commercial. It answers the objection that 22 films will always beat one before the prospect can raise it. |
| Stat 3 | 17 of 22 · Episodes Out So Far | 49,000+ · Views On Each Episode From Episode 11 On | The return visit is the principle. Every episode from 11 to the end drew between 49,593 and 63,147 views, so the audience kept coming. Stated from episode 11 so the claim needs no caveat; the note explains why. |
| Note | Albertsons runs it on YouTube, on social, and on the screens inside its stores, and the app lets you buy what you just watched. For a longer-form comparison... FloQast makes PBC... Counts read from YouTube on 24 August 2026. | The series playlist on MinivelaTV, the channel of Minivela, which makes Rico's Tacos with P&G and Albertsons Media Collective. 22 full episodes (two are numbered 16), 23 June to 28 August 2026; views read 14 September 2026. Episodes 9 and 10 show 1,080 and 78 views, far below every other episode, so the per-episode figure starts at episode 11. The two films in this round sit on different channels. | Channel, makers, dates, the numbering quirk a prospect will see in the playlist, the reason the per-episode range starts where it does, and the different-channels disclosure. FloQast is another company and this round is P&G only. In-store screens and the shopping app explain distribution, not repetition. |

**Card: the Tide commercial**

| Field | Old | Decision | Reason |
|---|---|---|---|
| Caption | School Lunch · Tide | School Lunch · Tide | Channel named. Unchanged. |
| Category line | Commercial · One film | Commercial · One film | The round's variable, stated neutrally. Unchanged. |
| Title | A thirty-second commercial | A thirty-second commercial | Describes the thing. Unchanged. |
| Spec row 1 (pick screen) | Format: A commercial for Tide. | What it is: A commercial for Tide, published as one film. | Plain label. "One film" is the variable, said the same way as "22 short episodes" opposite. |
| Spec row 2 | A company that did it: P&G, on Tide's own channel, October 2025. | Cut | Strategy-doc label. Channel and date move to the note. |
| Spec row 3 | Length: 30 seconds | Cut | Already in the title on the pick screen; nothing in the round turns on length. |
| Stat 1 | 26,840 · YouTube Views, 11 Sep 2026 | 27,157 · YouTube Views, 14 Sep 2026 | The measure, re-read on 14 September so every count on the page carries the same date. |
| Stat 2 | 1 · Film | 1 · Film | The variable, on the reveal tile where the category line is not shown. |
| Stat 3 | 30 sec · Length | 11 months · On YouTube By 14 Sep 2026 | Trust the evidence: the commercial had eleven months online to gather its count against ten weeks for the series, so the count is not a young one. Length taught nothing about repetition. |
| Note | Tide's own channel, 15 October 2025. Views read 11 September 2026. The two films in this round sit on different channels. | Tide's own channel, published 15 October 2025. Views read 14 September 2026. The two films in this round sit on different channels. | Date refreshed. The different-channels disclosure stays on both cards. |

**Round 1 framing**

| Field | Old | Decision | Reason |
|---|---|---|---|
| Headline | P&G: one film, or a twenty-two episode series? | Unchanged | States the variable without a tell. |
| Question | Which one got more views? | Unchanged | The measure. |
| Why question | Why did the show work? | Both are P&G. Why did the series get more views? | Matches rounds 2 to 4, which each open by restating that one company made both. The question now names the measure it is asking about. |
| Option, correct | A series gives people a reason to come back. | Unchanged | Tom's principle in one sentence. Also printed on the result screen. |
| Option, wrong | Thirty seconds on television puts it in front of more people at once. | One film can run everywhere at once, so it reaches more people. | The old wording asserted a television run for School Lunch that no source on the page supports. The reach argument survives without the claim. |
| Option, wrong | One polished film costs far less to make than twenty-two episodes. | Unchanged | A real objection; the episode-length row is the quiet answer. |

### Round 2, Allstate, the recurring-cast rung

**Card: Mayhem**

| Field | Old | Decision | Reason |
|---|---|---|---|
| Caption | Mayhem: Action Hero · Allstate | Unchanged | Channel named. |
| Category line | Commercial · The same character since 2010 | Unchanged | The round's variable, stated as a fact about the thing. |
| Title | Mayhem, played by Dean Winters | Unchanged | The same face for the same character is the recurring-cast point in its plainest form. |
| Spec row 1 (pick screen) | Format: A commercial starring Allstate's character Mayhem. | What it is: A commercial starring Allstate's character Mayhem. This one runs 60 seconds. | Plain label; length folded in so the "Length" row goes. |
| Spec row 2 | A company that did it: Allstate, on its own channel. | The cast: The same character, Mayhem, since 2010. | The reveal tile does not show the category line, so the variable has to be restated here. |
| Spec row 3 | Length: This one runs 60 seconds | Cut | Folded into row 1. |
| Stat 1 | #1 · Most Memorable Ads, Insurance Mascots | #1 · Most Memorable Ads, Insurance Mascots | The measure is "do people remember". Unchanged. |
| Stat 2 | 31% · Would Most Like A Beer With Mayhem | +8% · Likeability, Above The Norm | Reordered. Tom's point runs remember, like, grow fond, so the stats run in that order. |
| Stat 3 | +8% · Likeability, Above The Norm | 31% · Would Most Like A Beer With Mayhem | Wanting a beer with a character is fondness in plain words, which is why the Insurity figure earns its place over MarketCast's recall, messaging and breakthrough scores. |
| Note | MarketCast measured insurance mascots... Both rank Mayhem against other insurers' mascots, not against Allstate's own commercials. | Unchanged, with the MarketCast link kept | Dates, both sources, the second place to Jake from State Farm, and the honest limit that neither measure compares Mayhem with Check First. |

**Card: Check First**

| Field | Old | Decision | Reason |
|---|---|---|---|
| Caption | Check First: Swim Meet · Allstate | Unchanged | Channel named. |
| Category line | Commercial · A new cast in each film | Unchanged | The variable, neutrally. |
| Title | A brother who checks Allstate first | Unchanged | Describes this film's own story, which is what a one-off cast looks like. |
| Spec row 1 (pick screen) | Format: A commercial in Allstate's Check First campaign, with a new cast in each film. | What it is: A commercial in Allstate's Check First campaign. This one runs 30 seconds. | Plain label. The cast fact moves to its own row so both sides carry a matching "The cast" row on the reveal. |
| Spec row 2 | A company that did it: Allstate, on its own channel. | The cast: A different cast in each Check First film. | Restates the variable on the reveal tile, mirroring Mayhem's row. |
| Spec row 3 | Length: This one runs 30 seconds | Cut | Folded into row 1. |
| Stat 1 | 30 sec · Length | New cast · In Each Film | The variable leads, since no measured figure exists for this side and the round shows no view counts. |
| Stat 2 | New cast · Each Film | 1 · Film With This Cast | The contrast with sixteen years of one character, stated as a fact about this film. |
| Stat 3 | 3 Sep 2026 · Published | 3 Sep 2026 · Published | Eleven days old at the read date: Allstate runs both approaches now, which is what makes the choice real. |
| Note | Allstate's own channel, 3 September 2026. We found no published memorability score for this campaign. | Unchanged | The honest limit, stated once. |

**Round 2 framing**

| Field | Old | Decision | Reason |
|---|---|---|---|
| Headline | Allstate: Mayhem, or a new cast each time? | Unchanged | No tell. |
| Question | Which one do people remember? | Unchanged | The measure, and the one MarketCast scored. |
| Why question | Allstate makes both. Why is Mayhem the one people remember? | Unchanged | Already the pattern the other rounds now follow. |
| Option, wrong | A fresh cast in every film keeps a campaign from going stale. | Unchanged | A real argument. |
| Option, correct | People have come to know him, so each new film is a chance to see what he does next. | People have grown fond of Mayhem, so each new film is a chance to see what situation he is in next. | Tom's words for the rung: like them, grow fond of them, look forward to the next situation. "Him" without the noun broke the name-the-noun rule. |
| Option, wrong | A new face in every film is easier to notice than the same character again. | Unchanged | A real argument. |

### Round 3, Red Bull, the audience rung

**Card: the Stratos jump**

| Field | Old | Decision | Reason |
|---|---|---|---|
| Caption | Mission Highlights · Red Bull Stratos | Mission Highlights · Red Bull | The caption names the channel, and the channel is Red Bull. Both films in this round sit on it. |
| Category line | Live Event · Streamed free, then cut into films | Live event · Streamed on YouTube, then cut into films | Describes what it is. "Free" moves to the reveal, where it is evidence for the principle rather than a nudge on the pick screen. |
| Title | A jump from the edge of space, streamed live | A jump from the edge of space | The category line already says it was streamed. |
| Spec row 1 (pick screen) | Format: A live event streamed free, then the films cut from it. | What it is: A live event on YouTube, then the films cut from it. This highlights film runs 90 seconds. | Plain label with the length folded in. |
| Spec row 2 | A company that did it: Red Bull, 14 October 2012, on its own channel. | Cut | Date and channel are in the note. |
| Spec row 3 | Length: This highlights film runs 90 seconds | Cut | Folded into row 1. |
| Stat 1 | 49,046,929 · YouTube Views, 11 Sep 2026 | 49,048,257 · YouTube Views, 14 Sep 2026 | The measure, re-read. |
| Stat 2 | 8M+ · Live Streams At Once | 8M+ · Live Streams At Once, At The Peak | YouTube's own figure that people wanted to watch this as it happened. "At the peak" keeps the caption inside the source. |
| Stat 3 | Free · No Sign-Up, No Gate | Free · No Sign-Up, No Gate | Give Without Expectation, as a fact about the stream. Tom's quote in the source panel says the same thing. |
| Note | YouTube reported more than 8 million concurrent livestreams at the peak... Red Bull's own channel; views read 11 September 2026. | YouTube reported more than 8 million concurrent livestreams at the peak, the most of any livestream on YouTube at the time, on its own blog, 14 October 2012. Red Bull's own channel; views read 14 September 2026. Both films in this round sit on Red Bull's own channel. | The same-channel fact now appears on both sides of the reveal, not only on the cartoon. YouTube link kept. |

**Card: the Gives You Wiiings cartoon**

| Field | Old | Decision | Reason |
|---|---|---|---|
| Caption | Confession, 2011 · Red Bull | Unchanged | Channel named. |
| Category line | Commercial · Animated, thirty seconds | Unchanged | Describes the thing. |
| Title | A thirty-second cartoon with a new story each time | A thirty-second cartoon commercial | "A new story each time" echoed round 2's variable and could make a prospect think this round is about cast again. It is not. |
| Spec row 1 (pick screen) | Format: An animated commercial in the cartoon style Red Bull has used since 1989, with a new story each time. | What it is: An animated commercial in the cartoon style Red Bull has used since 1989. | The 1989 fact stays because it matters to the ladder: this side already repeats and already keeps a consistent format, and still loses on this rung. |
| Spec row 2 | A company that did it: Red Bull, on its own channel. | Cut | In the note. |
| Spec row 3 | Length: 30 seconds | Cut | In the category line and the title. |
| Stat 1 | 251,520 · YouTube Views, 11 Sep 2026 | 251,604 · YouTube Views, 14 Sep 2026 | The measure, re-read. |
| Stat 2 | Since 1989 · Red Bull Cartoon Ads | Since 1989 · Red Bull Cartoon Commercials | Repetition and consistency on the losing side, so the prospect sees that those two rungs alone were not enough. |
| Stat 3 | 30 sec · Length | 26 Jan 2011 · Published | Fifteen years online, twenty months longer than the Stratos film, so the gap in views cannot be explained by time. Length taught nothing here. |
| Note | Red Bull's own channel, 26 January 2011; views read 11 September 2026. Both films sit on the same channel, so the two counts compare fairly. Red Bull's first cartoon commercials ran in 1989... | Red Bull's own channel, published 26 January 2011; views read 14 September 2026. Both films in this round sit on Red Bull's own channel, so the two counts can be compared. Red Bull's first cartoon commercials ran in 1989, according to the Kunstmeile Krems exhibition Gives You Wings, 2017. | Date refreshed, "fairly" softened to "can be compared", Kunstmeile link kept. |

**Round 3 framing**

| Field | Old | Decision | Reason |
|---|---|---|---|
| Headline | Red Bull: a jump from the edge of space, or a thirty-second cartoon? | Unchanged | No tell. |
| Question | Which one was watched more? | Unchanged | The measure. |
| Why question | Both films are Red Bull, on the same channel. Why did one get nearly two hundred times the views? | Both films are Red Bull, on the same channel. Why did the jump get nearly two hundred times the views? | Name the noun. The ratio holds: 49,048,257 against 251,604 is 195 to one. |
| Option, correct | It was something people wanted to watch, given away free, with nothing asked in return. | The jump was something people wanted to watch for its own sake, and Red Bull gave it away free with nothing asked in return. | Names the noun and says "for its own sake", which is the "about them, not you" half of the principle. |
| Option, wrong | A thirty-second cartoon costs little enough to run all year. | Unchanged | A real argument. |
| Option, wrong | Putting the product on screen is what turns attention into sales. | Unchanged | A real argument, and the one most prospects hold. |

### Round 4, YETI, the ownership rung

**Card: the YETI Presents film**

| Field | Old | Decision | Reason |
|---|---|---|---|
| Caption | A Thousand Casts · YETI | Unchanged | Channel named. |
| Category line | Long-Form Episodic · Documentary | Documentary · A YETI Presents film | Runtime class is strategy-doc language. The series name says this is a show with more than one film in it. |
| Title | A film YETI made, on a channel YETI owns | A film YETI made | The variable, half of it. The other half, whose channel, sits in the spec row and the stats rather than being said three times on the pick screen. |
| Spec row 1 (pick screen) | Format: A documentary film series. This one follows a fly fishing trip to Bhutan. | What it is: A documentary in the YETI Presents series, on YETI's own channel. This one follows a fly fishing trip to Bhutan and runs 28 minutes. | Plain label; the channel, the subject and the length in one row. |
| Spec row 2 | A company that did it: YETI, on its own channel, since 2015. | Cut | The 2015 fact is stat 2. |
| Spec row 3 | Episode length: This one runs 28 minutes | Cut | Folded into row 1. |
| Stat 1 | 1,368,483 · YouTube Views, 11 Sep 2026 | 1,371,487 · YouTube Views, 14 Sep 2026 | The measure, re-read. Different channels, which the note says. |
| Stat 2 | Since 2015 · YETI Presents Has Run | Since 2015 · YETI Presents Has Run | A show with a history is what owning a show looks like. |
| Stat 3 | YETI's · Channel The Film Sits On | YETI · Owns The Channel The Film Sits On | The round's variable, stated so the same caption can sit on both tiles with only the owner changing. "Owns" is literal. |
| Note | YETI's own channel, 15 August 2023; views read 11 September 2026. The two films sit on different channels, and that is the point of the round. | YETI's own channel, published 15 August 2023; views read 14 September 2026. The two films in this round sit on different channels, and whose channel each one sits on is the point of the round. | Date refreshed; the sentence names what the point is. |

**Card: the PBR award**

| Field | Old | Decision | Reason |
|---|---|---|---|
| Caption | The 2026 PBR YETI Bucking Bull Champion · PBR | Unchanged | Channel named, and it is not YETI's. |
| Category line | Sponsorship · A name on somebody else's award | Sponsorship · Inside PBR's own coverage | "Somebody else's" leaned toward the verdict. Naming PBR describes the same fact without leaning. |
| Title | YETI's name on an award inside PBR's show | A PBR award named after YETI | Shorter, and the nouns are in the order the prospect meets them: PBR's award, YETI's name. |
| Spec row 1 (pick screen) | Format: A season award named after the sponsor, inside coverage that Professional Bull Riders makes and owns. | What it is: A season award named after YETI, inside coverage that Professional Bull Riders makes. This segment runs seven and a half minutes. | Plain label; length folded in; "the sponsor" replaced with the name. |
| Spec row 2 | A company that did it: YETI, which first sponsored PBR in 2013 and has sponsored it again since 2017. | Cut | The history is stat 2 and the note. |
| Spec row 3 | Length: This segment runs seven and a half minutes | Cut | Folded into row 1. |
| Stat 1 | 13,672 · YouTube Views, 11 Sep 2026 | 13,732 · YouTube Views, 14 Sep 2026 | The measure, re-read. |
| Stat 2 | Since 2017 · YETI Has Sponsored PBR | Since 2017 · YETI Has Sponsored PBR | The sponsorship is a long one, so the low count is not a new deal finding its feet. |
| Stat 3 | PBR's · Channel The Film Sits On | PBR · Owns The Channel The Film Sits On | Mirrors the YETI tile. |
| Note | Published on PBR's own channel on 17 May 2026; view count read on 11 September 2026. The sponsorship history is as reported by Front Office Sports in October 2019. | PBR's own channel, published 17 May 2026; views read 14 September 2026. YETI first sponsored PBR in 2013, the deal lapsed, and it resumed in 2017, as reported by Front Office Sports in October 2019. | Date refreshed; the lapse is stated because "since 2017" only makes sense with it. |

**Round 4 framing**

| Field | Old | Decision | Reason |
|---|---|---|---|
| Headline | YETI: make the film, or put your name on somebody else's? | Unchanged | No tell. |
| Question | Which one did more for YETI? | Unchanged | The only measure this round can honestly claim, since the two counts sit on different channels. |
| Why question | Both are YETI. Why does the film do more for YETI in the long run? | Unchanged | Already the pattern. |
| Option, correct | It sits on a channel YETI owns, so the audience it brings in is YETI's to keep. | The film sits on a channel YETI owns, so the audience the film brings in is YETI's to keep. | Name the noun, twice. |
| Option, wrong | A sponsorship puts the name in front of a crowd that has already gathered. | Unchanged | A real argument. |
| Option, wrong | Naming an award costs less than producing a documentary. | Unchanged | A real argument. |

## 3. Everything else changed on the page

- **Round 4 source quote.** "PBR makes the film and owns the channel it sits on" becomes "PBR makes the film and owns the channel the film sits on." Name-the-noun rule. In the JSON as `copy.round4Quote`.
- **Read dates.** Every view count now reads 14 September 2026, so no card is eighteen days out of step with its neighbour.
- **Nothing else.** The landing screen, the gate quote, the lens tags, the side names, the round quotes for rounds 1 to 3, the synthesis, the closing question, the call to action and the interface labels all stay. No card decision made the synthesis inaccurate: line 1 still matches the Rico's stats, line 2 still matches the Mayhem answer, line 3 still matches the Stratos answer, line 4 still matches the YETI tiles.

## Revision after fact check

The build owner checked the values above against YouTube's own page data on 14 September 2026 and returned two corrections and one new fact. The tables in section 2 record the first decision; the changes below override them, and the JSON in section 4 is the corrected set.

| Where | Was | Now | Reason |
|---|---|---|---|
| Check First, stat 2 | 1 · Film With This Cast | Same line · In Allstate's Description Of Each Film | The Swim Meet cast appears in two uploads, a :30 and a :15, so "1 film" was wrong. The replacement is the fact that matters to this rung: Allstate's written description of every Check First film checked opens with the same line. Scope kept to the descriptions, since no film was watched. |
| Check First, spec row 1 (pick screen) | A commercial in Allstate's Check First campaign. This one runs 30 seconds. | A commercial in Allstate's Check First campaign. Allstate describes each film with the same line: "Checking first is smart. So check Allstate first and you could save." This one runs 30 seconds. | The pick screen now shows that both sides repeat something, one a character and one a line, so the pick is a real question and the round teaches the difference Evan named on 11 September: a line repeating is not the same as a cast returning. Describes what the thing is; no verdict. |
| Check First, note | Allstate's own channel, published 3 September 2026. We found no published memorability score for this campaign. | Allstate's own channel, published 3 September 2026; the same cast also appears in a 15-second cut published 31 August 2026. Allstate's written description of every Check First film we checked carries the same opening line. We found no published memorability score for this campaign. | Discloses the second cut that made the old stat wrong, and states the scope of the repeated-line claim. |
| Round 2, wrong option | A new face in every film is easier to notice than the same character again. | Repeating one line in every film gives people as much to hold on to as one character does. | The catchphrase belief is the exact wrong answer this rung exists to correct, and a marketer with a tagline holds it sincerely. The "fresh cast" option stays as the other wrong answer. |
| Synthesis line 2 | Coming back is not enough on its own. People grow fond of a cast and come back to see what happens to those people next. A new cast every time gives an audience nobody to grow fond of. | Coming back is not enough on its own, and a line that repeats is not the same as a cast that returns. People grow fond of a cast and come back to see what situation those people are in next. A new cast every time, however familiar the line, gives an audience nobody to grow fond of. | Round 2 now shows a repeating line on the losing side, so the lesson has to say why that was not enough. "What situation those people are in next" is Tom's wording for the rung. |
| Tide, stat 3 | 11 months · On YouTube By 14 Sep 2026 | 15 Oct 2025 · Published | 15 October 2025 to 14 September 2026 is one day short of eleven months. The publish date says the same thing exactly, and matches the Published stat on the Check First and Confession tiles. |
| Rico's Tacos, spec row 3 | 49 seconds to two and a half minutes. Episode 1 runs 70 seconds. | 49 seconds to two minutes 28 seconds. Episode 1 runs 70 seconds. | The longest episode is 148 seconds. Exact, not rounded up. |

Confirmed and unchanged: "a scripted comedy about a taco stand", supported by Tom's 30 July 2026 newsletter.

Not used from the new fact: "You're in good hands with Allstate", which also appears in every description checked. One repeated line makes the point; a second would make the card about Allstate's taglines rather than about the cast.

## 4. Final values

```json
{
  "sides": {
    "ricos": {
      "caption": "Episode 1: Flavor Has a Price &middot; MinivelaTV",
      "scale": "Series · 22 short episodes",
      "title": "A scripted comedy in short episodes",
      "spec": [
        ["What it is", "A scripted comedy about a taco stand, told in short episodes, made by P&G with Albertsons Media Collective and Minivela."],
        ["How often", "A new episode about twice a week, from 23 June to 28 August 2026."],
        ["Episode length", "49 seconds to two minutes 28 seconds. Episode 1 runs 70 seconds."]
      ],
      "stats": [
        ["1,305,315", "Views Across 22 Episodes, 14 Sep 2026"],
        ["200,495", "Views, Episode 1"],
        ["49,000+", "Views On Each Episode From Episode 11 On"]
      ],
      "note": "The series playlist on MinivelaTV, the channel of Minivela, which makes Rico's Tacos with P&G and Albertsons Media Collective. 22 full episodes (two are numbered 16), 23 June to 28 August 2026; views read 14 September 2026. Episodes 9 and 10 show 1,080 and 78 views, far below every other episode, so the per-episode figure starts at episode 11. The two films in this round sit on different channels."
    },
    "tideSpot": {
      "caption": "School Lunch &middot; Tide",
      "scale": "Commercial · One film",
      "title": "A thirty-second commercial",
      "spec": [
        ["What it is", "A commercial for Tide, published as one film."]
      ],
      "stats": [
        ["27,157", "YouTube Views, 14 Sep 2026"],
        ["1", "Film"],
        ["15 Oct 2025", "Published"]
      ],
      "note": "Tide's own channel, published 15 October 2025. Views read 14 September 2026. The two films in this round sit on different channels."
    },
    "mayhem": {
      "caption": "Mayhem: Action Hero &middot; Allstate",
      "scale": "Commercial · The same character since 2010",
      "title": "Mayhem, played by Dean Winters",
      "spec": [
        ["What it is", "A commercial starring Allstate's character Mayhem. This one runs 60 seconds."],
        ["The cast", "The same character, Mayhem, since 2010."]
      ],
      "stats": [
        ["#1", "Most Memorable Ads, Insurance Mascots"],
        ["+8%", "Likeability, Above The Norm"],
        ["31%", "Would Most Like A Beer With Mayhem"]
      ],
      "note": "<a href=\"https://martechedge.com/news/liberty-mutuals-limu-emu-leads-the-pack-in-insurance-mascot-performance-marketcast-finds\" target=\"_blank\" rel=\"noopener\">MarketCast</a> measured insurance mascots from January 2024 to February 2025, reported by MarTech Edge on 1 April 2025. The beer figure is from an Insurity survey, 7 March 2024, where Mayhem came second to Jake from State Farm. Both rank Mayhem against other insurers' mascots, not against Allstate's own commercials."
    },
    "checkFirst": {
      "caption": "Check First: Swim Meet &middot; Allstate",
      "scale": "Commercial · A new cast in each film",
      "title": "A brother who checks Allstate first",
      "spec": [
        ["What it is", "A commercial in Allstate's Check First campaign. Allstate describes each film with the same line: \"Checking first is smart. So check Allstate first and you could save.\" This one runs 30 seconds."],
        ["The cast", "A different cast in each Check First film."]
      ],
      "stats": [
        ["New cast", "In Each Film"],
        ["Same line", "In Allstate's Description Of Each Film"],
        ["3 Sep 2026", "Published"]
      ],
      "note": "Allstate's own channel, published 3 September 2026; the same cast also appears in a 15-second cut published 31 August 2026. Allstate's written description of every Check First film we checked carries the same opening line. We found no published memorability score for this campaign."
    },
    "stratos": {
      "caption": "Mission Highlights &middot; Red Bull",
      "scale": "Live event · Streamed on YouTube, then cut into films",
      "title": "A jump from the edge of space",
      "spec": [
        ["What it is", "A live event on YouTube, then the films cut from it. This highlights film runs 90 seconds."]
      ],
      "stats": [
        ["49,048,257", "YouTube Views, 14 Sep 2026"],
        ["8M+", "Live Streams At Once, At The Peak"],
        ["Free", "No Sign-Up, No Gate"]
      ],
      "note": "<a href=\"https://blog.youtube/news-and-events/mission-complete-red-bull-stratos-lands/\" target=\"_blank\" rel=\"noopener\">YouTube</a> reported more than 8 million concurrent livestreams at the peak, the most of any livestream on YouTube at the time, on its own blog, 14 October 2012. Red Bull's own channel; views read 14 September 2026. Both films in this round sit on Red Bull's own channel."
    },
    "confession": {
      "caption": "Confession, 2011 &middot; Red Bull",
      "scale": "Commercial · Animated, thirty seconds",
      "title": "A thirty-second cartoon commercial",
      "spec": [
        ["What it is", "An animated commercial in the cartoon style Red Bull has used since 1989."]
      ],
      "stats": [
        ["251,604", "YouTube Views, 14 Sep 2026"],
        ["Since 1989", "Red Bull Cartoon Commercials"],
        ["26 Jan 2011", "Published"]
      ],
      "note": "Red Bull's own channel, published 26 January 2011; views read 14 September 2026. Both films in this round sit on Red Bull's own channel, so the two counts can be compared. Red Bull's first cartoon commercials ran in 1989, according to the <a href=\"https://www.kunstmeile.at/en/program/gives-you-wings\" target=\"_blank\" rel=\"noopener\">Kunstmeile Krems</a> exhibition Gives You Wings, 2017."
    },
    "yetiFilm": {
      "caption": "A Thousand Casts &middot; YETI",
      "scale": "Documentary · A YETI Presents film",
      "title": "A film YETI made",
      "spec": [
        ["What it is", "A documentary in the YETI Presents series, on YETI's own channel. This one follows a fly fishing trip to Bhutan and runs 28 minutes."]
      ],
      "stats": [
        ["1,371,487", "YouTube Views, 14 Sep 2026"],
        ["Since 2015", "YETI Presents Has Run"],
        ["YETI", "Owns The Channel The Film Sits On"]
      ],
      "note": "YETI's own channel, published 15 August 2023; views read 14 September 2026. The two films in this round sit on different channels, and whose channel each one sits on is the point of the round."
    },
    "pbrSponsor": {
      "caption": "The 2026 PBR YETI Bucking Bull Champion &middot; PBR",
      "scale": "Sponsorship · Inside PBR's own coverage",
      "title": "A PBR award named after YETI",
      "spec": [
        ["What it is", "A season award named after YETI, inside coverage that Professional Bull Riders makes. This segment runs seven and a half minutes."]
      ],
      "stats": [
        ["13,732", "YouTube Views, 14 Sep 2026"],
        ["Since 2017", "YETI Has Sponsored PBR"],
        ["PBR", "Owns The Channel The Film Sits On"]
      ],
      "note": "PBR's own channel, published 17 May 2026; views read 14 September 2026. YETI first sponsored PBR in 2013, the deal lapsed, and it resumed in 2017, as reported by Front Office Sports in October 2019."
    }
  },
  "rounds": [
    {
      "id": "once-or-again",
      "job": "P&G: one film, or a twenty-two episode series?",
      "measure": "got more views",
      "whyQuestion": "Both are P&G. Why did the series get more views?",
      "options": [
        { "side": "ricos", "text": "A series gives people a reason to come back." },
        { "side": "tideSpot", "text": "One film can run everywhere at once, so it reaches more people." },
        { "side": "tideSpot", "text": "One polished film costs far less to make than twenty-two episodes." }
      ]
    },
    {
      "id": "line-or-cast",
      "job": "Allstate: Mayhem, or a new cast each time?",
      "measure": "do people remember",
      "whyQuestion": "Allstate makes both. Why is Mayhem the one people remember?",
      "options": [
        { "side": "checkFirst", "text": "A fresh cast in every film keeps a campaign from going stale." },
        { "side": "mayhem", "text": "People have grown fond of Mayhem, so each new film is a chance to see what situation he is in next." },
        { "side": "checkFirst", "text": "Repeating one line in every film gives people as much to hold on to as one character does." }
      ]
    },
    {
      "id": "them-or-you",
      "job": "Red Bull: a jump from the edge of space, or a thirty-second cartoon?",
      "measure": "was watched more",
      "whyQuestion": "Both films are Red Bull, on the same channel. Why did the jump get nearly two hundred times the views?",
      "options": [
        { "side": "stratos", "text": "The jump was something people wanted to watch for its own sake, and Red Bull gave it away free with nothing asked in return." },
        { "side": "confession", "text": "A thirty-second cartoon costs little enough to run all year." },
        { "side": "confession", "text": "Putting the product on screen is what turns attention into sales." }
      ]
    },
    {
      "id": "own-or-rent",
      "job": "YETI: make the film, or put your name on somebody else's?",
      "measure": "did more for YETI",
      "whyQuestion": "Both are YETI. Why does the film do more for YETI in the long run?",
      "options": [
        { "side": "yetiFilm", "text": "The film sits on a channel YETI owns, so the audience the film brings in is YETI's to keep." },
        { "side": "pbrSponsor", "text": "A sponsorship puts the name in front of a crowd that has already gathered." },
        { "side": "pbrSponsor", "text": "Naming an award costs less than producing a documentary." }
      ]
    }
  ],
  "copy": {
    "round4Quote": "PBR makes the film and owns the channel the film sits on. YETI Presents started in 2015, two years before the sponsorship resumed.",
    "synthesisLine2": "Coming back is not enough on its own, and a line that repeats is not the same as a cast that returns. People grow fond of a cast and come back to see what situation those people are in next. A new cast every time, however familiar the line, gives an audience nobody to grow fond of."
  }
}
```

## 5. Facts deliberately left off, and why

- **FloQast's PBC, its 22-minute first episode and its 213,014 views.** Another company. The round is P&G only, and the rule is one company, two ways.
- **Abbott Elementary and Superstore.** Entertainment references belong on a strategy doc that is pitching a format. This page is not pitching a format.
- **Albertsons' in-store screens and the shopping app.** Distribution and commerce, not repetition.
- **The Taco Drama definition.** A Talex term. The prospect does not need Talex vocabulary to understand that a series brings people back.
- **The exact per-episode range, 49,593 to 63,147.** Too long for a stat figure. Stated as 49,000 and up, which is true of every episode from 11 on, and the note says why the range starts there.
- **The re-upload explanation for episodes 9 and 10.** That is our inference. The note gives the two counts and the consequence, nothing more.
- **Mayhem's other MarketCast scores: Ad Recall +5%, Messaging +7%, Ad Breakthrough +4%.** Three stats per tile, and remember, like, grow fond is Tom's order. Recall would have been the fourth.
- **The MarketCast sample of 20,000 audiences a day.** Would help a sceptic, but the source's phrase does not translate into plain words without interpretation, and the note already links to it.
- **Jake from State Farm's 34 percent.** The note says Mayhem came second to him. The figure itself is about State Farm.
- **View counts for Mayhem (102,203) and Check First (3,170).** Decided before this review: a count on a brand's own channel reports promotion, and round 2 has a measure of the work itself.
- **The YouTube record wording, "most concurrent views ever on YouTube".** The 8 million figure is the record; a second stat saying so would repeat it. The note carries the record claim.
- **Felix Baumgartner's name and the 128,000 feet.** Neither explains why people wanted to watch, and both are in the film's own title on the play button.
- **Each film's length as a stat** on the Tide, Check First, Confession and YETI tiles. Nothing in any of those four rounds turns on how long the film is. Lengths stay in the first spec row where a prospect would expect a description.
- **Oliver White, the angler in A Thousand Casts.** The film is about the trip; the round is about whose channel it sits on.
- **Front Office Sports as a link.** No URL was supplied in the verified facts, and a link is not invented.

## Revision after independent review

Read in order: the fresh-context review, the build session's adjudication with the facts it checked today, and the copy deck as built. Rulings below; the JSON at the end of this section is the complete corrected set and replaces every earlier block.

| # | Finding | Ruling | What changes |
|---|---|---|---|
| 1 | "each film" wrong at film scope | Accepted. Each spot is a :30 and a :15 with one cast, so "film" was the wrong unit and the card contradicted its own note. | Category line, cast row and stat now say "spot". The cast row names the three spots checked and explains the two cuts. |
| 2 | Quoted line cut short; "the same line" overstated | Accepted. Only "Checking first is smart." is identical across the five descriptions, and the quoted second sentence was not Swim Meet's. | The pick-screen row no longer quotes anything. The one identical sentence moves to a reveal row, quoted in full, scoped to Allstate's descriptions of the spots checked. |
| 3 | 30-word sentence, "people asked" | Accepted. | Split into two sentences that name Insurity, the sample of more than 1,000 US adults, and the 34 percent. |
| 4 | The "line" side rests on description text | Accepted, the no branch. Nothing on the page says the line is spoken or shown, and nothing now implies it. | The "Same line" stat is gone. What ties the spots together is stated within scope on a reveal row: the campaign name and the identical opening sentence in Allstate's descriptions. Option C and synthesis 2 carry the catchphrase point as general statements, which they already were. |
| 5 | "the one people remember" asserts a comparison no source makes | Accepted. | Why question becomes "Allstate makes both. Why do people remember Mayhem?" The pick question stays, as a question. The Check First tile's second stat is now the missing score itself, "None, Published Memorability Score", so the honest gap sits where the reader looks. |
| 6 | "A brother who checks Allstate first" | Fact part rejected by the adjudicator, rightly: the brother is verified. Relevance part accepted: it was the only title on the page that told a plot, and the plot is not the rung. | Title becomes "Swim Meet, one of the Check First spots", parallel to "Mayhem, played by Dean Winters". |
| 7 | "Sharp eye" tier name | Accepted, low cost. | "Sharp eye" becomes "Close read". The other two tier names stay. |
| 8 | Runtimes in round 2 | Accepted. Sixty against thirty seconds teaches nothing about a recurring cast. | Both round 2 runtimes cut. Rounds 3 and 4 keep theirs: 28 minutes is what makes the YETI film a show rather than a spot, and the other two are the courtesy before pressing play. |
| 9 | 2015/2017 chronology has no stated point | Accepted for the source panel, rejected for the stats. The panel's job is the verdict's source, and the verdict is ownership. | Round 4 panel becomes two parallel sentences: who makes each film and who owns the channel it sits on. Credit changes to match. The "Since 2015" and "Since 2017" stats stay: they show the film comes from an established show and the sponsorship is not a new deal finding its feet, which is trust-the-evidence. |
| 10 | Round 2 panel repeats the Mayhem note | Accepted in part. | The panel keeps one short MarketCast sentence because the credit and the link name MarketCast, drops the dates that duplicated the note, and gives the rest of the panel to the Insurity finding. |
| 11 | "Instinct went one way and the examples went another" | Accepted. Figurative. | "Your instinct and the examples disagreed." |
| 12 | Round 4 pick row carries "on YETI's own channel" | Accepted as redundancy, not as a leak. The caption under the film already names the channel from the start, by design. | Phrase cut from the pick row. The PBR category line stays, since it describes what the thing is. |
| 13 | "Wiiings" and "Wings" both appear | Accepted. | The Confession note gives the exhibition's full title in quotation marks. The side name no longer contains "Wiiings" (see 14). |
| 14 | Side names read badly once substituted | Accepted. | Every side gets a `name` that reads as a noun phrase mid-sentence and as a tile heading: "Rico's Tacos, the series", "School Lunch, the Tide commercial", "Mayhem", "Check First, Swim Meet", "Stratos, the jump", "Confession, the cartoon", "YETI Presents, A Thousand Casts", "YETI's PBR sponsorship". |
| 15 | Two long closing questions | Rejected. The closing was agreed with Evan, and the proposed shortening narrows "own the show" to owning a channel, which changes lesson 4. |
| 16 | "Choose your own adventure" does not branch | Held for Evan and Tom. The phrase is the project's working name from the 10 September call and the eyebrow is marked draft for Tom. Not mine to rename. |

Two rules checked on every changed line: no tell phrase on any pick-screen field or round framing, and never a word against the Check First work. "None, Published Memorability Score" is a statement about the evidence available, not about the spots.

```json
{
  "sides": {
    "ricos": {
      "name": "Rico's Tacos, the series",
      "caption": "Episode 1: Flavor Has a Price &middot; MinivelaTV",
      "scale": "Series · 22 short episodes",
      "title": "A scripted comedy in short episodes",
      "spec": [
        ["What it is", "A scripted comedy about a taco stand, told in short episodes, made by P&G with Albertsons Media Collective and Minivela."],
        ["How often", "A new episode about twice a week, from 23 June to 28 August 2026."],
        ["Episode length", "49 seconds to two minutes 28 seconds. Episode 1 runs 70 seconds."]
      ],
      "stats": [
        ["1,305,315", "Views Across 22 Episodes, 14 Sep 2026"],
        ["200,495", "Views, Episode 1"],
        ["49,000+", "Views On Each Episode From Episode 11 On"]
      ],
      "note": "The series playlist on MinivelaTV, the channel of Minivela, which makes Rico's Tacos with P&G and Albertsons Media Collective. 22 full episodes (two are numbered 16), 23 June to 28 August 2026; views read 14 September 2026. Episodes 9 and 10 show 1,080 and 78 views, far below every other episode, so the per-episode figure starts at episode 11. The two films in this round sit on different channels."
    },
    "tideSpot": {
      "name": "School Lunch, the Tide commercial",
      "caption": "School Lunch &middot; Tide",
      "scale": "Commercial · One film",
      "title": "A thirty-second commercial",
      "spec": [
        ["What it is", "A commercial for Tide, published as one film."]
      ],
      "stats": [
        ["27,157", "YouTube Views, 14 Sep 2026"],
        ["1", "Film"],
        ["15 Oct 2025", "Published"]
      ],
      "note": "Tide's own channel, published 15 October 2025. Views read 14 September 2026. The two films in this round sit on different channels."
    },
    "mayhem": {
      "name": "Mayhem",
      "caption": "Mayhem: Action Hero &middot; Allstate",
      "scale": "Commercial · The same character since 2010",
      "title": "Mayhem, played by Dean Winters",
      "spec": [
        ["What it is", "A commercial starring Allstate's character Mayhem."],
        ["The cast", "The same character, Mayhem, since 2010."]
      ],
      "stats": [
        ["#1", "Most Memorable Ads, Insurance Mascots"],
        ["+8%", "Likeability, Above The Norm"],
        ["31%", "Would Most Like A Beer With Mayhem"]
      ],
      "note": "<a href=\"https://martechedge.com/news/liberty-mutuals-limu-emu-leads-the-pack-in-insurance-mascot-performance-marketcast-finds\" target=\"_blank\" rel=\"noopener\">MarketCast</a> measured insurance mascots from January 2024 to February 2025, reported by MarTech Edge on 1 April 2025. The beer figure is from an Insurity survey, 7 March 2024, where Mayhem came second to Jake from State Farm. Both rank Mayhem against other insurers' mascots, not against Allstate's own commercials."
    },
    "checkFirst": {
      "name": "Check First, Swim Meet",
      "caption": "Check First: Swim Meet &middot; Allstate",
      "scale": "Commercial · A new cast in each spot",
      "title": "Swim Meet, one of the Check First spots",
      "spec": [
        ["What it is", "A commercial in Allstate's Check First campaign."],
        ["The cast", "Different people in each of the Check First spots we checked: Swim Meet, Superstitious and Outfit. Each spot is published as a 30-second film and a 15-second cut with the same cast."],
        ["What repeats", "The campaign name, Check First, and the same opening sentence in Allstate's description of every spot we checked: \"Checking first is smart.\""]
      ],
      "stats": [
        ["New cast", "For Each Spot"],
        ["None", "Published Memorability Score"],
        ["3 Sep 2026", "Published"]
      ],
      "note": "Allstate's own channel, published 3 September 2026. Allstate published the same spot as a 15-second cut on 31 August 2026. We found no published memorability score for this campaign."
    },
    "stratos": {
      "name": "Stratos, the jump",
      "caption": "Mission Highlights &middot; Red Bull",
      "scale": "Live event · Streamed on YouTube, then cut into films",
      "title": "A jump from the edge of space",
      "spec": [
        ["What it is", "A live event on YouTube, then the films cut from it. This highlights film runs 90 seconds."]
      ],
      "stats": [
        ["49,048,257", "YouTube Views, 14 Sep 2026"],
        ["8M+", "Live Streams At Once, At The Peak"],
        ["Free", "No Sign-Up, No Gate"]
      ],
      "note": "<a href=\"https://blog.youtube/news-and-events/mission-complete-red-bull-stratos-lands/\" target=\"_blank\" rel=\"noopener\">YouTube</a> reported more than 8 million concurrent livestreams at the peak, the most of any livestream on YouTube at the time, on its own blog, 14 October 2012. Red Bull's own channel; views read 14 September 2026. Both films in this round sit on Red Bull's own channel."
    },
    "confession": {
      "name": "Confession, the cartoon",
      "caption": "Confession, 2011 &middot; Red Bull",
      "scale": "Commercial · Animated, thirty seconds",
      "title": "A thirty-second cartoon commercial",
      "spec": [
        ["What it is", "An animated commercial in the cartoon style Red Bull has used since 1989."]
      ],
      "stats": [
        ["251,604", "YouTube Views, 14 Sep 2026"],
        ["Since 1989", "Red Bull Cartoon Commercials"],
        ["26 Jan 2011", "Published"]
      ],
      "note": "Red Bull's own channel, published 26 January 2011; views read 14 September 2026. Both films in this round sit on Red Bull's own channel, so the two counts can be compared. Red Bull's first cartoon commercials ran in 1989, according to the <a href=\"https://www.kunstmeile.at/en/program/gives-you-wings\" target=\"_blank\" rel=\"noopener\">Kunstmeile Krems</a> exhibition \"Gives You Wings. 30 Years of Cartoons by Red Bull\", 2017."
    },
    "yetiFilm": {
      "name": "YETI Presents, A Thousand Casts",
      "caption": "A Thousand Casts &middot; YETI",
      "scale": "Documentary · A YETI Presents film",
      "title": "A film YETI made",
      "spec": [
        ["What it is", "A documentary in the YETI Presents series. This one follows a fly fishing trip to Bhutan and runs 28 minutes."]
      ],
      "stats": [
        ["1,371,487", "YouTube Views, 14 Sep 2026"],
        ["Since 2015", "YETI Presents Has Run"],
        ["YETI", "Owns The Channel The Film Sits On"]
      ],
      "note": "YETI's own channel, published 15 August 2023; views read 14 September 2026. The two films in this round sit on different channels, and whose channel each one sits on is the point of the round."
    },
    "pbrSponsor": {
      "name": "YETI's PBR sponsorship",
      "caption": "The 2026 PBR YETI Bucking Bull Champion &middot; PBR",
      "scale": "Sponsorship · Inside PBR's own coverage",
      "title": "A PBR award named after YETI",
      "spec": [
        ["What it is", "A season award named after YETI, inside coverage that Professional Bull Riders makes. This segment runs seven and a half minutes."]
      ],
      "stats": [
        ["13,732", "YouTube Views, 14 Sep 2026"],
        ["Since 2017", "YETI Has Sponsored PBR"],
        ["PBR", "Owns The Channel The Film Sits On"]
      ],
      "note": "PBR's own channel, published 17 May 2026; views read 14 September 2026. YETI first sponsored PBR in 2013, the deal lapsed, and it resumed in 2017, as reported by Front Office Sports in October 2019."
    }
  },
  "rounds": [
    {
      "id": "once-or-again",
      "job": "P&G: one film, or a twenty-two episode series?",
      "measure": "got more views",
      "whyQuestion": "Both are P&G. Why did the series get more views?",
      "options": [
        { "side": "ricos", "text": "A series gives people a reason to come back." },
        { "side": "tideSpot", "text": "One film can run everywhere at once, so it reaches more people." },
        { "side": "tideSpot", "text": "One polished film costs far less to make than twenty-two episodes." }
      ]
    },
    {
      "id": "line-or-cast",
      "job": "Allstate: Mayhem, or a new cast each time?",
      "measure": "do people remember",
      "whyQuestion": "Allstate makes both. Why do people remember Mayhem?",
      "options": [
        { "side": "checkFirst", "text": "A fresh cast in every spot keeps a campaign from going stale." },
        { "side": "mayhem", "text": "People have grown fond of Mayhem, so each new film is a chance to see what situation he is in next." },
        { "side": "checkFirst", "text": "Repeating one line in every spot gives people as much to hold on to as one character does." }
      ]
    },
    {
      "id": "them-or-you",
      "job": "Red Bull: a jump from the edge of space, or a thirty-second cartoon?",
      "measure": "was watched more",
      "whyQuestion": "Both films are Red Bull, on the same channel. Why did the jump get nearly two hundred times the views?",
      "options": [
        { "side": "stratos", "text": "The jump was something people wanted to watch for its own sake, and Red Bull gave it away free with nothing asked in return." },
        { "side": "confession", "text": "A thirty-second cartoon costs little enough to run all year." },
        { "side": "confession", "text": "Putting the product on screen is what turns attention into sales." }
      ]
    },
    {
      "id": "own-or-rent",
      "job": "YETI: make the film, or put your name on somebody else's?",
      "measure": "did more for YETI",
      "whyQuestion": "Both are YETI. Why does the film do more for YETI in the long run?",
      "options": [
        { "side": "yetiFilm", "text": "The film sits on a channel YETI owns, so the audience the film brings in is YETI's to keep." },
        { "side": "pbrSponsor", "text": "A sponsorship puts the name in front of a crowd that has already gathered." },
        { "side": "pbrSponsor", "text": "Naming an award costs less than producing a documentary." }
      ]
    }
  ],
  "copy": {
    "round2Quote": "MarketCast put Mayhem first among insurance mascots for likeability and for the most memorable ads. A separate Insurity survey of more than 1,000 US adults asked which mascot they would most like to grab a beer with. 31 percent picked Mayhem, second only to Jake from State Farm at 34 percent.",
    "round4Quote": "PBR makes the film about its award and owns the channel that film sits on. YETI makes A Thousand Casts and owns the channel that film sits on.",
    "round4Cite": "PBR, 17 May 2026, and YETI, 15 August 2023",
    "synthesisLine2": "Coming back is not enough on its own, and a line that repeats is not the same as a cast that returns. People grow fond of a cast and come back to see what situation those people are in next. A new cast every time, however familiar the line, gives an audience nobody to grow fond of.",
    "resultLow": "Your instinct and the examples disagreed.",
    "tiers": [ { "from": 8, "name": "Perfect read" }, { "from": 6, "name": "Close read" }, { "from": 0, "name": "First look" } ]
  }
}
```

## Revision after final review

Read: the final fresh-context review and the build session's adjudication with the still-frame evidence. Rulings below; the JSON at the end of this section is the complete corrected set and replaces every earlier block.

| # | Finding | Ruling | What changes |
|---|---|---|---|
| 1 | "None" widens "we found none" into "there is none" | Accepted, required. A stat stands alone, and the only claim the workspace holds is that no score was found. | Stat 2 on the Check First tile becomes "None found, Published Memorability Score". |
| 2 | "with the same cast" unchecked for Outfit | Settled by the stills: same cast in both cuts of all three spots. | No change. |
| 3 | "each spot" unscoped on the category line and the stat | Accepted, required. Three spots checked, at least six exist, no campaign-level source. | Category line: "Commercial · A different cast in each spot we checked". Stat 1: "New cast, In Each Spot We Checked". "We checked" says what was done, not which side wins, so the pick screen keeps its no-tells rule. |
| 4 | Option C under its "About Check First, Swim Meet" chip implies a spoken line | Accepted. The chip turns a general premise into a claim about the spot, and the only thing shown repeating is the campaign name and a description sentence. | Option C becomes "A campaign name that repeats in every spot gives people as much to hold on to as one character does." Evan's lesson survives intact in synthesis 2, "a line that repeats is not the same as a cast that returns", which is a general statement. If Evan or Tom watches one spot and hears the line, option C can say "line" again. |
| 5 | "film" and "spot" alternate in the round 2 options | Accepted. One screen, one word. | Option B: "each new spot". |
| 6 | Round 4 credit names two sources, links one | Rejected. The panel makes a claim about each film, so the credit names both; the link reaches PBR's upload and YETI's is embedded on the card one screen back. Cutting YETI from the credit would leave a claim with no named source. |
| 7 | "YETI Presents, A Thousand Casts" reads as two items | Accepted. Every other name puts the thing first and the category second. | Name becomes "A Thousand Casts, the YETI Presents film". |
| 8 | The Check First pick card says "Check First" three times | Accepted. The first row repeated the caption and the title and told the reader nothing new. | First row becomes "A commercial for Allstate car insurance.", which the Swim Meet description supports. |
| 9 | "Different people" rests on one frame per spot | Superseded by the stills. | No change. |
| 10 | "Allstate's description" could say where | Accepted. One word, and the tile is being re-reviewed anyway. | "in Allstate's YouTube description of every spot we checked". |

Every other field is unchanged from the previous block.

```json
{
  "sides": {
    "ricos": {
      "name": "Rico's Tacos, the series",
      "caption": "Episode 1: Flavor Has a Price &middot; MinivelaTV",
      "scale": "Series · 22 short episodes",
      "title": "A scripted comedy in short episodes",
      "spec": [
        ["What it is", "A scripted comedy about a taco stand, told in short episodes, made by P&G with Albertsons Media Collective and Minivela."],
        ["How often", "A new episode about twice a week, from 23 June to 28 August 2026."],
        ["Episode length", "49 seconds to two minutes 28 seconds. Episode 1 runs 70 seconds."]
      ],
      "stats": [
        ["1,305,315", "Views Across 22 Episodes, 14 Sep 2026"],
        ["200,495", "Views, Episode 1"],
        ["49,000+", "Views On Each Episode From Episode 11 On"]
      ],
      "note": "The series playlist on MinivelaTV, the channel of Minivela, which makes Rico's Tacos with P&G and Albertsons Media Collective. 22 full episodes (two are numbered 16), 23 June to 28 August 2026; views read 14 September 2026. Episodes 9 and 10 show 1,080 and 78 views, far below every other episode, so the per-episode figure starts at episode 11. The two films in this round sit on different channels."
    },
    "tideSpot": {
      "name": "School Lunch, the Tide commercial",
      "caption": "School Lunch &middot; Tide",
      "scale": "Commercial · One film",
      "title": "A thirty-second commercial",
      "spec": [
        ["What it is", "A commercial for Tide, published as one film."]
      ],
      "stats": [
        ["27,157", "YouTube Views, 14 Sep 2026"],
        ["1", "Film"],
        ["15 Oct 2025", "Published"]
      ],
      "note": "Tide's own channel, published 15 October 2025. Views read 14 September 2026. The two films in this round sit on different channels."
    },
    "mayhem": {
      "name": "Mayhem",
      "caption": "Mayhem: Action Hero &middot; Allstate",
      "scale": "Commercial · The same character since 2010",
      "title": "Mayhem, played by Dean Winters",
      "spec": [
        ["What it is", "A commercial starring Allstate's character Mayhem."],
        ["The cast", "The same character, Mayhem, since 2010."]
      ],
      "stats": [
        ["#1", "Most Memorable Ads, Insurance Mascots"],
        ["+8%", "Likeability, Above The Norm"],
        ["31%", "Would Most Like A Beer With Mayhem"]
      ],
      "note": "<a href=\"https://martechedge.com/news/liberty-mutuals-limu-emu-leads-the-pack-in-insurance-mascot-performance-marketcast-finds\" target=\"_blank\" rel=\"noopener\">MarketCast</a> measured insurance mascots from January 2024 to February 2025, reported by MarTech Edge on 1 April 2025. The beer figure is from an Insurity survey, 7 March 2024, where Mayhem came second to Jake from State Farm. Both rank Mayhem against other insurers' mascots, not against Allstate's own commercials."
    },
    "checkFirst": {
      "name": "Check First, Swim Meet",
      "caption": "Check First: Swim Meet &middot; Allstate",
      "scale": "Commercial · A different cast in each spot we checked",
      "title": "Swim Meet, one of the Check First spots",
      "spec": [
        ["What it is", "A commercial for Allstate car insurance."],
        ["The cast", "Different people in each of the Check First spots we checked: Swim Meet, Superstitious and Outfit. Each spot is published as a 30-second film and a 15-second cut with the same cast."],
        ["What repeats", "The campaign name, Check First, and the same opening sentence in Allstate's YouTube description of every spot we checked: \"Checking first is smart.\""]
      ],
      "stats": [
        ["New cast", "In Each Spot We Checked"],
        ["None found", "Published Memorability Score"],
        ["3 Sep 2026", "Published"]
      ],
      "note": "Allstate's own channel, published 3 September 2026. Allstate published the same spot as a 15-second cut on 31 August 2026. We found no published memorability score for this campaign."
    },
    "stratos": {
      "name": "Stratos, the jump",
      "caption": "Mission Highlights &middot; Red Bull",
      "scale": "Live event · Streamed on YouTube, then cut into films",
      "title": "A jump from the edge of space",
      "spec": [
        ["What it is", "A live event on YouTube, then the films cut from it. This highlights film runs 90 seconds."]
      ],
      "stats": [
        ["49,048,257", "YouTube Views, 14 Sep 2026"],
        ["8M+", "Live Streams At Once, At The Peak"],
        ["Free", "No Sign-Up, No Gate"]
      ],
      "note": "<a href=\"https://blog.youtube/news-and-events/mission-complete-red-bull-stratos-lands/\" target=\"_blank\" rel=\"noopener\">YouTube</a> reported more than 8 million concurrent livestreams at the peak, the most of any livestream on YouTube at the time, on its own blog, 14 October 2012. Red Bull's own channel; views read 14 September 2026. Both films in this round sit on Red Bull's own channel."
    },
    "confession": {
      "name": "Confession, the cartoon",
      "caption": "Confession, 2011 &middot; Red Bull",
      "scale": "Commercial · Animated, thirty seconds",
      "title": "A thirty-second cartoon commercial",
      "spec": [
        ["What it is", "An animated commercial in the cartoon style Red Bull has used since 1989."]
      ],
      "stats": [
        ["251,604", "YouTube Views, 14 Sep 2026"],
        ["Since 1989", "Red Bull Cartoon Commercials"],
        ["26 Jan 2011", "Published"]
      ],
      "note": "Red Bull's own channel, published 26 January 2011; views read 14 September 2026. Both films in this round sit on Red Bull's own channel, so the two counts can be compared. Red Bull's first cartoon commercials ran in 1989, according to the <a href=\"https://www.kunstmeile.at/en/program/gives-you-wings\" target=\"_blank\" rel=\"noopener\">Kunstmeile Krems</a> exhibition \"Gives You Wings. 30 Years of Cartoons by Red Bull\", 2017."
    },
    "yetiFilm": {
      "name": "A Thousand Casts, the YETI Presents film",
      "caption": "A Thousand Casts &middot; YETI",
      "scale": "Documentary · A YETI Presents film",
      "title": "A film YETI made",
      "spec": [
        ["What it is", "A documentary in the YETI Presents series. This one follows a fly fishing trip to Bhutan and runs 28 minutes."]
      ],
      "stats": [
        ["1,371,487", "YouTube Views, 14 Sep 2026"],
        ["Since 2015", "YETI Presents Has Run"],
        ["YETI", "Owns The Channel The Film Sits On"]
      ],
      "note": "YETI's own channel, published 15 August 2023; views read 14 September 2026. The two films in this round sit on different channels, and whose channel each one sits on is the point of the round."
    },
    "pbrSponsor": {
      "name": "YETI's PBR sponsorship",
      "caption": "The 2026 PBR YETI Bucking Bull Champion &middot; PBR",
      "scale": "Sponsorship · Inside PBR's own coverage",
      "title": "A PBR award named after YETI",
      "spec": [
        ["What it is", "A season award named after YETI, inside coverage that Professional Bull Riders makes. This segment runs seven and a half minutes."]
      ],
      "stats": [
        ["13,732", "YouTube Views, 14 Sep 2026"],
        ["Since 2017", "YETI Has Sponsored PBR"],
        ["PBR", "Owns The Channel The Film Sits On"]
      ],
      "note": "PBR's own channel, published 17 May 2026; views read 14 September 2026. YETI first sponsored PBR in 2013, the deal lapsed, and it resumed in 2017, as reported by Front Office Sports in October 2019."
    }
  },
  "rounds": [
    {
      "id": "once-or-again",
      "job": "P&G: one film, or a twenty-two episode series?",
      "measure": "got more views",
      "whyQuestion": "Both are P&G. Why did the series get more views?",
      "options": [
        { "side": "ricos", "text": "A series gives people a reason to come back." },
        { "side": "tideSpot", "text": "One film can run everywhere at once, so it reaches more people." },
        { "side": "tideSpot", "text": "One polished film costs far less to make than twenty-two episodes." }
      ]
    },
    {
      "id": "line-or-cast",
      "job": "Allstate: Mayhem, or a new cast each time?",
      "measure": "do people remember",
      "whyQuestion": "Allstate makes both. Why do people remember Mayhem?",
      "options": [
        { "side": "checkFirst", "text": "A fresh cast in every spot keeps a campaign from going stale." },
        { "side": "mayhem", "text": "People have grown fond of Mayhem, so each new spot is a chance to see what situation he is in next." },
        { "side": "checkFirst", "text": "A campaign name that repeats in every spot gives people as much to hold on to as one character does." }
      ]
    },
    {
      "id": "them-or-you",
      "job": "Red Bull: a jump from the edge of space, or a thirty-second cartoon?",
      "measure": "was watched more",
      "whyQuestion": "Both films are Red Bull, on the same channel. Why did the jump get nearly two hundred times the views?",
      "options": [
        { "side": "stratos", "text": "The jump was something people wanted to watch for its own sake, and Red Bull gave it away free with nothing asked in return." },
        { "side": "confession", "text": "A thirty-second cartoon costs little enough to run all year." },
        { "side": "confession", "text": "Putting the product on screen is what turns attention into sales." }
      ]
    },
    {
      "id": "own-or-rent",
      "job": "YETI: make the film, or put your name on somebody else's?",
      "measure": "did more for YETI",
      "whyQuestion": "Both are YETI. Why does the film do more for YETI in the long run?",
      "options": [
        { "side": "yetiFilm", "text": "The film sits on a channel YETI owns, so the audience the film brings in is YETI's to keep." },
        { "side": "pbrSponsor", "text": "A sponsorship puts the name in front of a crowd that has already gathered." },
        { "side": "pbrSponsor", "text": "Naming an award costs less than producing a documentary." }
      ]
    }
  ],
  "copy": {
    "round2Quote": "MarketCast put Mayhem first among insurance mascots for likeability and for the most memorable ads. A separate Insurity survey of more than 1,000 US adults asked which mascot they would most like to grab a beer with. 31 percent picked Mayhem, second only to Jake from State Farm at 34 percent.",
    "round4Quote": "PBR makes the film about its award and owns the channel that film sits on. YETI makes A Thousand Casts and owns the channel that film sits on.",
    "round4Cite": "PBR, 17 May 2026, and YETI, 15 August 2023",
    "synthesisLine2": "Coming back is not enough on its own, and a line that repeats is not the same as a cast that returns. People grow fond of a cast and come back to see what situation those people are in next. A new cast every time, however familiar the line, gives an audience nobody to grow fond of.",
    "resultLow": "Your instinct and the examples disagreed.",
    "tiers": [ { "from": 8, "name": "Perfect read" }, { "from": 6, "name": "Close read" }, { "from": 0, "name": "First look" } ]
  }
}
```


---

# Embedded verbatim: `review/independent-review-fable-cards-2026-09-14.md`

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


---

# Embedded verbatim: `review/adjudication-fable-cards-2026-09-14.md`

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


---

# Embedded verbatim: `review/independent-review-final-fable-cards-2026-09-14.md`

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


---

# Embedded verbatim: `review/adjudication-final-fable-cards-2026-09-14.md`

# Adjudication: final independent review of the revised cards

Review adjudicated: `review/independent-review-final-fable-cards-2026-09-14.md`.
Adjudicated by: the build session (Claude Opus 5), 14 September 2026. Findings that change words go to the
Fable card-decisions context. The build session does not write card copy.

## Evidence gathered for this adjudication

YouTube publishes three still frames for every upload (`i.ytimg.com/vi/<id>/hq1.jpg`, `hq2.jpg`, `hq3.jpg`).
Reading those stills does not play the film. All six Check First uploads were read that way, and the stills
are tiled in `review/evidence/`:

- `outfit-frames.jpg`: Outfit :30 (oalJ2-bFETI, top row) and Outfit :15 (H7iqxlZw9c0, bottom row). Both show the same three people: the young man in the Duke sweatshirt, the mother, and the daughter in the Carolina cardigan. The mother the reviewer flagged is in both cuts.
- `swim-super-frames.jpg`, rows in order: Swim Meet :30 (I6QksAqf0jk), Swim Meet :15 (x6Z93D-HTJY), Superstitious :30 (0bNDXPzc100), Superstitious :15 (YUHMBxlSr2M). The Swim Meet cuts share one man in a raglan top. The Superstitious cuts share one woman in a BYU shirt and her flatmates.
- Across the three spots, the people are different.
- None of the eighteen stills shows "Check First", "Checking first is smart" or "check Allstate first" on screen. Stills cannot show speech, so whether the line is spoken remains NOT VERIFIED.
- The workspace research (`research/american-round2-insurers-2026-09-14.md`) records that Check First press coverage names only "brother/sister-style protagonists". No source describes the campaign as a new cast in every spot, so there is no campaign-level source.

## Rulings

| # | Finding | Ruling | Action |
|---|---|---|---|
| 1 | "None \| Published Memorability Score" widens "we found none" | VALID, blocks release. | Fable rewords the stat to the note's scope. |
| 2 | "with the same cast" unchecked for Outfit | RESOLVED BY EVIDENCE. The stills above show the same cast in both cuts of all three spots. The sentence is true as written. | No copy change. The evidence is recorded in `lint-adjudications.json` under "each". |
| 3 | "A new cast in each spot" and "New cast \| For Each Spot" unscoped | VALID, blocks release. Only three spots were checked, and no campaign-level source exists. | Fable scopes the category line and the stat. The category line is on the pick screen, so the scoped wording must not tip the pick. |
| 4 | Option C chipped "About Check First, Swim Meet" implies a spoken line | VALID judgment call. The spoken line is still unverified, and the stills show no on-screen line. | Fable decides. The reviewer's no-branch wording is one option. |
| 5 | "film" and "spot" alternate in the round 2 options | Judgment call, LOW. | Fable. |
| 6 | Round 4 credit names two sources and links one | Judgment call, LOW. The credit renders with one link (`r.url`). | Fable decides the wording. A second link would be an engine change, not requested. |
| 7 | "YETI Presents, A Thousand Casts" reads as two items | Judgment call, LOW. | Fable. |
| 8 | The Check First pick card repeats "Check First" | Judgment call, LOW. "car insurance" is supported by the Swim Meet description. | Fable. |
| 9 | "Different people" rests on one frame per spot | Superseded: three stills per upload across six uploads now support it. | None. |
| 10 | "Allstate's description" could say YouTube | Judgment call, LOW. | Fable. |


---

# Embedded verbatim: `review/independent-review-changed-lines-final-2026-09-14.md`

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
