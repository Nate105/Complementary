import { world } from '@minecraft/server';

const lowdamage = [
    'minecraft:wooden_sword',
    'minecraft:golden_sword',
    'complementary:wood_axe',
    'complementary:stone_axe',
    'complementary:gold_axe'
]

world.afterEvents.entityHurt.subscribe(event => {
    const damagingEntity = event.damageSource.damagingEntity
    if (!damagingEntity || damagingEntity.typeId != 'minecraft:player') return;
    const targetEntity = event.hurtEntity
    const itemStack = damagingEntity.getComponent('inventory').container.getItem(damagingEntity.selectedSlot)
    if (!itemStack) return;
    if (!lowdamage.includes(itemStack.typeId)) return;
    targetEntity.runCommand('execute at @s anchored eyes run particle complementary:damage_heart_emitter_low ~~-0.2~')
})