const dotenv = require("dotenv")
if(process.env.NODE_ENV === 'development'){
  dotenv.config()
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const connection = process.env === 'production' 
  ? process.env.DATABASE_URL
  : {
      user: process.env.DB_USER,
      port: process.env.DB_PORT,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD
    }
   

const knex = require("knex")({
  client: process.env.DB_CLIENT,
  connection 
});

rl.question("Write a name for the migration: ", answer => {
  knex.migrate
    .make(answer, { directory: "./server/migrations", extension: "ts" })
    .then(v => rl.close());
});
