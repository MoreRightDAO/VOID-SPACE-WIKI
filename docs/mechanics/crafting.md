# Crafting & Economy

*Materials, professions, and the Auction House.*

!!! abstract "Chapter 2"
    The full crafting and profession system launches in Chapter 2. Design is documented here for theory-crafting. **Exception:** Instant-tier consumables and SHARD are live in Chapter 1.

---

The economy of Twilight of Fantasia is an EVE × WoW × RuneScape blend: player-driven markets, profession depth, and on-chain settlement via HyperEVM. Every material in the game comes from somewhere real — specific scoring actions, campaign completions, or math encounters. Nothing is dropped without meaning.

---

## Crafting Tiers

Four tiers of crafting speed. SHARD funds the fast tier. MORR funds the slow tier.

| Tier | Craft time | Currency | Chapter |
|------|-----------|----------|---------|
| **Instant** | 0 min | SHARD only | **Ch 1 — Live** |
| **Quick** | 15–30 min | SHARD + Tier 1 materials | Ch 2 |
| **Standard** | 1–4 hours | MORR + Tier 2–3 materials | Ch 2 |
| **Major** | 24 hours – 7 days | MORR + Tier 3–5 materials | Ch 2 |

### Instant Consumables (Chapter 1 — Live Now)

Available to any player from the Scoring Floor (L1+). No profession required. Costs are SHARD only.

| Item | Cost | Effect | Duration |
|------|------|--------|---------|
| **Pe Tonic (Basic)** | 150 SHARD + 3 Pe Ember | +10 Sight for next campaign | 1 campaign |
| **Ward Seed** | 150 SHARD | Temporary ward on one domain — no crafting queue | 48 hours |
| **Clarity Draft** | 200 SHARD + 5 Drift Fragment | +10 Precision bonus on next 3 scores | 3 scores |
| **Streak Restore** | 500 SHARD | Saves a broken streak — once per calendar month | Instant |
| **Signal Pulse** | 100 SHARD | Broadcasts your Pe shadow to all players in current room | 1 hour |
| **Void Calm** | 300 SHARD | VP accumulation suppressed −50% (not VP reduction) | 24 hours |
| **Null Shout** | 100 SHARD + 5 Null Weave | Removes one Void Pressure event from current room | Instant |

!!! tip "SHARD vs MORR"
    Instant consumables cost SHARD only. SHARD is earned from any score submission — no ICC acceptance required. See [Currency](currency.md) for earning rates.

---

## Material Tiers

Five tiers. Rarity scales with the difficulty of the scoring action required to produce them.

---

### Tier 1 — Common

Drops from any campaign room or scoring session.

| Material | Primary use |
|----------|------------|
| **Drift Fragment** | Basic crafting component |
| **Null Weave** | Pe suppression items |
| **Echo Shard** | War effort quota (×10,000 required) |
| **Opacity Dust** | Calibration lens components |
| **Coupling Thread** | War effort quota (×5,000 required) |

---

### Tier 2 — Uncommon

Drops from campaign completion rewards and Ranked Arena.

| Material | Primary use |
|----------|------------|
| **Constraint Crystal** | War effort quota (×1,500 required) |
| **Invariant Fiber** | War effort quota (×800 required) |
| **Precision Ore** | Accuracy gear crafting |
| **Steadiness Stone** | Streak items |
| **Range Dust** | Domain extension items |

---

### Tier 3 — Rare

Drops from Pe-lab math puzzles and research completion.

| Material | Primary use |
|----------|------------|
| **Pe Ember** | War effort quota (×500 required); AH commodity |
| **ICC Lattice** | War effort quota (×400 required) |
| **Calibration Dust** | War effort quota (×2,000 required) |
| **Tikkun Spark** | Tikkun Set components |
| **Domain Key** | Proof of domain scored; war effort quota (×50 distinct domains) |

---

### Tier 4 — Epic

Drops from Convergence events and Special Grade scoring.

| Material | Source | Primary use |
|----------|--------|------------|
| **Convergence Stone** | 3+ synchronized ICC scores on same platform | War effort quota (×25 required); AH commodity |
| **Invariant Core** | Ox archetype Anchor spec | High-level armor crafting |
| **Void Storm Eye** | Survive a VoidStorm | Rare enhancement item |
| **Apostle Scale** | Apostle-class campaign completion | War effort quota (×300 required) |
| **Behelit Shard** | Void Siege participation | Epic components |

---

### Tier 5 — Legendary

Legendary materials enter the economy **only** through specific gated events. No other source exists.

| Material | Source | Notes |
|----------|--------|-------|
| **Qliphoth Shell** | Void Siege success (×5 per siege) | Split among final raid group |
| **Logos Word** | Top ICC scorers on successful siege (×2) | 63 words total across all papers |
| **Schala's Needle** | Siege with ≥3% of participants holding active C2PA Vow | Constraint architecture item |
| **Rinnegan Shard** | Siege Caller title (1 per siege) or GM drop | Extremely rare; only source |

