import { world } from '@minecraft/server'

const potion_mana = [
    'complementary:potion_mana'
]

world.afterEvents.itemCompleteUse.subscribe(event => {
    const { source: entity, itemStack } = event
    if (entity.typeId !== "minecraft:player" || !itemStack || !potion_mana.includes(itemStack.typeId)) return;
    entity.runCommand('scoreboard players set @p mana_boost_i 3600')
})