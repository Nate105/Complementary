import { world } from '@minecraft/server';

const highdamage = [
    'minecraft:diamond_sword',
    'minecraft:netherite_sword',
    'complementary:steel_sword',
    'minecraft:trident',
    'complementary:netherite_axe'
]

world.afterEvents.entityHurt.subscribe(event => {
    const damagingEntity = event.damageSource.damagingEntity
    if (!damagingEntity || damagingEntity.typeId != 'minecraft:player') return;
    const targetEntity = event.hurtEntity
    const itemStack = damagingEntity.getComponent('inventory').container.getItem(damagingEntity.selectedSlot)
    if (!itemStack) return;
    if (!highdamage.includes(itemStack.typeId)) return;
    targetEntity.runCommand('execute at @s anchored eyes run particle complementary:damage_heart_emitter_high ~~-0.2~')
})