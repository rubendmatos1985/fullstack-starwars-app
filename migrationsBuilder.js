const dotenv = require("dotenv").config();
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });


const knex = require("knex")({
    client: process.env.DB_CLIENT,
    connection: {
        user: process.env.DB_USER,
        port: process.env.DB_PORT,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
    }

})

rl.question("Write a name for the migration: ", (answer)=>{
    knex.migrate
        .make(answer, { directory: "./server/migrations", extension: "ts" })
        .then(v => rl.close())
    
})
