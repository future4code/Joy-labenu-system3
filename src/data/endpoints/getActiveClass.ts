import { Request, Response } from "express";
import { classDatabase } from "../queries/classDatabase";


export const getActiveClasses = async (req: Request, res: Response): Promise <void> => {
    try {
       const classDB = new classDatabase();
       const result = await classDB.getAllClass();

       let activeClasses = result.filter((element: any) => Number(element.module) > 0)

       res.send(activeClasses);
    } catch (error: any) {
       throw new Error(error.sqlMessage || error.message);
    }
 };