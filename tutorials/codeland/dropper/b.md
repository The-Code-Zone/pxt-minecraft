### @explicitHints true

### @diffs true

# Dropper



```template
while (true) {
    if (blocks.testForBlock(BLACK_GLAZED_TERRACOTTA, pos(0, -1, 0))) {
        player.teleport(positions2.load(0, 101, 0))
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
    gameplay.title(mobs.target(LOCAL_PLAYER), "Wait...", "")
    gameplay.title(mobs.target(LOCAL_PLAYER), "Go!", "")
})
```

## Step 1

```blocks
function blocks() {
    blocks.fill(
    AIR,
    positions2.load(-10, 0, -10),
    positions2.load(10, 49, 10),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    positions2.load(-10, 50, -10),
    positions2.load(10, 99, 10),
    FillOperation.Replace
    )
    for (let index = 0; index < 250; index++) {
        blocks.place(BLACK_GLAZED_TERRACOTTA, positions2.load(randint(-10, 10), randint(0, 99), randint(-10, 10)))
    }
}
```

Build this ``||functions:script||``.

## Step 2

```blocks
function platform () {
    blocks.place(GLASS, positions2.load(0, 100, 0))
    player.teleport(positions2.load(0, 101, 0))
    entities.spawnpoint(mobs.target(LOCAL_PLAYER), positions2.load(0, 101, 0))
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

player.onChat("d", function () {
    positions2.save(posCamera(0, 0, 0))
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(LOCAL_PLAYER)
    )
    base()
    // @highlight
    platform()
    gameplay.title(mobs.target(LOCAL_PLAYER), "Wait...", "")
    // @highlight
    blocks()
    gameplay.title(mobs.target(LOCAL_PLAYER), "Go!", "")
})
```

Find this ``||functions:script||`` and add the code in yellow.

## Try it!

Type **d** to play!