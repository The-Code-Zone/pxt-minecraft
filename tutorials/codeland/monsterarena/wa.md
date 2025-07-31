### @explicitHints true

### @diffs true

# Pig Fishing



```template
let wave = 0
let zombie_count = 0
let countdown = 0
function setup_wave() {}
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
    blocks.fill(
    IRON_BARS,
    positions2.load(-3, 0, -3),
    positions2.load(3, 3, 3),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    positions2.load(-2, 0, -2),
    positions2.load(2, 3, 2),
    FillOperation.Replace
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
    GLASS,
    positions2.load(-15, 1, -15),
    positions2.load(15, 1, 15),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    positions2.load(-14, 0, -14),
    positions2.load(14, 3, 14),
    FillOperation.Replace
    )
    blocks.place(IRON_DOOR, positions2.load(0, 0, -15))
    blocks.place(blocks.lever(BLOCK_SIDE_FACING_SOUTH), positions2.load(0, 2, -14))
    gameplay.timeSet(gameplay.time(NIGHT))
}
```

Build this ``||functions:script||``.

## Step 5

```blocks
// @hide
function give_loot() {}

// @hide
function spawn_zombies() {}

// @highlight
function setup_wave () {
    gameplay.title(mobs.target(ALL_PLAYERS), "Wave " + wave + " begins in:", "")
    loops.pause(3000)
    countdown = 3
    for (let index = 0; index < 3; index++) {
        gameplay.title(mobs.target(ALL_PLAYERS), "" + countdown, "")
        countdown += -1
        loops.pause(1000)
    }
    blocks.fill(
    AIR,
    positions2.load(-3, 0, -3),
    positions2.load(3, 3, 3),
    FillOperation.Replace
    )
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
    positions2.save(world(74, 70, 43))
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