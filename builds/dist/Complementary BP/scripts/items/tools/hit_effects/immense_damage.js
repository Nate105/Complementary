import { world } from '@minecraft/server';

const immensedamage = [
    'complementary:platinum_sword'
]

world.afterEvents.entityHurt.subscribe(event => {
    const damagingEntity = event.damageSource.damagingEntity
    if (!damagingEntity || damagingEntity.typeId != 'minecraft:player') return;
    const targetEntity = event.hurtEntity
    const itemStack = damagingEntity.getComponent('inventory').container.getItem(damagingEntity.selectedSlot)
    if (!itemStack) return;
    if (!immensedamage.includes(itemStack.typeId)) return;
    targetEntity.runCommand('execute at @s anchored eyes run particle complementary:damage_heart_emitter_immense ~~-0.2~')
})