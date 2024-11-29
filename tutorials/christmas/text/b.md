### @explicitHints true

### @diffs true

# Christmas Greeting

```template
player.onChat("xmas", function () {
    positions2.save(posCamera(-14, 0, 12))
    blocks.print(
    "MERRY",
    RED_CONCRETE,
    positions2.load(0, 6, 0),
    WEST
    )
})
```

## Step 1

Complete the code

```blocks
player.onChat("xmas", function () {
    positions2.save(posCamera(-14, 0, 12))
    blocks.print(
    "MERRY",
    RED_CONCRETE,
    positions2.load(0, 6, 0),
    WEST
    )
    blocks.print(
    "CHRISTMAS",
    GREEN_CONCRETE,
    positions2.load(11, 0, 0),
    WEST
    )
})
```

## Try it!

Type **xmas** to spawn a season's greeting.