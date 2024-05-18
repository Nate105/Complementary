import { Container, Player, world, EntityHurtAfterEvent, EffectTypes } from "@minecraft/server";

//Enchantment handler
class CustomEnchant {
    static list = []
    /**
     * @param {string} enchantName
     * @param {function(EntityHurtEvent, number | string)} callback
     */
    static addHitListener(enchantName, callback) {
        this.list.push({ name: enchantName, callback: callback })
    }
}

//Testing for present enchantments and calling callbacks
world.afterEvents.entityHurt.subscribe((event) => {
    const player = event.damageSource.damagingEntity;
    if (!(player instanceof Player)) return;
    /** @type {Container} */
    const container = player.getComponent("inventory").container;
    const heldItem = container.getItem(player.selectedSlot);
    const lore = heldItem.getLore();
    for (const enchant of lore) {
        const ench = CustomEnchant.list.find((x) => enchant.startsWith(x.name));
        if (!ench) continue;
        const level = parseInt(enchant.substring(ench.name.length)) || enchant.substring(ench.name.length).trim() || 0
        ench.callback(event, level)
    }
})


//custom explode enchantment that will explode on hit
CustomEnchant.addHitListener("§r§l§7Chain Strike I", (hurtEvent, level) => {
    const hurtEntity = hurtEvent.hurtEntity
    const player = hurtEvent.damageSource.damagingEntity
    hurtEntity.runCommand('damage @e[r=2] 6 entity_attack entity @p')
    player.runCommand('execute at @s anchored eyes run particle complementary:sweep ^^^1.8')
    player.runCommand('playsound attack.sweep @a ~~~')
    player.addEffect('resistance', 1, { amplifier: 255, showParticles: false })
})

//custom strength enchantment that will give strength on hit
CustomEnchant.addHitListener("Strength I", (hurtEvent, level) => {
    const player = hurtEvent.damageSource.damagingEntity
    player.addEffect(MinecraftEffectTypes.strength, 100, level)
})
