---
sidebar_position: 12
---

# Rigid Body 2D

> Reminder: Moving body that moves via physics (like a cannonball)

RigidBody2Ds have a gravity settings that is 1 by default

You can set physics behaviour in the inspector and additional options are set via a PhysicsMaterial (Friction, bouncing)

And you are only supposed to set a starting velocity, the movement is then influenced by physics

If we set the gravity to 0 we have a static body
To move a static body, we need to update the Linear Velocity (for example to 100)
Much more other settings are available.

![Rigid Body 2D](./img/rigid-body-2d.png)

:::tip
In gdscript we can cast type with `as` keyword

```gdscript
var rigid_body = $RigidBody2D as RigidBody2D
```

And now we can access the RigidBody2D methods and properties
:::

## Rotate the player

We want the player look at the mouse position.

```gdscript
	# rotate
	look_at(get_global_mouse_position())
```

Depending of your player asset, you need to rotate it to have the right orientation.

After that, the grenade need to shoot in the right direction.
We need to get the direction between the player and the mouse position.

To get direction between 2 vector, the player and the mouse position, we need to get the target vector position and subtract the current position and after normalize it (godot imperative).

![VectorMap](./img/vector_map.png)

```gdscript
# In the player script
# Get the direction between the player and the mouse position
var player_direction = (get_global_mouse_position() - position).normalized()
# emit the direction
shoot_grenade.emit(position, player_direction)

# In the level script
# Get the direction from the player script
func _on_Player_shoot_grenade(position, direction):
    # Create a grenade instance
    var grenade = grenade_scene.instance()
    # Set the grenade position
    grenade.position = position
    # Set the grenade direction ⚠️ it's a Rigidbody2D so we need to set the linear velocity
    grenade.linear_velocity = direction * grenade.speed
    # Add the grenade to the scene
    add_child(grenade)
```

We need to make pretty much the same thing for the laser.

```gdscript
# In the player script
# Get the direction between the player and the mouse position
var player_direction = (get_global_mouse_position() - position).normalized()
# emit the direction
shoot_lazer.emit(position, player_direction)

# In the level script
# Get the direction from the player script
func _on_Player_shoot_lazer(position, direction):
    # Create a laser instance
    var laser = laser_scene.instance()
    # Set the laser position
    laser.position = position
    # Set the laser direction, it's a variable inside the laser script
	laser.direction = direction
    # Set the laser direction ⚠️ it's a Area2D so we need to set the rotation_degrees
    # We need to convert the direction to degrees and add 90° 
    # because the laser sprite is not oriented in the right direction
    laser.rotation_degrees = rad_to_deg(direction.angle()) + 90
    # Add the laser to the scene
    add_child(laser)
```
