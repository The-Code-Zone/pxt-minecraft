### @explicitHints true

# Nether Portal

## Step 1

Complete the code (place fire)

```blocks
player.onChat("p", function () {
    positions2.save(world(48, 62, 73))
    blocks.fill(
    OBSIDIAN,
    positions2.load(0, 0, 0),
    positions2.load(0, 4, 3),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    positions2.load(0, 1, 1),
    positions2.load(0, 3, 2),
    FillOperation.Replace
    )
    blocks.place(FIRE, positions2.load(0, 1, 1))
})
```

```template
player.onChat("p", function () {
    positions2.save(world(48, 62, 73))
    blocks.fill(
    OBSIDIAN,
    positions2.load(0, 0, 0),
    positions2.load(0, 4, 3),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    positions2.load(0, 1, 1),
    positions2.load(0, 3, 2),
    FillOperation.Replace
    )
})
```

## Try it!

Say **p** in the chat.