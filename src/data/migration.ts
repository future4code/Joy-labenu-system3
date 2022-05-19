import { connection } from "./connection"
import students from "./populate/student.json";
import instructor from "./populate/instructor.json";
import classes from "./populate/class.json";
import hobby from "./populate/hobby.json";
import specialty from "./populate/specialty.json"


const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createClass = () => connection
  .raw(`

      CREATE TABLE IF NOT EXISTS labenusystem_class (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        module VARCHAR(255) DEFAULT 0
      );
      `)

const createStudent = () => connection
  .raw(`
      CREATE TABLE IF NOT EXISTS labenusystem_student (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        birth_date DATE NOT NULL,
        id_class VARCHAR(255) NOT NULL,
        FOREIGN KEY (id_class) REFERENCES labenusystem_class(id)
      );
      `)

const createInstructor = () => connection
  .raw(`
      CREATE TABLE IF NOT EXISTS labenusystem_instructor (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        birth_date VARCHAR(255) NOT NULL,
        id_class VARCHAR(255) NOT NULL,
        FOREIGN KEY (id_class) REFERENCES labenusystem_class(id)
      );
      `)

const createStudentHobby = () => connection
  .raw(`
      CREATE TABLE IF NOT EXISTS labenusystem_student_hobby (
        id VARCHAR(255) PRIMARY KEY,
        student_id VARCHAR(255) NOT NULL,
        hobby_id VARCHAR(255) NOT NULL,
        FOREIGN KEY (student_id) REFERENCES labenusystem_student(id),
        FOREIGN KEY (hobby_id) REFERENCES labenusystem_hobby(id)
      );
      `)

const createHobby = () => connection
  .raw(`
      CREATE TABLE IF NOT EXISTS labenusystem_hobby (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL UNIQUE
      );
      `)

const createInstructorSpecialty = () => connection
  .raw(`
      CREATE TABLE IF NOT EXISTS labenusystem_instructor_specialty (
        id VARCHAR(255) PRIMARY KEY,
        instructor_id VARCHAR(255) NOT NULL,
        specialty_id VARCHAR(255) NOT NULL,
        FOREIGN KEY (instructor_id) REFERENCES labenusystem_instructor(id),
        FOREIGN KEY (specialty_id) REFERENCES labenusystem_specialty(id)
      );
      `)

const createSpecialty = () => connection
  .raw(`
      CREATE TABLE IF NOT EXISTS labenusystem_specialty (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL UNIQUE
      );
      `)


  .then(() => { console.log("Tabelas criadas") })
  .catch(printError)

const insertStudent = () => connection("labenusystem_student")
  .insert(students)
  .then(() => { console.log("Students created!") })
  .catch(printError)

const insertInstructors = () => connection("labenusystem_instructor")
  .insert(instructor)
  .then(() => { console.log("Instructors created!") })
  .catch(printError)

const insertClasses = () => connection("labenusystem_class")
  .insert(classes)
  .then(() => { console.log("Classes created!") })
  .catch(printError)

const insertHobby = () => connection("labenusystem_hobby")
  .insert(hobby)
  .then(() => { console.log("Hobbies created!") })
  .catch(printError)

const insertSpecialty = () => connection("labenusystem_specialty")
  .insert(specialty)
  .then(() => { console.log("Specialty created!") })
  .catch(printError)

const closeConnection = () => { connection.destroy() }


createClass()
      // .then(createStudent)
      // .then(createInstructor)
      // .then(createSpecialty)
      // .then(createHobby)
      .then(createStudentHobby)
      .then(createInstructorSpecialty)
      // .then(insertClasses)
      // .then(insertStudent)
      // .then(insertInstructors)
      // .then(insertHobby)
      // .then(insertSpecialty)
  .finally(closeConnection) 