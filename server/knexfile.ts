import { Config } from 'knex';
import dotenv from 'dotenv';
dotenv.config();
const { DB_USER, DB_PORT, DB_HOST, DB_NAME, DB_PASSWORD, DATABASE_URL } = process.env;
const connection =
  process.env.NODE_ENV === 'development' || 'test'
    ? {
        user: DB_USER,
        port: DB_PORT,
        host: DB_HOST,
        database: DB_NAME,
        password: DB_PASSWORD
      }
    : DATABASE_URL + '?ssl=true';

export const config: Config = {
  client: 'pg',
  connection
};
