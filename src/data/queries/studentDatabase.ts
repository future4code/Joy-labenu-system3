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

  public getAllStudent = async () =>{
    try{
      return await this.connection('labenusystem_student');
    }catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
   }
  }

  public getStudentByName = async (name: string) =>{
    try{
      const result = await this.connection("labenusystem_student").select().where("labenusystem_student.name", "like", `%${name}%`);
      return (result);
    }catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
   }
  }
}
