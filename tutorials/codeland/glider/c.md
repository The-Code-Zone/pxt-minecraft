### @explicitHints true

### @diffs true

# Glider



```template
let x = 0
let y = 0
let z = 0
function platform () {
    player.teleport(pos(0, 101, 0))
    blocks.place(STONE, pos(0, -1, 0))
}
player.onChat("g", function () {
    platform()
    rings()
    entities.replaceItem(ELYTRA, Slot.Chest, mobs.target(LOCAL_PLAYER))
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(LOCAL_PLAYER)
    )
})
function rings () {
    positions2.save(posCamera(0, 0, 0))
    x = 0
    y = -1
    z = 10
    for (let index = 0; index < 10; index++) {
        shapes.circle(
        GOLD_BLOCK,
        positions2.load(x, y, z),
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