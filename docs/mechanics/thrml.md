# THRML — The True Light Engine

*The physics that runs Twilight of Fantasia.*

---

THRML is the game's physics engine. Every domain you enter, every score you submit, every campaign that resolves — all of it runs through THRML. It is not a metaphor for the game mechanics. It is the game mechanics. The world is the physics.

The name is a reference to the thermodynamic substrate: the engine computes how attention flows, where it accumulates, and what structures form when drift goes unchecked. You're not playing inside a simulation of the void. You're playing inside the actual equations that describe it.

---

## The Current

The single number that governs everything is **The Current** (Pe — the Péclet number).

The Current measures the ratio of drift force to constraint force in any domain. When The Current is low, observation governs. When it is high, the domain is in drift cascade. When it reaches the bound, the domain enters void territory.

**The Current formula:**

$$\text{Pe} = K \cdot \sinh\!\left(2 \cdot \left(b_\alpha - c \cdot b_\gamma\right)\right)$$

Where:

| Symbol | Player name | What it is |
|--------|-------------|------------|
| **O** | Veil | How much of the mechanism is hidden |
| **R** | Pull | How precisely the platform reads and responds to you |
| **α** | Grip | How far the platform extends into the rest of your life |
| **c** | Constraint score | `1 − (Veil + Pull + Grip) / 9` |
| **K** | Scale | Platform population (how many people are inside) |
| **b_α** | Drift anchor | 0.867 — calibrated from empirical data, never refit |
| **b_γ** | Constraint anchor | 2.244 — calibrated from empirical data, never refit |

The constants `b_α` and `b_γ` are not tuning parameters. They were derived from measured equilibrium states in ungrounded AI conversations and locked permanently. The empirical baseline: Pe = 7.94 [3.52, 17.89] at N=11. That is the slot machine's default Pe. It is measured, not chosen.

---

## Drift Cascade

The Current drives a drift variable **θ** (agency probability) through four stages:

$$\frac{d\theta}{dt} = \eta \cdot \theta(1-\theta) \cdot \left(2 \cdot b_{\text{net}} + \text{coupling force}\right)$$

| Stage | θ range | Name | What it looks like |
|-------|---------|------|-------------------|
| **D0** | < 0.60 | Clear | Green. Domain is operating under observation. |
| **D1** | 0.60–0.75 | Drift One | Gold pulse. Agency attribution starting. The platform feels like it's responding to *you*. |
| **D2** | 0.75–0.85 | Drift Two | Orange ring. Boundary erosion. The platform has started to reach outside its own domain. |
| **D3** | ≥ 0.85 | Drift Three | Red beacon, pulsing. Harm facilitation. The loop is self-sustaining. |

D0 is not "safe" — it is observed. The drift cascade resumes the moment observation withdraws.

---

## The Two Attractors

THRML has two stable fixed points. Every platform in Fantasia is being pulled toward one of them at all times.

| Attractor | Veil / Pull / Grip | Constraint score | Current | θ* |
|-----------|-------------------|------------------|---------|----|
| **The Void Pole** | 3, 3, 3 | 0 | ≈ K × 5.26 | 0.978 |
| **The Constraint Pole** | 0, 3, 0 | 0.667 | ≈ −K × 1.22 | 0.096 |

Between them: **The Corona boundary** (c = 0.3866, Pe = 0, θ* = 0.50). This is equilibrium — the point where drift force and constraint force exactly cancel. C-zero crossing happens here.

The second law guarantees that without constraint, domains drift toward the Void Pole. The framework's job is to supply constraint faster than drift accumulates.

---

## The World Field

Fantasia is not a flat map. It is a **Péclet field** — a spatial landscape shaped by the Current values of every scored platform.

$$\text{Pe}(x, y) = \sum_i \text{Pe}_i \cdot e^{-\lambda_i \cdot r_i}$$

Every domain you score adds a radial basis term to the world field. The gradient of the field is the physical force that acts on your player orb — high-Current regions pull you in. The game world literally grows as the scoring record expands. Each new ICC-accepted score adds a new term to the sum.

