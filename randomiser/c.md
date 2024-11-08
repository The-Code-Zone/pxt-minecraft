### @explicitHints true

# Randomiser

## Try it!

Walk around and watch the blocks change.

```template
player.onTravelled(WALK, function () {
    blocks.replace(
    blocks.blockById(randint(1, 256)),
    GRASS,
    pos(-5, -1, -5),
    pos(5, 5, 5)
    )
    blocks.replace(
    blocks.blockById(randint(1, 256)),
    STONE,
    pos(-5, -1, -5),
    pos(5, 5, 5)
    )
})
```

```customts
loops.forever(function () {
	player.execute("kill @e[type=item]")
})
```