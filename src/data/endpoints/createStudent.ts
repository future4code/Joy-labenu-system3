import { Request, Response } from "express";
import { v4 as generateId } from "uuid";
import { studentDatabase } from "../queries/studentDatabase";

export const createStudent = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 500
        try {
            const classID = req.body.class_id
            const studentID = generateId()
            const id = studentID
            const birth_date = req.body.birthDate.split("/").reverse().join("-");
            const { name , email , id_class } = req.body
    
            if (!name && !email && !birth_date && !id_class) {
                errorCode = 422
                throw new Error("One or more fields are empty")
            }
    
            const studentDB = new studentDatabase 
            await studentDB.createStudent(id, name, email, birth_date, id_class)
    
            res.status(200).send("Student sucessfully created!")
        } catch (error: any) {
            res.status(errorCode).send(error.sqlMessage || error.message);
        }
    }
    