---
sidebar_position: 2
---

# Create first Nodes & Scenes

Create Level Scene -> Pictures
Player scene -> picture

Add Player inside level scene

Windows with coordinates. Basicly is X & Y axis.
If you want to move to the right (in 2D) you need to increase X.
If you want to move to the bottom (in 2D) you need to increase Y.
Start is for 0,0. (inverse Y from school).

The Level modification impact each children (player, etc.)

![Parent/Children relation](/img/godot-parent-children.png)

Naming convention: PascalCase for any kinds of nodes.
For every else is snake_case. (like scene name).

First level always would be the bottom, and the last one the top. We would be aware of this when we want to move something for placing.
