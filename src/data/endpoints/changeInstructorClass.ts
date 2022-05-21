import { Request, Response } from "express";
import { instructorDatabase } from "../queries/instructorDatabase";

export const changeInstructorClass = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 500
    try {
        const { id, id_class } = req.body

        if(!id && !id_class){
            errorCode = 422
            throw new Error("One or more fields are empty")
        }

        const instructorDB = new instructorDatabase
        await instructorDB.changeInstructorClass(id, id_class)

        res.status(200).send("Instructor class updated successfully!")

    } catch (error:any) {
        res.status(errorCode).send(error.sqlMessage || error.message);
    }
}