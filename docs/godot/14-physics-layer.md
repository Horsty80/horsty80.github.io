---
sidebar_position: 14
---

# Physics Layer

1) No collision on the layer
2) For Area (transition) we went only to detect the player is entering the area. We need to take care of the kind of body entering the area.

:::tip
Every CollisionObject has a collision layer
:::

You can place objects on layers to make them interact with objects on other layers
This is done via a layer and a mask

"Layer" determines on which layer the object itself is 
"Mask" determines wich layer it can interact with

Layers:
- Player
- Enemy
- Objects
- Projectiles
- Items & Zones

The Player scene is on the player layer and the mask can interact with all other layers

Each enemy will be on the enemies layer and the mask will be for the player, the objects and the projectiles

For that we are going to use the **Collision** and the **Layer** and **Mask** properties.

![Collision Layer](/img/collision-layer.png)

Step one, for more readability, we can rename the layer in Project Settings > Layers Names > 2D Physics

So, how to configure le layer and the mask?

- for the layer, we attribute the layer that correspond to the object
    - the player is the player's layer
    - the grenade is the projectile's layer
    - the enemy is the enemy's layer
    - the gates or building are the items & zones layer
    - etc.
- for the mask, we attribute the layer that correspond to the object that we want to interact with
    - the player can interact with the enemy, the objects and the projectiles layers
    - the enemy can interact with the player, the projectiles layers
    - the projectiles can interact with the enemy and the objects layers
    - the items & zones can interact with the player layer

With this configuration, we can now detect the collision between the player and the enemy, the player and the projectiles, the projectiles and the enemy, etc.
That provide that the projectile can interact with a zones, but not the player.

:::tip
If the layer and the mask are configured on the same value, the Node can interact with a Node of the same kind.

ex: The grenade layer and mask are on the same value, so the grenade can interact with another grenade.

:::

But how to detect the collision between the player and the tilemap, tileset, tile ?
We are using another property inside the TileMap, click on the tileset inside the inspector on the left. 
You can see a **Physics Layers**, click on `+ Add Element` and you can see the same layer picker, configure it fine.

![Tilemap Physics Layer](/img/tilemap-physics-layer.png)

But we need to add something else, the collision area of our Tile.
For that, inside the Tileset (at the bottom), we can **Paint** the collision area.
On the image below, we can see the collision area in blue, adjust it to match the image and click on the corresponding tile.

![Tilemap Collision Area](/img/tileset-collision-area.png)

We can now draw for all the images that we have and need a collision. There a no tools to automatically do that, so just practice and do it manually.
You have some helper to draw and manipulate the collision area, like press **R** or **E** to rotate to left/right side.

![Tilemap Collision Paint tools](/img/tileset-paint-tools.png)