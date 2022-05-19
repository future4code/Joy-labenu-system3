import { Request, Response } from "express";
import { v4 as uuid } from "uuid";
import { Class } from "../../classes/Class";
import { classDatabase } from "../queries/classDatabase";

export const createClass = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = uuid();
    const { name, instructor, student, module } = req.body; // desestruturação
    const classes = new Class(id, name, instructor, student, module);
    const db = new classDatabase();
    await db.createClass(classes);
    res.status(201).send("Success creating class!");
  } catch (error: any) {
    throw new Error(error.sqlMessage || error.message);
  }
};
