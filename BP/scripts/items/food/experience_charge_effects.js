import { world } from '@minecraft/server'

const experience_charge = [
    'complementary:experience_charge'
]

world.afterEvents.itemCompleteUse.subscribe(event => {
    const { source: entity, itemStack } = event
    if (entity.typeId !== "minecraft:player" || !itemStack || !experience_charge.includes(itemStack.typeId)) return;
    entity.runCommand('xp 315 @s')
})