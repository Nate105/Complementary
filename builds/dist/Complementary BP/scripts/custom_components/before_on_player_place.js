import { BlockPermutation } from '@minecraft/server';
class beforeOnPlayerPlace {
    constructor() {
        this.beforeOnPlayerPlace = this.beforeOnPlayerPlace.bind(this);
    }
    beforeOnPlayerPlace(_componentData) { }
}
export class cancel extends beforeOnPlayerPlace {
    beforeOnPlayerPlace(componentData) {
        componentData.cancel = true;
    }
}
export class changeIntoBedrock extends beforeOnPlayerPlace {
    beforeOnPlayerPlace(componentData) {
        componentData.permutationToPlace =
            BlockPermutation.resolve('minecraft:bedrock');
    }
}
