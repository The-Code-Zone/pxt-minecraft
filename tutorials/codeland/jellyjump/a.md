### @explicitHints true


# Jelly Jump



```customts
let random_x = 0
let random_z = 0
```

```template
let y = 0
player.onChat("jump", function () {
    positions2.save(posCamera(0, 0, 0))
})
```
## Step 1

```blocks
function spawn_pad () {
    blocks.fill(
    AIR,
    positions2.load(0, 0, 0),
    positions2.load(14, 0, 14),
    FillOperation.Replace
    )
    blocks.fill(
    LIME_GLAZED_TERRACOTTA,
    positions2.load(random_x, 0, random_z),
    positions2.load(random_x + 4, 0, random_z + 4),
    FillOperation.Replace
    )
    blocks.fill(
    SLIME_BLOCK,
    positions2.load(random_x + 1, 0, random_z + 1),
    positions2.load(random_x + 3, 0, random_z + 3),
    FillOperation.Replace
    )
}
```

Build this ``||functions:script||``.

## Step 2

```blocks
// @hide
function spawn_pad() {}

// @highlight
function spawn_pads () {
    for (let index = 0; index < 10; index++) {
        random_x = randint(0, 10)
        random_z = randint(0, 10)
        spawn_pad()
        positions2.change(Axis.Y, 10)
    }
}
```

Build this ``||functions:script||``.

## Step 3

```blocks
function teleport () {
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(ALL_PLAYERS)
    )
    mobs.teleportToPosition(
    mobs.target(ALL_PLAYERS),
    positions2.load(random_x + 2, 90, random_z + 2)
    )
    entities.spawnpoint(mobs.target(ALL_PLAYERS))
}
```

Build this ``||functions:script||``.

## Step 4

```blocks
player.onTravelled(SWIM_WATER, function () {
    gameplay.setGameMode(
    CREATIVE,
    mobs.target(LOCAL_PLAYER)
    )
})
```

Build this ``||functions:script||``.

## Step 5

```blocks
// @hide
function spawn_pads() {}

// @hide
function teleport() {}

player.onChat("jump", function () {
    positions2.save(posCamera(0, 0, 0))
    // @highlight
    spawn_pads()
    // @highlight
    teleport()
})
```

Find this ``||functions:script||`` and add the code in yellow.

## Try it!

Type **jump** to play!