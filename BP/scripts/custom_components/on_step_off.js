import { system } from '@minecraft/server';
class onStepOff {
    constructor() {
        this.onStepOff = this.onStepOff.bind(this);
    }
    onStepOff(_componentData) { }
}
export class sayHi extends onStepOff {
    onStepOff(componentData) {
        componentData.dimension.runCommand(`say D: don't leave me!!! from ${componentData.block.typeId} at ${componentData.block.x}, ${componentData.block.y}, ${componentData.block.z}`);
    }
}
export class effect extends onStepOff {
    onStepOff(componentData) {
        componentData.entity.addEffect('slowness', 200, {
            showParticles: false,
            amplifier: 2
        });
    }
}
export class disappearing extends onStepOff {
    onStepOff(componentData) {
        let block = componentData.block.typeId;
        componentData.block.setType('minecraft:air');
        system.runTimeout(() => {
            componentData.block.setType(block);
        }, 100);
    }
}
