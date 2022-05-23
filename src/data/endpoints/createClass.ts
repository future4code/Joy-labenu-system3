import { Request, Response } from "express";
import { v4 as uuid } from "uuid";
import { classDatabase } from "../queries/classDatabase";

export const createClass = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = uuid();
    const { name, module } = req.body; // desestruturação
    const db = new classDatabase();
    await db.createClass(id, name, module);
    res.status(201).send("Success creating class!");
  } catch (error: any) {
    throw new Error(error.sqlMessage || error.message);
  }
};
