import { world, system, Dimension } from "@minecraft/server";

const dimension = world.getDimension('overworld');
world.afterEvents.itemUse.subscribe(clickeditem => {
	const player = clickeditem.source;
	const item = clickeditem.itemStack;
	if (item.typeId === 'complementary:arcane_shot_scroll_level_i') {
		let arrowentity = dimension.spawnEntity("complementary:arcane_beam", player.location);
		let arrowProjectileComp = arrowentity.getComponent('minecraft:projectile');
		let velocity = { x: player.getViewDirection().x, y: player.getViewDirection().y, z: player.getViewDirection().z };
		arrowProjectileComp.shoot(velocity);
	};
})