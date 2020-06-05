"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentsFileManager = exports.teacherFileManager = exports.missionFileManager = void 0;
const JSONFileManager_1 = require("./JSONFileManager");
const Student_1 = require("./Student");
const School_1 = require("./School");
const moment = require('moment');
const actionType = process.argv[2];
const argumentOne = process.argv[3];
const argumentTwo = process.argv[4];
const argumentThree = process.argv[5];
const argumentFour = process.argv[6];
const argumentFive = process.argv[7];
exports.missionFileManager = new JSONFileManager_1.JSONFileManager('mission.json');
exports.teacherFileManager = new JSONFileManager_1.JSONFileManager('teacher.json');
exports.studentsFileManager = new JSONFileManager_1.JSONFileManager('student.json');
const schoolLabenu = new School_1.School(exports.missionFileManager, exports.teacherFileManager, exports.studentsFileManager);
let selectedMission;
schoolLabenu.missionsList.map((mission) => {
    if (mission.id === Number(argumentOne)) {
        selectedMission = mission;
    }
});
console.log(actionType);
switch (actionType) {
    case 'CREATE_TEACHER':
        if (argumentOne && argumentTwo && argumentThree && argumentFour) {
            schoolLabenu.createTeacher(argumentOne, argumentTwo, moment(argumentThree, 'DD/MM/YYYY'), argumentFour);
        }
        else {
            console.log("\x1b[31m", "Faltou alguma informação!");
        }
        break;
    case 'CREATE_STUDENT':
        if (argumentOne && argumentTwo && argumentThree && argumentFour) {
            schoolLabenu.createStudent(argumentOne, argumentTwo, moment(argumentThree, 'DD/MM/YYYY'), argumentFour);
        }
        else {
            console.log("\x1b[31m", "Faltou alguma informação!");
        }
        break;
    case 'CREATE_MISSION':
        if (argumentOne && argumentTwo && argumentThree) {
            schoolLabenu.createMission(argumentOne, argumentTwo, argumentThree, Number(argumentFour));
        }
        else {
            console.log("\x1b[31m", "Faltou alguma informação!");
        }
        break;
    case 'STUDENT_TO_MISSION':
        if (argumentOne && argumentTwo) {
            let selectedStudent;
            schoolLabenu.studentsList.forEach((student) => {
                if (student.id === Number(argumentTwo)) {
                    selectedStudent = student;
                }
            });
            try {
                selectedMission.missionStudents.push(selectedStudent);
                exports.missionFileManager.writeToFile(schoolLabenu.missionsList);
                console.log("\x1b[32m", `O aluno ${selectedStudent.name} foi adicionado à turma ${selectedMission.name}`);
            }
            catch (error) {
                console.error(error);
            }
        }
        else {
            console.log("\x1b[31m", "Faltou alguma informação!");
        }
        break;
    case 'TEACHER_TO_MISSION': {
        if (argumentOne && argumentTwo) {
            let selectedTeacher;
            schoolLabenu.teachersList.map((teacher) => {
                if (teacher.id === Number(argumentTwo)) {
                    selectedTeacher = teacher;
                }
            });
            try {
                selectedMission.missionTeachers.push(selectedTeacher);
                exports.missionFileManager.writeToFile(schoolLabenu.missionsList);
                console.log("\x1b[32m", `O professor ${selectedTeacher.name} foi adicionado à turma ${selectedMission.name}`);
            }
            catch (error) {
                console.error(error);
            }
        }
        else {
            console.log("\x1b[31m", "Faltou alguma informação!");
        }
        break;
    }
    case 'STUDENT_AGE': {
        let selectedStudent;
        schoolLabenu.studentsList.forEach((student) => {
            if (student.id === Number(argumentOne)) {
                selectedStudent = student;
            }
        });
        const thisStudent = new Student_1.Student(selectedStudent.name, selectedStudent.email, selectedStudent.birthDay, selectedStudent.hobbies);
        try {
            console.log("\x1b[34m", `O estudante ${thisStudent.name} tem ${thisStudent.getAge()} anos de idade`);
        }
        catch (error) {
            console.error(error);
        }
        break;
    }
    case 'GET_STUDENTS': {
        schoolLabenu.studentsList.forEach((student) => {
            console.log(student);
        });
        break;
    }
    case 'GET_TEACHERS': {
        schoolLabenu.teachersList.forEach((teacher) => {
            console.log(teacher);
        });
        break;
    }
    default:
        console.log('Ação não encontrada!');
        break;
}
//# sourceMappingURL=mainTaskManager.js.map