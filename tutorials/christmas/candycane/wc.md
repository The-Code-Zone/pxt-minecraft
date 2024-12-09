### @explicitHints true

# Giant Candycanes

## Try it!

Type **candycane** to spawn a giant candycane.

```template
player.onChat("candycane", function () {
    positions2.save(world(-160, 64, -664))
    for (let index = 0; index < 3; index++) {
        blocks.place(RED_CONCRETE, positions2.load(0, 0, 0))
        blocks.place(WHITE_CONCRETE, positions2.load(0, 1, 0))
        blocks.place(RED_CONCRETE, positions2.load(0, 2, 0))
        blocks.place(WHITE_CONCRETE, positions2.load(0, 3, 0))
        blocks.place(RED_CONCRETE, positions2.load(0, 4, 0))
        blocks.place(blocks.blockWithData(QUARTZ_STAIRS, DEGREES0), positions2.load(0, 5, 0))
        blocks.place(RED_CONCRETE, positions2.load(1, 5, 0))
        blocks.place(blocks.blockWithData(QUARTZ_STAIRS, DEGREES90), positions2.load(2, 5, 0))
        blocks.place(RED_CONCRETE, positions2.load(2, 4, 0))
        blocks.place(WHITE_CONCRETE, positions2.load(2, 3, 0))
        positions2.save(positions2.load(0, 0, 6))
    }
})
```