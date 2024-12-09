### @explicitHints true

# Make It Snow

## Step 1

Build this

```blocks
player.onTravelled(WALK, function () {
    blocks.replace(
    TOP_SNOW,
    AIR,
    pos(-1, 0, -1),
    pos(1, 0, 1)
    )
})
gameplay.setWeather(RAIN)
```

```template
{}
```

## Try it!

Walk around and spawn snow.