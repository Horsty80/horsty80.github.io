---
sidebar_position: 8
---

# Physics

Some problem

Currently we are moving image
No collide, slide along surface, no physical properties

Solution: CollisionBodies & PhysicsBodies !

**Area2D** An area that can check if another body entrered. Can be moved by changing the position.
Check if player entered a hous, the lasers will be areas

**StaticBody2D** A static body that other bodies collide with. Not supposed to be moved.
Any static object: Walls, beds, obstacles...

**RigidBody2D** Moving body that moves via physics (like a cannonball). Set an initial velocity.
The grenade

**CharacterBody2D** Moving body controlled by code. Inbuilt methods.
Any entity that is controlled by code: The player & all enemies.

First lets transform bed to a StaticBody2D (right click and change type).
We need to add a CollisionShape2D to the StaticBody2D. So lets create, on the right panel, we can set a shape.
Lets set a rectangle shape, and set the size to the size of the bed.

Attach the bed to the level scene.

Now we need to add a CharacterBody2D to the player and add a CollisionShape2D to it. Lets set a circle shape and place it.
It's a really common shape for a character.

Now we need to update script of the player, because we have created node as a Node2D but we have change change it's type. Inside `player.gd` just update extends to ``CharacterBody2D`.
We also need to change the position variable that is not the same.

```gdscript
	var direction = Input.get_vector("left", "right", "up", "down")
	velocity = direction * 500
	move_and_slide()   
```

Now the player can move and collide with the bed.

:::tip
move_and_collide() also exist
:::

Another exemple of a simple `ennemies` that move to the right and have collision

```gdscript
extends CharacterBody2D


func _process(_delta):
	# direction
	var direction: Vector2 = Vector2.RIGHT # (0,0)
	
	# velocity
	velocity = direction * 400
	
	# move and slide
	move_and_slide()

```



