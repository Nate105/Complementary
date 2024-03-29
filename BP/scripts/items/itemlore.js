import { system, world } from '@minecraft/server'

system.runInterval(() => {
	world.getAllPlayers().forEach((player) => {
		let inventory = player.getComponent("inventory")?.container;
		for (let i = 0; i < inventory.size; i++) {
			let item = inventory.getItem(i);
			if (item === undefined) continue;
			if (item.typeId === "complementary:endersteel_alloy_upgrade_smithing_template") {
				item.setLore(["§r§7Endersteel Upgrade", "", "§r§7Applies to:", "§r§9 Netherite Equipment", "§r§7Ingredients:", "§r§9 Transmutable Alloy"]);
				inventory.setItem(i, item);
			}
			if (item.typeId === "complementary:potion_mana") {
				item.setLore(["", "§r§5When Applied:", "§r§9+20% Max Mana"]);
				inventory.setItem(i, item);
			}
			//Rings
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
			//Runes
			if (item.typeId === "complementary:rune_fire") {
				item.setLore(["§r§6Fire School"]);
				inventory.setItem(i, item);
			}
			if (item.typeId === "complementary:rune_ice") {
				item.setLore(["§r§bIce School"]);
				inventory.setItem(i, item);
			}
			if (item.typeId === "complementary:rune_arcane") {
				item.setLore(["§r§dArcane School"]);
				inventory.setItem(i, item);
			}
			if (item.typeId === "complementary:rune_essence") {
				item.setLore(["§r§4Essence School"]);
				inventory.setItem(i, item);
			}
			//Endersteel
			if (item.typeId === "complementary:endersteel_helmet") {
				item.setLore(["", "§r§9+7 Defense Points "]);
				inventory.setItem(i, item);
			}
			if (item.typeId === "complementary:endersteel_chestplate") {
				item.setLore(["", "§r§9+12 Defense Points "]);
				inventory.setItem(i, item);
			}
			if (item.typeId === "complementary:endersteel_leggings") {
				item.setLore(["", "§r§9+10 Defense Points "]);
				inventory.setItem(i, item);
			}
			if (item.typeId === "complementary:endersteel_boots") {
				item.setLore(["", "§r§9+7 Defense Points "]);
				inventory.setItem(i, item);
			}
			//Netherite
			if (item.typeId === "minecraft:netherite_helmet") {
				item.setLore(["§r§9+3 Defense Points ", "§r§9+3 Armor Toughness  "]);
				inventory.setItem(i, item);
			}
			if (item.typeId === "minecraft:netherite_chestplate") {
				item.setLore(["§r§9+8 Defense Points ", "§r§9+3 Armor Toughness  "]);
				inventory.setItem(i, item);
			}
			if (item.typeId === "minecraft:netherite_leggings") {
				item.setLore(["§r§9+6 Defense Points ", "§r§9+3 Armor Toughness  "]);
				inventory.setItem(i, item);
			}
			if (item.typeId === "minecraft:netherite_boots") {
				item.setLore(["§r§9+3 Defense Points ", "§r§9+3 Armor Toughness   "]);
				inventory.setItem(i, item);
			}
			if (item.typeId === "complementary:netherite_pickaxe") {
				item.setLore(["§r§9+10 Mining Speed  "]);
				inventory.setItem(i, item);
			}
			if (item.typeId === "complementary:netherite_axe") {
				item.setLore(["§r§9+10 Mining Speed  "]);
				inventory.setItem(i, item);
			}
			if (item.typeId === "minecraft:netherite_shovel") {
				item.setLore(["§r§9+10 Mining Speed  "]);
				inventory.setItem(i, item);
			}
			if (item.typeId === "minecraft:netherite_hoe") {
				item.setLore(["§r§9+10 Mining Speed  "]);
				inventory.setItem(i, item);
			}
			//Diamond
			if (item.typeId === "minecraft:diamond_helmet") {
				item.setLore(["", "§r§9+3 Defense Points ", "§r§9+2 Armor Toughness  "]);
				inventory.setItem(i, item);
			}
			if (item.typeId === "minecraft:diamond_chestplate") {
				item.setLore(["", "§r§9+8 Defense Points ", "§r§9+2 Armor Toughness  "]);
				inventory.setItem(i, item);
			}
			if (item.typeId === "minecraft:diamond_leggings") {
				item.setLore(["", "§r§9+6 Defense Points ", "§r§9+2 Armor Toughness  "]);
				inventory.setItem(i, item);
			}
			if (item.typeId === "minecraft:diamond_boots") {
				item.setLore(["", "§r§9+3 Defense Points ", "§r§9+2 Armor Toughness  "]);
				inventory.setItem(i, item);
			}
			if (item.typeId === "complementary:diamond_pickaxe") {
				item.setLore(["§r§9+8 Mining Speed  "]);
				inventory.setItem(i, item);
			}
			if (item.typeId === "complementary:diamond_axe") {
				item.setLore(["§r§9+8 Mining Speed  "]);
				inventory.setItem(i, item);
			}
			if (item.typeId === "minecraft:diamond_shovel") {
				item.setLore(["§r§9+8 Mining Speed  "]);
				inventory.setItem(i, item);
			}
			if (item.typeId === "minecraft:diamond_hoe") {
				item.setLore(["§r§9+8 Mining Speed  "]);
				inventory.setItem(i, item);
			}
			//Steel
			if (item.typeId === "complementary:steel_helmet") {
				item.setLore(["", "§r§9+3 Defense Points "]);
				inventory.setItem(i, item);
			}
			if (item.typeId === "complementary:steel_chestplate") {
				item.setLore(["", "§r§9+8 Defense Points "]);
				inventory.setItem(i, item);
			}
			if (item.typeId === "complementary:steel_leggings") {
				item.setLore(["", "§r§9+6 Defense Points "]);
				inventory.setItem(i, item);
			}
			if (item.typeId === "complementary:steel_boots") {
				item.setLore(["", "§r§9+3 Defense Points "]);
				inventory.setItem(i, item);
			}
			if (item.typeId === "complementary:steel_pickaxe") {
				item.setLore(["§r§9+10 Mining Speed  "]);
				inventory.setItem(i, item);
			}
			if (item.typeId === "complementary:steel_axe") {
				item.setLore(["§r§9+10 Mining Speed  "]);
				inventory.setItem(i, item);
			}
			if (item.typeId === "complementary:steel_shovel") {
				item.setLore(["§r§9+10 Mining Speed  "]);
				inventory.setItem(i, item);
			}
			if (item.typeId === "complementary:steel_hoe") {
				item.setLore(["§r§9+10 Mining Speed  "]);
				inventory.setItem(i, item);
			}
			//Iron
			if (item.typeId === "minecraft:iron_helmet") {
				item.setLore(["", "§r§9+2 Defense Points "]);
				inventory.setItem(i, item);
			}
			if (item.typeId === "minecraft:iron_chestplate") {
				item.setLore(["", "§r§9+6 Defense Points "]);
				inventory.setItem(i, item);
			}
			if (item.typeId === "minecraft:iron_leggings") {
				item.setLore(["", "§r§9+5 Defense Points "]);
				inventory.setItem(i, item);
			}
			if (item.typeId === "minecraft:iron_boots") {
				item.setLore(["", "§r§9+2 Defense Points "]);
				inventory.setItem(i, item);
			}
			if (item.typeId === "complementary:iron_pickaxe") {
				item.setLore(["§r§9+6 Mining Speed  "]);
				inventory.setItem(i, item);
			}
			if (item.typeId === "complementary:iron_axe") {
				item.setLore(["§r§9+6 Mining Speed  "]);
				inventory.setItem(i, item);
			}
			if (item.typeId === "minecraft:iron_shovel") {
				item.setLore(["§r§9+6 Mining Speed  "]);
				inventory.setItem(i, item);
			}
			if (item.typeId === "minecraft:iron_hoe") {
				item.setLore(["§r§9+6 Mining Speed  "]);
				inventory.setItem(i, item);
			}
		}
	});
});