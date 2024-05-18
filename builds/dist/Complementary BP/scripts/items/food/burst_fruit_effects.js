import { world } from '@minecraft/server'

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