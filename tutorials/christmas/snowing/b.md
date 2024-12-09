### @explicitHints true

# Make It Snow

## Step 1

Complete the code

```blocks
gameplay.setWeather(RAIN)
```

```template
player.onTravelled(WALK, function () {
    blocks.replace(
    TOP_SNOW,
    AIR,
    pos(-1, 0, -1),
    pos(1, 0, 1)
    )
})
```

## Try it!

Walk around and spawn snow.