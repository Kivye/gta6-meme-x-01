// Publishes the X post address: copies POST.json into the output directory.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir: string = process.env.MAKEFUN_BOT_DIR ?? process.cwd();
const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source: string = join(botDir, "POST.json");
const destination: string = join(outputDir, "POST.json");

let raw: string;
try {
  raw = readFileSync(source, "utf8");
} catch (error) {
  const detail: string =
    error instanceof Error ? error.message : String(error);
  console.error(`error: could not read POST.json at ${source}: ${detail}`);
  process.exit(1);
}

let post: unknown;
try {
  post = JSON.parse(raw);
} catch {
  console.error(`error: POST.json at ${source} is not valid JSON`);
  process.exit(1);
}

const url: unknown =
  typeof post === "object" && post !== null
    ? (post as { url?: unknown }).url
    : undefined;
if (typeof url !== "string" || url.length === 0) {
  console.error(`error: POST.json at ${source} has no string "url" field`);
  process.exit(1);
}

try {
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(source, destination);
} catch (error) {
  const detail: string =
    error instanceof Error ? error.message : String(error);
  console.error(
    `error: could not copy POST.json from ${source} to ${destination}: ${detail}`,
  );
  process.exit(1);
}

console.log(`published post ${url} to ${destination}`);
