---
sidebar_position: 21
---

# Level transition

To change the level we need to load another scene

This is trivial in Godot
But the transition will be a hard cut

We will use an AnimationPlayer to add a proper transition -> Will be cover in the UI Section

In our `outside` scene, we have a function when a player entered a gate, so let's just add a new line to load the next scene.
Same for the `inside` scene, to load the previous scene.

```gdscript
func _on_gate_player_entered_gate(_body):
	get_tree().change_scene_to_file("res://scenes/levels/inside.tscn")

func _on_exit_gate_area_body_entered(_body):
	get_tree().change_scene_to_file("res://scenes/levels/outside.tscn")
```

You can also use `change_scene_to_packed` method to load a scene from a packed file.

```gdscript

var outside_level_scene: PackedScene = preload("res://scenes/levels/outside.tscn")
@export var outside_level_scene: PackedScene # or not preload an have available inside inspector (is for animation next)

func _on_exit_gate_area_body_entered(_body):
	get_tree().change_scene_to_packed(outside_level_scene)

```
