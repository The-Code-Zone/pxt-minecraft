### @explicitHints true

### @diffs true

# Ride a Reindeer

```template
player.onChat("reindeer", function () {
    if (riding) {
        riding = false
        player.teleport(positions2.load(0, 0, 0))
    } else {
        positions2.save(posCamera(0, 0, 0))
        riding = true
    }
})
let riding = false
riding = false
agent.teleport(pos(0, 50, 0), NORTH)
```

## Step 1

Build this

```blocks
loops.forever(function () {
    while (riding) {
        agent.move(FORWARD, 1)
        player.teleport(positions.add(
        agent.getPosition(),
        pos(0, 0, 5)
        ))
    }
})
```

## Try it!

Type **reindeer** to go for a ride with your agent.
Type **reindeer** again to stop.