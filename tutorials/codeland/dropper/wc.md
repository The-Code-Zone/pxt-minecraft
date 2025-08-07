### @explicitHints true


# Dropper



```template
function platform () {
    blocks.place(GLASS, positions2.load(0, 100, 0))
    player.teleport(positions2.load(0, 101, 0))
}
function base () {
    blocks.fill(
    BLACK_GLAZED_TERRACOTTA,
    positions2.load(-15, 0, -15),
    positions2.load(15, -1, 15),
    FillOperation.Replace
    )
    blocks.fill(
    GOLD_BLOCK,
    positions2.load(-10, -2, -10),
    positions2.load(10, -2, 10),
    FillOperation.Replace
    )
    blocks.fill(
    WATER,
    positions2.load(-10, 0, -10),
    positions2.load(10, -1, 10),
    FillOperation.Replace
    )
}
function blocks () {
    blocks.fill(
    AIR,
    positions2.load(-10, 0, -10),
    positions2.load(10, 49, 10),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    positions2.load(-10, 50, -10),
    positions2.load(10, 99, 10),
    FillOperation.Replace
    )
    for (let index = 0; index < 250; index++) {
        blocks.place(BLACK_GLAZED_TERRACOTTA, positions2.load(randint(-10, 10), randint(0, 99), randint(-10, 10)))
    }
}
player.onChat("d", function () {
    positions2.save(world(69, 68, -72))
    mobs.execute(
    mobs.target(LOCAL_PLAYER),
    pos(0, 0, 0),
    "spawnpoint @s 69 169 -72"
    )
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(LOCAL_PLAYER)
    )
    base()
    platform()
    gameplay.title(mobs.target(LOCAL_PLAYER), "Wait...", "")
    blocks()
    gameplay.title(mobs.target(LOCAL_PLAYER), "GO!", "")
})
while (true) {
    if (blocks.testForBlock(BLACK_GLAZED_TERRACOTTA, pos(0, -1, 0))) {
        player.teleport(positions2.load(0, 101, 0))
    }
}
```

## Try it!

Type **d** to play!