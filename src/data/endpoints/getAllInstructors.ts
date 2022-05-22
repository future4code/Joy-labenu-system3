import { Request, Response } from "express";
import { instructorDatabase } from "../queries/instructorDatabase";
import moment from 'moment';


export const getAllInstructors = async (req: Request, res: Response): Promise<void> => {
   try {
      const instructorDB = new instructorDatabase();
      const result = await instructorDB.getAllInstructors();

      result.forEach((element: any) => {
         element.birth_date = (moment(element.birth_date)).format('DD/MM/YYYY')
      });

      res.send(result);
   } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
   }
};