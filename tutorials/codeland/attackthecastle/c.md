### @explicitHints true

### @diffs true

# Attack the Castle

```template
let beacon_position: Position = null
function build_fort () {
    blocks.fill(
    CRACKED_STONE_BRICKS,
    positions2.load(-7, 5, -50),
    positions2.load(7, -1, -40),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    positions2.load(-6, 5, -49),
    positions2.load(6, 0, -41),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    positions2.load(-1, 2, -40),
    positions2.load(1, 0, -40),
    FillOperation.Replace
    )
    beacon_position = positions2.load(0, 0, -45)
    blocks.place(BEACON, beacon_position)
}
function setup_player () {
    gameplay.setDifficulty(EASY)
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(NEAREST_PLAYER)
    )
    mobs.give(
    mobs.target(ALL_PLAYERS),
    NETHERITE_SWORD,
    1
    )
    mobs.applyEffect(STRENGTH, mobs.target(ALL_PLAYERS), 120, 2)
}
function spawn_enemies () {
    while (blocks.testForBlock(BEACON, beacon_position)) {
        mobs.spawn(mobs.monster(PILLAGER), beacon_position)
        loops.pause(2000)
    }
    display.showMessage("Beacon destroyed! You win!")
}
player.onChat("attack", function () {
    positions2.save(posCamera(0, 0, 0))
    build_fort()
    setup_player()
    spawn_enemies()
})
```

## Try it!

Type **attack** to play!