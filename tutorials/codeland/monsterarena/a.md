### @explicitHints true

### @diffs true

# Monster Arena



```template
let wave = 0
let zombie_count = 0
let countdown = 0
mobs.onMobKilled(mobs.monster(ZOMBIE), function () {
    zombie_count += -1
    if (zombie_count < 1) {
        gameplay.title(mobs.target(ALL_PLAYERS), "Wave " + wave + " cleared!", "")
        wave += 1
        loops.pause(5000)
        setup_wave()
    }
})
```

## Step 1

```blocks
function give_loot () {
    mobs.give(
    mobs.target(ALL_PLAYERS),
    APPLE,
    wave
    )
    mobs.give(
    mobs.target(ALL_PLAYERS),
    IRON_SWORD,
    1
    )
    if (wave == 10) {
        mobs.give(
        mobs.target(ALL_PLAYERS),
        NETHERITE_SWORD,
        1
        )
    }
}
```

Build this ``||functions:script||``.

## Step 2

```blocks
function spawn_zombies () {
    for (let index = 0; index < wave * 5; index++) {
        mobs.spawn(mobs.monster(ZOMBIE), randpos(
        positions2.load(-14, 0, -14),
        positions2.load(14, 0, 14)
        ))
        zombie_count += 1
    }
}
```

Build this ``||functions:script||``.

## Step 3

```blocks
function setup_player () {
    gameplay.setDifficulty(EASY)
    gameplay.setGameMode(
    ADVENTURE,
    mobs.target(ALL_PLAYERS)
    )
    mobs.teleportToPosition(
    mobs.target(ALL_PLAYERS),
    positions2.load(0, 0, 0)
    )
}
```

Build this ``||functions:script||``.

## Step 4

```blocks
function build_arena () {
    blocks.fill(
    COBBLESTONE,
    positions2.load(-15, -1, -15),
    positions2.load(15, 3, 15),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    positions2.load(-14, 0, -14),
    positions2.load(14, 3, 14),
    FillOperation.Replace
    )
    gameplay.timeSet(gameplay.time(NIGHT))
}
```

Build this ``||functions:script||``.

## Step 5

```blocks
function setup_wave () {
    gameplay.title(mobs.target(ALL_PLAYERS), "Wave " + wave + " begins in:", "")
    loops.pause(3000)
    countdown = 3
    for (let index = 0; index < 3; index++) {
        gameplay.title(mobs.target(ALL_PLAYERS), "" + countdown, "")
        countdown += -1
        loops.pause(1000)
    }
    give_loot()
    spawn_zombies()
}
```

Build this ``||functions:script||``.

## Step 6

```blocks
// @hide
function build_arena() {}

// @hide
function setup_player() {}

// @hide
function setup_wave() {}

// @highlight
player.onChat("a", function () {
    positions2.save(posCamera(0, 0, 0))
    wave = 1
    zombie_count = 0
    build_arena()
    setup_player()
    setup_wave()
})
```

Build this ``||functions:script||``.

## Try it!

Type **a** to play!