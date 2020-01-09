const dotenv = require('dotenv');
const readline = require('readline')
dotenv.config();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });


const knex = require('knex')({
    client: process.env.DB_CLIENT,
    connection: {
        user: process.env.DB_USER,
        port: process.env.DB_PORT,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
    }
})

rl.question('Write the name of the seed file: ', (answer)=>{
    knex.seed
        .make(answer, { extension: 'ts', directory: './server/seeds' })
        .then(v => rl.close())
  
})





