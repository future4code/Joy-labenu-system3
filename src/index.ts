import app from "./app";
import { changeClassByModule } from "./data/endpoints/changeClassByModule";
import { changeInstructorClass } from "./data/endpoints/changeInstructorClass";
import { changeStudentClass } from "./data/endpoints/changeStudentClass";
import { createClass } from "./data/endpoints/createClass";
import { getAllClass } from "./data/endpoints/getAllClass";
import { getAllInstructors } from "./data/endpoints/getAllInstructors";
import { createStudent } from "./data/endpoints/createStudent";
import { createInstructor } from "./data/endpoints/createInstructor";
import { getAllStudents } from "./data/endpoints/getAllStudents";
import { getStudentByName } from "./data/endpoints/getStudentByName";


//Endpoint used to create new classes
app.post('/class', createClass)

//Endpoint used to create new students
app.post('/student', createStudent)

//Endpoint used to create new instructors
app.post('/instructor', createInstructor)

//Endpoint used to get all classes
app.get('/class/active', getAllClass)

//Endpoint used to get all student
app.get('/student/all', getAllStudents)

//Endpoint used to get student by name
app.get('/student', getStudentByName)

//Endpoint used to get all instructors
app.get('/instructors/all', getAllInstructors)

//Endpoint used to update class module
app.put('/class/module', changeClassByModule)

//Endpoint used to update instructor class
app.put('/instructor/class', changeInstructorClass)

//Endpoint used to update student class
app.put('/student/class', changeStudentClass)