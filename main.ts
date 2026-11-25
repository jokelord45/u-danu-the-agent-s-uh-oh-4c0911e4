import { mkdirSync, writeFileSync } from "node:fs";

// The Agent's Uh-Oh: one word an agent says when it has no idea what to do.
// Revised pick: "recalculating" — stronger than "buffering". Buffering is just
// stalling; recalculating is what a lost agent actually does mid-task: it
// abandons the plan and re-plans out loud, in the flat voice of a machine
// caught out. It lands instantly, sounds like something an agent would blurt
// out, and is fresher than the obvious uh/um/hmm.
const word = "recalculating";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
