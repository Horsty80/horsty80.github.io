---
sidebar_position: 5
---
# Delta time

The movement speed of our games is determined by how fast the game runs (how many frames are generated)

Really slow computer ------------------------> Really fast computer

Huge differences, this is a massive problem !

How framerates influence the game

<!-- Table in markdown with 3 column -->

| Speed (pixels per frame) | Frames per second | Total movement (per second) |
| ------------------------ | ----------------- | --------------------------- |
| 10 px                    | 30                | 10 \* 30 = 300              |
| 10 px                    | 60                | 10 \* 60 = 600              |
| 10 px                    | 120               | 10 \* 120 = 1200            |

The game will run inconsistently on different systems

Since some scenes are harder to render than others it might even run inconsistently on the same system!

The solution is to use delta time

Delta time measures how long it took to create one frame
For example, if the frame is 60fps, delta time is 1/60th of a second (0.0166) or about 17 milliseconds

This information we can use to keep the same at a constant speed regardless of framerate

We essentially multiply any movement with the delta time

<!-- Table in markdown with 5 column -->

| Speed (pixels per frame) | Frames per second | Total movement (per second) | Delta time     | Total movement (per second) |
| ------------------------ | ----------------- | --------------------------- | -------------- | --------------------------- |
| 10 px                    | 30                | 10 \* 30 = 300              | 1/30 = 0.033   | 10 \* 30 \* 0.033 = 9.9     |
| 10 px                    | 60                | 10 \* 60 = 600              | 1/60 = 0.0166  | 10 \* 60 \* 0.0166 = 9.96   |
| 10 px                    | 120               | 10 \* 120 = 1200            | 1/120 = 0.0083 | 10 \* 120 \* 0.0083 = 9.96  |

With delta accounted, the game runs at the same speed at any framerate !

:::tip
Delta is only used for movement, not for rotation or scaling or setting position
:::
