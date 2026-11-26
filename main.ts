import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "Skipping this one \u2014 14 attendees, no agenda, 60 minutes. That's not a meeting, that's a hostage situation with a calendar invite.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
