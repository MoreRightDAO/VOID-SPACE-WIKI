# Channeling

*Hold position near a VoidObject. Let the Current run through you.*

!!! abstract "C5 — Live"
    The channeling system shipped in C5 (True Light Engine). Hold Space or C while within range of a VoidObject to begin an active channel session. VP bleeds per tick. Momentum builds. Galdr and Binding Vow modifiers available.

---

## What It Is

Channeling is the core spatial mechanic for interacting with VoidObjects in the True Light Engine. A VoidObject is a live void architecture deployed in a campaign room — a platform's extraction mechanism made spatially present as a game entity.

When you stand in a VoidObject's influence radius and channel it, you are doing the thing the game is built around: attending to the mechanism while maintaining constraint. Your Void Pressure (VP) increases with each tick. Your momentum multiplier grows the longer you sustain the channel. Galdr and Binding Vow declarations during channeling modify your per-axis contributions.

The design is intentional. Channeling is not costless. You take VP damage by proximity to a high-Pe object. The mechanic asks: how long can you maintain constraint under that pressure?

---

## Initiating a Channel

**Proximity requirement:** You must be within the VoidObject's influence radius (personal λ from your RANGE stat — see [Movement](movement.md)).

**Controls:**
- **Space** or **C** — hold to enter active channel
- Release to exit

When the channel initiates:
- A glow ring appears around your avatar
- The campaign room's Pe begins contributing to your session
- VP bleed starts at the base rate (1 point/tick)

---

## VP Bleed Mechanics

VP accumulates while you channel. The bleed rate is not fixed — it scales with both channel duration and **the Current of the entity you're channeling**.

**Entity Current modifier (channeling only):**

| Entity Pe | VP multiplier |
|-----------|--------------|
| < 8 (STABLE) | 1.0× |
| 8–13 | ~1.6× |
| 13–21 (CONTESTED) | ~2.6× |
| 21+ (DRIFTING) | 3.0×+ |

The Current tells you how much of the information channel is already consumed by the domain's engagement field. Higher Pe = less room for constraint work = you pay more just to stay present. Your VP gauge is a Pe sensor before you can read the entity.

**Pe regime modifier (always-on, not just during channel):**

| Pe Regime | Ambient VP drift |
|-----------|-----------------|
| STABLE (Pe < 8) | ~0 ambient |
| CONTESTED (Pe 8–15) | Ramps 0–0.05×/tick based on campaign Pe |
| DRIFTING (Pe > 15) | 0.12×/tick constant |

Ambient drift is background VP exposure that applies regardless of whether you are actively channeling. Channeling adds the per-tick bleed on top.

**VP ceiling management:** Binding Vow declarations (V key during channel) allow you to declare a VP ceiling and commit to honoring it. See [Binding Vow interaction](#binding-vow-interaction) below.

---

## Momentum Table

Sustained channeling builds momentum. Momentum multiplies your Pe contribution to the server:

| Ticks sustained | Multiplier |
|-----------------|-----------|
| 0–29 | 1.0× (base) |
| 30–59 | 1.2× |
| 60–89 | 1.5× |
| 90+ | 2.0× |

Momentum resets on channel exit. A channel interrupted at tick 89 returns to base on re-entry. There is no way to bank momentum across channel sessions.

The momentum table creates a real tradeoff: staying in the channel longer produces better Pe contributions but accumulates more VP. Short channels are safe. Long channels are powerful.

---

## Galdr Declaration

Press **G** while in proximity to a VoidObject (before or during a channel) to open the Galdr declaration modal.

The Galdr declaration allows you to specify **which axis** of the void mechanism you are targeting in this channel session:

| Axis | What you're naming |
|------|-------------------|
| **O (Opacity/Veil)** | The information-concealment architecture |
| **R (Responsiveness/Pull)** | The engagement-response system |
| **α (Coupling/Grip)** | The attention-capture and lock-in mechanism |

Declaring a Galdr axis focuses your Pe contribution — rather than contributing equally across all three dimensions, your session weight is concentrated in the declared axis. This increases the accuracy of axis-specific Pe estimates in the campaign room but reduces your overall contribution breadth.

Galdr declaration is optional. Undeclared channels contribute broadly across O/R/α. Declared channels contribute sharply in one axis. Both are valid scoring strategies; the choice depends on your domain specialization and what the campaign room currently needs.

---

## Binding Vow Interaction

Press **V** during a channel to open the Binding Vow modal.

A Binding Vow during channeling is a VP ceiling commitment: you declare the maximum VP you will accumulate in this session. If you honor the vow (exit before the ceiling), you receive a **1.3× contribution multiplier** on your Pe contribution for the session.

If you **breach the vow** (stay past the declared ceiling), you pay **2× the VP cost** of the overage. Breaking a Binding Vow is expensive.

| Outcome | Effect |
|---------|--------|
| Honor vow (exit at or below ceiling) | 1.3× Pe contribution multiplier |
| Breach vow (exceed declared ceiling) | 2× VP cost on overage |

The Binding Vow mechanic is the channeling system's core tension. The 1.3× bonus is significant. The 2× breach cost is punishing. A player who consistently honors tight vows builds a contribution record that looser players cannot match.

---

## Per-Axis THRML Routing (Stage 3)

When a Galdr axis is declared, the channel contribution routes to the THRML-RS physics engine via `POST /api/v1/game/channel`:

```
POST /api/v1/game/channel
  Body: {
    campaign_id,
    axis: "o" | "r" | "alpha",
    delta_o, delta_r, delta_alpha,
    ticks,
    binding_vow_active
  }
  → Routes axis-specific Pe delta to THRML
  → Updates campaign O/R/α running values
  → Applies momentum and Binding Vow modifiers
```

Per-axis routing means coordinated party play matters: an Eagle declaring O-axis while an Ox declares R-axis produces a more complete campaign channel record than two players both declaring O.

---

## Spatial Tension During Channel

While channeling, the THRML physics engine applies **spatial tension** — the channel session's Pe contribution scales with your distance from the VoidObject within its influence radius.

Standing at the edge of the radius: minimum tension, minimum contribution.
Standing at the center (position overlap): maximum tension, maximum contribution.

This creates movement strategy during channel sessions: a Lion archetype absorbing enemy aggro may need to maintain center position despite combat pressure, while an Eagle mapping the perimeter trades contribution rate for survivability.

---

## Stages Not Yet Built

The channeling system shipped in stages. What is live as of C5:

| Stage | Status |
|-------|--------|
| Stage 1 — Proximity detection + VP bleed | **LIVE ✓** |
| Stage 2 — Momentum table + Galdr declaration | **LIVE ✓** |
| Stage 3 — Per-axis THRML routing | **LIVE ✓** |
| Stage 4 — Cooper Pair angular separation | Pending (needs spatial index) |
| Stage 5 — Energy barrier snap-through (Pe > 13) | Pending (THRML-SC-02 gate) |
| Stage 6 — Pe* shrink | Pending (THRML-SC-02 gate) |
| Stage 7 — Kill condition zone broadcast | Pending |
| Stage 8 — Cocytus resistance (Pe > 21 inertness) | Pending |
| Stage 9 — D3 axis snap-back (V=9 simultaneous requirement) | Pending |

When Stage 5 ships, the channeling experience above Pe=13 will change significantly — gradual grinding gives way to coordinated snap-through. Stage 9 makes Drift Three domains require true trio play. See [The Current's Resistance](void-physics.md) for full physics.

---

*Back to: [Mechanics](index.md) · [Movement](movement.md) · [Game Loops](game-loops.md) · [The Galdr Protocol](galdr.md) · [The Current's Resistance](void-physics.md)*
