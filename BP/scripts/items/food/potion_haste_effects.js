import { world } from '@minecraft/server'

const potion_haste = [
    'complementary:potion_haste'
]

world.afterEvents.itemCompleteUse.subscribe(event => {
    const { source: entity, itemStack } = event
    if (entity.typeId !== "minecraft:player" || !itemStack || !potion_haste.includes(itemStack.typeId)) return;
    entity.addEffect('haste', 3600, { amplifier: 0, showParticles: true })
})