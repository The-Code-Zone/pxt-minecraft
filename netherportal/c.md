### @explicitHints true

# Nether Portal

```template
player.onChat("p", function () {
    blocks.fill(
    OBSIDIAN,
    posCamera(-1, 0, 4),
    posCamera(2, 4, 4),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    posCamera(0, 1, 4),
    posCamera(1, 3, 4),
    FillOperation.Replace
    )
    blocks.place(FIRE, posCamera(0, 1, 4))
})
```

## Try it!

Say **p** in the chat.