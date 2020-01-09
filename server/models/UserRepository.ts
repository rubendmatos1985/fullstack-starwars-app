
import { IUserEntity, UserFields } from "./User"
import { knex, IDBResponse } from "../DB/index";
import { Status } from "../middlewares/helpers";
import { UserContext } from "../DB/UserContext";
import uuid = require("uuid");

export default (() => {
  const { get, update, create } = UserContext

  return {
    getById: get('id') as (v: string) => Promise<IDBResponse<IUserEntity[]>>,

    getByName: get('name') as (v: string) => Promise<IDBResponse<IUserEntity[]>>,

    getByEmail: get('email') as (v: string) => Promise<IDBResponse<IUserEntity[]>>,
    
    getByApiKey: get('api_key') as (k: string)=> Promise<IDBResponse<IUserEntity[]>>,
    
    getByPassword: get('password'),
    
    updateUserLastConexion: (apiKey) => (
      update({ identifierKey: 'api_key', identifierValue: apiKey, fieldKey: 'last_conexion', fieldValue: new Date() })
        .then(v => v)
        .catch(e => { console.log(e) })
        .finally(() => ({ status: Status.Error, message: "error" }))
    ),

    updateUserData: (data: IUserEntity) => update(data),

    changeApiKey: (oldApiKey: string)=> 
      update({ 
        identifierKey:'api_key', 
        identifierValue: oldApiKey,
        fieldKey: 'api_key',
        newValue: uuid() 
      }),
      create

  }
})()