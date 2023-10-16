---
sidebar_position: 18
---

# Tweens

We can animate any property using an AnimationPlayer

But sometimes we just want a simple animation (zooming in with a camera, updating the position, changing the transparency etc)
Having an AnimationPlayer for that is overkill.

That's where Tweens come in.

Tweens are not a node! (althought they used to be in earlier versions)
They are an object you create in the script of a node and then this tween object can interpolate between 2 values.

For example: rotation
Start: 0, End: 100, Duration: 1s

0 -> 10 -> 20 -> 30 -> 40 -> 50 -> 60 -> 70 -> 80 -> 90 -> 100
-------------------------------------------------------------
0s->0.1s->0.2s->0.3s->0.4s->0.5s->0.6s->0.7s->0.8s->0.9s->1s

For example, if the player enter in the area2D, we want to zoom in the camera.

```gdscript
## The building

signal player_entered
signal player_exited

func _on_body_entered():
	player_entered.emit()

func _on_body_exited():
	player_exited.emit()

## The level

func _on_house_body_entered(_body):
	var tween = get_tree().create_tween()
	tween.tween_property($Player/Camera2D, "zoom", Vector2(1,1), 1)

func _on_house_body_exited(_body):
	var tween = get_tree().create_tween()
	tween.tween_property($Player/Camera2D, "zoom", Vector2(0.6,0.6), 2)

```

You can parallelize multiple tweens

```gdscript
func _on_house_body_entered(_body):
	var tween = get_tree().create_tween()
	tween.set_parallel(true)
	tween.tween_property($Player/Camera2D, "zoom", Vector2(1,1), 1)
	tween.tween_property($Player/Camera2D, "modulate:a",0, 2)
```

:::tip info
- You can set a default start value for tween property with `.from()`
- You can set a speed for the transition with `.set_trans(Tween.TRANS_QUAD)` (default is linear)
- You can loop a tween with `set_loops`
:::

:::tip warning
If you have multiple tween in a function, you should probably use an **AnimationPlayer** instead
:::



