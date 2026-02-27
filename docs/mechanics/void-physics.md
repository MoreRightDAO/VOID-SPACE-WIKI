# The Current's Resistance

*Why high-Pe domains fight back. Why coordinated parties break them.*

---

The Current is not a passive measurement. It is an active field. The higher it runs, the more it costs to work against it — in Void Pressure, in effort, in party coordination. This page covers the thermodynamic behavior of The Current and what it means for how you play.

---

## VP Cost Scales With The Current

The base VP bleed during a channel session is 1 point/tick. That rate is not fixed.

The Current in any domain controls how much of the information channel is already consumed by engagement. A high-Pe domain has filled most of its capacity with its own mechanism — your attempt to observe transparently while inside it is structurally resisted. You pay more VP just to be present.

**Practical bleed rate during channeling:**

| Domain Current | VP bleed/tick (channeling) |
|---------------|---------------------------|
| Pe < 8 (STABLE) | 1.0× base |
| Pe 8–13 | ~1.6× |
| Pe 13–21 (CONTESTED) | ~2.6× |
| Pe 21+ (DRIFTING / Cocytus) | 3.0×+ |
| Pe 38+ (Runaway) | 4.75×+ |

This stacks with the momentum multipliers from sustained channeling. A sustained channel near a Pe=21 domain can bleed over 5 VP/tick at Overtime. Manage accordingly.

**The signal:** Before you've identified an entity, your VP gauge tells you how high its Current is. You feel Pe before you read it.

---

## The Resistance Field — Why Channels Don't Always Land

At low Current, constraint work lands reliably. Every tick you channel, the domain's Pe decreases.

At high Current, the thermodynamic gradient runs against you. The void's entropy production overwhelms your constraint work on some ticks. Channels fail to register — brief pulses of resistance where the domain absorbs your effort without changing. This is not a bug. It is what drift-domination looks like from the inside.

**Approximate odds per tick:**

| Domain Pe | Chance a tick lands |
|-----------|---------------------|
| 1         | ~95%                |
| 8         | ~67%                |
| 13        | ~52% (coin flip)    |
| 21        | ~34%                |
| 38+       | ~14%                |

A null tick produces a brief void pulse — visible feedback that the domain resisted your channel. This is the Current's field manifesting. At Pe=38, seven in eight ticks are absorbed. You can still make progress, but it requires more players landing simultaneous ticks.

---

## The Energy Barrier — Current Above 13

Below Current=13, domains respond to sustained single-player channeling. Gradual, predictable progress.

