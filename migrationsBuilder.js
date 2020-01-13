const connection = require('./prod_db')

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


  const knex = require("knex")({
  client: connection.client,
  connection 
});

rl.question("Write a name for the migration: ", answer => {
  knex.migrate
    .make(answer, { directory: "./server/migrations", extension: "ts" })
    .then(v => rl.close());
});
