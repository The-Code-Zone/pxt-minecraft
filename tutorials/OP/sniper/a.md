### @explicitHints true

# TNT Sniper

## Build this

```blocks
let z = 0
player.onArrowShot(function () {
    z = 1
    for (let index = 0; index < 40; index++) {
        if (!(blocks.testForBlock(AIR, posLocal(0, 0, z)))) {
            mobs.spawn(PRIMED_TNT, posLocal(0, 0, z))
            break;
        }
        z += 1
    }
})
```

```template
{}
```

## Try it!

Shoot an arrow and it will spawn TNT.