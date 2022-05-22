import { Instructor } from "../../classes/Instructor";
import { connection } from "../connection";

export class instructorDatabase {
  private connection = connection;

  public createInstructor = async (id: string, name: string , email: string , birth_date: string, id_class: string): Promise<void> => {
    try {
      await this.connection("labenusystem_instructor").insert({id: id, name: name, email: email , birth_date: birth_date, id_class: id_class});
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

  public getAllInstructors = async (): Promise<any> => {
    try {
      return await this.connection('labenusystem_instructor');
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public changeInstructorClass = async (id: string, id_class: string): Promise<void> => {
    try {
      await this.connection("labenusystem_instructor")
        .update({
          id_class: id_class
        }).where({
          id: id
        })

    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}

