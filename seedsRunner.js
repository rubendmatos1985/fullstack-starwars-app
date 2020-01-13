const connection = require('./prod_db')
const knex = require("knex")({
  client: connection.client,
  connection
});

knex.seed.run({
  extension: "ts",
  directory: "./dist/server/seeds",
  specific: process.argv[2]
});
