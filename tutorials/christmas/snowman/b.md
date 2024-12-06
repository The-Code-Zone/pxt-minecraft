### @explicitHints true

# Snowman

```package
events=github:microsoft/makecode-minecraft-mob-events
```

## Step 1

Complete the code

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
    mobEvents.executeSnowGolemCommand(mobEvents.createSelector(), mobEvents.SnowGolem.RemovePumpkinHead)
})
```

```template
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

## Try it!

Type **snowman** to spawn a Snowman.