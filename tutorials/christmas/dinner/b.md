### @explicitHints true

### @diffs true

# Christmas Dinner

```template
player.onChat("dinner", function () {
    positions2.save(positions.groundPosition(posCamera(0, 2, 4)))
    blocks.fill(
    GLASS,
    positions2.load(-1, 2, -1),
    positions2.load(2, 3, 1),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    positions2.load(0, 2, 0),
    positions2.load(1, 3, 0),
    FillOperation.Replace
    )
    blocks.fill(
    FURNACE,
    positions2.load(0, 0, 0),
    positions2.load(1, 0, 0),
    FillOperation.Replace
    )
    blocks.fill(
    HOPPER,
    positions2.load(0, 1, 0),
    positions2.load(1, 1, 0),
    FillOperation.Replace
    )
})
```

## Step 1 

Complete the code

```blocks
player.onChat("dinner", function () {
    positions2.save(positions.groundPosition(posCamera(0, 2, 4)))
    blocks.fill(
    GLASS,
    positions2.load(-1, 2, -1),
    positions2.load(2, 3, 1),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    positions2.load(0, 2, 0),
    positions2.load(1, 3, 0),
    FillOperation.Replace
    )
    blocks.fill(
    FURNACE,
    positions2.load(0, 0, 0),
    positions2.load(1, 0, 0),
    FillOperation.Replace
    )
    blocks.fill(
    HOPPER,
    positions2.load(0, 1, 0),
    positions2.load(1, 1, 0),
    FillOperation.Replace
    )
    agent.teleport(positions2.load(0, 3, 0), EAST)
    list = [RAW_CHICKEN, POTATO]
    for (let value of list) {
        agent.setItem(value, 64, 1)
        agent.drop(DOWN, 1, 64)
        agent.move(FORWARD, 1)
    }
})
```

## Step 2

Build this

```blocks
let list: number[] = []
player.onChat("dinner", function () {
    positions2.save(positions.groundPosition(posCamera(0, 2, 4)))
    blocks.fill(
    GLASS,
    positions2.load(-1, 2, -1),
    positions2.load(2, 3, 1),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    positions2.load(0, 2, 0),
    positions2.load(1, 3, 0),
    FillOperation.Replace
    )
    blocks.fill(
    FURNACE,
    positions2.load(0, 0, 0),
    positions2.load(1, 0, 0),
    FillOperation.Replace
    )
    blocks.fill(
    HOPPER,
    positions2.load(0, 1, 0),
    positions2.load(1, 1, 0),
    FillOperation.Replace
    )
    agent.teleport(positions2.load(0, 3, 0), EAST)
    list = [RAW_CHICKEN, POTATO]
    for (let value of list) {
        agent.setItem(value, 64, 1)
        agent.drop(DOWN, 1, 64)
        agent.move(FORWARD, 1)
    }
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    COAL_BLOCK,
    64
    )
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    CARROTS,
    64
    )
})
```

## Try it!

Type **dinner** to build the kitchen. Put some coal in the furnaces to cook the chicken and potatoes.