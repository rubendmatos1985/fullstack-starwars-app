const readline = require("readline");
const connection = require('./prod_db.js')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const knex = require("knex")({
  client: connection.client,
  connection
});

rl.question("Write the name of the seed file: ", answer => {
  knex.seed
    .make(answer, { extension: "ts", directory: "./server/seeds" })
    .then(v => rl.close());
});
