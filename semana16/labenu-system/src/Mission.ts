import { Student } from "./Student";
import { Teacher } from "./Teacher";

export abstract class Mission {
    private id : number = Date.now();
    protected missionStudents : Student[] = []
    protected missionTeachers : Teacher[] = []

    constructor(
        private name : string,
        private beggining : string,
        private ending : string,
        private module : number = undefined,
    ) {}

    getId () : number {
        return this.id
    }

    getName() : string {
        return this.name
    }

    getBeggining() : string {
        return this.beggining
    }

    getEnding() : string {
        return this.ending
    }

    getModule() : number | undefined {
       return this.module 
    }

    setName( name : string ) : void {
        this.name = name
    }

}