import { world } from '@minecraft/server'

const magnet_inactive = [
    'complementary:magnet_strong'
]

world.afterEvents.itemUse.subscribe(event => {
    const { source: entity, itemStack } = event
    if (entity.typeId !== "minecraft:player" || !itemStack || !magnet_inactive.includes(itemStack.typeId)) return;
    entity.runCommand('replaceitem entity @p slot.weapon.mainhand 0 complementary:magnet_strong_active 1 0')
    entity.runCommand('playsound random.click @a ~~~ 1 0.8')
})

const magnet_active = [
    'complementary:magnet_strong_active'
]

world.afterEvents.itemUse.subscribe(event => {
    const { source: entity, itemStack } = event
    if (entity.typeId !== "minecraft:player" || !itemStack || !magnet_active.includes(itemStack.typeId)) return;
    entity.runCommand('replaceitem entity @p slot.weapon.mainhand 0 complementary:magnet_strong 1 0')
    entity.runCommand('playsound random.click @a ~~~ 1 0.5')
})