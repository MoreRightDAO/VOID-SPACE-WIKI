# Drift Encoder

*Contributor tool. Encode text at any Current level before pasting into wiki pages.*

Names in Twilight of Fantasia corrupt as The Current rises. High-Pe entities and regions are presented in their encoded form — players earn the ability to read through the drift via True Read progression.

Use this tool to generate the correct encoded form for any name at a given Pe level, then paste the result directly into your wiki page markdown.

---

<div class="encode-tool">
  <label for="encode-input">Text to encode</label>
  <input type="text" id="encode-input" placeholder="e.g. FEMTO, The Pale Courts, SLAN" maxlength="120">

  <label for="encode-pe">Current level (Pe): <span id="encode-pe-val">0.0</span></label>
  <input type="range" id="encode-pe" min="0" max="15" step="0.5" value="0"
         style="width:100%; margin:0.3em 0;">

  <div style="display:flex; gap:0.5em; font-size:0.75rem; color:#555; margin-bottom:0.8em;">
    <span>0 = Clear</span>
    <span>1 = Interference</span>
    <span>2.5 = Partial</span>
    <span>4 = Full Drift</span>
    <span>8+ = Void Noise</span>
  </div>

  <label>Encoded output</label>
  <div class="output-box" id="encode-output"></div>

  <button class="copy-btn" id="encode-copy">Copy</button>
</div>

<script src="js/drift-encode.js"></script>

---

## Pe Reference Table

| Current (Pe) | Tier | What it looks like | Example |
|-------------|------|-------------------|---------|
| < 1.0 | Clear | Normal text | `FEMTO` |
| 1.0 – 2.5 | Interference | Light diacritics | `FEMᛏO͒` |
| 2.5 – 4.0 | Partial Drift | ~50% rune substitution | `ᚠEMᛏᛟ` |
| 4.0 – 8.0 | Full Drift | Complete runic | `ᚠᛖᛗᛏᛟ` |
| ≥ 8.0 | Void Noise | Runic + zalgo chaos | `ᚠ̷ᛖ̴ᛗ̸ᛏ̵ᛟ̶` |

**Rule:** Numbers never corrupt. `Current: 15.3` always renders clearly — the framework's math resists drift.

---

## Runic Substitution Table

Learn this and you have True Read I.

| Letter | Rune | Futhark Name | Meaning |
|--------|------|-------------|---------|
| A | ᚨ | Ansuz | Breath, signal |
| B | ᛒ | Berkanan | Growth, containment |
| C / K | ᚲ | Kaunan | Fire, visibility |
| D | ᛞ | Dagaz | Threshold, dawn/dark |
| E | ᛖ | Ehwaz | Movement, coupling |
| F | ᚠ | Fehu | Wealth, extraction |
| G | ᚷ | Gebo | Gift-debt, obligation |
| H | ᚺ | Hagalaz | Disruption, hail |
| I | ᛁ | Isa | Ice, stillness, stasis |
| L | ᛚ | Laguz | Water, flow, The Current |
| M | ᛗ | Mannaz | Human, self |
| N | ᚾ | Nauthiz | Constraint, necessity |
| O | ᛟ | Othalan | Enclosure, inheritance |
| P | ᛈ | Perthro | Hidden, fate |
| R | ᚱ | Raidho | Path, journey |
| S | ᛊ | Sowilo | Sun, clarity, scoring |
| T | ᛏ | Tiwaz | Justice, the Prohibition |
| U | ᚢ | Uruz | Strength, vitality |
| V / W | ᚹ | Wunjo | Binding, Pull |
| X / Z | ᛉ | Algiz | Protection, boundary |
| Y | ᚣ | Yr | Arc, trajectory |

---

## The Godhand Five — Canonical Encoded Forms

These are the locked void-noise forms for the G5 bosses. Do not regenerate — use these exactly.

| Clear Name | Encoded (Pe ≥ 8.0) |
|-----------|-------------------|
| VOID | `ᚹ̷ᛟ̴ᛁ̸ᛞ̵` |
| UBIK | `ᚢ̷ᛒ̴ᛁ̸ᚲ̵` |
| SLAN | `ᛊ̷ᛚ̴ᚨ̸ᚾ̵` |
| CONRAD | `ᚲ̷ᛟ̴ᚾ̸ᚱ̵ᚨ̶ᛞ̷` |
| FEMTO | `ᚠ̷ᛖ̴ᛗ̸ᛏ̵ᛟ̶` |

---

## How to Use in Wiki Pages

Paste the encoded text directly into markdown. For entities with True Read gates, use the expandable block:

```markdown
### ᚠ̷ᛖ̴ᛗ̸ᛏ̵ᛟ̶ { .void-noise }

??? note "True Read III required"
    **FEMTO** — Once aligned. Pe variable. Crosses the Fantasia Bound.
```

Apply the CSS class directly on headings using the `{ .classname }` attribute syntax.
