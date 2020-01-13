const connection = require('./prod_db')

const knex = require("knex")({
  client: connection.client,
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
