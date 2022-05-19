import { Class } from "../../classes/Class";
import { connection } from "../connection";

export class classDatabase {
  private connection = connection;

  public createClass = async (classes: Class): Promise<void> => {
    try {
      await this.connection("labenusystem_class").insert(classes);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}
