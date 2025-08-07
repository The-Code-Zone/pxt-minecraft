### @explicitHints true


# Boat Race



```template
{}
```

## Step 1

```blocks
function course () {
    blocks.fill(
    PLANKS_DARK_OAK,
    positions2.load(8, -1, -10),
    positions2.load(40, -2, 10),
    FillOperation.Replace
    )
    blocks.fill(
    WATER,
    positions2.load(9, -1, -9),
    positions2.load(39, -1, 9),
    FillOperation.Replace
    )
    blocks.fill(
    PLANKS_DARK_OAK,
    positions2.load(12, -1, -2),
    positions2.load(36, -1, 2),
    FillOperation.Replace
    )
}
```

Build this ``||functions:script||``.

## Step 2

```blocks
function startfinish () {
    shapes.line(
    WOOL,
    positions2.load(24, -2, 3),
    positions2.load(24, -2, 9)
    )
}
```

Build this ``||functions:script||``.

## Step 3

```blocks
function boats () {
    mobs.give(
    mobs.target(ALL_PLAYERS),
    BOAT,
    1
    )
}
```

Build this ``||functions:script||``.

## Step 4

```blocks
// @hide
function course() {}

// @hide
function startfinish() {}

// @hide
function boats() {}

// @highlight
player.onChat("run", function () {
    positions2.save(posCamera(0, 0, 0))
    course()
    startfinish()
    boats()
})
```

Finally, build this ``||player:script||``.

## Try it!

Type **run** to play!