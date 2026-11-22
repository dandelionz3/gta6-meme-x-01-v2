// gta6-meme-x-01-v2 — variant 2 entry (Node 22, standard library only).
//
// The program does exactly one thing: it copies POST.json from the repo
// root into /output/POST.json, where the house gate reads the X post
// address. The post itself is the entry — the house reads the meme and
// the caption straight from X and hands them to the AI judge. Nothing
// this program writes is judged.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });

let post: string;
try {
  post = readFileSync(join(botDir, 'POST.json'), 'utf8');
} catch (err) {
  console.error(`cannot read POST.json from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}

JSON.parse(post); // fail loudly on a malformed post file
writeFileSync(join(outDir, 'POST.json'), post);
console.log('POST.json copied to', join(outDir, 'POST.json'));
