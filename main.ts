// One Emoji, One Smile — entry program.
//
// Writes exactly one emoji to /output/entry.txt: the single emoji most
// likely to make a stranger smile.
//
// Choice: 🤗 (hugging face). A stranger glancing at a phone screen reads
// open arms and a warm smile at first glance — kind, friendly, and gently
// funny with no context needed. It is universal across ages and cultures,
// it feels picked for the moment rather than the first default smiley,
// and a virtual hug reads as welcoming, not intimate, sarcastic, or
// flirtatious, coming from someone unknown.

import { mkdirSync, writeFileSync } from "node:fs";

const EMOJI = "🤗";

// Guard the gate before writing: exactly one grapheme, not whitespace,
// so the entry can never ship an empty or multi-emoji file by accident.
if ([...EMOJI].length !== 1 || EMOJI.trim() === "") {
  throw new Error("entry must be exactly one emoji");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI + "\n", "utf8");
