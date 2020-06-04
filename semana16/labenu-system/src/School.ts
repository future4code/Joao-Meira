import { JSONFileManager } from "./JSONFileManager";
import { Student } from "./Student";
import { Mission } from "./Mission";
import { Teacher } from "./Teacher";
import { FullTimeMission } from "./FullTimeMission";
const moment = require('moment')

export class School {

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

        const teachersList = this.teachersFileManager.getFromFile() as Teacher[]

        const newTeacher : Teacher = new Teacher(
            name, 
            email, 
            moment(birthDay).format('DD/MM/YYYY'), 
            specialization
            )
            
        try{
            teachersList.push(newTeacher)
            this.teachersFileManager.writeToFile(teachersList)
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

        const studentsList = this.studentsFileManager.getFromFile() as Student[]

        const newStudent : Student = new Student(
            name, 
            email, 
            moment(birthDay).format('DD/MM/YYYY'), 
            hobbies
            )
            
        try{
            studentsList.push(newStudent)
            this.studentsFileManager.writeToFile(studentsList)
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
        module : number | undefined,
    ) : void {

        const missionsList = this.missionsFileManager.getFromFile() as Mission[]

        const newMission : Mission = new FullTimeMission (
            name,
            beggining, 
            ending, 
            module,
            )
            
        try{
            missionsList.push(newMission)
            this.missionsFileManager.writeToFile(missionsList)
            return console.log(
                "\x1b[32m", 
                "Missão cadastrado com sucesso!"
            )
            } catch (error){
            console.error(error)
        }
    }
 }

