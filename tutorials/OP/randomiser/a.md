### @explicitHints true

# Randomiser

## Build this

```blocks
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

```template
{}
```

```customts
loops.forever(function () {
	player.execute("kill @e[type=item]")
})
```

## Try it!

Walk around and watch the blocks change.