### @explicitHints true

### @diffs true

# Parkour



```template
let z = 0
let start_pos: Position = null
let x = 0
function guardrails () {
    if (z < -6) {
        z = -6
    } else if (z > 6) {
        z = 6
    }
}
player.onChat("p", function () {
    positions.save(world(25, 70, -18))
    start_pos = player.position()
    base()
    generate_path()
    setup_player()
})
function base () {
    blocks.fill(
    COBBLESTONE,
    positions.load(-2, -1, -7),
    positions.load(-127, 2, 7),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    positions.load(-2, 0, -6),
    positions.load(-127, 2, 6),
    FillOperation.Replace
    )
    blocks.fill(
    WATER,
    positions.load(-3, -1, -6),
    positions.load(-126, -1, 6),
    FillOperation.Replace
    )
}
function setup_player () {
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(LOCAL_PLAYER)
    )
    mobs.clearEffect(mobs.target(LOCAL_PLAYER))
    mobs.applyEffect(SPEED, mobs.target(NEAREST_PLAYER), 600, 2)
}
loops.forever(function () {
    if (blocks.testForBlock(WATER, pos(0, 0, 0))) {
        player.teleport(start_pos)
    }
})
function place_stone () {
    for (let index = 0; index < randint(1, 2); index++) {
        blocks.place(COBBLESTONE, positions.load(x, 1, z))
        x += -1
    }
}
function generate_path () {
    for (let index = 0; index < 2; index++) {
        x = -2
        z = randint(-5, 5)
        while (x > -127) {
            guardrails()
            place_stone()
            x += randint(0, -2)
            z += randint(-2, 2)
        }
    }
}
```

## Try it!

Type **p** to play!