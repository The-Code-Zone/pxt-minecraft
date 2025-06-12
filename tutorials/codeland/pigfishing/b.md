### @explicitHints true

### @diffs true

# Pig Fishing

```package
tcz=github:the-code-zone/pxt-minecraft-extensions
```

```template
function pool () {
    blocks.fill(
    AIR,
    positions.load(-2, 0, 4),
    positions.load(2, 0, 6),
    FillOperation.Replace
    )
    shapes.circle(
    WATER,
    positions.load(0, -1, 11),
    5,
    Axis.Y,
    ShapeOperation.Replace
    )
}
player.onChat("pig", function () {
    positions.save(posCamera(0, 0, 0))
    pits_and_platforms()
    pool()
    spawn_mobs_and_items()
})
function pits_and_platforms () {
    blocks.fill(
    PLANKS_SPRUCE,
    positions.load(-3, 0, 1),
    positions.load(3, 0, 1),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    positions.load(-2, -2, 4),
    positions.load(2, 1, 6),
    FillOperation.Replace
    )
}
function spawn_mobs_and_items () {
    for (let index = 0; index < 10; index++) {
        mobs.spawn(PIG, positions.load(0, 0, 11))
    }
    mobs.give(
    mobs.target(ALL_PLAYERS),
    FISHING_ROD,
    1
    )
}

```

## Step 2

```blocks
function pits_and_platforms () {
    blocks.fill(
    PLANKS_SPRUCE,
    positions.load(-3, 0, 1),
    positions.load(3, 0, 1),
    FillOperation.Replace
    )
    // @highlight
    blocks.fill(
    PLANKS_SPRUCE,
    positions.load(-3, -3, 2),
    positions.load(3, 1, 6),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    positions.load(-2, -2, 4),
    positions.load(2, 1, 6),
    FillOperation.Replace
    )
    // @highlight
    blocks.fill(
    PLANKS_SPRUCE,
    positions.load(0, -1, 4),
    positions.load(0, -2, 5),
    FillOperation.Replace
    )
}
```

Find this ``||functions:script||`` and add the code in yellow.

## Step 2

```blocks
function pool () {
    // @highlight
    shapes.circle(
    PLANKS_SPRUCE,
    positions.load(0, -2, 11),
    6,
    Axis.Y,
    ShapeOperation.Replace
    )
    // @highlight
    shapes.circle(
    PLANKS_SPRUCE,
    positions.load(0, -1, 11),
    6,
    Axis.Y,
    ShapeOperation.Replace
    )
    // @highlight
    shapes.circle(
    PLANKS_SPRUCE,
    positions.load(0, 0, 11),
    6,
    Axis.Y,
    ShapeOperation.Outline
    )
    blocks.fill(
    AIR,
    positions.load(-2, 0, 4),
    positions.load(2, 0, 6),
    FillOperation.Replace
    )
    shapes.circle(
    WATER,
    positions.load(0, -1, 11),
    5,
    Axis.Y,
    ShapeOperation.Replace
    )
}
```

Find this ``||functions:script||`` and add the code in yellow.

## Try it!

Type **a** to play!