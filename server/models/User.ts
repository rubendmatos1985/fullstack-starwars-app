import { getByIdQuery } from "../DB/getById"
import { EntityTable } from "../types/Tables"
import { IUserEntity } from "../types/interfaces/User"
import { getByField as _getByField } from '../DB/getByField';
import { knex } from "../DB/index";
import uuid from "uuid/v1";



export default (() => {
  const getById = getByIdQuery<EntityTable.User, IUserEntity>(EntityTable.User)
  const addUser = ({ name, email, password }) =>
    knex(EntityTable.User)
      .returning(['id', 'name', 'email'])
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
  return {
    getById,
    getByField: _getByField(EntityTable.User),
    add: addUser
  }
})()