import { Hobby } from "./Hobby"

export class Student {
    id: string
    name: string
    email: string
    birth_date: string
    id_class: string
    hobbies: Hobby[]

    constructor(id: string, name: string, email: string, birth_date: string, id_class: string, hobbies: Hobby[]){
        this.id = id
        this.name = name
        this.email = email
        this.birth_date = birth_date
        this.id_class = id_class
        this.hobbies = hobbies
    }
}