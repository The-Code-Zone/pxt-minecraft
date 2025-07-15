### @explicitHints true

### @diffs true

# Climb Up



```template
let finish_line = 0
let spawn_pos: Position = null
let y = 0

function setup () {
    positions2.save(world(64, 69, -26))
    finish_line = positions2.load(0, 0, 0).getValue(Axis.Y)
    spawn_pos = positions2.load(-9, -19, -9)
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
    player.teleport(spawn_pos)
}

function play_loop () {
    y = -19
    while (y < 0) {
        for (let index = 0; index < 40; index++) {
            blocks.place(STONE, randpos(
            positions2.load(-9, y, -9),
            positions2.load(9, y, 9)
            ))
        }
        y += 1
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