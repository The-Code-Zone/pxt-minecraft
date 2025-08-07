### @explicitHints true


# Boat Race



```template
function course () {
    blocks.fill(
    PLANKS_DARK_OAK,
    positions2.load(-10, -1, 8),
    positions2.load(10, -2, 40),
    FillOperation.Replace
    )
    blocks.fill(
    WATER,
    positions2.load(-9, -1, 9),
    positions2.load(9, -1, 39),
    FillOperation.Replace
    )
    blocks.fill(
    PLANKS_DARK_OAK,
    positions2.load(-2, -1, 12),
    positions2.load(2, -1, 36),
    FillOperation.Replace
    )
}
player.onChat("run", function () {
    positions2.save(posCamera(0, 0, 0))
    course()
    startfinish()
    boats()
})
function startfinish () {
    shapes.line(
    WOOL,
    positions2.load(3, -2, 24),
    positions2.load(9, -2, 24)
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