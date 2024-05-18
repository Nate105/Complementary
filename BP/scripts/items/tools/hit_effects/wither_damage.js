import { world } from '@minecraft/server';

const withered_sword = [
    'complementary:withered_sword'
]

world.afterEvents.entityHurt.subscribe(event => {
    const damagingEntity = event.damageSource.damagingEntity
    if (!damagingEntity || damagingEntity.typeId != 'minecraft:player') return;
    const targetEntity = event.hurtEntity
    const itemStack = damagingEntity.getComponent('inventory').container.getItem(damagingEntity.selectedSlot)
    if (!itemStack) return;
    if (!withered_sword.includes(itemStack.typeId)) return;
    targetEntity.addEffect('wither', 100, { amplifier: 1, showParticles: true })
    targetEntity.runCommand('execute at @s anchored eyes run particle complementary:wither_heart_emitter ~~-0.2~')
})