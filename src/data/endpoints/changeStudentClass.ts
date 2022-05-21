import { Request, Response } from "express";
import { studentDatabase } from "../queries/studentDatabase";

export const changeStudentClass = async (req: Request, res: Response): Promise<void> => {
let errorCode = 500
    try {
        const { id, id_class } = req.body

        if (!id && !id_class) {
            errorCode = 422
            throw new Error("One or more fields are empty")
        }

        const studentDB = new studentDatabase
        await studentDB.changeStudentClass(id, id_class)

        res.status(200).send("Student class updated successfully!")
    } catch (error: any) {
        res.status(errorCode).send(error.sqlMessage || error.message);
    }
}
