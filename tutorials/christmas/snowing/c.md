### @explicitHints true

# Make It Snow

## Try it!

Walk around and spawn snow.

```template
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