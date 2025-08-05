### @explicitHints true

### @diffs true

# Climb Up



```template
function setup () {}

function play_loop () {
    blocks.place(GOLD_BLOCK, positions2.load(0, 0, 0))
}

player.onChat("c", function () {
    mobs.applyEffect(SPEED, mobs.target(NEAREST_PLAYER), 600, 2)
})
```

## Step 1

```blocks
function setup () {
    positions2.save(posCamera(0, 0, 0))
    blocks.fill(
    STONE,
    positions2.load(-10, -20, -10),
    positions2.load(10, 0, 10),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    positions2.load(-9, -19, -9),
    positions2.load(9, 0, 9),
    FillOperation.Replace
    )
    positions2.change(Axis.Y, -19)
    player.teleport(positions2.load(-9, 0, -9))
}
```

Find the ``||functions:empty setup() function||`` and build this script.

## Step 3

```blocks
function play_loop () {
    for (let index = 0; index < 19; index++) {
        for (let index = 0; index < 40; index++) {
            blocks.place(STONE, randpos(
            positions2.load(-9, 0, -9),
            positions2.load(9, 0, 9)
            ))
        }
        positions2.change(Axis.Y, 1)
    }
    blocks.place(GOLD_BLOCK, positions2.load(0, 0, 0))
}
```

Find this script and add the code in yellow.

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