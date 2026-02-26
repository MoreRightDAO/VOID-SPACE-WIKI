# Player Grades & Talent Specs

*How calibration depth manifests as mechanical specialization.*

---

## The Grade System

Grade in Twilight of Fantasia is not a level you earn by spending points. It is a classification the system produces when your scoring record demonstrates sufficient accuracy and volume. You cannot grind your way to Grade 1. You cannot purchase it. The framework sees your ICC distribution and classifies accordingly.

This is the core design decision: the game cannot be accelerated by time investment alone. A player who submits 500 low-accuracy scores stays Grade 4. A player who submits 20 high-accuracy scores advances to Grade 2.

**Grade thresholds:**

| Grade | Precision (ρ) | Score volume | Unlocks |
|-------|--------------|-------------|---------|
| **Grade 4 — Novice** | < 0.60 | 1–10 | Basic scoring, Observatory access |
| **Grade 3 — Developing** | ≥ 0.60 | 10–50 | Fleet tasks, Binding Vows, Curtain |
| **Grade 2 — Competent** | ≥ 0.70 | 50–150 | Two-party Vows, Colony Contests, Crafting professions |
| **Grade 1 — Proficient** | ≥ 0.80 | 150+ | Constraint Analysis, Domain Specialist vow |
| **Semi-Special — Expert** | ≥ 0.90 | 300+ | Fata naming, Hogyoku upgrades, Hakhel role |
| **Special Grade — Master** | ≥ 0.95 | 500+ | Player Grimoire, Dissolution Scroll, mentorship, mechanism authorship |

---

## Talent Specs

!!! abstract "Chapter 2"
    Talent specs unlock in Chapter 2 when the Grade 2 scoring interface ships. The Grade classification system is live in Chapter 1, but spec selection and the per-archetype trees below are Chapter 2.

At Grade 2, players unlock talent specs — specialized scoring approaches that provide mechanical depth within their archetype. Twelve specs total, three per archetype. You can change specs, but the stat investment in a spec history is permanent.

---

### Eagle Specs

**Eagle's primary stat:** Range. Eagle players cover territory.

#### Deep Scout
*One domain. Maximum depth.*

The Deep Scout goes where other Eagles won't: into the highest-Pe domain available and maps it systematically. Every score in their primary domain carries +20% ICC weight. Domain reputation in the primary domain scales 2× faster.

**Best for:** Players who want to be the definitive expert on a single adversarial domain (e.g., The Agora, pharma, synthetic bond architecture).

#### Wide Surveyor
*Many domains. The cartographer.*

Wide Surveyor doubles Range accumulation rate. Scores in 5+ different domains in a single day produce a Surveyor's bonus (+15% to all scores that day). The spec rewards breadth and coordination with Deep Scout specialists.

**Best for:** Players who want to cover territory quickly, seed new domains for others, and contribute to the meta-analysis at scale.

#### Signal Eagle
*Resonance specialist. The broadcaster.*

Signal Eagles build Pe shadow broadcasts — pre-seeding domain Current readings before primary scorers arrive. Signal-type scores carry reduced individual ICC weight but amplify the accuracy of all subsequent scores in that domain. Pe shadow broadcast range +25% on the Eagle's Net staff.

**Best for:** Players who want to support other scorers and contribute to campaign preparation rather than direct scoring.

---

### Lion Specs

**Lion's primary stat:** Sight. Lion players confront void architecture directly.

#### Confronter
*Maximum Pe damage. Fire at Pe ≥ 7.*

The Confronter's scoring ability fires at full power only against platforms at Pe ≥ 7 or higher. Below that threshold, the Confronter is performing at baseline. Above it, the Confronter produces the game's highest single-score MORR output and the highest VP reduction from successful scores.

**Shadow vulnerability:** Sustainment. The Confronter has no passive recovery mechanic — a Lion who can't maintain Steadiness loses access to the bonus threshold between streaks.

#### Exposer
*Opacity specialist. Sees through personalization.*

The Exposer ignores the Algorithm Whisper and Constraint Blindness debuffs that would normally reduce Sight scores in Feed-adjacent domains. The Exposer sees the mechanism regardless of how deeply the personalization layer obscures it.

**Best for:** Players primarily operating in The Feed and democratic backslide domains where UBIK and VOID apply opacity as a defense.

#### Storm Lion
*Thrives in Void Storms.*

The Storm Lion is the only spec that produces net positive scoring output during a VoidStorm. All other specs experience accuracy debuffs during storms. Storm Lions gain +20% ICC weight during active VoidStorms and can absorb VP from the room into their own pool at a controlled rate.

**Shadow:** Outside storms, Storm Lion is a standard Lion with no special bonuses. The spec is high-variance.

---

### Ox Specs

**Ox's primary stat:** Steadiness. Ox players hold the line.

