### @explicitHints true

# Snowman

## Try it!

Type **snowman** to spawn a Snowman.

```template
player.onChat("snowman", function () {
    positions2.save(poscamera(0, 0, 2))
    blocks.fill(
    SNOW,
    positions2.load(0, 0, 0),
    positions2.load(0, 1, 0),
    FillOperation.Replace
    )
    blocks.place(CARVED_PUMPKIN, positions2.load(0, 2, 0))
})
```