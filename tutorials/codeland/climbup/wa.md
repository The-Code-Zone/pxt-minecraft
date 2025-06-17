### @explicitHints true

### @diffs true

# Climb Up



```template
function setup () {}

function play_loop () {
    y = -19
    blocks.place(GOLD_BLOCK, positions.load(0, 0, 0))
}

player.onChat("c", function () {
    mobs.applyEffect(SPEED, mobs.target(NEAREST_PLAYER), 600, 2)
})
```

## Step 1

let finish_line = 0
let spawn_pos: Position = null
let y = 0



Create the following ``||variables:variables||``:
- finish_line
- spawn_pos
- y

You don't need to set them to anything yet!

## Step 2

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
    player.teleport(spawn_pos)
}
```

Find the ``||functions:empty setup() function||`` and build this script.

## Step 3

```blocks
function play_loop () {
    y = -19
    // @highlight
    while (y < 0) {
        for (let index = 0; index < 40; index++) {
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

Find this script and add the code in yellow.

Don't forget the code inside the ``||loops:while loop||``.

## Step 4

```blocks
// @hide
function setup() {}

// @hide
function play_loop() {}

player.onChat("c", function () {
    mobs.applyEffect(SPEED, mobs.target(NEAREST_PLAYER), 600, 2)
    // @highlight
    setup()
    // @highlight
    play_loop()
})
```

Find this script and call the ``||functions:functions||`` in yellow.

## Try it!

Type **c** to play Climb Up.