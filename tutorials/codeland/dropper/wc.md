### @explicitHints true

### @diffs true

# Dropper



```template
let start_pos: Position = null
function check () {
    while (true) {
        if (blocks.testForBlock(BLACK_GLAZED_TERRACOTTA, pos(0, -1, 0))) {
            player.teleport(start_pos)
        }
    }
}
function platform () {
    blocks.place(GOLD_BLOCK, positions2.load(0, 100, 0))
    player.teleport(positions2.load(0, 101, 0))
    start_pos = player.position()
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
    for (let index = 0; index < 250; index++) {
        blocks.place(BLACK_GLAZED_TERRACOTTA, positions2.load(randint(-10, 10), randint(0, 100), randint(-10, 10)))
    }
}
player.onChat("d", function () {
    positions2.save(world(69, 68, -72))
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(LOCAL_PLAYER)
    )
    base()
    platform()
    blocks()
    check()
})
```

## Try it!

Type **d** to play!