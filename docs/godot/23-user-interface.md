---
sidebar_position: 23
---

# User interface

There are 4 kinds of Nodes:
- 2D 🔵
- 3D 🔴
- Control 🟢
- Other ⚪️

## Control Nodes

Labels, images, progress bars, buttons, areas with colors, text input, graphs, menus, videos.

2D Nodes are placed via pixel positions.
Control Nodes work via anchors and container.

Create a new scene, select a **Canvas Layer** that will contain all our UI elements. The canvas will be positioned on top of the game.
So every label, texture, etc. will be visible inside the screen game.

There are 2 ways to place a control node.
Anchors and Containers

Anchors are the green needles in the topleft of a control node

Containers are parent nodes that determine the position of their children

(You can also use x and y properties or drag the Control Node to the position you want but that is almost never a good idea)

### Anchors

We have acces to panel of anchors on top of the screen.

![Anchors](/img/anchors.png)

But we can also use the **Layout** menu to setup the anchors.

![Layout](/img/layout.png)

Is like in css, we have **Anchor Points** with top, bottom, left, right.
The value inside `right` is calculated from the left position of the node.
So `left: 0` and `right: 0` will make the node with no width.
However, if we set `left: 0` and `right: 100`, the node will have a width of 100.
For the `top` and `bottom` is the same. The `bottom` value is calculated from the `top` position of the node.
And `top: 0.5` and `bottom: 0.5` will make the node at the center of the screen, with no height.
However, if we set `top: 0.5` and `bottom: 0.6`, the node will have a height of 0.1. etc.

Remember, in 2D, x and y are the top left corner of the node.
The start position are (0, 0) and the end position are (1, 1).
So we navigate between this number.

### Containers

It's like flexbox or Grid in css.

We can use **HBoxContainer** or **VBoxContainer**. It's working with children.
You have **GridContainer** it's workin like a grid in css with column.

## Progress bar

We need to add a progress bar, Godot has 2: A plain one and a textured one.
They are both set in the same way.
The textured need 3 images: background, over and progress image.

To position the progress bar, we can use container and the best container for that is **MarginContainer**. It's like a div with margin in css. If we position the progress bar on bottom center, with the margin, the progress bar will be always at the bottom center of the screen with the good margin.