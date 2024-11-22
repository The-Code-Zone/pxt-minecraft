### @explicitHints true

# Infinite Scaffold

```template
mobs.give(
mobs.target(LOCAL_PLAYER),
SCAFFOLDING,
9
)
while (true) {
    positions2.save(posCamera(0, 0, 0))
    if (blocks.testForBlock(SCAFFOLDING, positions2.load(0, 0, 0))) {
        blocks.replace(
        SCAFFOLDING,
        AIR,
        positions2.load(0, 1, 0),
        positions2.load(0, 1, 0)
        )
    }
}
```

## Try it!

Place a scaffold, then climb it infinitely!