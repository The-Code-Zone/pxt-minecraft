### @explicitHints true

### @diffs true

# Glider



```template
let x = 0
let y = 0
let z = 0
player.onChat("g", function () {
    positions2.save(world(42, 184, -120))
})
```

## Step 1

```blocks
function rings () {
    positions2.save(posCamera(0, 0, 0))
    x = 0
    y = -1
    z = 10
    for (let index = 0; index < 10; index++) {
        shapes.circle(
        GOLD_BLOCK,
        positions2.load(x, y, z),
        4,
        Axis.Z,
        ShapeOperation.Hollow
        )
        x = randint(-15, 15)
        y += -10
        z += 30
    }
}
```

Build this ``||functions:script||``.

## Step 2

```blocks
function platform () {
    player.teleport(positions2.load(0, 0, 0))
    blocks.place(STONE, positions2.load(0, -1, 0))
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
    rings()
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