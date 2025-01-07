# Pipe Hero

![Pipe Hero Start][1]

This is my attempt at recreating original Stratagem Hero arcade from the Helldivers 2 game.
The intent was to replicate it as closely as possible in looks and behaviour.

## [Setup][6]

## How to play

![Pipe Hero Puzzle][2]

- Visit the [website][4].
- Press any Stratagem Input (WASD or arrow keys) to start the game.
- All stratagems from the Helldivers 2 game are evenly divided into rounds of 8 stratagems per round – you need to input their codes as quickly as possible to advance further until either no stratagems left, or the timer is up.
- Each correct stratagem increases your score and grants you additional time. Score depends on code's complexity, how fast you've entered it and how many errors you've made.
- Each error forces you to start entering the code from the beginning and gives penalty to this stratagem's score.
- In the end your score will be saved and displayed along with your previous high score.

![Pipe Hero Scorescreen][3]

## Important

1. Since it's difficult to correctly infer timer behaviour from the original Stratagem Hero arcade I decided to implement my own behaviour for it that should at least somewhat resemble the original.
2. The same thing goes for scoring, although it's not that important.
3. This implementation was not designed to work on mobile devices since we don't play Helldivers 2 on phones/tablets, right?

## Stack

Built with React 18 and TypeScript 5 just for funsies.

---

Inspired by (and forked from) [Strategem Hero implementation by Dmytro Vasylkivskyi][5]


[1]: assets/preview-1.png
[2]: assets/preview-2.png
[3]: assets/preview-3.png
[4]: https://drizzer14.github.io/stratagem-hero
[5]: https://github.com/drizzer14/stratagem-hero
[6]: ./setup.md
