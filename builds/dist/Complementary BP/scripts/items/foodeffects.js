import { world } from '@minecraft/server'

const potion_mana = [
    'complementary:potion_mana'
]

world.afterEvents.itemCompleteUse.subscribe(event => {
    const { source: entity, itemStack } = event
    if (entity.typeId !== "minecraft:player" || !itemStack || !potion_mana.includes(itemStack.typeId)) return;
    entity.runCommand('scoreboard players set @p mana_boost_i 3600')
})

const withered_bone_marrow = [
    'complementary:withered_bone_marrow'
]

world.afterEvents.itemCompleteUse.subscribe(event => {
    const { source: entity, itemStack } = event
    if (entity.typeId !== "minecraft:player" || !itemStack || !withered_bone_marrow.includes(itemStack.typeId)) return;
    entity.addEffect('wither', 100, { amplifier: 0, showParticles: true })
})

const burst_fruit = [
    'complementary:burst_fruit'
]

world.afterEvents.itemCompleteUse.subscribe(event => {
    const { source: entity, itemStack } = event
    if (entity.typeId !== "minecraft:player" || !itemStack || !burst_fruit.includes(itemStack.typeId)) return;
    entity.applyDamage(1);
    entity.runCommand('summon complementary:burst_fruit_explosion ~~~');
    entity.runCommand('playsound random.explode @a ~~~');
    entity.runCommand('particle minecraft:large_explosion ~~~');
    entity.applyKnockback(0, 0, 0, 2);
})