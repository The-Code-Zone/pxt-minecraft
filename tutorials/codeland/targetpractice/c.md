### @explicitHints true

### @diffs true

# Target Practice

```package
tcz=github:the-code-zone/pxt-minecraft-extensions
```

```template
let x = 0
let z = 0

function back_wall () {
    blocks.fill(
    PLANKS_DARK_OAK,
    positions.load(23, 1, -18),
    positions.load(24, 11, 18),
    FillOperation.Replace
    )
    blocks.print(
    "10",
    PINK_WOOL,
    positions.load(23, 5, -17),
    SOUTH
    )
    blocks.print(
    "15",
    PINK_WOOL,
    positions.load(23, 5, -5),
    SOUTH
    )
    blocks.print(
    "20",
    PINK_WOOL,
    positions.load(23, 5, 7),
    SOUTH
    )
}

function spawn_target (pos2: Position) {
    shapes.circle(
    RED_WOOL,
    pos2,
    2,
    Axis.X,
    ShapeOperation.Replace
    )
    shapes.circle(
    REDSTONE_LAMP,
    pos2,
    1,
    Axis.X,
    ShapeOperation.Replace
    )
    blocks.place(TARGET, pos2)
}

player.onChat("run", function () {
    positions.save(posCamera(0, 0, 0))
    range()
    back_wall()
    spawn_targets()
    give_bow()
})

function spawn_targets () {
    x = 3
    z = -12
    for (let index = 0; index < 3; index++) {
        spawn_target(positions.load(x, 3, z))
        x += 8
        z += 12
    }
}

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

function range () {
    blocks.fill(
    PLANKS_DARK_OAK,
    positions.load(1, -1, -18),
    positions.load(24, 0, 18),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    positions.load(2, 0, -17),
    positions.load(22, 0, 17),
    FillOperation.Replace
    )
    blocks.fill(
    PLANKS_DARK_OAK,
    positions.load(2, -1, -6),
    positions.load(22, 0, 6),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    positions.load(2, 0, -5),
    positions.load(22, 0, 5),
    FillOperation.Replace
    )
}
```

## Try it!

Type **run** to play!