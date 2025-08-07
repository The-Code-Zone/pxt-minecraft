### @explicitHints true


# Attack the Castle

```template
let beacon_position: Position = null
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
    beacon_position = world(113, 70, -53)
    blocks.place(BEACON, beacon_position)
}
function setup_player () {
    mobs.give(
    mobs.target(ALL_PLAYERS),
    NETHERITE_SWORD,
    1
    )
    mobs.applyEffect(STRENGTH, mobs.target(ALL_PLAYERS), 120, 2)
}
function spawn_enemies () {
    while (blocks.testForBlock(BEACON, beacon_position)) {
    }
}
player.onChat("attack", function () {
    positions2.save(world(113, 70, -6))
    build_fort()
    setup_player()
    spawn_enemies()
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
    mobs.target(NEAREST_PLAYER)
    )
    mobs.give(
    mobs.target(ALL_PLAYERS),
    NETHERITE_SWORD,
    1
    )
    mobs.applyEffect(STRENGTH, mobs.target(ALL_PLAYERS), 120, 2)
}
```

Find this ``||functions:script|`` and add the code in yellow.

## Step 2

```blocks
function spawn_enemies () {
    while (blocks.testForBlock(BEACON, beacon_position)) {
    }
    // @highlight
    display.showMessage("Beacon destroyed! You win!")
}
```

Find this ``||functions:script|`` and add the code in yellow.

## Step 3

```blocks
function spawn_enemies () {
    while (blocks.testForBlock(BEACON, beacon_position)) {
        // @highlight
        mobs.spawn(mobs.monster(PILLAGER), beacon_position)
        // @highlight
        loops.pause(2000)
    }
    display.showMessage("Beacon destroyed! You win!")
}
```

In the same ``||functions:script|``, finish the while loop by adding the code in yellow.

## Try it!

Type **attack** to play!