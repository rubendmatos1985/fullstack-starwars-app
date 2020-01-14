import { Config } from "knex";

const {
  DB_CLIENT,
  DB_USER,
  DB_PORT,
  DB_HOST,
  DB_NAME,
  DB_PASSWORD
} = process.env;

const connection = process.env.NODE_ENV === 'development' || 'test'
? {
  user: DB_USER,
  port: DB_PORT,
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PASSWORD
}
: process.env.DATABASE_URL + '?ssl=true'

export const config:Config = {
  client: 'pg',
  connection,
}