import { world } from '@minecraft/server'

const withered_bone_marrow = [
    'complementary:withered_bone_marrow'
]

world.afterEvents.itemCompleteUse.subscribe(event => {
    const { source: entity, itemStack } = event
    if (entity.typeId !== "minecraft:player" || !itemStack || !withered_bone_marrow.includes(itemStack.typeId)) return;
    entity.addEffect('wither', 100, { amplifier: 0, showParticles: true })
})