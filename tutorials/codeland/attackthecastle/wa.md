### @explicitHints true

### @diffs true

# Attack the Castle

```template
function setup_player () {
    mobs.give(
    mobs.target(ALL_PLAYERS),
    NETHERITE_SWORD,
    1
    )
    mobs.applyEffect(STRENGTH, mobs.target(ALL_PLAYERS), 120, 2)
}
player.onChat("attack", function () {
    positions.save(world(113, 70, -6))
    setup_player()
})
```

## Step 1

Make a new variable called **beacon_position**.

## Step 2

```blocks
function build_fort () {
    blocks.fill(
    CRACKED_STONE_BRICKS,
    positions.load(-7, 5, -50),
    positions.load(7, -1, -40),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    positions.load(-6, 5, -49),
    positions.load(6, 0, -41),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    positions.load(-1, 2, -40),
    positions.load(1, 0, -40),
    FillOperation.Replace
    )
    beacon_position = world(113, 70, -53)
    blocks.place(BEACON, beacon_position)
}
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

## Step 4

```blocks
function spawn_enemies () {
    while (blocks.testForBlock(BEACON, beacon_position)) {
        mobs.spawn(mobs.monster(PILLAGER), beacon_position)
        loops.pause(2000)
    }
    display.showMessage("Beacon destroyed! You win!")
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
    positions.save(world(113, 70, -6))
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