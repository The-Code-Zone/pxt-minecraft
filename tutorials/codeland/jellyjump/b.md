### @explicitHints true

### @diffs true

# Jelly Jump



```template
let random_x = 0
let random_z = 0
function spawn_pads () {
    for (let index = 0; index < 10; index++) {
        random_x = randint(0, 10)
        random_z = randint(0, 10)
        spawn_pad()
    }
}
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
}
player.onTravelled(SWIM_WATER, function () {
    gameplay.setGameMode(
    CREATIVE,
    mobs.target(LOCAL_PLAYER)
    )
})
player.onChat("jump", function () {
    positions2.save(posCamera(0, 0, 0))
    spawn_pads()
    teleport()
})
function teleport () {
    mobs.teleportToPosition(
    mobs.target(ALL_PLAYERS),
    positions2.load(random_x + 2, 90, random_z + 2)
    )
    entities.spawnpoint(mobs.target(ALL_PLAYERS))
}
```

## Step 1

```blocks
function teleport () {
    // @highlight
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(ALL_PLAYERS)
    )
    mobs.teleportToPosition(
    mobs.target(ALL_PLAYERS),
    positions2.load(random_x + 2, 90, random_z + 2)
    )
}
```

Find this ``||functions:script||`` and add the code in yellow.

## Step 2

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
    // @highlight
    blocks.fill(
    SLIME_BLOCK,
    positions2.load(random_x + 1, 0, random_z + 1),
    positions2.load(random_x + 3, 0, random_z + 3),
    FillOperation.Replace
    )
}
```

Find this ``||functions:script||`` and add the code in yellow.

## Step 3

```blocks
// @hide
function spawn_pad() {}

function spawn_pads () {
    for (let index = 0; index < 10; index++) {
        random_x = randint(0, 10)
        random_z = randint(0, 10)
        spawn_pad()
        // @highlight
        positions2.change(Axis.Y, 10)
    }
}
```

Find this ``||functions:script||`` and add the code in yellow. 

Right now all the pads are spawning on top of eachother. 

## Try it!

Type **jump** to play!