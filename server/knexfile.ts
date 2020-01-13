import connection from '../prod_db.js';
/* const {
  DB_CLIENT,
  DB_USER,
  DB_PORT,
  DB_HOST,
  DB_NAME,
  DB_PASSWORD
} = process.env
 */
/* const connection =  {
    user: DB_USER,
    port: DB_PORT,
    host: DB_HOST,
    database: DB_NAME,
    password: DB_PASSWORD,
    
  } */

module.exports = {
  client: 'pg',
  connection 
};
