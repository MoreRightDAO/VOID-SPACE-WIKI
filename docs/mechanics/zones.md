---
title: Pe Regimes & Zone Atmosphere
tags: [mechanics, pe, zones, atmosphere, channeling, void-pressure]
---

# Pe Regimes & Zone Atmosphere

The void is not uniform. Its character changes with its Pe.

Every domain in Fantasia exists in one of four **regimes** determined by its current Péclet number. Regime governs aesthetics, VP exposure, scoring multipliers, movement, name corruption, and enemy density. Regime is not flavor — it is physics.

On top of the baseline regime, each **sin-domain class** adds a type modifier that stacks multiplicatively. A Greed domain at CONTESTED plays differently from an Envy domain at CONTESTED, even at the same Pe.

---

## The Core Visual Rule

**Fire at Pe 4–21. Ice at Pe > 21.**

Active drift is hot and moving. Completed drift is frozen.

The counterintuitive truth: the most dangerous-*looking* zones (CONTESTED, full fire aesthetics) are still in motion — you can still interrupt them. The frozen domains (DRIFTING, Pe > 21) already completed their drift. Rescue work costs more. Everything about them resists change.

Dante's Inferno got the thermodynamics right. Satan is encased in ice at Cocytus — not fire. The game inherits this visual language deliberately.

---

## The Four Regimes

### ANCIENT — Pe < 0 (sustained 30+ days)

*The Empyrean. Supralunary. Beyond Pe measurement.*

| Effect | Detail |
|--------|--------|
| **Aesthetic** | Gold border, soft white-gold light, geometry pristine |
| **CAOLÍN** | Full brightness, extended reach |
| **VP** | Passive VP drain suspended. CHANNEL costs 0 VP bleed. |
| **Scoring** | ICC weight +10% (constraint has historical depth here) |
| **Loot** | Deep lore items, unique Tier 5 recipes, Invariant Fiber drops freely |
| **Threat** | Egregor aggro suspended. Void entities cannot path here. |
| **Movement** | No pull force — F_in ≈ 0 |
| **Name rendering** | Clear. No corruption. Full domain name visible. |

This is the Paradiso zone. Not many domains reach it. A domain scoring Pe ≈ −125 (the Aspirin-class extreme) is the canonical example — so thoroughly constrained for so long that the void has no foothold.

ANCIENT feels like surfacing. Pull force releases. CAOLÍN brightens suddenly. Gold floods the domain edges.

!!! note "Reaching ANCIENT"
    ANCIENT requires sustained Pe < 0 for 30+ consecutive days — not just a single scoring event. The domain's historical depth matters. Domains with hysteresis restoration costs stack against you: Pe must drop AND stay dropped.

---

### STABLE — Pe 0 to 4

*Purgatorio. Drift reversal is real here. The work is real.*

| Effect | Detail |
|--------|--------|
| **Aesthetic** | Amber haze beginning, natural light, geometry intact but softening |
| **CAOLÍN** | Bright (VP=0 condition holds most of the time) |
| **VP** | Low passive drain only when idle > 10 minutes. No bleed while channeling. |
| **Scoring** | Standard multiplier. Kin Selection bonuses active. |
| **Hysteresis** | If this domain was higher Pe: 3× restoration cost to raise again |
| **Movement** | Pull force present but weak. Comfortable to work in. |
| **Name rendering** | Clear. INTERFERENCE at Pe 1–2.5 (faint edge fuzz only). |

STABLE is where most scoring happens. Not safe — the void can still rise — but survivable. The Purgatorio mechanic: there's actual work to do, it costs something, and you can do it.

**Phase Riding window: Pe 3.5–5.0** is the THRML transition zone. Scoring here catches the domain at maximum sensitivity — small inputs have large effects on trajectory.

---

### CONTESTED — Pe 4 to 21

*Inferno (Upper) → Malebolge. The fire zone. The cascade is still active.*

Subdivided internally — the experience changes as Pe climbs — but the same regime rules apply throughout.

| Effect | Pe 4–8 | Pe 8–13 | Pe 13–21 |
|--------|--------|---------|---------|
| **Aesthetic** | Orange-red glow, geometry distorting, City of Dis at horizon | Deep red-black, structural visible collapse, full visual distortion | Malebolge topology — terrain fractures, void geometry |
| **VP** | CONTESTED ramp begins | Ramp increases | 0.05×/tick |
| **Egregor aggro** | Not yet spawning | Active spawning | Full aggro density |
| **Name rendering** | PARTIAL DRIFT | FULL DRIFT | VOID NOISE (zalgo diacritics) |
| **Sight debuff** | −5% | −10% | −15% |
| **Hysteresis** | 7× restoration cost if knocked out of CONTESTED |

**Special (Pe > 13): Langevin double-well.** The domain can spontaneously re-drift after scoring. You need sustained pressure, not a single score event.

The fire aesthetic tells you the right thing: the cascade is still moving, things are still in play, you can still interrupt it. That is the correct read of CONTESTED — danger without finality.

---

### DRIFTING — Pe > 21

*Cocytus. Drift complete. Frozen. The void entity at the center cannot move.*

