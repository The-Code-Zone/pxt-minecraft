### @explicitHints true

### @diffs true

# Spleef



```template
let number_of_platforms = 0
let height = 0

function generate_platforms () {
    for (let index = 0; index < number_of_platforms; index++) {
        blocks.fill(
        GLASS,
        positions2.load(1, height, 1),
        positions2.load(30, height + 5, 30),
        FillOperation.Hollow
        )
        blocks.fill(
        SNOW,
        positions2.load(2, height, 2),
        positions2.load(29, height, 29),
        FillOperation.Replace
        )
        height += 5
    }
    blocks.fill(
    LAVA,
    positions2.load(1, 5, 1),
    positions2.load(30, 5, 30),
    FillOperation.Replace
    )
}

function setup_players () {
    mobs.teleportToPosition(
    mobs.target(ALL_PLAYERS),
    positions2.load(15, height - 3, 15)
    )
    mobs.give(
    mobs.target(ALL_PLAYERS),
    DIAMOND_SHOVEL,
    1
    )
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(ALL_PLAYERS)
    )
}

player.onChat("s", function () {
    positions2.save(world(128, 60, 96))
    number_of_platforms = 5
    height = 8
    entities.spawnpoint(mobs.target(ALL_PLAYERS))
    mobs.kill(entities.allItems())
    generate_platforms()
    setup_players()
})

entities.onPlayerRespawned(function () {
    gameplay.setGameMode(
    CREATIVE,
    mobs.target(LOCAL_PLAYER)
    )
})
```

## Try it!

Type **s** to play a game of Spleef.