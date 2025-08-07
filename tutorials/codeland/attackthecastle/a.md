### @explicitHints true


# Attack the Castle

```template
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
player.onChat("attack", function () {
    positions2.save(posCamera(0, 0, 0))
    setup_player()
})
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
```

Build this ``||functions:script||``.

## Step 2

```blocks
blocks.onBlockBroken(BEACON, function () {
    gameplay.title(mobs.target(ALL_PLAYERS), "Beacon destroyed!", "You win!")
})
```

Build this ``||functions:script||``.

## Step 3

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

## Step 4

```blocks
function spawn_enemies () {
    while (blocks.testForBlock(BEACON, positions2.load(0, 0, 0))) {
        mobs.spawn(mobs.monster(PILLAGER), positions2.load(0, 0, 0))
        loops.pause(2000)
    }
}
```

Build this ``||functions:script|``.

## Step 5

```blocks
// @hide
function build_fort() {}

// @hide
function spawn_enemies() {}

player.onChat("attack", function () {
    positions2.save(posCamera(0, 0, 0))
    build_fort()
    // @highlight
    setup_player()
    // @highlight
    spawn_enemies()
})
```

Find this ``||functions:script||`` and call the functions we made earlier.

## Try it!

Type **attack** to play!