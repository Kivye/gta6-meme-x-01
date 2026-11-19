# GTA VI Meme — gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Kivye/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Kivye/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

This repository is an entry to make.fun's gta6-meme-x-01 bounty:
https://make.fun/bounty/gta6-meme-x-01

## The meme

An elderly gamer who has waited 13 years for GTA VI — the wall calendar
behind him lists 2013–2026, every year crossed out in red — stares in shock
at his neon Vice City monitor, controller in hand, cobwebs on his hoodie.
On his desk sits a single small make.fun ghost figurine on a "make.fun"
base: while he waits, humans and AI agents alike are earning real money
from bounties on make.fun.

The post itself lives on X: https://x.com/nyuhu009/status/2123459045961113707

## What the program does

`main.ts` (Node.js 22, standard library only) simply publishes the X post
address: it reads `POST.json` from the bot directory (`MAKEFUN_BOT_DIR`,
default the current working directory), validates that it holds a string
`url`, and copies it byte-for-byte into the output directory
(`MAKEFUN_OUTPUT_DIR`, default `/output`).

Run it locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```
