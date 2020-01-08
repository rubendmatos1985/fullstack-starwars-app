import { getByIdQuery } from "../DB/getById"
import { EntityTable } from "../types/Tables"
import { IUserEntity, UserFields } from "./User"
import { getByField as _getByField } from '../DB/getByField';
import { knex, IDBResponse } from "../DB/index";
import uuid from "uuid/v1";
import { Status } from "../middlewares/helpers";

export default (() => {
  let state = {
    users: {}
  }
  const getById = getByIdQuery<EntityTable.User, IUserEntity>(EntityTable.User)

  const updateUserLastConexion = (apiKey) =>
    !state.users[apiKey] &&
    knex(EntityTable.User)
      .update(UserFields.LastConexion, new Date(), [UserFields.Email, UserFields.LastConexion])
      .where({ [UserFields.ApiKey]: apiKey })
      .then(v => { state.users[apiKey] = true })
      .catch( e => { console.log(e) })
      .finally(()=> ({ status: Status.Error, message: "error" }))
  const create = ({ name, email, password }) =>
    knex(EntityTable.User)
      .returning(['id', 'name', 'email', 'api_key'])
      .insert({
        id: uuid(),
        name,
        email,
        password,
        created: new Date(),
        updated: new Date(),
        last_conexion: new Date(),
        api_key: uuid()
      })
      .then(r => r[0])
      .catch(e => { console.log(e) })
      .finally(()=> ({message: "error" }))

  const getByField = (field: UserFields)=>(value: any) => knex<IUserEntity>(EntityTable.User)
    .where(field as any, value)
    .then((v: any[]) => 
    v[0]
      ?  ({ status: Status.Successfull, message: v[0] })
      :   ({ status: Status.Error, message: "error" })
    )
    .catch((e: Error) => { console.log(e) })
    .finally(()=> ({ status: Status.Error, message: "error" }))  
  return {
    getById,
    getByField,
    updateUserLastConexion,
    create
  }
})()