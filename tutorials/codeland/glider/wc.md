### @explicitHints true

### @diffs true

# Glider



```template
function platform () {
    blocks.place(STONE, positions2.load(0, -1, 0))
    player.teleport(positions2.load(0, 0, 0))
    entities.spawnpoint(mobs.target(LOCAL_PLAYER), positions2.load(0, 0, 0))
}
player.onChat("g", function () {
    positions2.save(world(42, 184, -120))
    platform()
    gameplay.title(mobs.target(LOCAL_PLAYER), "Wait...", "")
    rings()
    gameplay.title(mobs.target(LOCAL_PLAYER), "Go!", "")
    entities.replaceItem(ELYTRA, Slot.Chest, mobs.target(LOCAL_PLAYER))
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(LOCAL_PLAYER)
    )
})
function rings () {
    positions2.save(positions2.load(0, -10, -15))
    for (let index = 0; index < 10; index++) {
        blocks.fill(
        AIR,
        positions2.load(-19, -4, 0),
        positions2.load(19, 4, 0),
        FillOperation.Replace
        )
        shapes.circle(
        GOLD_BLOCK,
        positions2.load(randint(-15, 15), 0, 0),
        4,
        Axis.Z,
        ShapeOperation.Hollow
        )
        positions2.save(positions2.load(0, -10, -30))
    }
}
```

## Try it!

Type **g** to play!