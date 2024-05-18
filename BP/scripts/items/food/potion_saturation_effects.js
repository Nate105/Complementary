import { world } from '@minecraft/server'

const potion_saturation = [
    'complementary:potion_saturation'
]

world.afterEvents.itemCompleteUse.subscribe(event => {
    const { source: entity, itemStack } = event
    if (entity.typeId !== "minecraft:player" || !itemStack || !potion_saturation.includes(itemStack.typeId)) return;
    entity.addEffect('saturation', 3600, { amplifier: 0, showParticles: true })
})