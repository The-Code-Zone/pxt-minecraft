### @explicitHints true

### @diffs true

# Climb Up



```template
function setup () {
    positions2.save(world(64, 69, -26))
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

player.onChat("c", function () {
    mobs.applyEffect(SPEED, mobs.target(NEAREST_PLAYER), 600, 2)
    setup()
    play_loop()
})
```

## Try it!

Type **c** to play Climb Up.