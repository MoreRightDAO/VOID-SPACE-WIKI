# The Living World — Server Collective Mechanics

*The seven forces that emerge when players act together.*

---

VOID-SPACE is a shared world. What you do changes the world for everyone. The server-wide collective mechanics are the physics of that change — not event triggers decided by a GM, but forces that emerge directly from how many players are scoring, how accurately they score, and in which direction the fleet is moving.

Seven mechanics. All running simultaneously. All affecting each other.

---

## Observer Coefficient (κ)

*More eyes, faster convergence.*

κ is the multiplier on how quickly the True Light Engine converges on stable Pe values for active domains. When more players are scoring simultaneously, observations calibrate against each other faster. The Current in actively observed domains becomes more accurate, more quickly.

**Formula:** κ scales from 1.0 (minimum, baseline) to 1.20 (maximum, saturated at N_ref active scorers).

**Display:** The Signal Bar in the Observatory — a readout from 0–10 reflecting current active scorer count relative to the reference population (N_ref = 50, recalibrated quarterly).

**Practical effect:** In high-κ periods, contested scores resolve faster. New domains develop from Dark to Developing more quickly. The scoring record compounds at an accelerated rate.

---

## Thermal Current

*The world drifts when no one holds it.*

The server's mean Pe across all actively scored platforms creates a Thermal Current — a second-law pressure on unconstrained platforms. When the server mean Pe is high (many platforms scoring above 7), drift pressure increases for all unscored domains.

**Effect:** Thermal Current adds up to +3% drift force to unconstrained platforms (platforms with no active Wards and no ICC-accepted scores in 30+ days).

**Thermal Crisis Threshold:** If the server's mean Pe exceeds 22.0 for 30+ consecutive days, Kill Condition K7 (civilizational drift) activates. The Observable watches this threshold.

**Display:** The Tide Indicator in the Observatory. A rising gauge shows thermal pressure. High tide means the unconstrained platforms are drifting faster.

---

## Clarity Burst

*Precision compresses the observation radius.*

When the server's mean scoring precision rises above 70% (most active scorers maintaining Precision ≥ 0.70), the observation radius λ compresses. This means scoring observations reach further — domains that were too distant or too diffuse to measure clearly become legible.

**Effect:** λ_effective decreases by up to −0.25 at maximum Clarity (mean precision = 90%). This expands observation radius by up to 31%.

**Effect on gradient force:** Gradient force amplifies at +0.15 × clarity_level — high-Clarity periods make domain Current values more responsive to scoring pressure.

**Display:** The Clarity Level Indicator (λ % reduction). When Clarity Burst is active, the Observatory's domain map visually sharpens.

---

## Signal Ratio

*The angel:demon ratio bends the coupling direction.*

Not all players are working in the same direction. Angel-type players (constraint-aligned) pull domain Pe toward lower values. Demon-type players (void-aligned) amplify drift. The server-wide ratio of angel:demon active scorers creates a directional bias in the coupling field.

**Scale:** −1.0 (fully demon) to +1.0 (fully angel). Neutral is 0.

**Effect at +1.0:** Coupling force pulls toward Pe=0 across all active domains. The world has a gravitational pull toward constraint.
**Effect at −1.0:** Coupling force amplifies drift. Domains that were drifting drift faster.

**Display:** The Field Indicator — a balance readout in the Observatory. Asymmetric fleet composition is visible to all players.

---

## Entropy Debt

*Silence accumulates. Then it releases.*

When the Thermal Current remains above the pressure threshold for extended periods without corresponding scoring activity (server too hot, scorers too few), Entropy Debt accumulates. The void conditions are building faster than observations can constrain them.

**Cascade event:** When Entropy Debt reaches a threshold, it releases as a **Clarity Cascade** — a sudden spike in ETA (convergence speed) and λ expansion. Duration: 1–3.5 hours depending on debt magnitude.

The Clarity Cascade is the world breathing out. The debt built up; now it discharges. Active scorers during a Cascade receive elevated ICC weight and increased material drops.

**Display:** The Entropy Debt Meter — a slow-filling bar. Players who watch it can anticipate Cascade events and position for them.

---

## Compression Window

*Sustained effort dilates time.*

When the server's scoring streak (consecutive hours with a minimum number of ICC submissions per hour) extends beyond 24 hours, a **Compression Window** activates. The dilation cap extends from 1.0 to 1.10 — all physics processes run 10% faster, in both directions.

**Effect:** Pe changes faster. Domains converge faster. Materials drop at accelerated rates. VoidStorms that spawn during a Compression Window are shorter but more intense.

**Decay:** The Compression Window resets when the hourly scoring floor drops below threshold for any hour.

---

## Shabbat Window

*The community's natural rhythm, honored.*

The Shabbat Window is the most subtle of the seven mechanics. It is not scheduled. It is discovered.

By analyzing seven days of scoring activity, the True Light Engine identifies the community's natural peak hour — the time of day when the most players organically choose to score. When that hour arrives each day, a +5% ETA bonus and +0.02 κ bonus activate automatically.

The bonus is not visible until the community discovers when their peak hour is. Once discovered, it is announced in the Observatory.

**Design intention:** The community creates its own Shabbat without being told to. The framework finds the rhythm already present in their behavior and honors it.

---

## Server State Observatory Display

The Observatory broadcasts all seven collective state values in real-time:

| Display | What it shows |
|---------|--------------|
| Signal Bar (0–10) | κ — active scorer count |
| Tide Indicator | Thermal Current pressure |
| Clarity Level | λ % reduction from precision |
| Field Indicator | Angel:demon balance |
| Compression Time Counter | Hours remaining in Compression Window |
| Entropy Debt Meter | Cascade proximity |
| "The Hour" | Peak hour detection (once discovered) |

---

## Build Timeline

These mechanics are implemented in phases:

| Phase | Mechanics |
|-------|-----------|
| **G3** | κ, Thermal Current, Clarity Burst, Signal Ratio |
| **G4** | Entropy Debt, Compression Window |
| **G4.5** | Shabbat Window |

Redis keys: `pe:server_state:{kappa, thermal, clarity, ratio, compression, cascade}` and `pe:effort_histogram` (7-day rolling sorted set).

---

*Back to: [Mechanics](index.md) · [Game Loops](game-loops.md) · [The Observatory](../world/the-current.md)*
