# Which one worked? One company, two ways (v10)

Built 2026-09-11 from Tom's structure on the 10 September call. Reworked 2026-09-14 after an editorial
and design review and the search for an American round two. A choose your own adventure case study:
four rounds, one company per round shown two ways, ending on a question about the reader's own company.
Prototype, draft for Tom.

Live: https://talexmedia.github.io/lead-magnet-legendeering-ladder/

## The three rules that shape every round

**One company, two ways.** Evan rejected a draft round that set Apple's "1984" against Progressive's
Flo: "one is a way bigger company and it's spent way more on it, and the series loses to that."
Comparing two companies compares two budgets. One company's own two approaches holds the budget, the
brand and the audience still, so the approach is the only thing left changing. It also means the
losing side is never a rival being put down, which was Tom's rule: our prospects are probably making
the thing on the losing side right now.

**Views are not evidence on their own.** A view count on a brand's own channel mostly reports what the
brand paid to promote. GEICO's own uploads ran from 3,246 to 21 million views, several posted the same
day. A view count settles a round only where both films sit on the same channel, and where the work
itself has been measured, that measure leads.

**No tells.** A card on the pick screen says what the thing is, never why it wins. The verdict lives
only in the reveal. The build gate enforces this on every title, category, spec row, stat caption,
headline and measure.

## The four rounds

Tom's order from the call. Each rung teaches one thing, and they build.

| Round | The lesson | The company, two ways | What settles it |
|---|---|---|---|
| 1 | Repetition | Rico's Tacos, a twenty-two episode series, against a single Tide film, both P&G | 200,363 views on one episode against 26,840 on the film |
| 2 | Format and character, not just repeating | Mayhem, one character since 2010, against Check First, a new cast in each film, both Allstate | MarketCast put Mayhem first among insurance mascots for likeability and for the most memorable ads; 31 percent of people in an Insurity survey picked him as the mascot they would most like to grab a beer with |
| 3 | Something people want to watch, about the audience not the brand | The Stratos jump against a Gives You Wiiings cartoon, both Red Bull | 49,046,929 views against 251,520 on the same channel, and 8 million watching the jump live |
| 4 | Own the show rather than sponsor someone else's | A YETI Presents film against YETI's name on a PBR bull riding award | 1,368,483 views on YETI's own channel against 13,672 on PBR's, and only one of those audiences belongs to YETI |

**Round 2 carries Tom and Evan's subtlest point.** On the 11 September call they pinned it down: the
audience does not have to trust a character, only like them, grow fond of them, and look forward to
seeing what situation they are in next. A line repeating gives an audience nothing to grow fond of.
Wanting a beer with a character is liking them, which is why the Insurity figure is there.

**Round 2's honest limit.** Both of its measures rank Mayhem against other insurers' mascots. Nobody has
published a score comparing Mayhem with Allstate's own Check First films. The card says so. Specsavers,
which it replaced, had the same gap, since every figure it carried was about its series.

**Round 4's honest limit.** Mailchimp was there until 11 September and had a named executive explaining
the switch on the record. YETI has never said anything comparable, so the round rests on the structural
fact of whose channel each film sits on. Tom and Evan chose recency over the quote.

## How the page reads

- **Landing.** One line of lead, Tom's question as the gate quote, the four rounds, one notice.
- **Pick.** Each card is a poster: the film, whose channel it is on, what it is, and one line on its
  format. No figures and no principle tags, since both would point at the answer. Tapping the
  thumbnail picks the card; only the play button plays the film, muted.
- **Reveal.** First and second on a podium. Each side becomes a numbers tile with its three figures,
  the rest of its detail and its source. The Legendeering principles appear here, naming what the
  viewer has just worked out.
- **Why.** Three answers. The wrong two are real arguments a marketer might hold, never strawmen.
- **Reason.** The stated reason and the source. No separate takeaway panel, because it told the lesson
  a fourth time.
- **Result.** One row per round, then the four lessons added up on a dark panel, then one question
  about the reader's own company, then "Do you have the team to make it?"

## Films

Every id was confirmed through YouTube's oEmbed endpoint, which also proves it embeds. Every length was
read from YouTube's own `lengthSeconds` on 2026-09-14. Films play muted.

