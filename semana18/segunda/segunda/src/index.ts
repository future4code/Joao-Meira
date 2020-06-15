import { app } from './connection/server'
import { createUserEndingPoint } from './Requisitions/createUser'
import { getUserByEmailEndingPoint } from './Requisitions/getUserByEmail'
import { loginEndingPoint } from './Requisitions/login'
import { getUserProfileEndingPoint } from './Requisitions/getUserProfile'


app.post("/signup", createUserEndingPoint)

app.get("/user/search", getUserByEmailEndingPoint)

app.post("/login", loginEndingPoint)

app.get("/user/profile", getUserProfileEndingPoint)