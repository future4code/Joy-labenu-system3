import { Instructor } from "../../classes/Instructor";
import { connection } from "../connection";

export class instructorDatabase {
  private connection = connection;

  public createInstructor = async (instructor: Instructor): Promise<void> => {
    try {
      await this.connection("labenusystem_instructor").insert(instructor);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}
