### @explicitHints true

### @diffs true

# Dropper

```package
tcz=github:the-code-zone/pxt-minecraft-extensions
```

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
    blocks.place(GOLD_BLOCK, positions.load(0, 100, 0))
    player.teleport(positions.load(0, 101, 0))
    start_pos = player.position()
}
function base () {
    blocks.fill(
    BLACK_GLAZED_TERRACOTTA,
    positions.load(-15, 0, -15),
    positions.load(15, -1, 15),
    FillOperation.Replace
    )
    blocks.fill(
    GOLD_BLOCK,
    positions.load(-10, -2, -10),
    positions.load(10, -2, 10),
    FillOperation.Replace
    )
    blocks.fill(
    WATER,
    positions.load(-10, 0, -10),
    positions.load(10, -1, 10),
    FillOperation.Replace
    )
}
function blocks2 () {
    for (let index = 0; index < 250; index++) {
        blocks.place(BLACK_GLAZED_TERRACOTTA, positions.load(randint(-10, 10), randint(0, 100), randint(-10, 10)))
    }
}
player.onChat("d", function () {
    positions.save(posCamera(0, 0, 0))
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(LOCAL_PLAYER)
    )
    base()
    platform()
    blocks2()
})
```

## Try it!

Type **d** to play!