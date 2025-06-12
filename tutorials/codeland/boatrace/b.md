### @explicitHints true

### @diffs true

# Boat Race

```package
tcz=github:the-code-zone/pxt-minecraft-extensions
```

```template
function course () {
    blocks.fill(
    PLANKS_DARK_OAK,
    positions.load(-10, -1, 8),
    positions.load(10, -2, 40),
    FillOperation.Replace
    )
    blocks.fill(
    PLANKS_DARK_OAK,
    positions.load(-2, -1, 12),
    positions.load(2, -1, 36),
    FillOperation.Replace
    )
}
player.onChat("run", function () {
    positions.save(posCamera(0, 0, 0))
})
function startfinish () {
    shapes.line(
    WOOL,
    positions.load(3, -2, 24),
    positions.load(9, -2, 24)
    )
}
function boats () {
    mobs.give(
    mobs.target(ALL_PLAYERS),
    BOAT,
    1
    )
}
```

## Step 1

```blocks
// @hide
function course() {}

// @hide
function startfinish() {}

// @hide
function boats() {}

player.onChat("run", function () {
    positions.save(posCamera(0, 0, 0))
    // @highlight
    course()
    // @highlight
    startfinish()
    // @highlight
    boats()
})
```

Some ``||function:function calls||`` are missing.

Find this script and add the code in yellow.

## Step 2

```blocks
function course () {
    blocks.fill(
    PLANKS_DARK_OAK,
    positions.load(8, -1, -10),
    positions.load(40, -2, 10),
    FillOperation.Replace
    )
    // @highlight
    blocks.fill(
    WATER,
    positions.load(9, -1, -9),
    positions.load(39, -1, 9),
    FillOperation.Replace
    )
    blocks.fill(
    PLANKS_DARK_OAK,
    positions.load(12, -1, -2),
    positions.load(36, -1, 2),
    FillOperation.Replace
    )
}
```

There's no water on the course! Find this ``||functions:script||`` and add the code in yellow.

## Try it!

Type **run** to play!