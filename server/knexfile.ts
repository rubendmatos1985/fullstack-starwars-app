const {
  DB_CLIENT,
  DB_USER,
  DB_PORT,
  DB_HOST,
  DB_NAME,
  DB_PASSWORD
} = process.env

let connection: object;
if(process.env.NODE_ENV === 'development'){
  connection = {
    user: DB_USER,
    port: DB_PORT,
    host: DB_HOST,
    database: DB_NAME,
    password: DB_PASSWORD,
    
  }
}else{
  connection = { 
    connection: process.env.DATABASE_URL, 
    ssl: true 
  }
}

module.exports = {
  client: 'pg',
  connection 
};
