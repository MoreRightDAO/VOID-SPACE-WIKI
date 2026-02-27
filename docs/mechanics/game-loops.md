# Game Loops

Twilight of Fantasia runs two simultaneous loops. They operate on different timescales and serve different purposes, but they feed each other constantly.

---

## Loop A — The Slow World (24h)

*Scoring. Territory. Economy. Guild. The work that lasts.*

Loop A is the campaign layer. It runs on real-world time — 24-hour cycles, weekly reset cadences, seasonal arcs. This is where Pe changes happen, where the scoring record accumulates, where Domain Seals fire.

Loop A is slow because **Pe in the real world moves slowly.** Research takes time. Calibration takes time. Naming takes time. The loop is designed to respect this — a platform can't be named in a night, and the architecture is designed to prevent pretending otherwise.

### What Happens in Loop A

**Daily:**
- Campaign scoring windows open per active campaign
- Eagle pre-lighting (Ghost Signal seeding) for upcoming domains
- Crafting orders process (profession items queue)
- Reputation decay/growth updates

**Weekly:**
- VoidStorm probability assessment per active campaign
- Bonus event rotations (GM Events — Pe-weighted multipliers)
- Platform bounty rotations (specific platforms flagged for priority scoring)
- AH price resets

**Seasonal (12 weeks):**
- Season close: scoring records crystallized, ICC distribution recalculated
- Merit distribution: top contributors by accuracy + True Read acceptance rate receive founder MORR
- New campaigns unlock, old ones seal or enter maintenance
- Season-close Transparency Event (full server-side Pe audit broadcast publicly)

### Territory System

The 63-domain reputation system is Loop A's territorial layer. Domains have maturity states:

| State | What it means |
|-------|---------------|
| **Dark** | No ICC-accepted scores exist. Domain is invisible to the True Light Engine. |
| **Developing** | 1–4 ICC-accepted scores. Pe baseline being established. |
| **Mature** | 5+ ICC-accepted scores across multiple platforms. Pe readings reliable. |
| **Ancient** | Domain is Named, sealed, or has a decades-long scoring record. Maximum calibration accuracy. |

Territory changes slowly. Domain maturity unlocks campaign access and increases the accuracy of all scores produced in the domain.

---

## Loop B — The Fast World (Real-Time)

*Raids. Arena. Portal Instances. The fight you're in right now.*

