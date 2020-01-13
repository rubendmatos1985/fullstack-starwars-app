const dotenv = require("dotenv");

if(process.env.NODE_ENV === 'development'){
  dotenv.config()
}

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
  connection,
});

switch (process.argv[2]) {
  case "latest": {
    knex.migrate
      .latest({ directory: "./dist/server/migrations" })
      .then(v => v)
      .catch(e => e);
    return;
  }
  default:
    break;
}
