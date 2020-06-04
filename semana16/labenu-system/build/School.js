"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.School = void 0;
const Student_1 = require("./Student");
const Teacher_1 = require("./Teacher");
const FullTimeMission_1 = require("./FullTimeMission");
const moment = require('moment');
class School {
    constructor(missionsFileManager, teachersFileManager, studentsFileManager) {
        this.missionsFileManager = missionsFileManager;
        this.teachersFileManager = teachersFileManager;
        this.studentsFileManager = studentsFileManager;
        this.missionsFileManager;
        this.teachersFileManager;
        this.studentsFileManager;
    }
    createTeacher(name, email, birthDay, specialization) {
        const teachersList = this.teachersFileManager.getFromFile();
        const newTeacher = new Teacher_1.Teacher(name, email, moment(birthDay).format('DD/MM/YYYY'), specialization);
        try {
            teachersList.push(newTeacher);
            this.teachersFileManager.writeToFile(teachersList);
            return console.log("\x1b[32m", "Professor cadastrado com sucesso!");
        }
        catch (error) {
            console.error(error);
        }
    }
    createStudent(name, email, birthDay, hobbies) {
        const studentsList = this.studentsFileManager.getFromFile();
        const newStudent = new Student_1.Student(name, email, moment(birthDay).format('DD/MM/YYYY'), hobbies);
        try {
            studentsList.push(newStudent);
            this.studentsFileManager.writeToFile(studentsList);
            return console.log("\x1b[32m", "Estudante cadastrado com sucesso!");
        }
        catch (error) {
            console.error(error);
        }
    }
    createMission(name, beggining, ending, module) {
        const missionsList = this.missionsFileManager.getFromFile();
        const newMission = new FullTimeMission_1.FullTimeMission(name, beggining, ending, module);
        try {
            missionsList.push(newMission);
            this.missionsFileManager.writeToFile(missionsList);
            return console.log("\x1b[32m", "Estudante cadastrado com sucesso!");
        }
        catch (error) {
            console.error(error);
        }
    }
}
exports.School = School;
//# sourceMappingURL=School.js.map