### @explicitHints true

### @diffs true

# Spleef

```package
tcz=github:the-code-zone/pxt-minecraft-extensions
```

```template
let number_of_platforms = 0
let height = 0

function generate_platforms () {
    for (let index = 0; index < number_of_platforms; index++) {
        blocks.fill(
        GLASS,
        positions.load(1, height, 1),
        positions.load(30, height + 5, 30),
        FillOperation.Hollow
        )
        blocks.fill(
        SNOW,
        positions.load(2, height, 2),
        positions.load(29, height, 29),
        FillOperation.Replace
        )
        height += 5
    }
    blocks.fill(
    LAVA,
    positions.load(1, 5, 1),
    positions.load(30, 5, 30),
    FillOperation.Replace
    )
}

function setup_players () {
    mobs.teleportToPosition(
    mobs.target(ALL_PLAYERS),
    positions.load(15, height - 3, 15)
    )
}

player.onChat("s", function () {
    positions.save(posCamera(0, 0, 0))
    number_of_platforms = 5
    height = 8
    generate_platforms()
    setup_players()
})
```

## Step 1

The Spleef code is mostly working, but players aren't being spawned in with the proper tools to play the game!

If you need help finding the right blocks, you can click on the ``||player:underlined text||`` to open up the right category of blocks, or try the Search bar.

## Step 2

```blocks
function setup_players () {
    mobs.teleportToPosition(
    mobs.target(ALL_PLAYERS),
    positions.load(15, height - 3, 15)
    )
    // @highlight
    mobs.give(
    mobs.target(ALL_PLAYERS),
    DIAMOND_SHOVEL,
    1
    )
    // @highlight
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(ALL_PLAYERS)
    )
}
```

We need to ``||mobs:give all players a shovel||`` so they can play.

While we're in the **setup_players** function, lets also make sure all players get swapped to ``||gameplay:survival mode||`` when the game starts too. 

## Try it!

Type **s** to play a game of Spleef.