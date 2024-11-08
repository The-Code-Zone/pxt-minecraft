### @explicitHints true
### @diffs true

# Ender Portal

## Step 1

```blocks
player.onChat("p", function () {
    positions2.save(posCamera(0, 0, 4))
})
```

```template
{}
```

## Step 2

Remember you can duplicate.

```blocks
player.onChat("p", function () {
    positions2.save(posCamera(0, 0, 4))
    shapes.line(
    blocks.blockWithData(END_PORTAL, 6),
    positions2.load(-1, 0, 2),
    positions2.load(1, 0, 2)
    )
    shapes.line(
    blocks.blockWithData(END_PORTAL, 5),
    positions2.load(-2, 0, -1),
    positions2.load(-2, 0, 1)
    )
    shapes.line(
    blocks.blockWithData(END_PORTAL, 7),
    positions2.load(2, 0, -1),
    positions2.load(2, 0, 1)
    )
    shapes.line(
    blocks.blockWithData(END_PORTAL, 4),
    positions2.load(-1, 0, -2),
    positions2.load(1, 0, -2)
    )
})
```

## Step 3

```blocks
player.onChat("p", function () {
    positions2.save(posCamera(0, 0, 4))
    shapes.line(
    blocks.blockWithData(END_PORTAL, 6),
    positions2.load(-1, 0, 2),
    positions2.load(1, 0, 2)
    )
    shapes.line(
    blocks.blockWithData(END_PORTAL, 5),
    positions2.load(-2, 0, -1),
    positions2.load(-2, 0, 1)
    )
    shapes.line(
    blocks.blockWithData(END_PORTAL, 7),
    positions2.load(2, 0, -1),
    positions2.load(2, 0, 1)
    )
    shapes.line(
    blocks.blockWithData(END_PORTAL, 4),
    positions2.load(-1, 0, -2),
    positions2.load(1, 0, -2)
    )
    blocks.fill(
    blocks.blockById(119),
    positions2.load(-1, 0, -1),
    positions2.load(1, 0, 1),
    FillOperation.Replace
    )
})
```

## Try it!

Say **p** in the chat.