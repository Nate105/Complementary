class onEntityFallOn {
    constructor() {
        this.onEntityFallOn = this.onEntityFallOn.bind(this);
    }
    onEntityFallOn(_componentData) { }
}
export class player_bounce extends onEntityFallOn {
    onEntityFallOn(componentData) {
        if (Math.abs(componentData.entity.getVelocity().y) < 1) {
            componentData.entity.applyKnockback(0, 0, 0, componentData.entity.getVelocity().y * -1.5);
        }
        else {
            componentData.entity.applyKnockback(0, 0, 0, componentData.entity.getVelocity().y * -0.5);
        }
    }
}
