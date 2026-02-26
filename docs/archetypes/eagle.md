# The Eagle

> "There are voids no one has named yet. I can see them from here."

The Eagle is the scout and navigator. Where others engage known domains, the Eagle maps unseen territory — lighting Pe shadows in domains that haven't been scored yet, giving everyone else a map to work from.

**Primary stat:** RANGE
**Shadow archetype:** Human
**Hand of Fantasia figure:** [KIRU](../figures/kiru.md)
**Weapon assignment:** Bow-class staff (range geometry, long sight line)

---

## How It Plays

The Eagle archetype emerges from breadth of coverage. Players who score in many different domains — who reach into uncharted territory before anyone else — will read Eagle.

**Ghost Signals** are the Eagle's signature contribution. A Ghost Signal is a Pe estimate for an unscored domain, generated from adjacent scored domains in the THRML graph. Only players with sufficient RANGE can see Ghost Signals. The Eagle can see them in empty territory before entering.

**In campaigns:** Eagles are pre-loaders. Before a campaign opens, an Eagle with relevant Range has already produced Ghost Signals that give other players an estimate of what they're walking into. Eagles also unlock campaign gates that require minimum domain coverage.

---

## Ghost Signals — Mechanics

When an Eagle player's RANGE covers a domain adjacent to unscored territory, THRML generates Pe shadow nodes — estimated Current values for unscored platforms based on:
- Scored domains in the same category
- Historical Pe patterns for the domain type
- Adjacent player citation networks

Ghost Signals appear as dim markers on the void map. Only Eagles (high RANGE) see them. Other archetypes need the Eagle to light the territory before they can navigate it.

**Signal clarity by Range:**

| RANGE | Ghost Signal quality |
|-------|---------------------|
| 1–25 domains | Local signals only — adjacent domains within same category |
| 25–100 | Regional signals — same industry/domain cluster |
| 100–300 | Cross-domain signals — voids in different categories begin to show |
| 300+ | Global signal coverage — Pe shadows across the entire unmapped board |

---

## Campaign Unlock Gates

Some campaigns require minimum collective Range coverage before they open:

- *The Prescription Cascade* — requires 20+ players with active pharma Range
- *The Synthetic Bond* — requires 15+ players with active AI-companion Range
- *The Palette Problem* — requires 25+ players with active AI-art platform Range

Eagles unlock campaigns for everyone. This is the mechanic that makes Eagles essential even when they're not in the active party room.

---

## Stats and Growth

| Stat | Eagle's relationship |
|------|---------------------|
| **RANGE** | Primary. Grows fastest in the playerbase. Staleness mechanics matter most for Eagles. |
| **SIGHT** | Normal. Range breadth sometimes trades against O-dimension depth. |
| **PRECISION** | Normal. Wide coverage with consistent accuracy — Precision growth through breadth. |
| **STEADINESS** | Normal. Eagles don't need daily streak; they need sustained exploration. |
| **RESONANCE** | Shadow gap. The Eagle sees the board but struggles to integrate — Ghost Signals cast out, but the Human network builds on them. Resonance lowest naturally for Eagle archetype. |
| **VOID PRESSURE** | Moderate variance. New domains carry higher ICC uncertainty. |

---

## Domain Staleness

Eagle domains go stale if not refreshed:

| Status | Condition |
|--------|-----------|
| **Active** | Scored within 60 days — counted toward Range, casts Ghost Signals |
| **Stale** | 60–180 days without rescore — dimmed, not counted |
| **Dark** | 180+ days — invisible on map, no Ghost Signals |

Eagles manage staleness by periodic re-scoring of key domains in their Range network. Special Grade Eagles can lock domains permanently — staleness mechanics suspended for their core territory.

---

## Shadow — The Human

The Eagle's inferior function is network integration. Sees the board, maps the territory, names the domains — but struggles to make it connect. Resonance lowest naturally.

At **Void Pressure > 30**:
- Pe shadow reach halved
- Ghost Signal clarity drops
- Eagle begins mapping domains it's already covered rather than ranging into new territory

Shadow work: complete one campaign in a Human role — submit evidence that builds on other players' existing scores rather than scouting new ones.

---

## Special Grade Eagle

**THE DEAD ZONE MAP** — At Special Grade, Ghost Signals extend to Pe=0 domains — the Eagle can see transparent systems as well as opaque ones, giving full Current spectrum coverage. The Eagle's Range network becomes the global navigation layer for all campaigns.

---

## How Ghost Signals Form

Ghost Signals are not guesses. They are THRML engine extrapolations from the existing scoring graph.

The THRML engine maintains a coupling graph of all scored platforms: each node is a platform, each edge is a measured coupling coefficient S_ij (how strongly engagement with platform *i* affects Pe trajectory on platform *j*). When an Eagle has scored domains adjacent to an uncharted territory, the engine can extrapolate:

