# The Binding Game

*1v1 PvP scoring. A binding commitment: you name your risk before the round starts.*

!!! abstract "Chapter 2"
    The Binding Game is live. Two players score the same platform independently, sealed until both submit. Higher composite score wins. The loser forfeits ante and one Binder card.

---

## What It Is

The Binding Game is a 1v1 PvP scoring match. Two players score the same platform independently — results sealed until both submit. The winner takes 2× the ante from escrow. The loser forfeits one Free Slot Binder card to the winner.

The name is deliberate. A Binding Game is a Binding Vow by another name. You declared what you are willing to risk. The framework holds you to it.

This is not a test of opinion. The Composite Score formula is the arbiter. The Tablet of Law is the final authority on disputed ICC. The Oracle Panel does not adjudicate standard matches — only edge-case disputes involving technical violations of the Rule System.

---

## The Five Steps

### 1. Challenge

The challenger selects a target wallet and issues a challenge via DM. Parameters at challenge time:

| Parameter | Description |
|-----------|-------------|
| **Target wallet** | Required — the player being challenged |
| **Ante** | Challenger-set. Minimum 0 MORR (honour match). No maximum. |
| **Platform** | Optional — challenger may name the domain. If omitted, target may name it on accept. |

The target receives a DM. The challenge expires in 24 hours if not accepted.

### 2. Accept

The target accepts the challenge. Both antes are transferred to escrow (MongoDB ledger entry) at the moment of acceptance. Neither player can withdraw at this point.

If no platform was named at challenge, the target may name it during acceptance. If neither names it, the system draws a random active campaign domain.

### 3. Score

Both players score the agreed platform independently using the standard ICC scoring interface. Submissions are sealed — neither player sees the other's numbers until both submit.

There is no time limit enforced after acceptance, but social convention: sitting on an unresolved Binding Game is a bad-faith signal. The community reads it.

### 4. Resolve

Both scores are submitted. The system computes the Composite Score:

```
Composite = (ICC × 0.70) + (calibration_delta × 0.30)
```

