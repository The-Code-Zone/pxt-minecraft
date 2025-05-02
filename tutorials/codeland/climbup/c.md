### @explicitHints true

### @diffs true

# Spleef

```package
tcz=github:the-code-zone/pxt-minecraft-extensions
```

```template
let finish_line = 0
let spawn_pos: Position = null
let y = 0

function setup () {
    positions.save(posCamera(0, 0, 0))
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

function play_loop () {
    y = -19
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

player.onChat("c", function () {
    mobs.applyEffect(SPEED, mobs.target(NEAREST_PLAYER), 600, 2)
    setup()
    play_loop()
})
```

## Try it!

Type **c** to play Climb Up.