import { Request, Response } from "express";
import { classDatabase } from "../queries/classDatabase";

export const changeClassByModule = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 500
    try {

        const { id, module } = req.body

        if (!id && !module) {
            errorCode = 422
            throw new Error("One or more fields are empty")
        }

        const classDB = new classDatabase
        const result = await classDB.changeClassByModule(id, module)
        res.status(200).send("Module updated successfully!")

    } catch (error: any) {
        res.status(errorCode).send(error.sqlMessage || error.message);
    }
}