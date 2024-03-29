import { world } from '@minecraft/server';
class onPlaceOn {
    constructor() {
        this.onPlace = this.onPlace.bind(this);
    }
    onPlace(_componentData) { }
}
export class debug extends onPlaceOn {
    onPlace(componentData) {
        world.sendMessage(`Player placed block at ${componentData.block.x}, ${componentData.block.y}, ${componentData.block.z}.`);
        world.sendMessage(`Previous block was ${componentData.previousBlock.type.id}.`);
    }
}
export class changeIntoBedrock extends onPlaceOn {
    onPlace(componentData) {
        componentData.block.setType('minecraft:bedrock');
    }
}
