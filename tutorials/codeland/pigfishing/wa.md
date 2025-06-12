### @explicitHints true

### @diffs true

# Pig Fishing

```package
tcz=github:the-code-zone/pxt-minecraft-extensions
```

```template
player.onChat("pig", function () {
    positions.save(world(80, 70, 100))
})

```

## Step 1

```blocks
function pool () {
    shapes.circle(
    PLANKS_SPRUCE,
    positions.load(0, -2, -11),
    6,
    Axis.Y,
    ShapeOperation.Replace
    )
    shapes.circle(
    PLANKS_SPRUCE,
    positions.load(0, -1, -11),
    6,
    Axis.Y,
    ShapeOperation.Replace
    )
    shapes.circle(
    PLANKS_SPRUCE,
    positions.load(0, 0, -11),
    6,
    Axis.Y,
    ShapeOperation.Outline
    )
    blocks.fill(
    AIR,
    positions.load(-2, 0, -4),
    positions.load(2, 0, -6),
    FillOperation.Replace
    )
    shapes.circle(
    WATER,
    positions.load(0, -1, -11),
    5,
    Axis.Y,
    ShapeOperation.Replace
    )
}
```

Build this ``||functions:script||``.

## Step 2

```blocks
function spawn_mobs_and_items () {
    for (let index = 0; index < 10; index++) {
        mobs.spawn(PIG, positions.load(0, 0, -11))
    }
    mobs.give(
    mobs.target(ALL_PLAYERS),
    FISHING_ROD,
    1
    )
}
```

Build this ``||functions:script||``.

## Step 3

```blocks
function pits_and_platforms () {
    blocks.fill(
    PLANKS_SPRUCE,
    positions.load(-3, 0, -1),
    positions.load(3, 0, -1),
    FillOperation.Replace
    )
    blocks.fill(
    PLANKS_SPRUCE,
    positions.load(-3, -3, -2),
    positions.load(3, 1, -6),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    positions.load(-2, -2, -4),
    positions.load(2, 1, -6),
    FillOperation.Replace
    )
    blocks.fill(
    PLANKS_SPRUCE,
    positions.load(0, -1, -4),
    positions.load(0, -2, -5),
    FillOperation.Replace
    )
}
```

Build this ``||functions:script||``.


## Step 4

```blocks
// @hide
function pool() {}

// @hide
function pits_and_platforms() {}

// @hide
function spawn_mobs_and_items() {}

player.onChat("pig", function () {
    positions.save(world(80, 69, 99))
    // @highlight
    pits_and_platforms()
    // @highlight
    pool()
    // @highlight
    spawn_mobs_and_items()
})
```

Find this ``||functions:script||`` and add the code in yellow.

## Try it!

Type **a** to play!