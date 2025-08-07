### @explicitHints true


# Attack the Castle

```template
function build_fort () {
    blocks.fill(
    CRACKED_STONE_BRICKS,
    positions2.load(-7, 5, -50),
    positions2.load(7, -1, -40),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    positions2.load(-6, 5, -49),
    positions2.load(6, 0, -41),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    positions2.load(-1, 2, -40),
    positions2.load(1, 0, -40),
    FillOperation.Replace
    )
    positions2.change(Axis.Z, -47)
    blocks.place(BEACON, positions2.load(0, 0, 0))
    blocks.fill(
    EMERALD_BLOCK,
    positions2.load(-1, -1, -1),
    positions2.load(1, -1, 1),
    FillOperation.Replace
    )
}
function setup_player () {
    mobs.give(
    mobs.target(ALL_PLAYERS),
    NETHERITE_SWORD,
    1
    )
    mobs.applyEffect(STRENGTH, mobs.target(ALL_PLAYERS), 120, 2)
    entities.spawnpoint(mobs.target(ALL_PLAYERS))
    mobs.teleportToPosition(
    mobs.target(ALL_PLAYERS),
    positions2.load(0, 0, 55)
    )
}
function spawn_enemies () {
    while (blocks.testForBlock(BEACON, positions2.load(0, 0, 0))) {}
}
player.onChat("attack", function () {
    positions2.save(posCamera(0, 0, 0))
    build_fort()
    setup_player()
    spawn_enemies()
})
blocks.onBlockBroken(BEACON, function () {})
entities.onPlayerRespawned(function () {
    gameplay.setGameMode(
    CREATIVE,
    mobs.target(ALL_PLAYERS)
    )
    blocks.place(AIR, positions2.load(0, 0, 0))
    mobs.kill(
    mobs.entitiesByType(mobs.monster(PILLAGER))
    )
    gameplay.title(mobs.target(ALL_PLAYERS), "Game Over!", "Try again?")
})
```

## Step 1

```blocks
function setup_player () {
    // @highlight
    gameplay.setDifficulty(EASY)
    // @highlight
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(ALL_PLAYERS)
    )
    mobs.give(
    mobs.target(ALL_PLAYERS),
    NETHERITE_SWORD,
    1
    )
    mobs.applyEffect(STRENGTH, mobs.target(ALL_PLAYERS), 120, 2)
    entities.spawnpoint(mobs.target(ALL_PLAYERS))
    mobs.teleportToPosition(
    mobs.target(ALL_PLAYERS),
    positions2.load(0, 0, 55)
    )
}
```

Find this ``||functions:script|`` and add the code in yellow.

## Step 2

```blocks
blocks.onBlockBroken(BEACON, function () {
    // @highlight
    gameplay.title(mobs.target(ALL_PLAYERS), "Beacon destroyed!", "You win!")
})
```

Find this ``||functions:script|`` and add the code in yellow.

## Step 3

```blocks
function spawn_enemies () {
    while (blocks.testForBlock(BEACON, positions2.load(0, 0, 0))) {
        // @highlight
        mobs.spawn(mobs.monster(PILLAGER), positions2.load(0, 0, 0))
        // @highlight
        loops.pause(2000)
    }
}
```

Find this ``||functions:script|`` and finish the while loop by adding the code in yellow.

## Try it!

Type **attack** to play!