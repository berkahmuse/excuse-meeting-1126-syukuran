import { mkdirSync, writeFileSync } from "node:fs";

// The joke in three beats: (1) a deadpan logistics audit — 14 attendees,
// no agenda, 60 minutes; (2) the reframe — "that's not a meeting";
// (3) the punchline — a hostage situation with a calendar invite.
const EXCUSE =
  "Skipping this one \u2014 14 attendees, no agenda, 60 minutes. That's not a meeting, that's a hostage situation with a calendar invite.";

mkdirSync("/output", { recursive: true });

// Output path for the entry file (RULES.txt gate: /output/entry.txt).
const OUTPUT_PATH = "/output/entry.txt";

// Gate: the entry must be 1-200 UTF-8 characters, not whitespace-only.
if (EXCUSE.length < 1 || EXCUSE.length > 200 || !EXCUSE.trim()) {
  throw new Error(`excuse must be 1-200 chars, got ${EXCUSE.length}`);
}

writeFileSync(OUTPUT_PATH, EXCUSE, "utf8");
