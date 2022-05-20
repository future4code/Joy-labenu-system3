import { Request, Response } from "express";
import { studentDatabase } from "../queries/studentDatabase";

export const getStudentByName = async (req: Request, res: Response) : Promise<void> => {
try {
    let name = req.query.name as string;
    console.log(name)

    if (!name){
        name='%'
    }
    const studentByName = new studentDatabase();
    const result = await studentByName.getStudentByName(name);
    res.send(result);
} catch (error: any) {
    throw new Error(error.sqlMessage || error.message);
}
}

