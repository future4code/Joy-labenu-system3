import { Class } from "../../classes/Class";
import { connection } from "../connection";

export class classDatabase {
  private connection = connection;

  public createClass = async (id: string, name: string, module: string): Promise<void> => {
    try {
      await this.connection("labenusystem_class").insert({id: id, name: name, module: module});
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

  public getAllClass = async (): Promise<any> => {
    try {
      return await this.connection('labenusystem_class')

    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public changeClassByModule = async (id: string, module: string): Promise<void> => {
    try {
      await this.connection("labenusystem_class")
      .update({
        module: module
      }).where({
        id: id
      })

    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
