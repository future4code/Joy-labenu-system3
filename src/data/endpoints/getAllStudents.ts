import { Request, Response } from "express";
import { studentDatabase } from "../queries/studentDatabase";
import moment from 'moment';
import { Student } from "../../classes/Student";

export const getAllStudents = async (req: Request, res: Response): Promise <any> => {
    try {
       const studentDB = new studentDatabase();
       const result = await studentDB.getAllStudent();

       let formattedDate = (moment(result[0].birth_date)).format('DD/MM/YYYY')
       result[0].birth_date = formattedDate

      //  result.forEach(element: Array<Student => {
      //     element.birth_date =  moment(result[0].birth_date).format('DD/MM/YYYY')
      //  })

       res.send(result);
    } catch (error: any) {
       throw new Error(error.sqlMessage || error.message);
    }

 };