---
sidebar_position: 9
---

# Signals

Let's start with a problem:

Using an Area2D right now is pointless: We just have an invisible area

We need functionality so that this area actually does something

For that we use signals

**Signals** When a certain action happens to a node: A body entering an area, a timer running out, 2 bodies colliding, etc.
You can tell the affected node to send a signal, which basically means that you are running a function
This is incredibly powerful to make nodes cummonuciate with each other!

To create an area we use png of a building with an entreance.
We create another StaticBody2D to represente the collider of the wall and we add a CollisionPolygon2D to it.
Now a Nodes CollisionShape2D dont have a shape but 3 icons appear on the top panel like this.

![collision_shape_action_button](/img/collision_shape_action_button.png)

So you just need to click on the first icon and you can draw a polygon shape. That is the result

![collision_shape_polygon](/img/collision_shape_polygon.png)

:::tip
Color means ???
Red:
Purple:
Blue:
Green:
:::

For the entreance we need to add an Area2D with a CollisionShape2D, the shape would be a rectangle.
After add it, we need something to handle when the player enter the area.
For that, just clic on the "Node" button on the right panel and you can see all the Signals available

![area2d_signals](/img/area2d_signals.png)

:::tip
Area2D have the most signals
:::

When we add a signal, we need to add a function to handle it. So we can attach the signal only to nodes that already have a script. The signal trigger the function.
So let's add the signal to the level scene.

![area2d_signal_attach](/img/area2d_signal_attach.png)

Another usage of signal is with Timer nodes. Timer nodes are used to run a function after a certain amount of time. Create a Timer node and set the time to 1 second. Then attach the timeout signal to the plaer scene and create a function to handle it.
Inside the Player we need to start() the timer. So now we can reload laser and grenade after a certain amount of time.

:::tip
We can create cusotm signals
:::
