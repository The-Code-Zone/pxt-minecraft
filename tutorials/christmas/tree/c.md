### @explicitHints true

### @diffs true

# Christmas Tree

```template
player.onChat("tree", function () {
    positions2.save(positions.groundPosition(posCamera(0, 2, 10)))
    y = 3
    size = 6
    while (size > 0) {
        for (let index = 0; index < 2; index++) {
            shapes.circle(
            LEAVES_SPRUCE,
            positions2.load(0, y, 0),
            size,
            Axis.Y,
            ShapeOperation.Replace
            )
            y += 1
            size += -1
        }
        y += 1
        size += 1
    }
    blocks.fill(
    LEAVES_SPRUCE,
    positions2.load(0, 18, 0),
    positions2.load(0, 20, 0),
    FillOperation.Replace
    )
    blocks.fill(
    LOG_SPRUCE,
    positions2.load(-1, 0, -1),
    positions2.load(1, 12, 1),
    FillOperation.Replace
    )
    blocks.fill(
    LOG_SPRUCE,
    positions2.load(0, 12, 0),
    positions2.load(0, 17, 0),
    FillOperation.Replace
    )
    shapes.circle(
    TOP_SNOW,
    positions2.load(0, 21, 0),
    6,
    Axis.Y,
    ShapeOperation.Replace
    )
})
```

## Try it!

Type **tree** to spawn a Christmas tree.