### @explicitHints true

### @diffs true

# Parkour



```template
let z = 0
let x = 0
function guardrails () {
    if (z < -6) {
        z = -6
    } else if (z > 6) {
        z = 6
    }
}
player.onChat("p", function () {
    positions2.save(world(25, 70, -18))
    base()
    generate_path()
    setup_player()
})
function base () {
    blocks.fill(
    COBBLESTONE,
    positions2.load(-2, -1, -7),
    positions2.load(-127, 2, 7),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    positions2.load(-2, 0, -6),
    positions2.load(-127, 2, 6),
    FillOperation.Replace
    )
    blocks.fill(
    WATER,
    positions2.load(-3, -1, -6),
    positions2.load(-126, -1, 6),
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
player.onTravelled(SWIM_WATER, function () {
    player.teleport(positions2.load(0, 0, 0))
})
function place_stone () {
    for (let index = 0; index < randint(1, 2); index++) {
        blocks.place(COBBLESTONE, positions2.load(x, 0, z))
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