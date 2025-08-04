### @explicitHints true

### @diffs true

# Glider



```template
player.onChat("g", function () {})
```

## Step 1

```blocks
function rings () {
    positions2.save(positions2.load(0, -10, -15))
    for (let index = 0; index < 10; index++) {
        blocks.fill(
        AIR,
        positions2.load(-19, -4, 0),
        positions2.load(19, 4, 0),
        FillOperation.Replace
        )
        shapes.circle(
        GOLD_BLOCK,
        positions2.load(randint(-15, 15), 0, 0),
        4,
        Axis.Z,
        ShapeOperation.Hollow
        )
        positions2.save(positions2.load(0, -10, -30))
    }
}
```

Build this ``||functions:script||``.

## Step 2

```blocks
function platform () {
    blocks.place(STONE, positions2.load(0, -1, 0))
    player.teleport(positions2.load(0, 0, 0))
    entities.spawnpoint(mobs.target(LOCAL_PLAYER), positions2.load(0, 0, 0))
}
```

Build this ``||functions:script||``.

## Step 3

```blocks
// @hide
function platform() {}

// @hide
function rings() {}

player.onChat("g", function () {
    positions2.save(world(42, 184, -120))
    // @highlight
    platform()
    // @highlight
    gameplay.title(mobs.target(LOCAL_PLAYER), "Wait...", "")
    // @highlight
    rings()
    // @highlight
    gameplay.title(mobs.target(LOCAL_PLAYER), "Go!", "")
    // @highlight
    entities.replaceItem(ELYTRA, Slot.Chest, mobs.target(LOCAL_PLAYER))
    // @highlight
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(LOCAL_PLAYER)
    )
})
```

Finally, find this ``||functions:script||`` and finish it off by adding the code in yellow.

## Try it!

Type **g** to play!