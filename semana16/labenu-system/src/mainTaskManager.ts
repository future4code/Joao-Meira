import { JSONFileManager } from "./JSONFileManager";
import { Student } from "./Student";
import { Mission } from "./Mission";
import { Teacher } from "./Teacher";
import { School } from "./School";
const moment = require('moment')


export const missionFileManager = new JSONFileManager('mission.json')
export const teacherFileManager = new JSONFileManager('teacher.json')
export const studentsFileManager = new JSONFileManager('student.json')

const schoolLabenu = new School (
    missionFileManager, 
    teacherFileManager, 
    studentsFileManager
    )



const actionType : string = process.argv[2];
console.log(actionType)

switch (actionType) {
    case 'CREATE_TEACHER':
        schoolLabenu.createTeacher(
            process.argv[3],
            process.argv[4],
            moment(process.argv[5], 'DD/MM/YYYY'),
            process.argv[6]
            )
        break;
    case 'CREATE_STUDENT':
        schoolLabenu.createStudent(
            process.argv[3],
            process.argv[4],
            moment(process.argv[5], 'DD/MM/YYYY'),
            process.argv[6]
            )
        break;
    case 'CREATE_MISSION':
        schoolLabenu.createMission(
            process.argv[3],
            process.argv[4],
            process.argv[5],
            Number(process.argv[6])
            )
        break;
        
    default:
            console.log('Ação não encontrada!')
        break;
        
}  