// Update with your config settings.
const s = require("./settings.js");
module.exports = {

  development: {
    client: 'pg',
    connection: {
      user: s.user,
      host: 'localhost',
      database: 'starwars',
      password: s.password
    }
  }
};