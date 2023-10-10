---
sidebar_position: 11
---

# Scenes inside node

## Create the laser scene

So far, we created scenes in the editor

But this isn't always possible in a game!
For example, the lasers are also a scene but one that is dynamically generated

1. We need to create a scene
2. We need to create an **instance** of the scene
3. We need to add the scene to the **node tree**

:::tip
Only use the simpliest node possible
In case of the laser, we will use Area2D
:::


For 2. & 3. we need to preload the scene and use `add_child()` method

```gdscript
extends Node2D

var laser_scene: PackedScene = preload("res://scenes/projectiles/laser.tscn")

func _on_player_shoot_lazer():
	var laser = laser_scene.instantiate()
	# 1. update the laser position
	# 2. we have to move the laser
	# 3. I want to add the laser instance to a Node2D
    add_child(laser)
```
So now how we are supposed to update the laser position ?

## Laser position

We can determine a random position for the laser, so add 3 marker2D on the gun and use them to determine the position of the laser

![Laser position](./img/laser-position.png)

```gdscript

	if Input.is_action_pressed("primary action") and can_laser:
		var laser_markers = $LaserStartPositions.get_children()
		var selected_laser = laser_markers[randi() % laser_markers.size()]
		# emit the position we selected
		shoot_lazer.emit(selected_laser.global_position)

```

:::tip
How to have a random number ?

var random_number = numbers[randi() % numbers.size()]

:::

We have use `global_position` because the laser is a child of the gun, so the position is relative to the gun
Before we use only `position` so far is a local position: They are relative to the parent.

Global positions are an exact pixel coordinate that is independent from any parent

Imagine you are in your house: You have some relative position to the center of the house (your local position) but you still have a specific GPS location (global position)

:::tip
You can add a Node2D with an offset of x:100 and y:200 and give it a child on the same position.
The child will have a local position of x:0 and y:0 but a global position of x:100 and y:200
:::

## Laser movement

Simple, just add a script and add a process that move the laser

```gdscript
extends Area2D

@export var speed: int = 1000
var direction: Vector2 = Vector2.UP

func _process(delta):
	position += direction * speed * delta
	
```

:::tip
To expose a class variable into the inspector, you need to add the `export` keyword

```gdscript
@export var speed = 100
```
:::

## Laser cleaner visibility

When you launch the game and select the **remote** vue you can see on each action, a new Laser node is added to the scene tree. It's not a problem for the game but it's not clean.
To correct that, we added a **Node2D** `projectiles` inside the scene and we add the laser inside this node.

```gdscript

func _on_player_shoot_lazer(pos):
	var laser = laser_scene.instantiate()
	laser.position = pos
	# 3. I want to add the laser instance to a Node2D
	$Projectiles.add_child(laser)

```