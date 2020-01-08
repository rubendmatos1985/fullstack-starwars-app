const dotenv = require('dotenv');
dotenv.config();

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

knex.seed.make(process.argv[2], { extension: 'ts', directory: './server/seeds' })




