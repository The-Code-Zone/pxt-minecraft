### @explicitHints true

### @diffs true

# Chimney

```template
player.onChat("chimney", function () {
    positions2.save(world(-129, 68, -701))
    blocks.fill(
    COBBLESTONE,
    positions2.load(-1, -1, -1),
    positions2.load(1, 7, 1),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    positions2.load(-1, 0, 0),
    positions2.load(-1, 2, 0),
    FillOperation.Replace
    )
})
```

## Step 1

Complete the code

```blocks
player.onChat("chimney", function () {
    positions2.save(world(-129, 68, -701))
    blocks.fill(
    COBBLESTONE,
    positions2.load(-1, -1, -1),
    positions2.load(1, 7, 1),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    positions2.load(-1, 0, 0),
    positions2.load(-1, 2, 0),
    FillOperation.Replace
    )
    blocks.fill(
    blocks.blockWithData(LADDER, 4),
    positions2.load(0, 0, 0),
    positions2.load(0, 7, 0),
    FillOperation.Replace
    )
    blocks.place(CAMPFIRE, positions2.load(0, 0, 0))
    mobs.applyEffect(FIRE_RESISTANCE, mobs.target(LOCAL_PLAYER), 600, 255)
})
```

## Try it!

Type **chimney** to build a chimney.