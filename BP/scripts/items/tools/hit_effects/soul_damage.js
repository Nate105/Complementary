import { world } from '@minecraft/server';

const souldamage = [
    'complementary:soulstealer',
    'complementary:soulstealer_sweeping_edge_i'
]

world.afterEvents.entityHurt.subscribe(event => {
    const damagingEntity = event.damageSource.damagingEntity
    if (!damagingEntity || damagingEntity.typeId != 'minecraft:player') return;
    const targetEntity = event.hurtEntity
    const itemStack = damagingEntity.getComponent('inventory').container.getItem(damagingEntity.selectedSlot)
    if (!itemStack) return;
    if (!souldamage.includes(itemStack.typeId)) return;
    targetEntity.runCommand('execute at @s anchored eyes run particle complementary:soul_heart_emitter ~~-0.2~')
})