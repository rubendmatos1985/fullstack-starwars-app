import { getByIdQuery } from "../DB/getById"
import { EntityTable } from "../types/Tables"
import { IUserEntity } from "../types/interfaces/User"
import { getByField as _getByField } from '../DB/getByField';
import { knex } from "../DB/index";
import uuid from "uuid/v1";



export default (() => {
  const getById = getByIdQuery<EntityTable.User, IUserEntity>(EntityTable.User)
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
      .catch(e => { console.log(e); return {}})
    
  return {
    getById,
    getByField: _getByField(EntityTable.User),
    create
  }
})()