### @explicitHints true

### @diffs true

# Parkour



```template
let x = 0
let z = 0
function guardrails () {
    if (x < -6) {
        x = -6
    } else if (x > 6) {
        x = 6
    }
}
player.onChat("p", function () {
    positions2.save(posCamera(0, 0, 0))
    base()
    generate_path()
    setup_player()
})
function base () {
    blocks.fill(
    COBBLESTONE,
    positions2.load(-7, 0, 1),
    positions2.load(7, 3, 100),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    positions2.load(-6, 1, 1),
    positions2.load(6, 3, 100),
    FillOperation.Replace
    )
    blocks.fill(
    WATER,
    positions2.load(-6, 0, 2),
    positions2.load(6, 0, 99),
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
        player.teleport(positions2.load(0, 0, 0))
    }
})
function place_stone () {
    for (let index = 0; index < randint(1, 2); index++) {
        blocks.place(COBBLESTONE, positions2.load(x, 1, z))
        z += 1
    }
}
function generate_path () {
    for (let index = 0; index < 2; index++) {
        x = randint(-5, 5)
        z = 2
        while (z < 99) {
            guardrails()
            place_stone()
            x += randint(-2, 2)
            z += randint(0, 2)
        }
    }
}
```

## Try it!

Type **p** to play!