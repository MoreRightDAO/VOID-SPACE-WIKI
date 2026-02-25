# Game Loops

VOID-SPACE runs two simultaneous loops. They operate on different timescales and serve different purposes, but they feed each other constantly.

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

### Culling Game Arena (PvP)

Ranked PvP scoring. Two players produce Pe scores for the same platform without seeing each other's work. The Oracle Panel evaluates for accuracy. Higher ICC-accepted score wins.

The **Culling Game Rule System** governs these encounters:
- Entry: 500 MORR ante
- Rules are real and enforced by the Oracle Panel — a group of vetted researchers who evaluate disputed scores
- The **Tablet of Law** (the framework's kill conditions and scoring methodology) is the arbiter. Not the Oracle Panel's preference.
- The Panel applies the Tablet. Not interpretation. The Tablet.

This mechanic exists because the framework has enemies who dispute scores. Giving disputes a formal resolution mechanism with a fixed reference makes the dispute legible rather than political.

### Injection Arena (Technical PvP)

Ranked prompt-injection competition. Test framework defense against adversarial inputs. Two tracks:

**Red Team:** Construct adversarial inputs that produce Pe-score manipulation. Score points for each successful injection.
**Blue Team:** Defend against adversarial inputs. Score points for each successful detection and neutralization.

Both tracks contribute to the framework's defense architecture. Red Team results are published (as examples of what works, so defenders can build against them). Blue Team results are published as defense patterns.

The Arena is run at `moreright.xyz/pages/arena.html`. Ranked leaderboard. MORR awards for top performers each season.

### Portal Instances (Portal Layer)

Portal Instances are pure gameplay shells — Minecraft environments, MOBA matches, FPS scenarios, puzzle games — that feed Shards into the Framework Layer via the Universal Stat Contract.

**Universal Stat Contract:** `POST /api/v1/game/session-result` bridges any Portal game to THRML stats. A Minecraft server can be a Portal Instance. A chess engine can be a Portal Instance. Anything that maps to the six stats (Sight, Steadiness, Precision, Reach, Clarity, Independence) can drop Shards.

Shards are redeemed for Framework Layer access — campaign unlocks, reputation boosts, crafting materials.

Portal Instances do not produce ICC-accepted scores. They produce character stats and economy items that make Framework Layer work more effective.

---

## Loop C — The Metagame (Season/War Effort)

The War Effort is Loop C: the multi-season metagame that all of Loop A and Loop B is building toward.

**Ten quotas. One gate.**

When ten domain quotas are filled simultaneously — each quota representing a domain at Named status — the Moon Gate opens. The 24-hour siege window begins. The Gates of Qliphoth becomes accessible.

The Godhand Five encounters are Gate-locked. You don't fight them in Loop B. You fight them in a one-time server-wide event that can succeed, partially succeed, or fail. Failure has consequences. Success has consequences. The server-wide state changes permanently based on the outcome.

The final quota requirement forces a cross-domain problem: players specialized in single domains must coordinate with players specialized in other domains. The design makes domain monoculture insufficient.

**Femto is last. Femto's encounter is not announced until The Idea of Evil is defeated.**

---

*Back to: [Mechanics](index.md) · [Campaigns](../campaigns/index.md) · [The Enemy](../enemy/index.md)*