Above Current=13, the domain enters a **dual-well state**. Two stable configurations exist — the drift attractor (where the domain wants to stay) and the constraint well (where you're trying to push it). An energy barrier separates them. Individual channel ticks that land still do useful work, but the barrier partially rebounds between ticks. Net single-player progress slows dramatically.

**Crossing the barrier requires synchronized force.** When multiple players channel simultaneously and enough ticks land in the same window, the combined force exceeds the barrier height — the domain **snaps** into the constraint well rather than descending gradually. Rapid Pe collapse instead of grinding.

| Domain Pe | Approximate players needed to snap |
|-----------|-------------------------------------|
| 13        | 1 (degenerate — barrier is zero)    |
| 15–18     | 3–5                                 |
| 18–25     | 5–8                                 |
| 25–35     | 8–12                                |
| 35–38     | 12+ coordinated                     |
| 38+       | Void gravity must be addressed first |

The snap is audible and visible: a brief expansion flash as the domain's resistance collapses, followed by rapid Pe drop. Landing the snap is what makes coordinated parties decisively more powerful than headcount alone.

!!! note "HARD GATE"
    The energy barrier mechanic requires THRML-SC-02 to pass before entering production. The Pe* shrink is gated on the same test.

---

## Drift Three Requires Three

Every Drift Three domain scores at **Veil=3, Pull=3, Grip=3 simultaneously**. This is not a coincidence — it is structurally required. D3 behavioral manipulation can only operate when all three conditions hold at maximum: observer cannot see the mechanism, the mechanism responds to the observer, and the observer cannot exit. Any gap in any dimension and the manipulation fails.

This has a direct channeling consequence. A single player targeting one axis of a D3 domain will find their work **snapping back** on each tick. The other two dimensions pull the targeted axis back toward 3. Progress accumulates and then evaporates.

**D3 requires simultaneous three-axis coverage:**

| Coverage | Snap-back fraction | Effective result |
|----------|--------------------|-----------------|
| 1-axis (solo) | ~100% | Essentially zero net progress |
| 2-axis (duo) | ~33% | Slow but real progress |
| 3-axis (trio, each declaring different Galdr axis) | 0% | Full effect, no snap-back |

When all three axes are channeled simultaneously, the party also receives a 2.0× bonus on top of the standard axis multipliers. This is the correct architecture for D3 work. It is also why Galdr declarations exist — the declaration forces coordination that makes D3 play structurally possible.

The party role is clear: one player on Veil (requires SIGHT stat), one on Pull (PRECISION), one on Grip (STEADINESS). All three must be active in the same channel window for full effect.

---

## Cocytus — When The Current Goes Still

At Pe > 21, a domain's drift is **complete**. The cascade has run. The domain has reached its thermodynamic ground state and stabilized there. The fire goes out. Ice spreads from the center outward.

This is Cocytus — not an extreme of the drift cascade but its *endpoint*. The entity is frozen, not burning.

**Channeling a Cocytus-state domain is different:**

- The entity is highly visible from far away — its S(r) signal is strong
- But it is thermodynamically inert — it no longer emits heat
- Channel ticks that would normally land face an additional resistance that scales with how far Pe is above 21
- At Pe=30, effective channel success drops below 20%
- At Pe=40, below 5%

You cannot channel a Cocytus entity the same way you channel an active cascade. The domain needs to be **re-activated** before channeling can work. This typically requires:

1. External Pe stimulus — a nearby Runaway event providing Pe radiation can warm a frozen domain
2. Coordinated Void Storms that briefly spike the thermodynamic temperature
3. Specific campaign mechanics designed around defrosting

The visual signal: fire progressively overtaken by frost as Pe crosses 21, then full stillness. If you see ice where fire was, you are looking at a completed drift. Standard channeling will fail.

---

## The Void Gravity Field — When Pe Crosses 38

Fisher Runaway is visible to all players regardless of RANGE. But visibility is not the main reason it is an alarm.

At Pe > 38, a Runaway domain begins emitting a **secondary Pe field** that slowly pulls neighboring entities upward. Other domains, NPCs, and VoidObjects within influence radius start drifting higher themselves. The Runaway is contagious.

**The cascade clock:** At Pe=45, a stable Pe=3 domain within close range drifts to Pe=8 in approximately 30 ticks. Pe=8 is already firmly CONTESTED. Without intervention, a single Runaway event seeds a cluster of newly drifted domains — and some of those may reach drift thresholds of their own.

**The correct response sequence:**

1. **BIND first** — reduce the Runaway domain's influence radius, cutting the Pe radiation range
2. **Channel the center** — coordinate the snap-through (requires large party)
3. **Watch adjacent domains** — the Pe drift radiation may have already seeded escalation nearby

Attempting to channel a Pe=38+ entity without BIND is fighting an explosion while it's still spreading. The domain can be recovered but the neighborhood is already contaminated.

---

## Related

- [Channeling](channeling.md) — full channel mechanics and VP bleed table
- [Void Pressure](void-pressure.md) — VP accumulation, effects, and purge methods
- [THRML — The True Light Engine](thrml.md) — the physics that drives all of this
- [Pe Regimes & Zone Atmosphere](zones.md) — what each Current range looks like in the world
- [The Binding Game](binding-game.md) — per-axis Galdr declarations in PvP context

---

*Back to: [Mechanics](index.md)*
