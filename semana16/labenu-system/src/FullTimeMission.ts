import { Mission } from "./Mission";

export class FullTimeMission extends Mission {

    constructor(
        public name : string,
        beggining : string,
        ending : string,
        module : number | undefined,
    ){
        super(beggining, ending, module)
        this.name = name
    }
}