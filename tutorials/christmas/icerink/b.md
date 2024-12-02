### @explicitHints true

### @diffs true

# Ice Rink

## Step 1

Complete the code

```blocks
player.onChat("iceskating", function () {
    positions2.save(posCamera(0, 0, 12))
    blocks.fill(
    TINTED_GLASS,
    positions2.load(-10, -1, -10),
    positions2.load(10, 0, 10),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    positions2.load(-9, 0, -9),
    positions2.load(9, 1, 9),
    FillOperation.Replace
    )
    blocks.fill(
    BLUE_ICE,
    positions2.load(-9, -1, -9),
    positions2.load(9, -1, 9),
    FillOperation.Replace
    )
    mobs.applyEffect(SPEED, mobs.target(NEAREST_PLAYER), 600, 2)
})
```

```template
player.onChat("iceskating", function () {
    positions2.save(posCamera(0, 0, 12))
    blocks.fill(
    TINTED_GLASS,
    positions2.load(-10, -1, -10),
    positions2.load(10, 0, 10),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    positions2.load(-9, 0, -9),
    positions2.load(9, 1, 9),
    FillOperation.Replace
    )
})
```

## Try it!

Type **iceskating** to spawn an ice rink.