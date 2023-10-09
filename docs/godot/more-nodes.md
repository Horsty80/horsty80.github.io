---
sidebar_position: 7
---

# More nodes

## Multiple nodes and naming

You can give a unique name to a node (node === class)

If scene becomes too complex like this 

![complex_scene](/img/complex_scene.png)

The short path to the target node wild be `$Sprite2D/Sprite2D2/Sprite2D3/Target` and it's not very readable.

You can add a unique name by right click and chose `Access as Unique Name`

![unique_name_menu](/img/unique_name_menu.png)

Now the node have a '%' next to him and you can access it by `%Target` much more readable.

![unique_name](/img/unique_name.png)

## Access parents information from children

`$".."` représent the parent node

If a function `test_function()` is in the parent node, you can access it from the child node by using `$"..".test_function()`

Major aspect of Godot, each nodes communicate with each other.
We can make nodes work together in the same scene.
Later we can also work across multiple scenes.