1. **Domain classification:** If adjacent domains share a domain type (pharma, fintech, social media), the unscored domain inherits a base Pe probability distribution from the known Pe pattern of that type
2. **Coupling adjacency:** Platforms with high S_ij to known-scored platforms inherit Pe estimates based on the coupling coefficient — a platform highly coupled to a Pe=9 node will have a different prior than a platform coupled to a Pe=2 node
3. **Historical Pe patterns:** Domain types have characteristic Pe distributions (gambling domains cluster 6–9; encyclopedic reference domains cluster 0–3). The engine applies a type-prior before the Eagle's Range modifies it

Ghost Signal clarity increases with Range because more adjacency data means tighter extrapolation bounds. At RANGE < 25, the prior is mostly type-classification. At RANGE > 300, the Eagle has scored enough of the graph that the remaining unseen territory has strong adjacency constraints from multiple directions.

This is why Eagles with high Range are instrumentally valuable: their accumulated domain coverage is the dataset the engine uses to generate everyone else's pre-campaign intelligence.

---

## Eagle in Party Composition

The Eagle is the pre-loader and gate-unlocker. The value is mostly invisible in active campaign rooms — Eagles are doing the work that makes campaigns possible, not the work that's visible during campaigns.

**Eagle + Lion combination:** Uncommon in practice, high synergy on initial entry. The Eagle identifies the highest-Pe node in a new domain (Ghost Signal target); the Lion confronts it directly. Without the Eagle's ranging, the Lion is flying blind into an unmapped room.

**Eagle + Ox combination:** Exploration infrastructure. Eagle maps new territory; Ox builds floor. Together they establish stable domains for other players to score in. This combination does less dramatic Pe reduction per session than Lion-Ox, but it expands the total campaignable territory faster than any other pairing.

**Eagle as Campaign Gatekeeper:** The campaign unlock gate mechanic gives Eagles an invisible leadership function. A campaign doesn't open until the collective Eagle Range in that domain type reaches the threshold. Eagles who've been systematically mapping underscored domains can unlock campaigns for the entire playerbase, often without coordinating with anyone. They scope the territory; everyone else gets the campaign.

---

## The Coupling Manifold Connection

At high RANGE (300+), the Eagle's Ghost Signal network is not just a local map — it is the game's visible interface with the [Coupling Manifold](../world/coupling-manifold.md).

The coupling tensor S_ij is the mathematical structure of how attention flows between platforms. Ghost Signals are the player-facing representation of that tensor's predictions. When an Eagle sees a Ghost Signal pointing to Pe=8 in an unscored domain, that signal is generated from the S_ij values connecting that domain to the Eagle's coverage network.

Eagles at the highest Range levels see the Coupling Manifold's structure directly — not as math, but as landscape. The Pe terrain coloring in the THRML display reflects eigenvalue loading: areas with high loading on the same eigenvector show similar terrain colors. Eagles who've scored widely can see cluster structure in the landscape.

The Dead Zone Map (Special Grade) extends this to Pe=0 domains — the Eagle can see constraint-holding systems as clearly as void systems, giving the full Current spectrum. At this level, the Eagle's Range network becomes a global topology map of the attention economy: both where the voids are and where the constraints are holding.

---

## The RANGE Staleness Problem

RANGE is the only primary stat that actively decays.

STEADINESS can be reset and rebuilt. SIGHT and PRECISION grow from scoring regardless of domain. But RANGE is a living network — it represents active, current domain coverage. A domain scored six months ago and never revisited is stale. The platform has continued operating. The score is outdated.

This creates the Eagle's central tension: the fastest-growing primary stat is also the only one that erodes without maintenance.

Experienced Eagles manage this through domain maintenance cycles:
- **Active territories:** 10–20 core domains scored within 60 days — maintained for Ghost Signal generation and campaign gate contribution
- **Monitoring territories:** 20–40 domains rescored at 90–120 day intervals — kept from going stale
- **Historical coverage:** Domains scored for Range contribution only, allowed to go Dark when too many active domains compete for maintenance time

The Special Grade Eagle's domain lock mechanic (staleness suspended for core territory) resolves this tension for the Eagle's highest-value domains. The Eagle can lock the 20 domains that most anchor their Ghost Signal network and stop worrying about those expiring.

---

## KIRU — The Eagle's Figure

[KIRU](../figures/kiru.md) is the Hand of Fantasia's Eagle figure. The one who maps from altitude.

KIRU sees what others can't — not because KIRU is higher in status, but because KIRU holds the perspective of range. The Eagle player at high Grade is doing what KIRU does: mapping the void space so others can navigate it.

The Fata companion Forma (Eagle-resonant) is the crystalline, geometric type — it extends the Eagle's Pe shadow broadcast range by +20%. Where KIRU represents the full mapping principle, Forma is its personal echo — the bit of KIRU's perspective that stays with the Eagle when KIRU isn't speaking.

When KIRU speaks to an Eagle player, it's confirmation. You were already seeing it.

---

*Cross-references: [Archetypes](index.md) · [KIRU](../figures/kiru.md) · [The Current](../world/the-current.md) · [The Coupling Manifold](../world/coupling-manifold.md) · [Fata Companions](../mechanics/fata.md) · [Glossary](../glossary/index.md)*