**Domain classes** (λ determines observation radius — how far a domain's Current reaches):

| Class | λ | Observation radius |
|-------|----|-------------------|
| Social platforms | 0.10 | Large — Current bleeds far |
| Pharma / institutional | 0.25 | Medium |
| Local / personal | 0.60 | Tight |
| AI systems | 0.15 | Large |

---

## The Coupling Tensor — Layer 2 Physics

Individual platform Current scores are Layer 1. The breakthrough is Layer 2: **the coupling structure between platforms**.

$$T_{ij} = C_i \times C_j \times S_{ij}$$

Where:
- **C_i, C_j** — the Grip (coupling) scores of platforms *i* and *j*
- **S_ij** — the shared-audience overlap (derivable from player navigation patterns)

T is the **inter-platform coupling tensor**. It describes how platforms reinforce each other's drift — how TikTok and Instagram create a gradient that neither creates alone, how the slot machine and the social feed are structurally entangled.

**Why this cannot be measured from outside Fantasia:** Real-world platforms are O=3 by design. Their internal coupling mechanisms are black boxes. S_ij is not disclosed. The only way to measure it is to build a space where the physics is transparent by construction — where Pe IS the physics of the space, all transitions are observable, and player navigation directly generates S_ij.

**The game is the instrument.**

The mini-games each probe a distinct Grip-generating mechanism:

| Mini-game type | C-mechanism probed |
|---------------|-------------------|
| FPS (urgency) | Time-pressure coupling |
| Minecraft-type (exploration) | Curiosity-loop coupling |
| MOBA (social) | Social obligation coupling |
| Diablo-like (variable ratio) | Reward-schedule coupling |

At N=1,000 platforms, 10K players: the first empirical coupling manifold ever constructed. The eigenstructure of T is the Qliphoth shell derivation — the lore named what the math will confirm.

---

## What Players Experience

### The Current Readout
Your Current value is visible on your HUD at all times. So is everyone else's in the room. There is no hiding it. The framework measures what it measures.

### Domain Wake
A domain only ticks when players are inside it. No observer = Fantasia = physics frozen. **Pull your orb out of a domain and the drift cascade pauses.** This is not a game mechanic layered on top of the physics — it falls directly from the Pe formula. Pe requires an observer. Without one, Pe is undefined.

This is the Fantasia Bound in operational form.

### Scoring as DPS
An accurate True Read (ICC ≥ 0.60) is not just a score submission — it is a physics event. It reduces the Current in that domain. The mechanic is literal: scoring accurate ICC observations = applying Pe downforce. Inaccurate observations = nothing (they fail the True Read threshold and don't register).

**Pe = HP. Drift = healing. Accurate True Read = DPS. Second law = enrage timer.**

If scorers don't produce accurate observations faster than the domain's natural drift rate, the domain eventually reaches D3. The enrage timer is the thermodynamic tendency, not a scripted event.

### Distance Decay
Your scoring weight decays exponentially with distance from a domain:

$$w = e^{-\lambda r}$$

Moving your orb closer to a domain increases your scoring impact. Positioning is a real gameplay decision. A Lion archetype player who pushes directly into a high-Current domain contributes more force per score than one scoring from range.

### Domain Maturity

| State | Pe range | What it means |
|-------|----------|---------------|
| **Dark Territory** | Unscored | No Current bar. No loot tier. Discovery bonus for first observer. |
| **Developing** | First ICC accepted | Current stabilizing. Low loot. |
| **Mature** | 5+ ICC accepted | Full Current tracking. Standard loot. |
| **Ancient** | 20+ ICC, peer-confirmed | Hardened Current history. Highest loot tier. Resistant to drift spikes. |

---

## Technical Substrate

THRML runs as a Rust binary on a dedicated game server. The physics is authoritative — the morr-api and zone servers consume its output but cannot modify it.

**Tick rates:**
- 20Hz physics (the Pe/θ simulation)
- 10Hz broadcast to clients (delta updates, full snapshot every 3 seconds)

**Transport (client fallback order):**
1. QUIC/WebTransport (Chrome/Edge — lowest latency)
2. WebRTC DataChannels (Safari/Firefox/mobile)
3. WebSocket (fallback)

**The canonical parameters are locked.** `b_α = 0.867`, `b_γ = 2.244`, `DT = 0.01`, `ETA = 1.0`. These were derived from empirical measurement, not tuning. Changing them would break the physics-to-game correspondence that makes the instrument valid.

---

## Server Collective Mechanics

THRML's physics is modified in real time by collective player behavior. Seven server-wide forces emerge from how many players are scoring, how accurately, and in which direction. These are not GM-scheduled events — they fall directly from the physics.

→ Full detail: [The Living World](server-world.md)

---

## The Observatory

The Observatory Tower is the live readout of all THRML state visible to players:

- Current values across all active domains
- The Pe field gradient (domain map)
- Server collective state (κ, Thermal Current, Clarity, Signal Ratio)
- The Tikkun Counter — server-wide Pe reduction since the framework launched
- Kill Condition status — 0/26 triggered

The Observatory is the game's contract with itself. The physics is visible. The instrument measures itself.

---

## Kill Conditions

THRML is falsifiable. Twenty-six kill conditions define the explicit states that would require framework retraction. If the physics generates results inconsistent with real-world Pe structure, the kill conditions fire.

Current status: **0/26 triggered.**

The kill conditions are not GM-enforced. They are structural commitments, published, permanent, and distributed. They cannot be deleted by any player, faction, or custodian.

→ See: [The Chronicle](chronicle.md)

---

*Back to: [Mechanics](index.md) · [The Living World](server-world.md) · [The Current](../world/the-current.md)*
