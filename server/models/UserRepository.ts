
import { IUserEntity, UserFields } from "./User"
import { knex, IDBResponse } from "../DB/index";
import { Status } from "../middlewares/helpers";
import { UserContext } from "../DB/UserContext";
import uuid                       = require("uuid");

export default (() => {
  const { Get, Update, Create } = UserContext;

  return {
    GetById: Get("id") as (v: string) => Promise<IDBResponse<IUserEntity[]>>,
    GetByName: Get("name") as (
      v: string
    ) => Promise<IDBResponse<IUserEntity[]>>,
    GetByEmail: Get("email") as (
      v: string
    ) => Promise<IDBResponse<IUserEntity[]>>,
    GetByApiKey: Get("api_key") as (
      k: string
    ) => Promise<IDBResponse<IUserEntity[]>>,
    GetByPassword: Get("password"),
    UpdateUserLastConexion: apiKey =>
      Update({
        identifierKey: "api_key",
        identifierValue: apiKey,
        fieldKey: "last_conexion",
        fieldValue: new Date()
      })
        .then(v => v)
        .catch(e => {
          console.log(e);
        })
        .finally(() => ({ status: Status.Error, message: "error" })),
    UpdateUserData: (data: IUserEntity) => Update(data),
    ChangeApiKey: (oldApiKey: string) =>
      Update({
        identifierKey: "api_key",
        identifierValue: oldApiKey,
        fieldKey: "api_key",
        newValue: uuid()
      }),
    Create
  };
})();


    


    
    