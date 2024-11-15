### @explicitHints true

# Agent Bodyguard

## Complete the code

```blocks
let closest_monster = mobs.target(ALL_ENTITIES)
closest_monster.addRule("family", "monster")
closest_monster.addRule("c", "1")
while (true) {
    mobs.teleportToPlayer(
    mobs.target(MY_AGENT),
    closest_monster
    )
    agent.attack(FORWARD)
}
```

```template
let closest_monster = mobs.target(ALL_ENTITIES)
closest_monster.addRule("family", "monster")
closest_monster.addRule("c", "1")
```

## Try it!

Your agent will attack nearby monsters!