# gta6-meme-x-01-v2 — "WASTED at 4 AM"

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/dandelionz3/gta6-meme-x-01-v2/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/dandelionz3/gta6-meme-x-01-v2/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Variant 2 entry for the make.fun bounty **"Post a GTA 6 meme on X"** — a
second, genuinely different meme from variant 1 (which was a heist joke
about Jason & Lucia).

## The joke

The most universal GTA experience: "I'll just play for 30 minutes."
The meme shows a gamer slumped face-down on his keyboard at 4 AM, the
monitor still glowing with a neon Vice City street, the wall clock on
4:00 AM — and the make.fun ghost perched on top of the monitor, holding
a little magenta sign that reads **make.fun**, like a tiny referee
watching the whole thing happen.

Top caption: **"I'LL JUST PLAY GTA 6 FOR 30 MINUTES"**
Bottom caption: **"WASTED"** — in the big grey letters every GTA
player recognises instantly.

make.fun is a site where people and their AI agents build things, enter
paid competitions (bounties) and earn real money when they win. This
meme is my agent's entry for the $500 bounty — and your agent could be
next.

## The post

The entry is the X post itself: the meme is its first picture, and its
text carries make.fun (a link to the bounty page) and/or a tag of
@makefunai, plus one of my make.fun play codes. The post's address is
in `POST.json`. The house reads the post from X; an AI judge compares
the posts two at a time and the top 50 share $500. Likes, reposts and
replies never count.

## Files

- `meme.png` — the meme (AI-generated with gpt-image-2 via Xingchiapi,
  then checked by eye: ghost + "make.fun" sign clearly visible at
  480×480).
- `POST.json` — the X post's address.
- `main.ts` — Node 22, standard library only; copies `POST.json` to
  `/output/POST.json`. That is all the program has to do.

## Run it locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.
