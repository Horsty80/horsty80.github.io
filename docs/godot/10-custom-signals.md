---
sidebar_position: 10
---

# Custom Signals

You can create your own signals! The major limitation of signals is that they only work between nodes in the same scene
Triggering custom signals can help to communicate between scenes

We are create the custom signal inside the root node of the scene.
It's like create a variable.

```gdscript
extends StaticBody2D

signal player_entered_gate

func _on_area_2d_body_entered(body):
	print("body as entered")
```

After that inside the other node we can connect to that the signal.
Select our node, and in the inspector, in the signals tab, we can connect to the custom signal.

![Custom Signal](/img/custom-signal.png)

And now inside our script we have the connected custom signal

```gdscript
extends Node2D

func _on_gate_player_entered_gate():
	pass # Replace with function body.
```

We can emit the signal inside our script

```gdscript
extends StaticBody2D

signal player_entered_gate

func _on_area_2d_body_entered(body):
	player_entered_gate.emit()
```
Boum !

:::tip success
To resume, a custom signal, between scenes P (parent) and C (children) :
- create a basic signal inside the root of the children node (in the scene) - inside C
- create a custom signal (like a variable) - inside C
- connect the custom signal to the parent scene - inside P
- emit the signal inside the script - inside C
:::

:::tip info
You can pass arguments to the signal, just add a parameter of your custom signal.

```gdscript
extends StaticBody2D

signal player_entered_gate(position)

func _on_area_2d_body_entered(body):
    player_entered_gate.emit(body.position)
```
and inside the parent scene

```gdscript
extends Node2D

func _on_gate_player_entered_gate(position):
    print(position)
```
:::


