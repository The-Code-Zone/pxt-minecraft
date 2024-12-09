### @explicitHints true

### @diffs true

# Fix the Chimney

```template
{}
```

## Step 1

Build this

```blocks
player.onChat("chimney", function () {
    positions2.save(positions.groundPosition(posCamera(0, 2, 5)))
})
```

## Step 2

Build this

```blocks
player.onChat("chimney", function () {
    positions2.save(positions.groundPosition(posCamera(0, 2, 5)))
    blocks.fill(
    COBBLESTONE,
    positions2.load(-1, -1, -1),
    positions2.load(1, 7, 1),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    positions2.load(0, 0, 1),
    positions2.load(0, 2, 1),
    FillOperation.Replace
    )
    blocks.fill(
    LADDER,
    positions2.load(0, 0, 0),
    positions2.load(0, 7, 0),
    FillOperation.Replace
    )
})
```

## Step 3

Build this

```blocks
player.onChat("chimney", function () {
    positions2.save(positions.groundPosition(posCamera(0, 2, 5)))
    blocks.fill(
    COBBLESTONE,
    positions2.load(-1, -1, -1),
    positions2.load(1, 7, 1),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    positions2.load(0, 0, 1),
    positions2.load(0, 2, 1),
    FillOperation.Replace
    )
    blocks.fill(
    LADDER,
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