#### Keeper
*Invariant Floor specialist.*

The Keeper's defining ability: they can extend the Invariant Floor (Pe cannot rise above current level) to apply to the whole campaign room rather than just themselves. Duration: 6 hours per activation. This is the spec that makes long campaigns survivable for parties.

#### Anchor
*Material generation. The logistics specialist.*

The Anchor generates Invariant Core materials passively — one per day of active scoring above Steadiness Day 7. Invariant Cores are essential for high-level Fortifier crafting. The Anchor is the economy's Ox contribution.

#### Endurance Ox
*Streak mechanics specialist.*

The Endurance Ox has two unique mechanics: streak immunity (one per month — a missed day doesn't break the streak) and double Logos regeneration at Steadiness ≥ 30. Combined with the Invariant Plate's 4-piece bonus (at VP=0, all ICC scores +0.05), a high-level Endurance Ox with clean Vow discipline is the hardest player in the game to destabilize.

---

### Human Specs

**Human's primary stat:** Integration. Human players see all archetypes.

#### Adjudicator
*Contested scores specialist. The arbiter.*

When two scorers disagree on a platform Pe by ≥ 2.0, an Adjudicator can call a Contested Score Review. The Adjudicator's own score carries 3× weight in this review. Adjudicators earn MORR from every contested score they resolve correctly.

**Best for:** Players who want to operate in high-dispute domains (The Agora, academic capture) where contested scores are common.

#### Integrator
*Sees all archetype abilities. The multi-tool.*

The Integrator can temporarily access one ability from any other archetype once per campaign. Signal Eagle's broadcast range, Storm Lion's storm bonus, Keeper's Invariant Floor — all accessible for one activation each per campaign.

**Tradeoff:** The Integrator's own archetype ability (Resonance Cascade) charges 50% slower. This spec requires party coordination to be effective.

#### Chronicler
*Archivist profession depth specialist.*

The Chronicler unlocks the full Archivist recipe tree at Grade 2 instead of Grade 3. Pe History Scrolls produced by Chroniclers carry a provenance seal — new players who use a Chronicler's scroll receive a Trust bonus on the first score they make in that domain.

**Best for:** Players who want to build the institutional memory layer — Pe history records, pattern maps, Logos Fragments.

---

## Party Composition Bonuses

Four archetypes in one party triggers the **Full Composition Bonus:** +10% all stats for the duration of the session.

Partial composition bonuses:

| Composition | Bonus |
|-------------|-------|
| 3 different archetypes | +5% all stats |
| Lion + Human | +15% contested score power |
| Eagle + Ox | +20% domain coverage speed |
| All four | +10% all stats + VoidStorm role bonuses active |

---

## Covenants (Guilds)

Up to 50 players. Covenants are domain-specialized groups that pool materials, share scoring goals, and coordinate campaign strategy.

**Covenant mechanics:**
- **Domain Allegiance:** One primary domain per Covenant. Reputation in that domain scales 25% faster for all members.
- **Covenant Bank:** Shared material storage. Members contribute; the bank distributes based on role assignments.
- **Covenant Project:** A shared scoring goal. When the project completes, all participants receive bonus reputation and materials.
- **Covenant Rank:** Leaderboard position. First Covenant globally to reach Exalted in a domain receives a 30-day Covenant Blueprint (craftable unique item, never reprinted).

**Fireteam (sub-guild):** A named, persistent 4-player party within a Covenant. Fireteam composition is tracked separately for bonuses.

---

## Level 40 — The Form Moment

At the threshold between Grade 1 and Semi-Special, a player earns their first **WoW Form** (Titan-shift equivalent). This is the Level 40 moment:

1. Campaign completes
2. The server checks: has this player earned a new Form?
3. Three.js sequence fires: the archetype card cracks open and the Form's symbol burns in (5-second hold — no skip)
4. Observatory broadcasts to all active players
5. Leaderboard badge gains a secondary glyph
6. Campaign rooms the player enters show an aura color-shift while in non-base Form

Forms are not cosmetic. Each Form represents a specific capability extension — the Lion-path Forms extend confrontation at different Pe thresholds; the Ox-path Forms extend the Invariant Floor in different dimensions. Full Forms table: `game-level40-systems.md §20.10`.

---

## Catch-Up Mechanics

The game is designed so that Season 4 players compete with Season 4 peers, not Season 1 veterans.

| Mechanic | Effect |
|----------|--------|
| **Returning Player Buff** (3+ days inactive) | 2× material drops for 3 sessions |
| **Streak Amnesty Item** (craftable) | Consumes one missed day without breaking streak |
| **Domain Catch-Up Scaling** | +25% rep gain until you've reached community average rep in that domain |

---

*Back to: [Mechanics](index.md) · [Stats](stats.md) · [Equipment](equipment.md)*
