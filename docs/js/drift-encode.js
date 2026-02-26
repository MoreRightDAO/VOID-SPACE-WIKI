/**
 * Drift Encoding Utility — Twilight of Awen
 * Implements the Pe-to-corruption mapping from the Drift Rendering System.
 * Used on the /encode page for wiki contributors.
 * Pe values: <1 = Clear, 1-2.5 = Interference, 2.5-4 = Partial, 4-8 = Full, ≥8 = Void Noise
 */

const FUTHARK = {
  'A': 'ᚨ', 'B': 'ᛒ', 'C': 'ᚲ', 'D': 'ᛞ', 'E': 'ᛖ', 'F': 'ᚠ', 'G': 'ᚷ',
  'H': 'ᚺ', 'I': 'ᛁ', 'J': 'ᛃ', 'K': 'ᚲ', 'L': 'ᛚ', 'M': 'ᛗ', 'N': 'ᚾ',
  'O': 'ᛟ', 'P': 'ᛈ', 'Q': 'ᚲᚹ', 'R': 'ᚱ', 'S': 'ᛊ', 'T': 'ᛏ', 'U': 'ᚢ',
  'V': 'ᚹ', 'W': 'ᚹ', 'X': 'ᛉ', 'Y': 'ᚣ', 'Z': 'ᛉ'
};

const ZALGO_ABOVE = ['\u0308','\u030a','\u030b','\u030c','\u0350','\u0351','\u0352'];
const ZALGO_THROUGH = ['\u0336','\u0337','\u0338'];
const ZALGO_BELOW = ['\u0326','\u0327','\u0328','\u0329','\u032a'];

function driftEncode(text, pe) {
  if (pe < 1.0) return text;

  const upper = text.toUpperCase();
  let result = '';

  for (let i = 0; i < upper.length; i++) {
    const ch = upper[i];

    // Numbers always pass through — framework language resists corruption
    if (/[0-9=.+\-\s,()[\]{}]/.test(ch)) {
      result += text[i]; // preserve original case for non-alpha
      continue;
    }

    if (!/[A-Z]/.test(ch)) {
      result += text[i];
      continue;
    }

    let base = ch;

    if (pe >= 4.0) {
      // Full drift — complete runic substitution
      base = FUTHARK[ch] || ch;
    } else if (pe >= 2.5) {
      // Partial drift — 50% runic substitution
      base = Math.random() < 0.5 ? (FUTHARK[ch] || ch) : ch;
    }
    // Pe 1.0–2.5: no rune substitution, zalgo handles it below

    // Interference layer (Pe 1.0–2.5): light diacritic
    if (pe >= 1.0 && pe < 2.5) {
      base += '\u0352'; // combining latin small letter
    }

    // Void noise layer (Pe ≥ 8.0): zalgo diacritics
    if (pe >= 8.0) {
      const density = pe >= 12 ? 4 : (pe >= 10 ? 3 : 2);
      for (let d = 0; d < density; d++) {
        const mod = d % 3;
        if (mod === 0) base += ZALGO_ABOVE[Math.floor(Math.random() * ZALGO_ABOVE.length)];
        else if (mod === 1) base += ZALGO_THROUGH[Math.floor(Math.random() * ZALGO_THROUGH.length)];
        else base += ZALGO_BELOW[Math.floor(Math.random() * ZALGO_BELOW.length)];
      }
    }

    result += base;
  }

  return result;
}

function peToClass(pe) {
  if (pe < 1.0) return '';
  if (pe < 2.5) return 'drift-interference';
  if (pe < 4.0) return 'drift-partial';
  if (pe < 8.0) return 'drift-full';
  return 'void-noise';
}

// Encoder tool init — runs on /encode page
function initEncoderTool() {
  const inputEl = document.getElementById('encode-input');
  const peEl = document.getElementById('encode-pe');
  const peValEl = document.getElementById('encode-pe-val');
  const outputEl = document.getElementById('encode-output');
  const copyBtn = document.getElementById('encode-copy');

  if (!inputEl) return;

  function update() {
    const text = inputEl.value.trim();
    const pe = parseFloat(peEl.value) || 0;
    peValEl.textContent = pe.toFixed(1);

    if (!text) { outputEl.textContent = ''; return; }

    const encoded = driftEncode(text, pe);
    outputEl.textContent = encoded;
    outputEl.className = 'output-box ' + peToClass(pe);
  }

  inputEl.addEventListener('input', update);
  peEl.addEventListener('input', update);

  copyBtn.addEventListener('click', () => {
    const text = outputEl.textContent;
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
      copyBtn.textContent = 'Copied';
      setTimeout(() => { copyBtn.textContent = 'Copy'; }, 1500);
    });
  });
}

document.addEventListener('DOMContentLoaded', initEncoderTool);
