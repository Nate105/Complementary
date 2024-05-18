import { world } from '@minecraft/server'

const bottle_recalling = [
    'complementary:bottle_recalling'
]

world.afterEvents.itemCompleteUse.subscribe(event => {
    const { source: entity, itemStack } = event
    if (entity.typeId !== "minecraft:player" || !itemStack || !bottle_recalling.includes(itemStack.typeId)) return;
    const { x, y, z, dimension } = entity.getSpawnPoint();
    entity.teleport({ x, y, z }, { dimension: dimension })
    entity.runCommandAsync('playsound portal.travel @a ~~~')
})