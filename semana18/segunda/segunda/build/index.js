"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./connection/server");
const createUser_1 = require("./Requisitions/createUser");
const getUserByEmail_1 = require("./Requisitions/getUserByEmail");
const login_1 = require("./Requisitions/login");
server_1.app.post("/signup", createUser_1.createUserEndingPoint);
server_1.app.get("/user/search", getUserByEmail_1.getUserByEmailEndingPoint);
server_1.app.post("/login", login_1.loginEndingPoint);
