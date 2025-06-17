### @explicitHints true

### @diffs true

# Dropper



```template
{}
```

## Step 1

```blocks
function blocks2 () {
    for (let index = 0; index < 250; index++) {
        blocks.place(BLACK_GLAZED_TERRACOTTA, positions.load(randint(-10, 10), randint(0, 100), randint(-10, 10)))
    }
}
```

Build this ``||functions:script||``.

## Step 2

```blocks
function platform () {
    blocks.place(GOLD_BLOCK, positions.load(0, 100, 0))
    player.teleport(positions.load(0, 101, 0))
    start_pos = player.position()
}
```

Build this ``||functions:script||``.

## Step 3

```blocks
function base () {
    blocks.fill(
    BLACK_GLAZED_TERRACOTTA,
    positions.load(-15, 0, -15),
    positions.load(15, -1, 15),
    FillOperation.Replace
    )
    blocks.fill(
    GOLD_BLOCK,
    positions.load(-10, -2, -10),
    positions.load(10, -2, 10),
    FillOperation.Replace
    )
    blocks.fill(
    WATER,
    positions.load(-10, 0, -10),
    positions.load(10, -1, 10),
    FillOperation.Replace
    )
}
```

Build this ``||functions:script||``.

## Step 4

```blocks
function check() {
    while (true) {
        if (blocks.testForBlock(BLACK_GLAZED_TERRACOTTA, pos(0, -1, 0))) {
            player.teleport(start_pos)
        }
    }
}
```

Build this ``||functions:script||``.

## Step 5

```blocks
// @hide
function base() {}

// @hide
function platform() {}

// @hide
function blocks2() {}

// @hide
function check() {}

// @highlight
player.onChat("d", function () {
    positions.save(posCamera(0, 0, 0))
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(LOCAL_PLAYER)
    )
    base()
    platform()
    blocks2()
    check()
})
```

Now lets put it all together.

Build this ``||functions:script||``.

## Try it!

Type **d** to play!