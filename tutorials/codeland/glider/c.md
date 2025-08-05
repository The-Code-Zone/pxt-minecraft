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
    positions2.save(pos(0, 101, 0))
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
player.onTravelled(SWIM_WATER, function () {
    gameplay.setGameMode(CREATIVE, mobs.target(LOCAL_PLAYER))
})
function rings () {
    positions2.change(Axis.Z, 15)
    for (let index = 0; index < 10; index++) {
        positions2.change(Axis.Y, -10)
        positions2.change(Axis.Z, -30)
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
    }
}
```

## Try it!

Type **g** to play!