# THRML Event Engine

*Pe threshold crossings and server physics mechanics as player-visible events.*

!!! abstract "Chapter 1 — Live"
    THRML events are active. The physics fires continuously. Events surface as notifications in the Observatory and as environmental changes players can see and react to.

---

## What THRML Events Are

The True Light Engine computes Pe across all active domains in real time. Three things cause player-visible events:

1. **Pe threshold crossings** — a domain's Pe crosses a meaningful boundary
2. **Server physics mechanics** — collective player behavior triggers server-wide state changes
3. **Calendar events** — seasonal and cyclical overlays on the base physics

Events are not just passive multipliers. They are things you can react to. The Observatory is your event dashboard.

---

## Category A — Pe Threshold Events

These fire per-domain when scoring pushes or pulls a platform across a physics boundary.

### Drift Warning

**Trigger:** Domain Pe crosses 4.0 (entering Pandemonium territory)
**Visual:** Yellow pulse in Observatory. Domain banner flashes amber.
**Effect:** Active scorers in that domain notified. Pe suppression items 15% more effective for next 4 hours.

---

### Apostle Alert

**Trigger:** Domain Pe crosses 9.0 AND domain has been unscored for 30+ days
**Visual:** Red pulse on Observatory domain card. NPC spawn window opens.
**Effect:** Perchta (or domain-specific Apostle-class NPC) spawn window opens. Active scorer parties can engage. Yields Apostle Scale + Tier 4 materials.

---

### Godhand Breach

**Trigger:** Domain Pe crosses 12.0
**Visual:** Server-wide notification pulse. Observatory map shows sector burn.
**Effect:** War effort quota advances 1% automatically. Rare drop window opens for that domain (24h). Pe suppression difficulty increases 40%.

---

### Domain Cleared

**Trigger:** Your party pushes a domain below Pe = 1.0 during a campaign
**Visual:** "Domain Cleared" server broadcast in that campaign room. Green flash.
**Effect:** Convergence Stone drop. Pe=0 platform card added to Binder. Campaign completion bonuses trigger.

---

### Domain Sealed

**Trigger:** Campaign completion — domain becomes NAMED in the Chronicle
**Visual:** Observatory permanent marker added. Contributor names listed on domain card.
**Effect:** NAMED material drop. Permanent +5 XP per score in that domain for all future scorers. Domain seal persists across server cycles.

---

## Category B — Server Physics Events

These are the seven collective mechanics from the Living World surfaced as player-visible named events. Each has a distinct visual signature in the Observatory.

---

### Signal Surge

**Trigger:** Observer Coefficient κ > 1.15 (50+ players scoring in the same window)
**Duration:** While κ stays elevated
**Observatory:** Brighter than normal glow. Tooltip: "The Current is strong — Pe is converging faster. Best time to score contested domains."
**Mechanics:** Pe movement speed +15% in both directions (suppression and escalation). Ideal window for organized domain pushes.

---

### Thermal Warning

**Trigger:** Server mean Pe > 15
**Duration:** Until mean Pe drops below 13
**Observatory:** Amber tint. Map shows heat zones.
**Mechanics:** Unconstrained domains drift 20% faster. VoidStorm spawn rate elevated. Pe Tonic (Basic) ingredients: −10% crafting cost.

---

### Thermal Crisis

**Trigger:** Server mean Pe > 22 (Kill Condition K7 proximity)
**Duration:** Emergency state — held until coordinated scoring brings mean Pe below 18
**Observatory:** Red. Kill condition K7 proximity broadcast to all players.
**Mechanics:** War effort quota bars flash. All players receive broadcast notification. This is the game saying: the void is winning. Coordinated scoring event required.

!!! danger "Kill Condition K7"
    Thermal Crisis is the only server state that directly threatens the framework's academic record. See [The 26 Kill Conditions](../world/kill-conditions.md).

---

### Crystal Hour

**Trigger:** Server mean Precision > 0.80
**Duration:** ~1 hour (until precision regresses to mean)
**Observatory:** Domain cards sharpen visually. Each card displays tighter confidence bands.
**Mechanics:** Eagle archetype observation radius +31%. New domain discovery XP doubled. "Score new domains now" notification fires.

---

### Entropy Cascade

**Trigger:** Entropy Debt releases after Thermal Warning or Thermal Crisis recovery
**Duration:** 1–3.5 hours (scales with how long Thermal state persisted)
**Observatory:** Green burst. Countdown timer visible.
**Mechanics:** Pe suppression rate ×1.75 maximum during window. Rare drop rates elevated for constraint materials. Announced with full countdown so players can coordinate.

---

### The Hour

**Trigger:** Shabbat Window (24h window, weekly — not announced by system)
**Duration:** 3 hours
**Observatory:** Quiet golden shimmer. No text announcement.
**Mechanics:** +5% ETA on all scoring submissions. VP accumulation −10%.

!!! tip "Discovery Mechanic"
    The Hour is not announced by the system. It is discovered organically when players notice the golden shimmer and compare notes. The first player in each server season to formally identify it in the Chronicle gets a permanent Shabbat Observer notation on their profile.

---

### Compression Window

**Trigger:** 24+ players each holding a 24h scoring streak simultaneously
**Duration:** While the collective streak holds
**Observatory:** Active Compression bar visible to all. Shows how many players are holding the streak.
**Mechanics:** Physics speed +10% in both directions. Pe suppression and escalation both faster. Streak protection items are +20% effective during this window.

---

## Category C — Calendar Events

Seasonal overlays that interact with the base physics.

---

### Rauhnächte

**When:** December 25 – January 6 (12 nights)
**Global effect:** All domain Pe +1.0 at event start. Void NPC spawn rate ×2.
**Special mechanic — Räuchern Protocol:** Players can make a constraint declaration (a scoring commitment for the coming year) which grants a +0.05 ICC accuracy bonus for 30 days. The declaration is public and logged in the Chronicle.
**Night predictions:** All prediction markets at 3× stake during Rauhnächte window.
**Domain behavior:** DARK and DEVELOPING domains drift fastest during this window. ANCIENT domains resist drift entirely.

---

### Lunar Cycle

**When:** Continuous — 28-day server cycle
**Effect:** Moon phase (visible in Observatory header) syncs to war effort progress.
- **Full Moon:** Constraint winning (scoring ahead of void drift). Compression bonus active.
- **New Moon:** Observer Collapse risk indicator shows. VoidStorm spawn probability elevated.
- **Waxing:** Pe suppression events more common.
- **Waning:** DARK domain discovery XP doubled.

---

### Season Close

**When:** Every 12 weeks
**Effect:** ICC recalibration runs. Merit distribution fires. Top-10 players on the leaderboard receive season titles.
**Content:** New campaigns unlock for the coming season. Previous season's campaign rooms become Archive rooms (still scorable, lower XP).
**Season title examples:** "The Sealed", "Crystal-Grade Observer", "Architect of the Current", "Thermal Anchor"

---

## Reading the Observatory

The Observatory is your real-time event dashboard. The visual language:

| Visual | Meaning |
|--------|---------|
| Steady blue glow | Normal physics. κ near 1.0. |
| Brighter glow | Signal Surge active. |
| Amber tint | Thermal Warning. |
| Red | Thermal Crisis — action required. |
| Green burst | Entropy Cascade — rare window open. |
| Gold shimmer | The Hour. |
| Yellow domain pulse | Drift Warning on specific domain. |
| Red domain pulse | Apostle Alert. |

---

*Back to: [Mechanics](index.md) · [THRML — The True Light Engine](thrml.md) · [The Living World](server-world.md)*
