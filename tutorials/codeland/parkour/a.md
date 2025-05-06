### @explicitHints true

### @diffs true

# Parkour

```package
tcz=github:the-code-zone/pxt-minecraft-extensions
```

```template
let x = 0
let start_pos: Position = null
let z = 0
player.onChat("p", function () {
    positions.save(posCamera(0, 0, 0))
})
function place_stone () {
    for (let index = 0; index < randint(1, 2); index++) {
        blocks.place(COBBLESTONE, positions.load(x, 1, z))
        z += 1
    }
}
function generate_path () {}
```

## Step 1

```blocks
function guardrails () {
    if (z < -6) {
        z = -6
    } else if (z > 6) {
        z = 6
    }
}
```

Build this ``||functions:script||``.

## Step 2

```blocks
// @hide
function guardrails() {}

// @hide
function place_stone() {}

// @highlight
function generate_path () {
    for (let index = 0; index < 2; index++) {
        x = randint(-5, 5)
        z = 2
        while (z < 99) {
            guardrails()
            place_stone()
            x += randint(-2, 2)
            z += randint(0, 2)
        }
    }
}
```

Build this ``||functions:script||``.

## Step 3

```blocks
loops.forever(function () {
    if (blocks.testForBlock(WATER, pos(0, 0, 0))) {
        player.teleport(start_pos)
    }
})
```

Build this ``||functions:script||``.

## Step 4

```blocks
function setup_player () {
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(LOCAL_PLAYER)
    )
    mobs.clearEffect(mobs.target(LOCAL_PLAYER))
    mobs.applyEffect(SPEED, mobs.target(NEAREST_PLAYER), 600, 2)
}
```

Build this ``||functions:script||``.

## Step 5

```blocks
function base () {
    blocks.fill(
    COBBLESTONE,
    positions.load(-7, 0, 1),
    positions.load(7, 3, 100),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    positions.load(-6, 1, 1),
    positions.load(6, 3, 100),
    FillOperation.Replace
    )
    blocks.fill(
    WATER,
    positions.load(-6, 0, 2),
    positions.load(6, 0, 99),
    FillOperation.Replace
    )
}
```

Build this ``||functions:script||``.

## Step 6

```blocks
// @hide
function base() {}

// @hide
function generate_path() {}

// @hide
function setup_player() {}

player.onChat("p", function () {
    positions.save(posCamera(0, 0, 0))
    start_pos = player.position()
    // @highlight
    base()
    // @highlight
    generate_path()
    // @highlight
    setup_player()
})
```

Find this ``||functions:script||`` and add the code in yellow.

## Try it!

Type **p** to play!