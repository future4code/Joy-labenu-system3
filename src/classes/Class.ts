import { Instructor } from "./Instructor"
import { Student } from "./Student"

export class Class {
    id: string
    name: string
    instructors: Instructor[]
    students: Student[]
    module: string

constructor(id: string, name: string, module: string, instructors: Instructor[], students: Student[]){
    this.id = id
    this.name = name
    this.instructors = instructors
    this.students = students
    this.module = module
}
}
