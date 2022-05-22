import { Request, Response } from "express";
import { studentDatabase } from "../queries/studentDatabase";
import moment from 'moment';

export const getStudentByName = async (req: Request, res: Response) : Promise<void> => {
try {
    let name = req.query.name as string;

    if (!name){
        name='%'
    }
    const studentByName = new studentDatabase();
    const result = await studentByName.getStudentByName(name);

    let formattedDate = (moment(result[0].birth_date)).format('DD/MM/YYYY')
    result[0].birth_date = formattedDate

    res.send(result);
} catch (error: any) {
    throw new Error(error.sqlMessage || error.message);
}
}

