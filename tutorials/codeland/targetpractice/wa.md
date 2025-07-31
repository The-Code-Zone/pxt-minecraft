### @explicitHints true

### @diffs true

# Target Practice



```template
let x = 0
let z = 0

player.onChat("run", function () {
    positions2.save(world(174, 73, 13))
})
```

## Step 1

```blocks
function back_wall () {
    blocks.fill(
    PLANKS_DARK_OAK,
    positions2.load(23, 1, -18),
    positions2.load(24, 11, 18),
    FillOperation.Replace
    )
    blocks.print(
    "10",
    PINK_WOOL,
    positions2.load(23, 5, -17),
    SOUTH
    )
    blocks.print(
    "15",
    PINK_WOOL,
    positions2.load(23, 5, -5),
    SOUTH
    )
    blocks.print(
    "20",
    PINK_WOOL,
    positions2.load(23, 5, 7),
    SOUTH
    )
}
```

Build this ``||functions:script||``.

## Step 2

```blocks
function range () {
    blocks.fill(
        PLANKS_DARK_OAK,
        positions2.load(1, -1, -18),
        positions2.load(24, 0, 18),
        FillOperation.Replace
    )
    blocks.fill(
        AIR,
        positions2.load(2, 0, -17),
        positions2.load(22, 0, 17),
        FillOperation.Replace
    )
    blocks.fill(
        PLANKS_DARK_OAK,
        positions2.load(2, -1, -6),
        positions2.load(22, 0, 6),
        FillOperation.Replace
    )
    blocks.fill(
        AIR,
        positions2.load(2, 0, -5),
        positions2.load(22, 0, 5),
        FillOperation.Replace
    )
}
```

Build this ``||functions:script||``.

## Step 3

```blocks
function give_bow () {
    mobs.give(
    mobs.target(ALL_PLAYERS),
    BOW,
    1
    )
    mobs.give(
    mobs.target(ALL_PLAYERS),
    ARROW,
    64
    )
}
```

Build this ``||functions:script||``.

## Step 4

```blocks
function spawn_target (spawn_pos: Position) {
    shapes.circle(
    RED_WOOL,
    spawn_pos,
    2,
    Axis.X,
    ShapeOperation.Replace
    )
    shapes.circle(
    REDSTONE_LAMP,
    spawn_pos,
    1,
    Axis.X,
    ShapeOperation.Replace
    )
    blocks.place(TARGET, spawn_pos)
}
```

Build this ``||functions:script||``.

## Step 5

```blocks
// @hide
function spawn_targets() {}

// @highlight
function spawn_targets () {
    x = 3
    z = -12
    for (let index = 0; index < 3; index++) {
        spawn_target(positions2.load(x, 3, z))
        x += 8
        z += 12
    }
}
```

Build this ``||functions:script||``.

## Step 6

```blocks
// @hide
function range() {}

// @hide
function back_wall() {}

// @hide
function spawn_targets() {}

// @hide
function give_bow() {}

player.onChat("run", function () {
    positions2.save(world(174, 73, 13))
    // @highlight
    range()
    // @highlight
    back_wall()
    // @highlight
    spawn_targets()
    // @highlight
    give_bow()
})
```

## Try it!

Type **run** to play!