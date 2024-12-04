### @explicitHints true

### @diffs true

# Exploding Present

```template
player.onChat("present", function () {
    positions2.save(positions.groundPosition(posCamera(0, 2, 10)))
    choose_colours()
    blocks.fill(
    colour_1,
    positions2.load(-2, 0, -2),
    positions2.load(2, 4, 2),
    FillOperation.Replace
    )
    blocks.fill(
    colour_2,
    positions2.load(-2, 0, 0),
    positions2.load(2, 4, 0),
    FillOperation.Replace
    )
    blocks.fill(
    colour_2,
    positions2.load(0, 0, -2),
    positions2.load(0, 4, 2),
    FillOperation.Replace
    )
    blocks.fill(
    TNT,
    positions2.load(-1, 1, -1),
    positions2.load(1, 3, 1),
    FillOperation.Replace
    )
    shapes.circle(
    colour_2,
    positions2.load(-2, 5, 0),
    1,
    Axis.Z,
    ShapeOperation.Hollow
    )
    shapes.circle(
    colour_2,
    positions2.load(2, 5, 0),
    1,
    Axis.Z,
    ShapeOperation.Hollow
    )
    mobs.spawn(PRIMED_TNT, positions2.load(0, 2, 0))
})
function choose_colours () {
    colours = [
    ORANGE_CONCRETE,
    MAGENTA_CONCRETE,
    LIGHT_BLUE_CONCRETE,
    YELLOW_CONCRETE,
    LIME_CONCRETE,
    PINK_CONCRETE,
    CYAN_CONCRETE,
    PURPLE_CONCRETE,
    BLUE_CONCRETE,
    GREEN_CONCRETE,
    RED_CONCRETE
    ]
}
```

## Step 1

Complete the code

```blocks
let colours: number[] = []
let colour_1 = 0
let colour_2 = 0
function choose_colours () {
    colours = [
    ORANGE_CONCRETE,
    MAGENTA_CONCRETE,
    LIGHT_BLUE_CONCRETE,
    YELLOW_CONCRETE,
    LIME_CONCRETE,
    PINK_CONCRETE,
    CYAN_CONCRETE,
    PURPLE_CONCRETE,
    BLUE_CONCRETE,
    GREEN_CONCRETE,
    RED_CONCRETE
    ]
    colour_1 = colours._pickRandom()
    colour_2 = colours._pickRandom()
    while (colour_1 == colour_2) {
        colour_2 = colours._pickRandom()
    }
}
```

## Try it!

Type **present** to for a special colourful Christmas bomb!