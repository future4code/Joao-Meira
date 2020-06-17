import { JSONFileManager } from "./JSONFileManager";
import { Student } from "./Student";
import { Mission } from "./Mission";
import { Teacher } from "./Teacher";
import { School } from "./School";
import { NightMission } from "./NightMission";
import { FullTimeMission } from "./FullTimeMission";
const moment = require('moment')

const actionType : string = process.argv[2];
const argumentOne = process.argv[3];
const argumentTwo = process.argv[4];
const argumentThree = process.argv[5];
const argumentFour = process.argv[6];
const argumentFive = process.argv[7];

export const missionFileManager = new JSONFileManager('mission.json')
export const teacherFileManager = new JSONFileManager('teacher.json')
export const studentsFileManager = new JSONFileManager('student.json')

const schoolLabenu = new School (
    missionFileManager, 
    teacherFileManager, 
    studentsFileManager
    )

let selectedMission : any
 schoolLabenu.missionsList.map( ( mission : any ) => {
        if( mission.id === Number( argumentOne )){
             selectedMission = mission
        }
    })

console.log(actionType)

switch (actionType) {
    case 'CREATE_TEACHER':
        if(argumentOne && argumentTwo && argumentThree && argumentFour){
        schoolLabenu.createTeacher(
            argumentOne,
            argumentTwo,
            moment(argumentThree, 'DD/MM/YYYY'),
            argumentFour
            )
        } else {
            console.log(        
            "\x1b[31m", 
            "Faltou alguma informação!")
        }
        break;

    case 'CREATE_STUDENT':
        if(argumentOne && argumentTwo && argumentThree && argumentFour){
        schoolLabenu.createStudent(
            argumentOne,
            argumentTwo,
            moment(argumentThree, 'DD/MM/YYYY'),
            argumentFour
            )
        } else {
            console.log(        
            "\x1b[31m", 
            "Faltou alguma informação!")
        }        
        break;

    case 'CREATE_MISSION':
        if(argumentOne && argumentTwo && argumentThree){
        schoolLabenu.createMission(
            argumentOne,
            argumentTwo,
            argumentThree,
            Number(argumentFour)
            )
        } else {
            console.log(        
            "\x1b[31m", 
            "Faltou alguma informação!")
        }   
        break;

    case 'STUDENT_TO_MISSION':
        if(argumentOne && argumentTwo){
            let selectedStudent : any
            schoolLabenu.studentsList.forEach( (student : any) => {
                if ( student.id === Number( argumentTwo )){
                        selectedStudent = student
                    }
            })
            try{
                selectedMission.missionStudents.push(selectedStudent)
                missionFileManager.writeToFile(schoolLabenu.missionsList)
                console.log(
                    "\x1b[32m", 
                    `O aluno ${selectedStudent.name} foi adicionado à turma ${selectedMission.name}`
                    )
            } catch (error) {
                console.error(error)
            }
        } else {
            console.log(        
            "\x1b[31m", 
            "Faltou alguma informação!")
        }   
        break;

    case 'TEACHER_TO_MISSION': {
        if(argumentOne && argumentTwo){
            let selectedTeacher : any
            schoolLabenu.teachersList.map( (teacher : any) => {
                if ( teacher.id === Number( argumentTwo )){
                        selectedTeacher = teacher
                    }
            })
            try{
                selectedMission.missionTeachers.push(selectedTeacher)
                missionFileManager.writeToFile(schoolLabenu.missionsList)
                console.log(
                    "\x1b[32m", 
                    `O professor ${selectedTeacher.name} foi adicionado à turma ${selectedMission.name}`
                    )
            } catch (error) {
                console.error(error)
            }
        } else {
            console.log(        
            "\x1b[31m", 
            "Faltou alguma informação!")
        } 
        break;
    }

    case 'STUDENT_AGE': {
        let selectedStudent : any
        schoolLabenu.studentsList.forEach( (student : any) => {
            if ( student.id === Number( argumentOne )){
                    selectedStudent = student
                }
        })
        const thisStudent : Student = new Student (
            selectedStudent.name,
            selectedStudent.email,
            selectedStudent.birthDay,
            selectedStudent.hobbies
        )
        try{
            console.log(
                "\x1b[34m", 
                `O estudante ${thisStudent.name} tem ${thisStudent.getAge()} anos de idade`
                )
        } catch(error){
            console.error(error)
        }
        break;
    }

    case 'GET_STUDENTS': {
        schoolLabenu.studentsList.forEach( (student : any) => {
                console.log(student)
        })

        break;
    }
        
    case 'GET_TEACHERS': {
        schoolLabenu.teachersList.forEach( (teacher : any) => {
                console.log(teacher)
        })

        break;
    }
        
    default:
            console.log('Ação não encontrada!')
        break;
        
}  