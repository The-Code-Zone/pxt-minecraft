### @explicitHints true

### @diffs true

# Festive Snacks

```template
{}
```

## Step 1

Build this

```blocks
player.onChat("snacks", function () {
    positions2.save(world(-122, 66, -615))
})
```

## Step 2

Build this

```blocks
player.onChat("snacks", function () {
    positions2.save(world(-122, 66, -615))
    blocks.fill(
    GLASS,
    positions2.load(-1, 2, -1),
    positions2.load(1, 3, 1),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    positions2.load(0, 2, 0),
    positions2.load(0, 3, 0),
    FillOperation.Replace
    )
    blocks.place(CHEST, positions2.load(0, 0, 0))
    blocks.place(HOPPER, positions2.load(0, 1, 0))
})
```

## Step 3

Build this

```blocks
player.onChat("snacks", function () {
    positions2.save(world(-122, 66, -615))
    blocks.fill(
    GLASS,
    positions2.load(-1, 2, -1),
    positions2.load(1, 3, 1),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    positions2.load(0, 2, 0),
    positions2.load(0, 3, 0),
    FillOperation.Replace
    )
    blocks.place(CHEST, positions2.load(0, 0, 0))
    blocks.place(HOPPER, positions2.load(0, 1, 0))
    agent.teleport(positions2.load(0, 3, 0), NORTH)
    agent.setItem(COOKIE, 64, 1)
    agent.setItem(MILK, 64, 2)
    agent.setItem(CARROT, 64, 3)
    agent.dropAll(DOWN)
})
```

## Try it!

Type **snacks** to spawn a chest fit for Santa.