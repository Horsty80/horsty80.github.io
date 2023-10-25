---
sidebar_position: 3
---

# Working with code - part 1

Interactivity: we need to add a script to the player. (right click on the player -> attach script).

Godot can work with multiple languages: C#, GDScript, C++.

GDScript is the default language. It's similar to Python.

**Datatypes** are the same as Python: int, float, string, bool, etc. No Tuples and Lists are replaced by Arrays.

**Variables** 2 types of variables: Variables and Constants.

```python
var current_speed = 0
const max_speed = 100
```

You can change the datatype dynamically or you can force one datatype for a variable:

```python
var a_string: String = 'test'
var a_number: int = 123
var switch: bool = true
var some_numbers: Array[int] = [1, 2, 3]
```

**Functions** are the same as Python:

```python
func test_function(param_a: int, param_b: String) -> bool:
    return true
```

If no return value specified, the function return a void.
Like in Python, indentation assign lines of code to a function.

**Flow** You have if statements, while & for loops with the comparison operators (also continue & break)

**Classes** A script is always added to a Node. That Node is a class with default methods and attributes
Adding a script to a Node2D creaters an object with a position, rotation, scale, etc.
You can use code to change these values and also add new ones.

there are lots of inbuilt functions you will use, they all start with an \_:

\_ready() is run when a Node is added to the node tree
\_process() is run every frame of the game

You can target other nodes in 2 ways:

- get_node("node path")
- $node path

### Start scripting

![Add script to a node](/img/godot-add-script.png)

```python
extends Sprite2D

var pos: Vector2 = Vector2.ZERO # (0,0)
const speed: int = 10
var test_scale: int = 1

# Called when the node enters the scene tree for the first time.
func _ready():
	pos = Vector2(300,200)
	position = pos

	test_scale = 2
	scale = Vector2(test_scale, test_scale)

	var test_rotation = 45
	rotation_degrees = test_rotation

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	pos.x += speed
	position = pos

	test_scale += 1
	scale = Vector2(test_scale, test_scale)

```
