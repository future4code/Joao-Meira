"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mission = void 0;
class Mission {
    constructor(name, beggining, ending, module = undefined) {
        this.name = name;
        this.beggining = beggining;
        this.ending = ending;
        this.module = module;
        this.id = Date.now();
        this.missionStudents = [];
        this.missionTeachers = [];
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getBeggining() {
        return this.beggining;
    }
    getEnding() {
        return this.ending;
    }
    getModule() {
        return this.module;
    }
    setName(name) {
        this.name = name;
    }
}
exports.Mission = Mission;
//# sourceMappingURL=Mission.js.map