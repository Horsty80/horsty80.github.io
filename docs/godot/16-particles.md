---
sidebar_position: 16
---

# Particles

Particles are small objects that are dynamically generated
For example, we can use them to create smoke
Or some visuals when a laser is shot

For 2D we have 2 kind of node for particle, **CPUParticle2D** and **GPUParticles2D** :

- If we want a lot of particle, we wante a GPU Particle are much more powerfull and much better as process this kind of particles.
- If you have to work with powerless devices, like a mobile or a browser, you should use CPU particles.

:::tip
To simplify, CPU is for weaker devices like mobile and GPU is for everything else
:::

To create and configure a particle, inside the Inspector of the Node, we have **Process Material**, select **ParticleProcessMaterial**
And now we have a lot of properties to configure the particles.

We are going to create a steam vent particle.

Select an emission shape, like a circle, and we can see the particles.
Increase the Sphere Radius to have more bigger particles. Increase the amount to have more particles.
You can change the gravity to change the direction of the particles. (x: 100, y: -150, z: 0)
Update the Scale Max to have different size of particles.
To make this more realistic, we can add a **Testure** to change the aspect of the particles. 
We can also change the **Color** and the **Color Ramp** to have a more realistic steam vent with darker color at the bottom and lighter at the top and maybe more opacity.

We have a lot of properties to configure the particles, just play with them to have the result you want.

![Particles](/img/steam-vent-particles.png)

:::tip warning
Be careful with the amount of particles, it can be very expensive for the CPU and GPU
:::

## The Result

![Particles](/img/particles.gif)
