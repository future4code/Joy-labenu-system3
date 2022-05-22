import { Student } from "../../classes/Student";
import { connection } from "../connection";

export class studentDatabase {
  private connection = connection;

  public createStudent = async ( id: string, name: string , email: string , birth_date: string, id_class: string): Promise<any> => {
    try {
      await this.connection("labenusystem_student").insert( {id: id, name: name, email: email , birth_date: birth_date, id_class: id_class} );
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

  public getAllStudent = async (): Promise<any> => {
    try {
      return await this.connection('labenusystem_student');
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public getStudentByName = async (name: string): Promise<any> => {
    try {
      const result = await this.connection("labenusystem_student").select().where("labenusystem_student.name", "like", `%${name}%`);
      return (result);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public changeStudentClass = async (id: string, id_class: string): Promise<void> => {
    try {
      await this.connection("labenusystem_student")
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
