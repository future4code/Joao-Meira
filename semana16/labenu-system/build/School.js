"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.School = void 0;
const Student_1 = require("./Student");
const Teacher_1 = require("./Teacher");
const FullTimeMission_1 = require("./FullTimeMission");
const NightMission_1 = require("./NightMission");
const moment = require('moment');
class School {
    constructor(missionsFileManager, teachersFileManager, studentsFileManager) {
        this.missionsFileManager = missionsFileManager;
        this.teachersFileManager = teachersFileManager;
        this.studentsFileManager = studentsFileManager;
        this.teachersList = this.teachersFileManager
            .getFromFile();
        this.studentsList = this.studentsFileManager
            .getFromFile();
        this.missionsList = this.missionsFileManager
            .getFromFile();
        this.missionsFileManager;
        this.teachersFileManager;
        this.studentsFileManager;
    }
    createTeacher(name, email, birthDay, specialization) {
        const newTeacher = new Teacher_1.Teacher(name, email, moment(birthDay).format('DD/MM/YYYY'), specialization);
        try {
            this.teachersList.push(newTeacher);
            this.teachersFileManager.writeToFile(this.teachersList);
            return console.log("\x1b[32m", "Professor cadastrado com sucesso!");
        }
        catch (error) {
            console.error(error);
        }
    }
    createStudent(name, email, birthDay, hobbies) {
        const newStudent = new Student_1.Student(name, email, moment(birthDay).format('DD/MM/YYYY'), hobbies);
        try {
            this.studentsList.push(newStudent);
            this.studentsFileManager.writeToFile(this.studentsList);
            return console.log("\x1b[32m", "Estudante cadastrado com sucesso!");
        }
        catch (error) {
            console.error(error);
        }
    }
    createMission(name, beggining, ending, module) {
        if (name.indexOf("-na-night") !== -1) {
            const newMission = new NightMission_1.NightMission(name, beggining, ending, module);
            try {
                this.missionsList.push(newMission);
                this.missionsFileManager.writeToFile(this.missionsList);
                return console.log("\x1b[32m", "Missão noturna cadastrada com sucesso!");
            }
            catch (error) {
                console.error(error);
            }
        }
        else {
            const newMission = new FullTimeMission_1.FullTimeMission(name, beggining, ending, module);
            try {
                this.missionsList.push(newMission);
                this.missionsFileManager.writeToFile(this.missionsList);
                return console.log("\x1b[32m", "Missão integral cadastrada com sucesso!");
            }
            catch (error) {
                console.error(error);
            }
        }
    }
}
exports.School = School;
//# sourceMappingURL=School.js.map