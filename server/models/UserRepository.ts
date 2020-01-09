import { getByIdQuery } from "../DB/getById"
import { EntityTable } from "../types/Tables"
import { IUserEntity, UserFields } from "./User"
import { getByField as _getByField } from '../DB/getByField';
import { knex, IDBResponse } from "../DB/index";
import { Status } from "../middlewares/helpers";
import { UserContext } from "../DB/UserContext";

export default (() => {
  let state = {
    users: {}
  }
  const { get, update, create } = UserContext

  return {
    getById: get('id') as (v?: string) => Promise<IDBResponse<IUserEntity[]>>,

    getByName: get('name') as (v?: string) => Promise<IDBResponse<IUserEntity[]>>,

    getByEmail: get('email') as (v?: string) => Promise<IDBResponse<IUserEntity[]>>,

    updateUserLastConexion: (apiKey) => (
      !state.users[apiKey] &&
      update({ identifierKey: 'apiKey', identifierValue: apiKey, fieldKey: 'last_conexion', fieldValue: new Date() })
        .then(v => { state.users[apiKey] = true })
        .catch(e => { console.log(e) })
        .finally(() => ({ status: Status.Error, message: "error" }))
    ),

    getByApiKey: get('api_key') as (k: string)=> Promise<IDBResponse<IUserEntity[]>>,

    getByPassword: get('password'),

    updateUserData: (data: IUserEntity) => update(data),

    create
  }
})()