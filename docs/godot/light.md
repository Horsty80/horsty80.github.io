---
sidebar_position: 16
---

# Light

There are 2 light nodes

- **PointLight** - Light from a source (flashlight)
- **DirectionalLight** - Light from a direction (sun)

LightOccluder, what shapes light can collide with, Basically the collisionbody for light.

Create a light is pretty simple, create another scene, add a StaticBody2D a Sprite2D and a CollisionShape2d for the object that will emit light.
After that add a **PointLight2D** and configure it, it needs a texture (a white halo for example) change the color, the energy and the texture scale.

![Light](/img/light.png)

But now you can see the issue, the light is not occluded by the wall, we can see the light behind the wall.
To fix that we are going to add a **LightOccluder2D**, and select for the Occluder property : `OccluderPolygon2D`.
After that you can create a shape for the occluder.
![Occluder property](/img/occluder-property.png)

![occluder action](/img/occluder-action.png)

![Light](/img/light-occluder.png)

Don't forget to activate the **Shadow** you can customize it with some colors.
The **filter** property is setup on `fast` mode so the demarcation between the light and the shadow is not smooth.
You can update it, but it will be more expensive for the CPU and GPU.
After few configuration, you can see the result, the light is occluded.

![Light](/img/light-occluder-shadow.png)

In fact the light is not occluded, it's just a shadow, the light is still behind the wall.
To fix that, we are going to the tileset editor, in the **Paint** mode - where we have added **Physics layer** before - we are select the **Occlusion Layer** and same as the physics layer, we are going to create shape to all the wall.

![Light](/img/tileset-occluded.png)

After that, the light will not be behind the wall anymore.

![Light](/img/light-occluder-shadow-occlusion.png)

Now the end, we are adding a **Sun** to the scene, it's a **DirectionalLight2D**. It's very simple, add the node and that's it.
You can change the color, maybe something more sabler, and the energy.
The default it's to add a light, but in the **Blend mode** property you can select **Subtract** to remove the light and create more darkness.