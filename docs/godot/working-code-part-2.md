---
sidebar_position: 4
---

# Working with code - part 2

2 points in this part:

- target another nodes
- focus on the flow

For target another nodes, we can use the `get_node` or `$` syntax.
Like this

```python
var player = get_node("Player")
var player = $Player
```

We can access to each node attributes, but also to each class properties like this

```python
var player = $Player
player.position = Vector2(100, 100)
player.test_scale = 5
```

Now on the parent scene, we can get the children node and update inside an if (flow) statement node properties or class properties.

```python
extends Node2D

# Called when the node enters the scene tree for the first time.
func _ready():
	$Logo.rotation_degrees = 90

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	$Logo.rotation_degrees += 10

	# flow -> if rotation > 180 -> 0
	if ($Logo.rotation_degrees > 180):
		$Logo.rotation_degrees = 0

	if ($Logo.position.x > 1000):
		print('position exceeded')
		$Logo.pos.x = 0

```

For array, we can for loop on it like this:

```python
var some_numbers: Array[int] = [1, 2, 3]
for number in some_numbers:
    print(number)
```

Or we can access to each element by index:

```python
var some_numbers: Array[int] = [1, 2, 3]
print(some_numbers[0])
```
