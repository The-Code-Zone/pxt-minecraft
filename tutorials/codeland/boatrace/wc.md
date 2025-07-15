### @explicitHints true

### @diffs true

# Boat Race



```template
function course () {
    blocks.fill(
    PLANKS_DARK_OAK,
    positions2.load(8, -1, -10),
    positions2.load(40, -2, 10),
    FillOperation.Replace
    )
    blocks.fill(
    WATER,
    positions2.load(9, -1, -9),
    positions2.load(39, -1, 9),
    FillOperation.Replace
    )
    blocks.fill(
    PLANKS_DARK_OAK,
    positions2.load(12, -1, -2),
    positions2.load(36, -1, 2),
    FillOperation.Replace
    )
}
player.onChat("run", function () {
    positions2.save(world(-2, 65, 151))
    course()
    startfinish()
    boats()
    teleport_to_start()
})
function teleport_to_start () {
    mobs.teleportToPosition(
    mobs.target(ALL_PLAYERS),
    positions2.load(23, 0, 0)
    )
}
function startfinish () {
    shapes.line(
    WOOL,
    positions2.load(24, -2, 3),
    positions2.load(24, -2, 9)
    )
}
function boats () {
    mobs.give(
    mobs.target(ALL_PLAYERS),
    BOAT,
    1
    )
}
```

## Try it!

Type **run** to play!