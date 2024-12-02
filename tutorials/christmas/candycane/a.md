### @explicitHints true

### @diffs true

# Candycane

## Step 1

Build this 

```blocks
player.onChat("candycane", function () {
    positions2.save(positions.groundPosition(posCamera(0, 2, 2)))
})
```

```template
{}
```

## Step 2

Build this (Hint: Don't forget you can duplicate by right clicking a block)

```blocks
player.onChat("candycane", function () {
    positions2.save(positions.groundPosition(posCamera(0, 2, 2)))
    blocks.place(RED_CONCRETE, positions2.load(0, 0, 0))
    blocks.place(WHITE_CONCRETE, positions2.load(0, 1, 0))
    blocks.place(RED_CONCRETE, positions2.load(0, 2, 0))
    blocks.place(WHITE_CONCRETE, positions2.load(0, 3, 0))
    blocks.place(RED_CONCRETE, positions2.load(0, 4, 0))
})
```

## Step 3

Build this

```blocks
player.onChat("candycane", function () {
    positions2.save(positions.groundPosition(posCamera(0, 2, 2)))
    blocks.place(RED_CONCRETE, positions2.load(0, 0, 0))
    blocks.place(WHITE_CONCRETE, positions2.load(0, 1, 0))
    blocks.place(RED_CONCRETE, positions2.load(0, 2, 0))
    blocks.place(WHITE_CONCRETE, positions2.load(0, 3, 0))
    blocks.place(RED_CONCRETE, positions2.load(0, 4, 0))
    blocks.place(blocks.blockWithData(QUARTZ_STAIRS, DEGREES0), positions2.load(0, 5, 0))
    blocks.place(RED_CONCRETE, positions2.load(1, 5, 0))
    blocks.place(blocks.blockWithData(QUARTZ_STAIRS, DEGREES90), positions2.load(2, 5, 0))
    blocks.place(RED_CONCRETE, positions2.load(2, 4, 0))
    blocks.place(WHITE_CONCRETE, positions2.load(2, 3, 0))
})
```

## Try it!

Type **candycane** to spawn a giant candycane.