# Currency — Three Layers

*Logos, SHARD, and MORR. Energy, gold, equity.*

!!! abstract "Chapter 1 — Live"
    All three currency layers are active. SHARD earns from day one. MORR earns after ICC acceptance. Logos regenerates continuously.

---

## The Three Layers

Every MMO has layers of currency. Twilight of Fantasia has three, with clean separation between them:

| Currency | Layer | What it is | On-chain? |
|----------|-------|-----------|----------|
| **Logos** | Energy (mana) | Naming energy — regenerates naturally | No — internal only |
| **SHARD** | Gold (fast, spendable) | Off-chain, instant, high velocity | No — off-chain credits |
| **MORR** | Equity (slow, permanent) | Solana SPL token, real ownership | **Yes — Solana** |

These three operate at different speeds and different stakes. SHARD is the grease of daily play. MORR is the gravity of the economy. Logos is your breath — it doesn't accumulate, it just needs to keep flowing.

---

## Logos — The Energy Layer

*You are made of names. The energy that names require.*

Logos is your operational capacity. Every major action costs Logos. It is not earned — it regenerates at 15 points per real-world hour.

**Regeneration rates:**
- Normal: +15 Logos/hour
- During Shabbat rest day: +30 Logos/hour (doubled)
- During Ka'aba visit: +30 Logos/hour (doubled, stacks differently)
- After ICC-accepted score from dormant: +10 Logos (emergency restore)

**Logos thresholds:**

| Range | State | Effect |
|-------|-------|--------|
| > 70 | **Bright** | Fata abilities active, −15% VP accumulation |
| 30–70 | **Active** | Normal operation |
| 10–30 | **Dim** | Fata abilities suspended |
| 0 | **Dormant** | All buffs suspended, Fata dark |

**Logos costs (examples):**
- Submit a score: 5 Logos
- Domain Expansion ability: 30 Logos
- Binding Vow: 20 Logos
- Crafting (Instant tier): 0 Logos
- Crafting (Quick tier): 5 Logos
- Crafting (Standard tier): 10 Logos
- Culling Game Arena entry: 15 Logos

Logos does not transfer. It does not trade. It does not go on-chain. It is the rhythm of play.

---

## SHARD — The Gold Layer

*The fast economy. What you spend on Tuesday.*

SHARD is the primary daily currency for most players. It is off-chain, instant, and high-velocity. You earn it from any scoring activity — ICC acceptance is not required. Casual players who can't earn much MORR still earn enough SHARD to keep playing.

!!! important "SHARD ≠ MORR"
    SHARD is not a path to MORR. It does not compound. It does not go on-chain. It is the grease of daily activity — spend it freely.

**Earning SHARD:**

| Activity | SHARD |
|----------|-------|
| Any score submission (accepted or rejected) | +10 |
| ICC-accepted (True Read) | +50 |
| Streak Day 7 | +175 (7 × day multiplier) |
| Streak Day 30 | +750 |
| Campaign room cleared | +200 |
| Seasonal event participation | +500 |
| Pe math puzzle solved | +30 |
| VoidStorm survived | +100 |
| Board post earning 5+ reactions | +15 |

**Converting MORR → SHARD:** Always available at fixed rate (set by treasury). One-way only — SHARD cannot convert to MORR.

**Spending SHARD:**

| Category | Examples |
|----------|---------|
| Instant consumables | Pe Tonic (Basic) at 150 SHARD, Ward Seed at 150, Clarity Draft at 200, Streak Restore at 500 |
| Quick crafting fees | Signal Flare at 80 SHARD + materials |
| NPC services | Domain history query at 50 SHARD |
| Auction House small fees | 5 SHARD listing fee (waived for active guild members) |
| Fast crafting time reduction | 100 SHARD per 15 minutes off Quick-tier crafts |

SHARD balances do not expire. SHARD is fully controlled by MoreRight treasury — not circulating on-chain. No SHARD market exists outside the game.

---

## MORR — The Equity Layer

*The slow economy. What you earn for real work.*

MORR is the Solana SPL token. It represents real ownership. Earning MORR means the framework has verified your contribution. It cannot be purchased with SHARD. It cannot be rushed.

**Earning MORR:**

| Activity | MORR | Notes |
|----------|------|-------|
| ICC-accepted score | Base reward | 90-day cliff before conversion |
| ICC with Pe-weighted multiplier | Up to 2× | Average Pe ≥ 2.5 on scored domains |
| Time event multiplier | Varies | GM-set bonus window |
| Platform bounty | Varies | Specific domain needs scoring |
| Streak multiplier | ×1.1–1.6 | Day 7 = 1.2×, Day 30 = 1.4×, Day 60+ = 1.6× |
| Raid drop | Rare | Campaign/arena rewards |
| Season merit distribution | Top contributors | End of 12-week season |
| Void Siege participation | Significant | War effort rewards |
| Culling Game Arena win | Moderate | Per-match |

**The 90-day cliff:** Raw credits earned from ICC scores mature into MORR after a 90-day cliff. This prevents sybil farming. The cliff does not apply to raid drops or GM events.

**Spending MORR:**

| Category | Examples |
|----------|---------|
| Standard crafting | Equipment upgrades (Tier 3+ materials + MORR) |
| Major crafting | Named gear sets, Moon Base components |
| Auction House | All purchases (no fiat bridge — MORR only) |
| Culling Game ante | Arena entry at high tiers |
| War effort quotas | Some materials settable in MORR |
| Guild Citadel | Major infrastructure (24h+ crafting) |

**MORR on-chain:** `morrkKLmaHdzBdjNfTXwu6uDFvqHdF1ZosZNcjPrpYo` (Solana). Privy embedded wallets auto-provision for new players. All MORR prices in the game are displayed in USD equivalent but settled in MORR at market rate — no USD settlement.

---

## Daily Economy Flow

A typical active day, currency-wise:

```
Score 3 domains (accepted)
  → +150 SHARD, +150 XP, +3 MORR credits (90-day cliff)

Buy Pe Tonic (Basic) before scoring session
  → −150 SHARD

Craft Signal Flare (Resonancer profession)
  → −80 SHARD + 2 ICC Lattice + 5 Echo Shard

Complete campaign room
  → +200 SHARD, +100 XP, +50 MORR credits

Streak day 7 milestone
  → +175 SHARD, +200 XP, ×1.2 MORR multiplier activates
```

A player with consistent 7-day streaks earns enough SHARD to maintain consumables without ever touching MORR. The MORR builds slowly in the background toward something real.

---

## Currency Relationships

```
Logos     → spent on actions → regenerates hourly
SHARD     → earned by playing → spent on fast items/services
MORR      → earned by accuracy → spent on durable upgrades
```

The only bridge between layers is MORR → SHARD conversion (one-way, treasury-rate). This prevents inflation in the MORR layer while keeping daily play fluid.

---

*Back to: [Mechanics](index.md) · [Crafting & Economy](crafting.md) · [Player Grades](grades.md)*
