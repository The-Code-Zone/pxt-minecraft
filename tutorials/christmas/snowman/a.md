### @explicitHints true

### @diffs true

# Snowman

## Step 1

Build this

```blocks
player.onChat("snowman", function () {
    positions2.save(posCamera(0, 0, 2))
})
```

```template
{}
```

## Step 2

Build this

```blocks
player.onChat("snowman", function () {
    positions2.save(posCamera(0, 0, 2))
    blocks.fill(
    SNOW,
    positions2.load(0, 0, 0),
    positions2.load(0, 1, 0),
    FillOperation.Replace
    )
})
```

## Step 3

Build this

```blocks
player.onChat("snowman", function () {
    positions2.save(posCamera(0, 0, 2))
    blocks.fill(
    SNOW,
    positions2.load(0, 0, 0),
    positions2.load(0, 1, 0),
    FillOperation.Replace
    )
    blocks.place(CARVED_PUMPKIN, positions2.load(0, 2, 0))
})
```

## Try it!

Type **snowman** to spawn a Snowman.