import { world } from '@minecraft/server';
class onPlayerInteract {
    constructor() {
        this.onPlayerInteract = this.onPlayerInteract.bind(this);
    }
    onPlayerInteract(_componentData) { }
}
export class debug extends onPlayerInteract {
    onPlayerInteract(componentData) {
        world.sendMessage(`${componentData.player.name} interacted with block at ${componentData.block.x}, ${componentData.block.y}, ${componentData.block.z} on the ${componentData.face} face.`);
    }
}
