import { Request, Response } from "express";
import { studentDatabase } from "../queries/studentDatabase";


export const getAllStudents = async (req: Request, res: Response): Promise <void> => {
    try {
       const studentDB = new studentDatabase();
       const result = await studentDB.getAllStudent();
       res.send(result);
    } catch (error: any) {
       throw new Error(error.sqlMessage || error.message);
    }
 };