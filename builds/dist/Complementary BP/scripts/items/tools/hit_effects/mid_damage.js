import { world } from '@minecraft/server';

const middamage = [
    'minecraft:stone_sword',
    'minecraft:iron_sword',
    'complementary:iron_axe',
    'complementary:diamond_axe',
    'complementary:steel_axe'
]

world.afterEvents.entityHurt.subscribe(event => {
    const damagingEntity = event.damageSource.damagingEntity
    if (!damagingEntity || damagingEntity.typeId != 'minecraft:player') return;
    const targetEntity = event.hurtEntity
    const itemStack = damagingEntity.getComponent('inventory').container.getItem(damagingEntity.selectedSlot)
    if (!itemStack) return;
    if (!middamage.includes(itemStack.typeId)) return;
    targetEntity.runCommand('execute at @s anchored eyes run particle complementary:damage_heart_emitter_mid ~~-0.2~')
})