### @explicitHints true

### @diffs true

# Christmas Greeting

```template
player.onChat("xmas", function () {
    positions2.save(world(-133, 75, -630))
    blocks.print(
    "MERRY",
    SHROOMLIGHT,
    positions2.load(0, 6, 0),
    WEST
    )
})
```

## Step 1

Complete the code

```blocks
player.onChat("xmas", function () {
    positions2.save(world(-133, 75, -630))
    blocks.print(
    "MERRY",
    SHROOMLIGHT,
    positions2.load(0, 6, 0),
    WEST
    )
    blocks.print(
    "CHRISTMAS",
    VERDANT_FROGLIGHT,
    positions2.load(11, 0, 0),
    WEST
    )
})
```

## Try it!

Type **xmas** to spawn a season's greeting.