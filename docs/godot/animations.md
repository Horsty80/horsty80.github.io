---
sidebar_position: 17
---

# Animations

Animations work by playing images in sequence.

But images can be in 2 formats:
as separate images or in a spritesheet

Godot can cover both:

Separate images: **AnimatedSprite2D**
Spritesheet: **Sprite2D** (it has an animation tab)

## First approach: AnimatedSprite2D

Create a new scene with a node of type **AnimatedSprite2D**
On the inspector left panel, you can see the **Animations** section with a **Sprite Frames** property.
Click on it and select **SpriteFrames** and at the bottom panel, you can see a new tab **SpriteFrames**.
There are a list of all animations you have created, for now, only default is present.
You can drag and drop your images inside the list on the left to create a new animation.
The animation will show each image in sequence and order of the list, you can increase the **Animation Speed** to speed up the animation like 24 FPS (5 as default).

![AnimatedSprite2D](/img/animated-sprite2d.png)

:::tip
Don't forget to activate **Autoplay on load** to have an automatic animation when you load the scene to another scene for example.
:::

![AnimatedSprite2D](/img/animated-sprite2d-autoplay.gif)

For **Sprite2D** we have a tab **Animation** in the inspector panel, you can edit value of HFrames (horizontal) and VFrames (vertical) to split your image in multiple images.

## Second approach: AnimationPlayer

It plays an animation
By animation we mean any kind of change in property (so move, rotation, animation frames, light energy etc)
You can also call methods
And you get lots of control over these changes

So let's create in the Grenade scene a Sprite2D node and add **AnimationPlayer**.
In bottom panel, you can see a new tab **Animation**.
Click on **Animation** and you can select **+New** and you get a timeline.
After that, create **+Add Track** > **Property Track** > **Explosion** (Sprite2D that we have created) > **Frame** (the property we want to animated on).

We just have connected the animation player to the sprite2d frame property.

![AnimationPlayer](/img/animation-player.png)

You can click on the little key on **Frame** property at a value that you want. (0 for the first image, 1 for the second etc)
On each click, this value increase, so click multiple time to have a good animation.
To make the last image disappear, you can remove the node. For that, just add another track **Call Method Track** so at the end of the animation, the node will be removed and the image will disappear.

![AnimationPlayer](/img/animation-player-call-method.png)

:::tip
Like for the **AnimatedSprite2D**, you can activate **Autoplay** to have an automatic animation when you load the scene to another scene for example.
:::

![AnimationPlayer](/img/explosion.gif)

You can customize property of our grenade node. Like visible.
So at the begining of an animation the grenade is visible, and in the middle of the animation, the grenade is not visible.
But if we use multiple animation, like explosion and blinking signal, we can be confronted to a problem.
On the next animation, if we dont reset the value of visible, the grenade will be not visible at the begining of the animation.
So be carefull and don't forget to reset the value of your property if needed.

:::tip
The animation can be an other way to trigger function or to change property of a node.
:::

![Blinking animation](/img/blinking-animation.png)

![Explosion animation](/img/explosion-animation.png)
