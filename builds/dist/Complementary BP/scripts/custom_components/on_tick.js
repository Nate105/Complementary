import { world } from '@minecraft/server';
class onTick {
    constructor() {
        this.onTick = this.onTick.bind(this);
    }
    onTick(_componentData) { }
}
export class debug extends onTick {
    onTick(componentData) {
        world.sendMessage(`Block at ${componentData.block.x}, ${componentData.block.y}, ${componentData.block.z} ticked.`);
    }
}
