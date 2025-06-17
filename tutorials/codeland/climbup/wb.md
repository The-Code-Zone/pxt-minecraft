### @explicitHints true

### @diffs true

# Climb Up



```template
let finish_line = 0
let spawn_pos: Position = null
let y = 0

function setup () {
    positions.save(world(64, 69, -26))
    finish_line = positions.load(0, 0, 0).getValue(Axis.Y)
    spawn_pos = positions.load(-9, -19, -9)
    blocks.fill(
    STONE,
    positions.load(-10, -20, -10),
    positions.load(10, 0, 10),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    positions.load(-9, -19, -9),
    positions.load(9, 0, 9),
    FillOperation.Replace
    )
}

function play_loop () {
    y = -19
    while (y < 0) {
        y += 1
    }
    blocks.place(GOLD_BLOCK, positions.load(0, 0, 0))
}

player.onChat("c", function () {
    setup()
    play_loop()
})
```

## Step 1

```blocks
function setup () {
    positions.save(world(64, 69, -26))
    finish_line = positions.load(0, 0, 0).getValue(Axis.Y)
    spawn_pos = positions.load(-9, -19, -9)
    blocks.fill(
    STONE,
    positions.load(-10, -20, -10),
    positions.load(10, 0, 10),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    positions.load(-9, -19, -9),
    positions.load(9, 0, 9),
    FillOperation.Replace
    )
    // @highlight
    player.teleport(spawn_pos)
}
```

Find this script and add the ``||player:code in yellow||``.

## Step 2

```blocks
// @hide
function setup() {}

// @hide
function play_loop() {}

player.onChat("c", function () {
    // @highlight
    mobs.applyEffect(SPEED, mobs.target(NEAREST_PLAYER), 600, 2)
    setup()
    play_loop()
})
```

Find this script and ``||mobs:give the player a speed buff||`` when the game starts.

## Step 3

```blocks
function play_loop () {
    y = -19
    while (y < 0) {
        // @highlight
        for (let index = 0; index < 40; index++) {
            // @highlight
            blocks.place(STONE, randpos(
            positions.load(-9, y, -9),
            positions.load(9, y, 9)
            ))
        }
        y += 1
    }
    blocks.place(GOLD_BLOCK, positions.load(0, 0, 0))
}
```

Find the ``||functions:play_loop||`` script and add the code in yellow to the while loop.

## Try it!

Type **c** to play Climb Up.