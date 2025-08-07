### @explicitHints true


# Climb Up



```template
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
}

function play_loop () {
    for (let index = 0; index < 19; index++) {
        for (let index = 0; index < 40; index++) {}
        positions2.change(Axis.Y, 1)
    }
    blocks.place(GOLD_BLOCK, positions2.load(0, 0, 0))
}

player.onChat("c", function () {
    setup()
    play_loop()
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
    positions2.save(positions2.load(0, -19, 0))
    // @highlight
    player.teleport(positions2.load(-9, 0, -9))
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
    for (let index = 0; index < 19; index++) {
        for (let index = 0; index < 40; index++) {
            // @highlight
            blocks.place(STONE, randpos(
            positions2.load(-9, 0, -9),
            positions2.load(9, 0, 9)
            ))
        }
        positions2.save(positions2.load(0, 1, 0))
    }
    blocks.place(GOLD_BLOCK, positions2.load(0, 0, 0))
}
```

Find the ``||functions:play_loop||`` script and add the code in yellow to the while loop.

## Try it!

Type **c** to play Climb Up.