| Effect | Detail |
|--------|--------|
| **Aesthetic** | Ice and stillness. Deep blue-black, crystalline formations, world geometry locked. Light bends toward the Pe center. |
| **CAOLÍN** | Nearly dark — visible only as a faint outline. |
| **VP** | **2× VP exposure.** 0.12×/tick ambient bleed. CHANNEL costs double. |
| **Scoring** | **2× MORR multiplier.** The bounty is high because the danger is real. |
| **Egregor aggro** | Maximum. Void strategies ESS-stable here — home-field advantage. |
| **Hysteresis** | **15× restoration cost.** This domain does not want to leave DRIFTING. |
| **Name rendering** | VOID NOISE maximum. Near-unreadable without True Read. |
| **Movement** | Heavy pull drag. Speed −20% baseline. RANGE stat suppressed — influence radius contracts. Melee channelers required for the finishing blow. |
| **Sight** | −25%. Eagle archetype significantly impaired. |

**Fisher Runaway trigger at Pe > 38:** Server-wide event. 3× additional MORR bounty. Void strategies become autocatalytic — every failed score attempt raises Pe further. The whole server knows when a domain hits runaway.

**Type I domains only (Gambling, Druggery-class):** No CONTESTED sub-phase. These domains flip STABLE → DRIFTING directly, with no warning. The floor falls out. This is why knowing domain class matters.

!!! warning "Rescue vs. Prevention"
    DRIFTING is rescue work, not prevention. The domain already drifted. Everything costs more. Everything pays more. Bring the right party composition — the ice aesthetic is the accurate signal.

---

## Sin-Domain Type Modifiers

These stack **multiplicatively** with the regime baseline. They do not replace it.

Each sin-domain class has a specific coupling vector — the way that sin captures attention differently from others. Aquinas identified seven sins as distinct low-independence (low-α) mechanisms. The type modifier is the game expression of that mechanism.

| Domain Class | Sin | Type Modifier | Best Archetype Counter |
|--------------|-----|---------------|----------------------|
| **Pharma / Addiction** | Gluttony | VP bleed rate ×1.5 in CONTESTED+. Higher Null Weave drop rates. | Ox (sustain through bleed) |
| **Outrage / Political** | Wrath | Egregor aggro escalates 2× faster. But: scoring while CONTESTED grants **Wrath Resistance** buff (+15% Egregor aggro reduction, 6h). | Lion (tanking aggro, wears the buff) |
| **Social Comparison** | Envy | SIGHT stat −20% specifically (comparison distorts perception). **Ghost Scan** ability reveals Envy-domain coupling in party members. | Human (Sight as primary stat counters) |
| **Self-broadcast / Status** | Pride | Logos costs ×1.3 for all abilities. **Binding Vow bonus does NOT apply** — Pride domains reject the galdr declaration. | Eagle (low Logos base cost) |
| **Coupling / Companionship** | Lust | STEADINESS drain ×1.5. Channeling pull force F_in acts on player TOWARD domain even after stopping channel. Requires explicit galdr declaration to break pull. | Ox (STEADINESS primary) |
| **Fintech / Acquisition** | Greed | Material drop rate ×2 BUT each pick-up costs +1 VP (acquisition has a price). Scoring multiplier +10% additional. | Eagle (wide sweep, manage VP cost) |
| **Streaming / Passive** | Sloth | Movement speed −15% EVEN in STABLE. VP bleed starts at Pe=2 instead of Pe=4. The beginner trap — no visual warning. | Any — awareness is the counter |

**The Sloth trap:** Every other sin-domain telegraphs danger. Wrath spawns enemies. Lust pulls you. Envy blinds you. Sloth does none of these things visibly. You're still in amber-haze Purgatorio aesthetics. But your feet are already in the mud at Pe=2. Players who are casually checking Observatory scores will find a Pe=6 streaming platform before they realize they've been in the gradient.

---

## Zone Entry Signals

Players should feel regime transitions before they check the UI.

| Transition | Signal |
|------------|--------|
| STABLE → CONTESTED (Pe=4) | City of Dis walls appear at the horizon. Amber to orange color shift. First VP bleed tick. |
| CONTESTED → DRIFTING (Pe=21) | Color temperature drops — orange to blue-black. Ice crystallization on terrain edges. Movement drag. VP bleed doubles (UI pulse rate changes audibly). |
| Any → ANCIENT (Pe drops to 0) | Gold border floods domain edges. CAOLÍN brightens suddenly. Pull force releases. |
| Fisher Runaway (Pe > 38) | Server broadcast. Sky color shifts all domains. The whole server knows. |
| Type I flip (STABLE → DRIFTING) | Instantaneous. No warning except domain type knowledge. |

A player with enough experience should estimate regime from aesthetic alone, without looking at Pe numbers. Dante's travelers knew what circle they were in by the weather.

---

## Stacking Example

*Pe=9, Envy-class domain (social comparison platform):*

**Regime baseline (CONTESTED, Pe 8–13):**

- VP ramp ~0.03×/tick
- Egregor aggro active
- Name: FULL DRIFT
- Sight −10%
- Deep red-black aesthetic, full distortion

**+Envy type modifier:**

- Sight −20% additional → **total Sight −30%**
- Ghost Scan reveals coupling in party members

**Net experience:** Navigating with severely limited vision in a domain specifically designed to distort perception. The Envy domain experience — you can't see clearly, your party might be compromised, and the void targets the faculty you need to score it accurately.

**Counter:** Bring a Human archetype (Sight primary stat) or use True Read before entry. Ghost Scan your party before engaging the Egregor.

---

## See Also

- [Channeling](channeling.md) — VP bleed mechanics at the source
- [Void Pressure](void-pressure.md) — what accumulated VP costs you
- [The Binder](binder.md) — why domain class matters for Binding Game matching
- [Drift Encoding](drift-encoding.md) — name corruption progression detail
- [THRML](thrml.md) — the physics engine driving Pe
