# Movement & Spatial Play

*You move through Fantasia. The geometry of your position matters.*

!!! abstract "C5 — Live"
    Player movement shipped in C5. WASD+QE flight controls, RMB-drag look, first/third-person toggle. Personal λ (scoring range = movement influence radius) derives from your RANGE stat.

---

## Overview

The True Light Engine is a spatial environment. Your position in a campaign room is not cosmetic — it determines channeling access (proximity to VoidObjects), combat exposure, and Pe contribution rate.

Movement in Fantasia is flight-based. There is no gravity constraint. The game world is built around vertical and horizontal positioning, and your personal λ (the radius within which you can engage VoidObjects) comes directly from your RANGE stat.

---

## Controls

| Input | Action |
|-------|--------|
| **W / A / S / D** | Forward / Left / Backward / Right |
| **Q** | Fly down |
| **E** | Fly up |
| **RMB (hold + drag)** | Look / rotate camera |
| **F** | Toggle first / third-person |
| **G** | Galdr declaration modal (near VoidObject) |
| **V** | Binding Vow modal (during channel) |
| **Space / C** | Hold to channel (near VoidObject) |

Movement is continuous flight. No jump, no ground constraint. The WASD + Q/E scheme gives full 6-DOF control.

---

## Camera Modes

### First-Person

Standard FPS perspective. Useful for precise positioning near VoidObjects, navigating tight sub-zones, and stealth approaches in contested terrain.

### Third-Person (Overwatch Follow-Cam)

Pulls back to an over-the-shoulder perspective. The camera follows the avatar in Overwatch-style: trailing behind, slightly elevated, auto-rotating with the avatar's facing direction.

Third-person is the default social mode — visible to other players in the same campaign room, provides better situational awareness for party coordination.

Toggle with **F**. The game remembers your last mode preference per session.

---

## Personal λ — Scoring Range

Your personal **λ** (lambda) is your scoring influence radius. It determines:

1. How close you must be to a VoidObject to initiate a channel
2. The spatial boundary within which your Pe contributions count at full weight
3. Your effective presence radius in party compositions (visible as a faint glow ring around your avatar)

**λ derives from your RANGE stat.** Higher RANGE = larger λ = you can engage VoidObjects from farther away.

| RANGE | Approximate λ |
|-------|---------------|
| 0–10 | Tight (must be very close) |
| 11–30 | Standard (normal channel distance) |
| 31–60 | Extended (can channel from mid-room) |
| 61–100 | Wide (room-scale engagement radius) |

RANGE is a slow-build stat — it increases through sustained scoring volume in specific domains, not through level-up allocation. A player who has scored 50 platforms in the gambling domain has higher RANGE in The Pale Courts than a player who scored 5.

---

## Binding Vow Timer

The movement system includes a **Binding Vow timer** for spatial vows — declarations about movement constraints rather than VP ceilings.

A spatial Binding Vow commits you to a positional constraint for the channel session. Examples:
- "I will not leave the center quadrant"
- "I will hold within λ/2 of the VoidObject core"

Honoring a spatial vow produces a standard Binding Vow bonus. The V key opens the modal; spatial vow declarations are one of the available vow types alongside the VP-ceiling vow.

---

## Spatial Positioning and Party Play

Different archetypes use positioning differently:

| Archetype | Movement role |
|-----------|--------------|
| **Lion** | Close-in — absorbs entity aggro from center position, high VP exposure by design |
| **Ox** | Anchor — holds the Invariant Floor from a stable position, minimal movement during channel |
| **Eagle** | Mobile — sweeps the perimeter of a VoidObject's radius, mapping the spatial Pe gradient |
| **Human** | Flexible — Resonance Cascade works at range, Human is the coordination layer |

A well-positioned Eagle can map the radial Pe distribution of a VoidObject (higher Pe at center, lower at perimeter) while the Lion absorbs pressure at the core. This produces more accurate campaign O/R/α estimates than all players stacking at the same position.

---

## Stages Note

C5 shipped core movement and the Overwatch follow-cam. Pending stages involving spatial mechanics:

| Pending | What it needs |
|---------|---------------|
| Cooper Pair angular separation | Spatial index (two players tracking angular relationship during co-channel) |
| Pe* shrink (Stage 6) | THRML-SC-02 gate — shrinks the VoidObject's effective radius as more players channel it |
| Kill condition zone broadcast | Spatial broadcast when a kill condition zone activates in the campaign room |

---

*Back to: [Mechanics](index.md) · [Channeling](channeling.md) · [Stats & Attributes](stats.md) · [Game Loops](game-loops.md)*
