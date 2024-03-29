import { ItemStack } from '@minecraft/server';
class onPlayerDestroy {
    constructor() {
        this.onPlayerDestroy = this.onPlayerDestroy.bind(this);
    }
    onPlayerDestroy(_componentData) { }
}
export class spawn_item extends onPlayerDestroy {
    onPlayerDestroy(componentData) {
        componentData.dimension.spawnItem(new ItemStack('minecraft:diamond'), componentData.block.location);
        console.warn(`Player destroyed ${componentData.destroyedBlockPermutation.type.id} at ${componentData.block.location.x}, ${componentData.block.location.y}, ${componentData.block.location.z}`);
    }
}
export class regenerate extends onPlayerDestroy {
    onPlayerDestroy(componentData) {
        componentData.block.setType(componentData.destroyedBlockPermutation.type);
    }
}
