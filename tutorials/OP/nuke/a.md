### @explicitHints true

# TNT Nuke

## Step 1

Build this

```blocks
player.onChat("nuke", function () {
    blocks.fill(
    TNT,
    pos(1, 1, 1),
    pos(15, 15, 15),
    FillOperation.Replace
    )
    mobs.spawn(PRIMED_TNT, pos(8, 8, 8))
})
```

```template
{}
```

## Try it!

Say **nuke** in the chat.