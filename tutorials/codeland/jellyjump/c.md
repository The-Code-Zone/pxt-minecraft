### @explicitHints true

### @diffs true

# Jelly Jump



```template
let random_x = 0
let random_z = 0
let y = 0
function spawn_pads () {
    for (let index = 0; index < 10; index++) {
        random_x = randint(0, 10)
        random_z = randint(0, 10)
        spawn_pad()
        y += 10
    }
}
function spawn_pad () {
    blocks.fill(
    LIME_GLAZED_TERRACOTTA,
    positions2.load(random_x, y, random_z),
    positions2.load(random_x + 4, y, random_z + 4),
    FillOperation.Replace
    )
    blocks.fill(
    SLIME_BLOCK,
    positions2.load(random_x + 1, y, random_z + 1),
    positions2.load(random_x + 3, y, random_z + 3),
    FillOperation.Replace
    )
}
player.onChat("jump", function () {
    positions2.save(posCamera(0, 0, 0))
    y = 0
    spawn_pads()
    teleport()
})
function teleport () {
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(ALL_PLAYERS)
    )
    mobs.teleportToPosition(
    mobs.target(ALL_PLAYERS),
    positions2.load(random_x + 3, y + 90, random_z + 3)
    )
}

```

## Try it!

Type **jump** to play!