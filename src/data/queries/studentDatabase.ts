import { Student } from "../../classes/Student";
import { connection } from "../connection";

export class studentDatabase {
  private connection = connection;

  public createStudent = async (student: Student): Promise<void> => {
    try {
      await this.connection("labenusystem_student").insert(student);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}
