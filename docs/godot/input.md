---
sidebar_position: 6
---

# Inputs

1) Create an input map: looks for possible input, and make accessible in the game.
For example, get the left key or A key and store it in a variable called "left".

![input_map](/img/input_map.png)

2) Access input (godot have a built-in function to do this)

For input, use it inside _process() function, because it is called every frame.

```gd
	Input.is_action_pressed("left")
```

To move a player, we need to use `get_vector` function with the input map name.

```gd
   var direction = Input.get_vector("left", "right", "up", "down")
   # left: -1, right: 1, up: -1, down: 1 in vector (0,0)
   # after we just need to update position
    position += direction * speed * delta # dont forget delta
```

Now we want to shoot, so we need to create a new input map for shooting.
After that we can add if statement to check if the input is pressed.

```gd
	if Input.is_action_pressed("primary action"):
		print("should laser")
		
	if Input.is_action_pressed("secondary action"):
		print("should grenade")
```

