### @explicitHints true

### @diffs true

# Spleef



```template
let height = 0
let number_of_platforms = 0
```

## Step 1

```blocks
player.onChat("s", function () {
    entities.spawnpoint(mobs.target(ALL_PLAYERS))
    entities.respawnMode(CREATIVE)
    positions2.save(world(128, 60, 96))
    number_of_platforms = 5
    height = 8
    mobs.kill(entities.allItems())
})
```

Build this code inside an ``||player:on chat||`` block.

Before we can really get started, we need to save a ``||positions:position||`` and set up our starting ``||variables:variables||``.

If you ever need help finding the right blocks, you can click on the bold text to open up the right category of blocks, or try the Search bar.

## Step 2

```blocks
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
}
```

Build this script. You'll need to make a ``||functions:new function||`` to put the code into.

Using the variables from the last step, we can ``||loops:loop some code||`` and place down some platforms ``||blocks:filled with snow||``.

## Step 3

```blocks
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
```

Build this script. You'll need to make a ``||functions:new function||`` for this step too.

This function will teleport ``||mobs:all players||`` to the top platform, give them all a diamond shovel, and swap them to survival mode.

## Step 4

```blocks
// @hide
function generate_platforms () {}

// @hide
function setup_players() {}

player.onChat("s", function () {
    entities.spawnpoint(mobs.target(ALL_PLAYERS))
    entities.respawnMode(CREATIVE)
    positions2.save(world(128, 60, 96))
    number_of_platforms = 5
    height = 8
    mobs.kill(entities.allItems())
    // @highlight
    generate_platforms()
    // @highlight
    setup_players()
})
```

Find this script and add the blocks in yellow.

We need to ``||functions:add some calls to the functions we made earlier||`` so the code actually runs.

## Step 5 ... lava!

```blocks
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
    // @highlight
    blocks.fill(
    LAVA,
    positions2.load(1, 5, 1),
    positions2.load(30, 5, 30),
    FillOperation.Replace
    )
}
```

Right now players just land at the bottom when they lose.

``||blocks:Fill the bottom with lava!||``

## Try it!

Type **s** to play a game of Spleef.