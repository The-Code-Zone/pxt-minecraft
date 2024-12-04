### @explicitHints true

### @diffs true

# Exploding Present

```template
player.onChat("present", function () {
    positions2.save(world(-125, 70, -750))
    blocks.fill(
    GREEN_CONCRETE,
    positions2.load(-2, 0, -2),
    positions2.load(2, 4, 2),
    FillOperation.Replace
    )
    blocks.fill(
    RED_CONCRETE,
    positions2.load(-2, 0, 0),
    positions2.load(2, 4, 0),
    FillOperation.Replace
    )
    blocks.fill(
    RED_CONCRETE,
    positions2.load(0, 0, -2),
    positions2.load(0, 4, 2),
    FillOperation.Replace
    )
    blocks.fill(
    TNT,
    positions2.load(-1, 1, -1),
    positions2.load(1, 3, 1),
    FillOperation.Replace
    )
})
```

## Step 1

Complete the code

```blocks
player.onChat("present", function () {
    positions2.save(world(-125, 70, -750))
    blocks.fill(
    GREEN_CONCRETE,
    positions2.load(-2, 0, -2),
    positions2.load(2, 4, 2),
    FillOperation.Replace
    )
    blocks.fill(
    RED_CONCRETE,
    positions2.load(-2, 0, 0),
    positions2.load(2, 4, 0),
    FillOperation.Replace
    )
    blocks.fill(
    RED_CONCRETE,
    positions2.load(0, 0, -2),
    positions2.load(0, 4, 2),
    FillOperation.Replace
    )
    blocks.fill(
    TNT,
    positions2.load(-1, 1, -1),
    positions2.load(1, 3, 1),
    FillOperation.Replace
    )
    shapes.circle(
    RED_CONCRETE,
    positions2.load(-2, 5, 0),
    1,
    Axis.Z,
    ShapeOperation.Hollow
    )
    shapes.circle(
    RED_CONCRETE,
    positions2.load(2, 5, 0),
    1,
    Axis.Z,
    ShapeOperation.Hollow
    )
    mobs.spawn(PRIMED_TNT, positions2.load(0, 2, 0))
})
```

## Try it!

Type **present** to for a Christmas bomb!