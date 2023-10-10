---
sidebar_position: 14
---

# Tilemap

We want to decorate the level with images!

## Short version

The easiest way is to simply place Sprites. You can modify things substantially by changing the color and scale values.
For complex setups, though, you want a Tilemap

First approach is to use the scale property of the Sprite. This is not ideal, though, because it will scale the image in both directions, which can lead to unwanted results.

Second approche is to use **Region** activated in the **Sprite** inspector.
Now you can see new properties: **Region Rect** and **Region Enabled** and a button **Edit Region**
You can click it and draw a rectangle outside of the image, this will stretch the image to the rectangle. After that, select in **Texture** the property **Repeat** and enable it.
And that it's, you sprite is working like a tile. (You can see some demarcation lines, it's because the image is not a tile)

## Tilemap - Long version

We need a **Tileset** compose of **Tile**, much easier to manage. We can add collision to the tileset and it's easier to create a level.

* Tile is a single graphic
* Tileset is a combination of tiles
* Tilemap is a Godot Node that organizes tilesets

:::tip
More detailsyou add to our level, the better is going to look.
:::

⚠️ **Comin soon** ⚠️

WIP