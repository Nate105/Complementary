import { system, world } from '@minecraft/server'

system.runInterval(() => {
	world.getAllPlayers().forEach((player) => {
		let inventory = player.getComponent("inventory")?.container;
		for (let i = 0; i < inventory.size; i++) {
			let item = inventory.getItem(i);
			if (item === undefined) continue;
			if (item.typeId === "complementary:endersteel_upgrade_smithing_template") {
				item.setLore(["§r§7Endersteel Upgrade", "", "§r§7Applies to:", "§r§9 Netherite Equipment", "§r§7Ingredients:", "§r§9 Transmutable Alloy"]);
				inventory.setItem(i, item);
			}
			if (item.typeId === "complementary:broken_endersteel_upgrade_smithing_template") {
				item.setLore(["§r§7Endersteel Upgrade", "", "§r§4Requires Repair"]);
				inventory.setItem(i, item);
			}
			if (item.typeId === "complementary:restoration_smithing_template") {
				item.setLore(["§r§7Archeological Restoration", "", "§r§7Applies to:", "§r§9 Fragmented Tools", "§r§7Ingredients:", "§r§9 Transmutable Alloy"]);
				inventory.setItem(i, item);
			}
			if (item.typeId === "complementary:mana_ring_i") {
				item.setLore(["", "§r§9When in Inventory:", "§r§9 +100% Mana Regeneration"]);
				inventory.setItem(i, item);
			}
			if (item.typeId === "complementary:mana_ring_ii") {
				item.setLore(["", "§r§9When in Inventory:", "§r§9 +200% Mana Regeneration"]);
				inventory.setItem(i, item);
			}
			if (item.typeId === "complementary:mana_ring_iii") {
				item.setLore(["", "§r§9When in Inventory:", "§r§9 +300% Mana Regeneration"]);
				inventory.setItem(i, item);
			}
			if (item.typeId === "complementary:potion_mana") {
				item.setLore(["", "§r§5When Applied:", "§r§9+20% Max Mana"]);
				inventory.setItem(i, item);
			}
		}
	});
});