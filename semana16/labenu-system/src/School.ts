import { JSONFileManager } from "./JSONFileManager";
import { Student } from "./Student";
import { Mission } from "./Mission";
import { Teacher } from "./Teacher";
import { FullTimeMission } from "./FullTimeMission";
import { NightMission } from "./NightMission";
const moment = require('moment')

export class School {
    public teachersList = this.teachersFileManager
        .getFromFile() as Teacher[]
    public studentsList = this.studentsFileManager
        .getFromFile() as Student[]
    public missionsList = this.missionsFileManager
        .getFromFile() as Mission[]


    constructor( 
        protected missionsFileManager : JSONFileManager,
        protected teachersFileManager : JSONFileManager,
        protected studentsFileManager : JSONFileManager,
        ) {
        this.missionsFileManager;
        this.teachersFileManager;
        this.studentsFileManager;
    }

    public createTeacher (
        name : string,
        email : string,
        birthDay : string,
        specialization : string,
    ) : void {

        const newTeacher : Teacher = new Teacher(
            name, 
            email, 
            moment(birthDay).format('DD/MM/YYYY'), 
            specialization
            )
            
        try{
            this.teachersList.push(newTeacher)
            this.teachersFileManager.writeToFile(this.teachersList)
            return console.log(
                "\x1b[32m", 
                "Professor cadastrado com sucesso!"
            )
            } catch (error){
            console.error(error)
        }
    }

    public createStudent (
        name : string,
        email : string,
        birthDay : string,
        hobbies : string,
    ) : void {

        const newStudent : Student = new Student(
            name, 
            email, 
            moment(birthDay).format('DD/MM/YYYY'), 
            hobbies
            )
            
        try{
            this.studentsList.push(newStudent)
            this.studentsFileManager.writeToFile(this.studentsList)
            return console.log(
                "\x1b[32m", 
                "Estudante cadastrado com sucesso!"
            )
            } catch (error){
            console.error(error)
        }
    }

    public createMission (
        name : string,
        beggining : string,
        ending : string,
        module : number,
    ) : void {
        if (name.indexOf("-na-night") !== -1) {
            const newMission : NightMission = new NightMission (
            name,
            beggining, 
            ending, 
            module,
            )
                
            try{
                this.missionsList.push(newMission)
                this.missionsFileManager.writeToFile(this.missionsList)
                return console.log(
                    "\x1b[32m", 
                    "Missão noturna cadastrada com sucesso!"
                )
            } catch (error){
                console.error(error)
            }
        } else {
            const newMission : FullTimeMission = new FullTimeMission (
                name,
                beggining, 
                ending, 
                module,
                )
                
            try{
                this.missionsList.push(newMission)
                this.missionsFileManager.writeToFile(this.missionsList)
                return console.log(
                    "\x1b[32m", 
                    "Missão integral cadastrada com sucesso!"
                )
                } catch (error){
                console.error(error)
            }
        }
    } 
 }

