import { IDBContext, knex, IDBResponse } from ".";
import { IUserEntity } from "../models/User";
import { EntityTable } from "../types/Tables";
import uuid = require("uuid");
import { Status } from "../middlewares/helpers";

export interface ICreateUserArguments {
  name: string,
  email: string,
  password: string
}

export interface IUpdateUserArguments {
  identifierKey: string
  identifierValue: string
  fieldKey: string
  newValue: string
}


export const UserContext: IDBContext<IUserEntity> =
  ({
    get: (field: string) =>
      function (value: string) {
        const k = field && value
          ? knex.where(field, value)
          : knex
        return k
          .select('*')
          .from('user')
          .then((r: IUserEntity[]) => r[0]
            ? ({ status: Status.Successfull, message: r })
            : ({ status: Status.Error, message: Error("user do not exists") })
          )
          .catch(e => ({ status: Status.Error, message: e }))
      },
    create: ({ name, email, password }: ICreateUserArguments) =>
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
        .then((r) => ({ status: Status.Successfull, message: r }))
        .catch((e) => ({ status: Status.Error, message: e })),

    update: (data: IUpdateUserArguments | IUserEntity) => {
      if (Object.keys(data).some(k => k === 'identifierKey')) {
        const { identifierKey, identifierValue, fieldKey, newValue } = data as IUpdateUserArguments
        return knex('user')
          .update({ [fieldKey]: newValue }, ['name', 'email', 'api_key'])
          .where({ [identifierKey]: identifierValue })
          .then((r) => ({ status: Status.Successfull, message: r }))
          .catch((e) => ({ status: Status.Error, message: e }))

      }
      const d = data as IUserEntity
      return knex('user')
        .update(d)
        .where({ 'api_key': d.api_key })
        .returning(['name', 'email', 'api_key'])
        .then((r) => ({ status: Status.Successfull, message: r }))
        .catch((e) => ({ status: Status.Error, message: e }))
    }


  })