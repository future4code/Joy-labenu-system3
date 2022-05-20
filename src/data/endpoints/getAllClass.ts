import { Request, Response } from "express";
import { classDatabase } from "../queries/classDatabase";


export const getAllClass = async (req: Request, res: Response): Promise <void> => {
    try {
       const classDB = new classDatabase();
       const result = await classDB.getAllClass();
       res.send(result);
    } catch (error: any) {
       throw new Error(error.sqlMessage || error.message);
    }
 };