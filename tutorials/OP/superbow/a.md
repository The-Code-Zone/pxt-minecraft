### @explicitHints true

# Super Bow

## Step 1

Build this

```blocks
mobs.give(mobs.target(LOCAL_PLAYER), BOW, 1)
mobs.give(mobs.target(LOCAL_PLAYER), ARROW, 64)
```

```template
{}
```

## Step 2

Build this

```blocks
player.onArrowShot(function () {
    for (let index = 0; index <= 10; index++) {
        mobs.spawn(PRIMED_TNT, posLocal(0, 1, index * 2 + 5))
    }
})
```

## Try it!

Shoot the Super Bow.