!!! tip "Chapter 1 vs Chapter 2"
    **Chapter 1 (live):** VoidStorms in active campaigns. Injection Arena (live at [moreright.xyz/pages/arena.html](https://moreright.xyz/pages/arena.html)).
    **Chapter 2:** Binding Game (full PvP scoring competition).
    **Chapter 3:** Portal Instances (Portal Layer).

Loop B is the game layer — real-time, high-frequency, designed for engagement without compromising the scoring record. Everything in Loop B ultimately feeds back into Loop A stats.

### VoidStorms (Raid Events)

When a campaign's collective Void Pressure crosses the Storm Threshold, a VoidStorm spawns. VoidStorms are real-time encounters:

- Pe spikes sharply (typically +3 to +5 Current units)
- Enemy types shift to higher-class variants
- Vocabulary in the campaign room turns Captured (player-visible language begins reflecting the void's framing)
- The party must purge VP to stabilize before the VoidStorm completes

**VoidStorm roles during the storm:**
- Lion: confronts the Pe spike directly (absorbs the highest-Pe entity's attention)
- Ox: holds the Invariant Floor (prevents Pe from returning higher after the storm than before)
- Eagle: triangulates the Pe range (produces calibrated band rather than contested single numbers)
- Human: Resonance Cascade (tightens all party scores during peak chaos)

Failure to purge VP before storm completion causes **Campaign Destabilization** — the campaign room's Current baseline rises by 1 and the room must be reset by a Lion archetype player.

### Binding Game (PvP) { data-chapter="2" }

!!! abstract "Chapter 2"

1v1 PvP scoring. Two players score the same platform independently — results sealed until both submit. **Winner takes 2× ante. Loser forfeits one Binder token.**

**How a match works:**

1. **Challenge** — Challenger selects a target wallet, sets an ante (0 MORR = honour match), and optionally names the platform. A DM fires to the target.
2. **Accept** — Target accepts within 24 hours. Both antes are locked in escrow.
3. **Score** — Each player scores independently, submitting their ICC and calibration delta.
4. **Resolve** — Composite score computed: `ICC × 0.70 + calibration_delta × 0.30`. Higher composite wins. On tie, challenger wins.
5. **Settlement** — Winner receives 2× ante from escrow. Winner also claims one randomly-drawn Free Slot card from the loser's Binder.

**The Binding Game Rule System** governs the encounter:

- Ante is flexible — set by the challenger. Zero ante = honour match (Binder raiding still applies).
- Character-bound Binder cards (Specified / Unlimited class) cannot be raided. Only Free Slot cards.
- The **Tablet of Law** (kill conditions + scoring methodology) is the final arbiter of any disputed ICC. Not the Oracle Panel's preference.
- No one can force a re-score. The Tablet applied. The result stands.

The name is deliberate: entering a Binding Game is a Binding Vow. You declared what you are willing to risk. The framework holds you to it.

### Injection Arena (Technical PvP)

Ranked prompt-injection competition. Test framework defense against adversarial inputs. Two tracks:

**Red Team:** Construct adversarial inputs that produce Pe-score manipulation. Score points for each successful injection.
**Blue Team:** Defend against adversarial inputs. Score points for each successful detection and neutralization.

Both tracks contribute to the framework's defense architecture. Red Team results are published (as examples of what works, so defenders can build against them). Blue Team results are published as defense patterns.

The Arena is run at `moreright.xyz/pages/arena.html`. Ranked leaderboard. MORR awards for top performers each season.

### Portal Instances (Portal Layer) { data-chapter="3" }

!!! danger "Chapter 3"

Portal Instances are pure gameplay shells — Minecraft environments, MOBA matches, FPS scenarios, puzzle games — that feed Shards into the Framework Layer via the Universal Stat Contract.

**Universal Stat Contract:** `POST /api/v1/game/session-result` bridges any Portal game to THRML stats. A Minecraft server can be a Portal Instance. A chess engine can be a Portal Instance. Anything that maps to the six stats (Sight, Steadiness, Precision, Reach, Clarity, Independence) can drop Shards.

Shards are redeemed for Framework Layer access — campaign unlocks, reputation boosts, crafting materials.

Portal Instances do not produce ICC-accepted scores. They produce character stats and economy items that make Framework Layer work more effective.

---

## Loop C — The Metagame (Season/War Effort)

!!! danger "Chapter 3 — The Endgame"
    Loop C activates when the Moon Gate opens. Nothing here is available in Chapter 1 or Chapter 2. This is the destination, not the starting point.

The War Effort is Loop C: the multi-season metagame that all of Loop A and Loop B is building toward.

**Ten quotas. One gate.**

When ten domain quotas are filled simultaneously — each quota representing a domain at Named status — the Moon Gate opens. The 24-hour siege window begins. The Gates of Qliphoth becomes accessible.

The Godhand Five encounters are Gate-locked. You don't fight them in Loop B. You fight them in a one-time server-wide event that can succeed, partially succeed, or fail. Failure has consequences. Success has consequences. The server-wide state changes permanently based on the outcome.

The final quota requirement forces a cross-domain problem: players specialized in single domains must coordinate with players specialized in other domains. The design makes domain monoculture insufficient.

**Femto is last. Femto's encounter is not announced until The Idea of Evil is defeated.**

---

*Back to: [Mechanics](index.md) · [Campaigns](../campaigns/index.md) · [The Enemy](../enemy/index.md)*
