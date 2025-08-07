### @explicitHints true


# Pig Fishing



```template
function pool () {
    shapes.circle(
    PLANKS_SPRUCE,
    positions2.load(0, -2, -11),
    6,
    Axis.Y,
    ShapeOperation.Replace
    )
    shapes.circle(
    PLANKS_SPRUCE,
    positions2.load(0, -1, -11),
    6,
    Axis.Y,
    ShapeOperation.Replace
    )
    shapes.circle(
    PLANKS_SPRUCE,
    positions2.load(0, 0, -11),
    6,
    Axis.Y,
    ShapeOperation.Outline
    )
    blocks.fill(
    AIR,
    positions2.load(-2, 0, -4),
    positions2.load(2, 0, -6),
    FillOperation.Replace
    )
    shapes.circle(
    WATER,
    positions2.load(0, -1, -11),
    5,
    Axis.Y,
    ShapeOperation.Replace
    )
}
player.onChat("pig", function () {
    positions2.save(world(80, 69, 99))
    pits_and_platforms()
    pool()
    spawn_mobs_and_items()
})
function pits_and_platforms () {
    blocks.fill(
    PLANKS_SPRUCE,
    positions2.load(-3, 0, -1),
    positions2.load(3, 0, -1),
    FillOperation.Replace
    )
    blocks.fill(
    PLANKS_SPRUCE,
    positions2.load(-3, -3, -2),
    positions2.load(3, 1, -6),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    positions2.load(-2, -2, -4),
    positions2.load(2, 1, -6),
    FillOperation.Replace
    )
    blocks.fill(
    PLANKS_SPRUCE,
    positions2.load(0, -1, -4),
    positions2.load(0, -2, -5),
    FillOperation.Replace
    )
}
function spawn_mobs_and_items () {
    mobs.teleportToPosition(mobs.entitiesByType(PIG), pos(0, -999, 0))
    for (let index = 0; index < 10; index++) {
        mobs.spawn(PIG, positions2.load(0, 0, -11))
    }
    mobs.give(
    mobs.target(ALL_PLAYERS),
    FISHING_ROD,
    1
    )
}
```

## Try it!

Type **pig** to play!