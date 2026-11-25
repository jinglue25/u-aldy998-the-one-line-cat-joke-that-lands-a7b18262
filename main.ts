import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const line = "My cat knocked my coffee off the desk this morning — not an accident, just her daily performance review of my life choices.";
const outputDirectory = new URL(
  `${process.env.MAKEFUN_OUTPUT_DIR || "/output"}/`,
  import.meta.url,
);
const entryFile = new URL("entry.txt", outputDirectory);

mkdirSync(outputDirectory, { recursive: true });
writeFileSync(entryFile, `${line}\n`, "utf8");

const characterCount = readFileSync(entryFile, "utf8").trim().length;
if (characterCount === 0 || characterCount > 200) {
  throw new Error(
    `Entry must contain 1–200 characters after trimming; found ${characterCount}.`,
  );
}
