"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentsFileManager = exports.teacherFileManager = exports.missionFileManager = void 0;
const JSONFileManager_1 = require("./JSONFileManager");
const School_1 = require("./School");
const moment = require('moment');
exports.missionFileManager = new JSONFileManager_1.JSONFileManager('mission.json');
exports.teacherFileManager = new JSONFileManager_1.JSONFileManager('teacher.json');
exports.studentsFileManager = new JSONFileManager_1.JSONFileManager('student.json');
const schoolLabenu = new School_1.School(exports.missionFileManager, exports.teacherFileManager, exports.studentsFileManager);
const actionType = process.argv[2];
console.log(actionType);
switch (actionType) {
    case 'CREATE_TEACHER':
        schoolLabenu.createTeacher(process.argv[3], process.argv[4], moment(process.argv[5], 'DD/MM/YYYY'), process.argv[6]);
        break;
    case 'CREATE_STUDENT':
        schoolLabenu.createStudent(process.argv[3], process.argv[4], moment(process.argv[5], 'DD/MM/YYYY'), process.argv[6]);
        break;
    case 'CREATE_MISSION':
        schoolLabenu.createMission(process.argv[3], process.argv[4], process.argv[5], Number(process.argv[6]));
        break;
    default:
        console.log('Ação não encontrada!');
        break;
}
//# sourceMappingURL=mainTaskManager.js.map