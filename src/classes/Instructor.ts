import { Specialty } from "./Specialty"

export class Instructor {
    id: string
    name:string
    email: string
    birth_date: string
    id_class: string
    specialties: Specialty[]

    constructor(id: string, name: string, email: string, birth_date: string, id_class: string, specialties: Specialty[]){
        this.id = id
        this.name = name
        this.email = email
        this.birth_date = birth_date
        this.id_class = id_class
        this.specialties = specialties
    }
}