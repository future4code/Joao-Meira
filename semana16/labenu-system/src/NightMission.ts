import { Mission } from "./Mission";

export class NightMission extends Mission {
    
    constructor(
        public name : string,
        beggining : string,
        ending : string,
        module : number,
    ){
        super(beggining, ending, module)
        this.name = name
    }
}