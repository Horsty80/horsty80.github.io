---
sidebar_position: 13
---

# Camera

Very simple and faster, it's a Node !

So just add a Camera2D node attach to the player.

We just need to update some properties like:
- **Zoom** to have a better view decrease the number to zoom out
- **Position Smoothing** to have a smooth camera movement
    - **enabled** to true
    - **speed** to 5px/s is good enough
- **Ignore Rotation** to On
- **Limit** left, top, right, bottom
- **Offset** to 0, 0

Let's dicover the rest of the properties later.

Another thing, we can update the size of the game window in the project settings. (Project > Project Settings > Display > Window > Size)