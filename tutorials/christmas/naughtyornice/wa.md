### @explicitHints true

### @diffs true

# Naughty Or Nice

```template
{}
```

## Step 1

Build this

```blocks
player.onChat("naughtyornice", function () {
    positions2.save(world(-136, 61, -701))
    blocks.fill(
    GLASS,
    positions2.load(-1, 0, -1),
    positions2.load(1, 2, 1),
    FillOperation.Hollow
    )
})
```

## Step 2

Build this

```blocks
player.onChat("naughtyornice", function () {
    positions2.save(world(-136, 61, -701))
    blocks.fill(
    GLASS,
    positions2.load(-1, 0, -1),
    positions2.load(1, 2, 1),
    FillOperation.Hollow
    )
    blocks.place(AIR, positions2.load(0, 2, 0))
    blocks.place(DISPENSER, positions2.load(0, 0, 1))
    blocks.place(STONE_PRESSURE_PLATE, positions2.load(0, 0, 2))
    blocks.place(blocks.blockWithData(HOPPER, DEGREES270), positions2.load(0, 0, 0))
})
```

## Step 3

Build this

```blocks
player.onChat("naughtyornice", function () {
    positions2.save(world(-136, 61, -701))
    blocks.fill(
    GLASS,
    positions2.load(-1, 0, -1),
    positions2.load(1, 2, 1),
    FillOperation.Hollow
    )
    blocks.place(AIR, positions2.load(0, 2, 0))
    blocks.place(DISPENSER, positions2.load(0, 0, 1))
    blocks.place(STONE_PRESSURE_PLATE, positions2.load(0, 0, 2))
    blocks.place(blocks.blockWithData(HOPPER, DEGREES270), positions2.load(0, 0, 0))
    agent.teleport(positions2.load(0, 2, 0), SOUTH)
    for (let index = 0; index < 64; index++) {
        agent.setItem(GOLD_NUGGET, 1, 1)
        agent.setItem(COAL, 1, 2)
        agent.dropAll(DOWN)
    }
})
```

## Try it!

Type **naughtyornice** to build the contraption. Step on the pressure plate to find out if you're naughty or nice!