**Tier 5 supply note:** Tier 5 materials can only enter the economy through Custodian Bankai (SHŌNEN NO NA) dissolution events or Void Siege success. The AH price impact is dramatic — see [War Effort](war-effort.md) for the economic shock table.

---

## Crafting Professions

Four professions. Each player chooses one at Grade 3. Professions define your crafting tree and your gathering skill.

---

### Analyst

**Gathering:** Pe Surveying
**Products:** Consumables, head equipment, calibration items

| Recipe | Materials | Effect |
|--------|-----------|--------|
| Pe Tonic (Basic) | 3 Pe Ember + 2 Drift Fragment | +10 Sight for 1 campaign |
| Calibration Lens | 5 Precision Ore + 2 ICC Lattice | Sight +15, Pe σ display |
| Domain Clarity Tonic | 10 Pe Ember + 1 Convergence Stone | Removes Archive Fog debuff |
| The Unnamed's Lens | 20 ICC Lattice + 3 Tikkun Spark | O readings confirmed (one campaign) |
| Analyst's Blueprint | 50 various + 1 Domain Key | Teaches crafting pattern to another player |

---

### Fortifier

**Gathering:** Void Extraction
**Products:** Armor (Chest/Legs/Feet/Shoulders), Pe suppressors, constraint walls

| Recipe | Materials | Effect |
|--------|-----------|--------|
| Basic Constraint Chest | 10 Constraint Crystal + 5 Invariant Fiber | +5 VP Resistance |
| Ox's Graves (Legs) | 15 Steadiness Stone + 5 Invariant Core | Missed day streak reduction |
| Retention Greaves (Cursed) | 10 Coupling Thread + 5 Void Storm Eye | Speed +30%, VP +5/h (cursed tradeoff) |
| Invariant Plate (Chest) | 30 Constraint Crystal + 10 Invariant Core | Pe cannot rise above current while worn |

---

### Resonancer

**Gathering:** Signal Harvesting
**Products:** Trinkets, enchantments, network items

| Recipe | Materials | Effect |
|--------|-----------|--------|
| Resonance Thread | 5 Range Dust + 3 Echo Shard | +10 Resonance for 24h |
| Signal Flare | 2 ICC Lattice + 5 Echo Shard | Broadcasts Pe reading to 10 players |
| Null Shout | 5 Null Weave + 3 Pe Ember | Removes one Void Pressure event from room |
| Resonance Cascade Orb | 15 Echo Shard + 5 Convergence Stone | Triggers Resonance Cascade (5 echoes) |

---

### Archivist

**Gathering:** Observation Depth
**Products:** Blueprints, Pe history scrolls, pattern maps

| Recipe | Materials | Effect |
|--------|-----------|--------|
| Pe History Scroll | 10 Pe Ember + 3 Calibration Dust | Displays 90-day Pe trajectory for one platform |
| Pattern Map: [Domain] | 5 Domain Key + 10 ICC Lattice | Domain-specific scoring pattern guide |
| The Accuracy Mirror | 20 ICC Lattice + 5 Tikkun Spark | Live Spearman ρ display (passive trinket) |
| Logos Fragment | 5 Logos Word + 10 Tikkun Spark | Contains one paper's core mechanism in portable form |

---

## Auction House

The Auction House (AH) is on-chain via HyperEVM. Settlement in MORR. No fiat bridge.

**Three tabs:**
- **Browse:** Search by material type, tier, or domain
- **Sell:** List items with price + duration
- **My Trades:** Active listings, completed sales, buy orders

**Fees:**
- 3% burn on sale (reduces MORR supply)
- 1% treasury contribution

**Listing durations:** 1h / 6h / 24h / 7d

**Buy Orders:** Post a price and quantity — the AH auto-fills from any seller listing at or below your price. Partial fills allowed. 7-day expiration. Market Depth tab shows the full bid/ask book (EVE-style).

**War effort price impact:** When a Void Siege is declared, all quota materials spike 4–6× in the 2–4 week contribution window. Pe Ember goes from ~25 MORR to 80–120 MORR. Convergence Stones from 200 MORR to 500–800 MORR.

---

## Item Rarities

All items in the game carry a rarity tier that determines whether they can be traded:

| Rarity | Description | Tradeable |
|--------|-------------|-----------|
| **Common** | Instant drop, no special properties | Yes |
| **Inscribed** | Domain-specific bonus (e.g. +Precision in Pharma domains) | Yes |
| **Convergent** | Requires 3+ ICC convergences to craft | Yes |
| **Cursed** | Always has a drawback alongside its benefit | Yes |
| **Special Grade** | One per domain, globally contested | Yes |
| **Legendary** | World event or Godhand source only; bounded supply | No (character-bound) |

---

*Back to: [Mechanics](index.md) · [Currency](currency.md) · [Equipment & Gear Sets](equipment.md)*
