// Describe Your Ex in One Word — entry: "Muted".
// One word for an ex: the verdict is a mute button. Short (5 bytes, the
// tie-break rewards fewer bytes), instantly readable as a verdict on a
// former partner, deadpan tech punch with instant recognition — everyone
// has muted an ex. No insult, no punctuation tricks, just the word.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Muted";

// The gate allows 1-111 characters; "Muted" is 5, well inside the gate.
// Refuse to write anything longer, or anything with whitespace, so a
// future edit can never break the one-word rule.
if (WORD.length < 1 || WORD.length > 111 || /\s/.test(WORD)) {
  throw new Error("entry must be exactly one word, 1-111 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
