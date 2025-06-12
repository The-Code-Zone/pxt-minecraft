### @explicitHints true

### @diffs true

# On Rails Archery

```package
tcz=github:the-code-zone/pxt-minecraft-extensions
```

```template
let target_x = 0
let target_y = 0
let target_z = 0
player.onChat("a", function () {
    positions.save(posCamera(0, 0, 0))
})
```

## Step 1

```blocks
function items () {
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    MINECART,
    1
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    BOW,
    1
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    ARROW,
    64
    )
}
```

Build this ``||functions:script||``.

## Step 2

```blocks
function powered_rails () {
    shapes.line(
    POWERED_RAIL,
    positions.load(0, 0, 0),
    positions.load(0, 0, 30)
    )
    shapes.line(
    POWERED_RAIL,
    positions.load(0, 0, 30),
    positions.load(30, 0, 30)
    )
    shapes.line(
    POWERED_RAIL,
    positions.load(30, 0, 30),
    positions.load(30, 0, 0)
    )
    shapes.line(
    POWERED_RAIL,
    positions.load(30, 0, 0),
    positions.load(0, 0, 0)
    )
    blocks.fill(
    REDSTONE_TORCH,
    positions.load(1, 0, 1),
    positions.load(29, 0, 29),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    positions.load(2, 0, 2),
    positions.load(28, 0, 28),
    FillOperation.Replace
    )
}
```

Build this ``||functions:script||``.

## Step 3

```blocks
function corner_rails () {
    blocks.place(RAIL, positions.load(0, 0, 0))
    blocks.place(RAIL, positions.load(0, 0, 30))
    blocks.place(RAIL, positions.load(30, 0, 30))
    blocks.place(RAIL, positions.load(30, 0, 0))
}
```

Build this ``||functions:script||``.

## Step 4

```blocks
function target () {
    for (let index = 0; index < 10; index++) {
        target_x = randint(0, 30)
        target_y = randint(2, 5)
        target_z = randint(0, 30)
        blocks.place(TARGET, positions.load(target_x, target_y, target_z))
        blocks.place(REDSTONE_LAMP, positions.load(target_x, target_y + 1, target_z))
    }
}
```

Build this ``||functions:script||``.

## Step 5

```blocks
// @hide
function powered_rails() {}

// @hide
function corner_rails() {}

// @hide
function target() {}

// @hide
function items() {}

player.onChat("a", function () {
    positions.save(posCamera(0, 0, 0))
    // @highlight
    powered_rails()
    // @highlight
    corner_rails()
    // @highlight
    target()
    // @highlight
    items()
})
```

Find this ``||functions:script||`` and add the code in yellow.

## Try it!

Type **a** to play!