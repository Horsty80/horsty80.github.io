---
sidebar_position: 20
---

# Create multiple levels

You just have to create more level scenes.
Unfortunately, it isn't that easy.

Our level contains quite a bit of code. If we created other level scenes this logic would not be available.
We could copy it but that would be very inefficient.

We need **Inheritance**.

We want to create a parent level scene that contains all the logic.
All other level scenes inherit from taht.

In the **Scene** menu, select **New Inherited Scene**.

![New Inherited Scene](/img/new-inherited-scene.png)

And to create a specific screen on each child that use the parent logic, you to create a **class** for the parent.
In each child, you need to extends the parent class.

```gdscript
## In the parent
class_name LevelParent

func hit():
    print("hit from the parent")

## In the child
extends LevelParent

func hit():
    print("hit from the child")
```

The inheritance allow us to override the parent method.

