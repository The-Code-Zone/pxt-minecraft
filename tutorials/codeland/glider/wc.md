### @explicitHints true

### @diffs true

# Glider



```template
let x = 0
let y = 0
let z = 0
function platform () {
    player.teleport(positions.load(0, 0, 0))
    blocks.place(STONE, positions.load(0, -1, 0))
}
player.onChat("g", function () {
    positions.save(world(42, 184, -120))
    platform()
    rings()
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    ELYTRA,
    1
    )
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(LOCAL_PLAYER)
    )
})
function rings () {
    positions.save(posCamera(0, 0, 0))
    x = 0
    y = -1
    z = 10
    for (let index = 0; index < 10; index++) {
        shapes.circle(
        GOLD_BLOCK,
        positions.load(x, y, z),
        4,
        Axis.Z,
        ShapeOperation.Hollow
        )
        x = randint(-15, 15)
        y += -10
        z += 30
    }
}
```

## Try it!

Type **g** to play!