### @explicitHints true

# Snow Golem

## Complete the code

```block
player.onChat("g", function () {
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

```template
player.onChat("g", function () {
    positions2.save(posCamera(0, 0, 2))
    blocks.fill(
    SNOW,
    positions2.load(0, 0, 0),
    positions2.load(0, 1, 0),
    FillOperation.Replace
    )
})
```

## Try it!

Say **g** in the chat to spawn a snow golem.