| Round | Film | Length | Channel |
|---|---|---|---|
| 1 | `PeUsXJ4ccXY` Rico's Tacos, episode 1 | 1:10 | MinivelaTV, the media partner |
| 1 | `xPHs8yT8cPM` Tide, School Lunch | 0:30 | Tide, official |
| 2 | `InPoTHIrnp0` Mayhem: Action Hero | 1:00 | Allstate, official |
| 2 | `I6QksAqf0jk` Check First: Swim Meet | 0:30 | Allstate, official |
| 3 | `FHtvDA0W34I` Stratos, Mission Highlights | 1:30 | Red Bull, official |
| 3 | `0b3OPo9wHuk` Confession | 0:30 | Red Bull, official |
| 4 | `OmrufRLGdAk` YETI Presents, A Thousand Casts | 28:29 | YETI, official |
| 4 | `6ti-Ky0zYhA` 2026 PBR YETI Bucking Bull Champion | 7:30 | PBR, official |

## Files

| File | What it is |
|---|---|
| `index.html` | The page and the engine. Hash routes `#r1` to `#r4`, one render path per screen. |
| `content.js` | Every word. Regenerated by the build, never edited by hand. |
| `build-content.js` | Writes `content.js`, stamps a content hash on the script URL, and refuses to build if the gate fails. |
| `check-rounds.js` | The gate. Each rule carries the decision it came from. |
| `extract-copy.js` | Writes `copy-deck.md`, every word a viewer sees in page order, so the Talex linter can read it. |
| `lint-adjudications.json` | The written decision on every linter warning. |

Build, then lint:

```bash
node build-content.js && node extract-copy.js
python ../../Writing/talex-lint.py copy-deck.md --profile public --adjudications lint-adjudications.json
```

The gate refuses the build if the rungs are out of Tom's order; if any side has no film; if a
non-official upload does not say so; if a round names no measure or no dated source; if a round has
anything but exactly one correct answer; if the scoring copy does not match the round count; if the
engine stops rendering source notes or film captions; if any card, headline or measure gives the
answer away; or if either phrase Evan cut ever reappears.

## Rejected, and why

- **Apple "1984" against Progressive's Flo.** Two companies, two budgets.
- **Specsavers**, in round 2 until 14 September. British, and US prospects would not recognise it.
- **GEICO's Gecko.** A Gecko film does embed, but GEICO's view counts track media spend, Tom's "I've got
  good news" campaign is not on its channel, and nothing isolates the Gecko from the other campaigns.
- **M&M's 2023.** System1 scored the ad without the characters at 1.0 stars and the one bringing them
  back at 4.8, the strongest evidence found for round 2. Rejected because the official film will not
  embed and the backstory is a political controversy. Detail in `../research/mms-round2-check-2026-09-14.md`.
- **State Farm, Liberty Mutual, Progressive, Capital One, Aflac.** Each either folds its character into
  its tagline ads, so the two sides cannot be separated, or has no official film.
- **Mailchimp**, in round 4 until 11 September. The 2014 Serial read was too far in the past.
- **Dove "Real Beauty Sketches".** The official upload will not embed.
- **Volvo Trucks.** Its highest-view film is itself the product demonstration.
- **Unsourced figures kept off the page:** YETI's 30 percent fishing lift, Red Bull's 7 percent sales rise,
  "about a dozen films a year" for YETI Presents, and "per episode" on the Specsavers watch time.

## Still open

- Tom has not seen this version, the why-answers or the Allstate round.
- The landing menu still lists all four headlines and lets a viewer start at any round. The review
  recommended removing it because it breaks Tom's order. It stays for now because Evan asked for each
  round to be reachable as its own link on the earlier version. Evan's call.
- The copy passes the Talex linter with every warning decided in writing. The independent review and
  receipt required before a prospect sees it have not been recorded.
- MarketCast, Insurity, The Drum, Tom Langan's editions and Front Office Sports are cited as fetched.
  The YETI sponsorship history rests on one October 2019 report.
- Separately, the Volvo block in the shared library carries two claims that do not hold, and it is live
  on three prospect docs. Detail in `../research/skincare-doc-and-volvo-2026-09-11.md`.
