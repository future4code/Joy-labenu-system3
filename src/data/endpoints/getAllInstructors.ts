import { Request, Response } from "express";
import { instructorDatabase } from "../queries/instructorDatabase";


export const getAllInstructors = async (req: Request, res: Response): Promise <void> => {
    try {
       const instructorDB = new instructorDatabase();
       const result = await instructorDB.getAllInstructors();
       res.send(result);
    } catch (error: any) {
       throw new Error(error.sqlMessage || error.message);
    }
 };