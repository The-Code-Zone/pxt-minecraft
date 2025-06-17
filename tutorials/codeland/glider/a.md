### @explicitHints true

### @diffs true

# Glider



```template
let x = 0
let y = 0
let z = 0
player.onChat("g", function () {
})
```

## Step 1

```blocks
function rings () {
    positions.save(posCamera(0, 0, 0))
    x = 0
    y = -1
    z = 10
    for (let index = 0; index < 10; index++) {
        shapes.circle(
        GOLD_BLOCK,
        positions.load(x, y, z),
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
    player.teleport(pos(0, 101, 0))
    blocks.place(STONE, pos(0, -1, 0))
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
    // @highlight
    platform()
    // @highlight
    rings()
    // @highlight
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    ELYTRA,
    1
    )
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