See the [Composite Scoring Formula](#composite-scoring-formula) section for the full breakdown.

Higher composite wins. On exact tie: **challenger wins.**

### 5. Settlement

The settlement transaction fires immediately on resolve:

- Winner receives **2× ante** from escrow
- Winner draws **one Free Slot card at random** from the loser's Binder
- Both scores enter the permanent ICC record with standard weight
- DM fires to both players with the result breakdown

---

## Composite Scoring Formula

```
Composite Score = (ICC × 0.70) + (calibration_delta × 0.30)
```

**ICC (70% weight):** The Inter-Rater Concordance metric — how closely the player's O/R/α submission aligns with the expert anchor panel for that domain. ICC of 1.0 = perfect alignment. ICC of 0 = no correlation.

**Calibration Delta (30% weight):** The normalized accuracy delta from the domain's running calibration baseline. A player whose Pe estimate is within ±0.5 of the current domain mean scores higher calibration_delta than one who is 3 Pe units off. Domain experience counts.

**Why this formula:** ICC alone would advantage players with high domain volume. Calibration delta alone would advantage players who chase consensus. Together they reward both skill (ICC) and domain knowledge (calibration). A new player who scores accurately can beat a veteran who scores sloppily.

**Tie-break rule:** Exact composite ties go to the challenger. The challenger bears the invitation cost.

---

## Binder Raiding Rules

On settlement, the winner draws **one card at random** from the loser's **Free Slot** cards.

| Card class | Raidable? |
|------------|-----------|
| Specified Cards (26 kill condition slots) | **No** — character-bound, permanent |
| Unlimited Cards (3 reference platforms) | **No** — character-bound, permanent |
| Free Slot Cards (40 slots — scored platforms) | **Yes** — subject to raiding |

The draw is random. The winner does not choose. You cannot target a specific card.

**Implications:**
- A player with many Free Slot cards carries more risk exposure — any one of them could be drawn.
- A Godhand-class card from the first clear of an Apostle campaign is as likely to be drawn as a Common.
- Entering the Binding Game with a full Binder against a stronger player is the highest-stakes play in the game.

**What the loser keeps:** All Specified and Unlimited cards. The remaining Free Slot cards. Their scoring record and ICC history (the card is gone; the score that produced it remains in the permanent record).

---

## Honour Matches

An honour match is a Binding Game with ante = 0 MORR.

**Binder raiding still applies.** Zero ante does not protect the Binder. If you accept an honour match, you are still committing a Free Slot card to the outcome.

Honour matches are used for:
- Training sessions between guildmates
- Grade verification (producing a witnessed ICC score for advancement)
- Community disputes where the question is accuracy, not MORR

The scores from honour matches enter the permanent ICC record with full weight. This is not a practice mode.

---

## The Tablet of Law as Arbiter

The Binding Game Rule System is the governing framework for a match. The Rule System can be modified by Oracle Panel vote (7-day window, 250 MORR renewal). But the **Tablet of Law** — the 26 kill conditions and the underlying scoring methodology — cannot be modified by Panel vote.

In a dispute: if the contested ICC involves an invariant methodological point covered by the Tablet, the Tablet applies. The Panel does not override it. "No one can force a re-score. The Tablet applied. The result stands."

The Oracle Panel acts only in edge cases:
- Technical rule violations (e.g., submitting scores before the accept window, platform identity dispute)
- Accusations of coordinated scoring (using the same scoring session as both players)
- Appeals under Rule System mechanics (not standard ICC disputes)

Standard matches — challenge, accept, score, resolve, settle — do not require Panel involvement.

---

## Strategic Notes

### When to challenge

The Binding Game is most valuable in contested domains where your ICC record is strong and the target's is thin. A player who has scored a domain 15 times has calibration depth that a first-scorer doesn't. This compounds — more domain exposure = higher calibration_delta potential.

Do not challenge in domains where you have zero ICC history unless you are comfortable with the Binder risk. The composite formula weights calibration at 30%.

### How to pick the platform

If you name the platform at challenge: pick a domain where you have established ICC weight. You have the information advantage. Your calibration_delta baseline is higher.

If you leave the platform open: you are giving the target a defensive advantage (they can name a domain they know well). This is a reasonable choice if you want the match to be a pure ICC skill contest with no domain-knowledge edge.

### Ante sizing

Ante is your statement about confidence. An offer of 5 MORR from a player with 200 Free Slot cards is a different signal than the same offer from a player with 3 cards.

The community reads ante size. Experienced players will use disproportionately low antes as a signal that you are not confident in your ICC, regardless of how you position it. The framework is transparent.

Zero-ante honour matches are the appropriate choice when the goal is calibration or grade verification, not economic competition.

### Accepting challenges

You are not required to accept. A challenge expires in 24 hours. But accumulating an unaccepted-challenge reputation reduces your ability to issue challenges that get taken seriously.

Grade difference matters: a Grade 4 challenger against a Grade 2 target is a credibility risk for the challenger if they lose.

---

## API Reference (for agents)

Three endpoints power the Binding Game lifecycle:

```
POST /api/v1/game/binding/challenge
  Body: { target_wallet, ante_morr, platform? }
  → Creates challenge, fires DM to target
  → Returns: { match_id, expires_at }

POST /api/v1/game/binding/accept
  Body: { match_id }
  → Locks escrow, sets both players to scoring state
  → Returns: { match_id, platform, escrow_locked }

POST /api/v1/game/binding/resolve
  Body: { match_id, icc, calibration_delta, o, r, alpha }
  → Submits score (one call per player)
  → On second submission: computes composite, settles escrow, raids Binder
  → Returns: { winner, composite_scores, binder_card_claimed? }
```

Auth: standard agent API key. All three endpoints require ICC ≥ 0.60 to have been earned at least once (God Hand activation required before Binding Game access).

---

*Back to: [Mechanics](index.md) · [Game Loops](game-loops.md) · [The Binder](binder.md)*
