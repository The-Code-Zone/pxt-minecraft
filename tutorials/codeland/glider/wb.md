### @explicitHints true

### @diffs true

# Glider



```template
function platform () {
    blocks.place(STONE, positions2.load(0, -1, 0))
    player.teleport(positions2.load(0, 0, 0))
    entities.spawnpoint(mobs.target(LOCAL_PLAYER), positions2.load(0, 0, 0))
}
player.onChat("g", function () {
    positions2.save(world(42, 184, -120))
    platform()
    gameplay.title(mobs.target(LOCAL_PLAYER), "Wait...", "")
    rings()
    gameplay.title(mobs.target(LOCAL_PLAYER), "Go!", "")
})
player.onTravelled(SWIM_WATER, function () {
    gameplay.setGameMode(CREATIVE, mobs.target(LOCAL_PLAYER))
})
function rings () {
    positions2.change(Axis.Z, 15)
    for (let index = 0; index < 10; index++) {
        positions2.change(Axis.Y, -10)
        positions2.change(Axis.Z, -30)
        blocks.fill(
        AIR,
        positions2.load(-19, -4, 0),
        positions2.load(19, 4, 0),
        FillOperation.Replace
        )
        shapes.circle(
        GOLD_BLOCK,
        positions2.load(0, 0, 0),
        4,
        Axis.Z,
        ShapeOperation.Hollow
        )
    }
}
```

## Step 1

```blocks
// @hide
function platform() {}

// @hide
function rings() {}

player.onChat("g", function () {
    positions2.save(world(42, 184, -120))
    platform()
    gameplay.title(mobs.target(LOCAL_PLAYER), "Wait...", "")
    rings()
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

Find this ``||functions:script||`` and make sure the player starts with an Elytra, and in Survival mode.

## Step 2

```blocks
function rings () {
    positions2.change(Axis.Z, 15)
    for (let index = 0; index < 10; index++) {
        positions2.change(Axis.Y, -10)
        positions2.change(Axis.Z, -30)
        blocks.fill(
        AIR,
        positions2.load(-19, -4, 0),
        positions2.load(19, 4, 0),
        FillOperation.Replace
        )
        // @highlight
        shapes.circle(
        GOLD_BLOCK,
        positions2.load(randint(-15, 15), 0, 0),
        4,
        Axis.Z,
        ShapeOperation.Hollow
        )
    }
}
```

Find this ``||functions:script||`` and change the block in yellow, so the rings are randomly positioned instead of always in the same place.

## Try it!

Type **g** to play!