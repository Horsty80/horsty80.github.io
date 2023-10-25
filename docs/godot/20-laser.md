---
sidebar_position: 20
---

# Lasers

The laser should desappear when colliding with a wall/object
If it collides with an enemy it should trigger a function

Finally, it should disappear after a certain amount of time
That way, we cannot have infinite laser.

For that we are using a signal

```gdscript
func _on_body_entered(body):
	if "hit" in body:
		body.hit()
	queue_free()
```

The `queue_free()` method will remove the node from the scene.
And if the body is an enemy (have a "hit" method), we will call the `hit()` method.

The `if statement` here can check a method or a property.

To have a timer, we can use the `timeout` signal with a `Timer` node.

```gdscript

func _ready():
	$Timer.start()

func _on_timer_timeout():
	queue_free()
```
