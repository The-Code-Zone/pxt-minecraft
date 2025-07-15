### @explicitHints true

### @diffs true

# On Rails Archery



```template
let target_x = 0
let target_y = 0
let target_z = 0
player.onChat("a", function () {
    positions2.save(posCamera(0, 0, 0))
    powered_rails()
    corner_rails()
    target()
    items()
})
function items () {
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    MINECART,
    1
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    BOW,
    1
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    ARROW,
    64
    )
}
function target () {
    for (let index = 0; index < 10; index++) {
        target_x = randint(0, 30)
        target_y = randint(2, 5)
        target_z = randint(0, 30)
        blocks.place(TARGET, positions2.load(target_x, target_y, target_z))
        blocks.place(REDSTONE_LAMP, positions2.load(target_x, target_y + 1, target_z))
    }
}
function corner_rails () {
    blocks.place(RAIL, positions2.load(0, 0, 0))
    blocks.place(RAIL, positions2.load(0, 0, 30))
    blocks.place(RAIL, positions2.load(30, 0, 30))
    blocks.place(RAIL, positions2.load(30, 0, 0))
}
function powered_rails () {
    shapes.line(
    POWERED_RAIL,
    positions2.load(0, 0, 0),
    positions2.load(0, 0, 30)
    )
    shapes.line(
    POWERED_RAIL,
    positions2.load(0, 0, 30),
    positions2.load(30, 0, 30)
    )
    shapes.line(
    POWERED_RAIL,
    positions2.load(30, 0, 30),
    positions2.load(30, 0, 0)
    )
    shapes.line(
    POWERED_RAIL,
    positions2.load(30, 0, 0),
    positions2.load(0, 0, 0)
    )
    blocks.fill(
    REDSTONE_TORCH,
    positions2.load(1, 0, 1),
    positions2.load(29, 0, 29),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    positions2.load(2, 0, 2),
    positions2.load(28, 0, 28),
    FillOperation.Replace
    )
}

```

## Try it!

Type **a** to play!