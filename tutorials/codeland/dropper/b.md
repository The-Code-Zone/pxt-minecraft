### @explicitHints true

### @diffs true

# Dropper



```template
let start_pos: Position = null
function check() {
    while (true) {
        if (blocks.testForBlock(BLACK_GLAZED_TERRACOTTA, pos(0, -1, 0))) {
            player.teleport(start_pos)
        }
    }
}
function base () {
    blocks.fill(
    BLACK_GLAZED_TERRACOTTA,
    positions2.load(-15, 0, -15),
    positions2.load(15, -1, 15),
    FillOperation.Replace
    )
    blocks.fill(
    GOLD_BLOCK,
    positions2.load(-10, -2, -10),
    positions2.load(10, -2, 10),
    FillOperation.Replace
    )
    blocks.fill(
    WATER,
    positions2.load(-10, 0, -10),
    positions2.load(10, -1, 10),
    FillOperation.Replace
    )
}
player.onChat("d", function () {
    positions2.save(posCamera(0, 0, 0))
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(LOCAL_PLAYER)
    )
    base()
    check()
})
```

## Step 1

```blocks
function blocks () {
    for (let index = 0; index < 250; index++) {
        blocks.place(BLACK_GLAZED_TERRACOTTA, positions2.load(randint(-10, 10), randint(0, 100), randint(-10, 10)))
    }
}
```

Build this ``||functions:script||``.

## Step 2

```blocks
function platform () {
    blocks.place(GOLD_BLOCK, positions2.load(0, 100, 0))
    player.teleport(positions2.load(0, 101, 0))
    start_pos = player.position()
}
```

Build this ``||functions:script||``.

## Step 3

```blocks
// @hide
function base() {}

// @hide
function platform() {}

// @hide
function blocks() {}

// @hide
function check() {}

player.onChat("d", function () {
    positions2.save(posCamera(0, 0, 0))
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(LOCAL_PLAYER)
    )
    base()
    // @highlight
    platform()
    // @highlight
    blocks()
    check()
})
```

Find this ``||functions:script||`` and add the code in yellow.

## Try it!

Type **d** to play!