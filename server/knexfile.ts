const s = require("./settings.js");
module.exports = {

    client: 'pg',
    connection: {
      user: s.user,
      host: s.host,
      database: 'starwars',
      password: s.password,
      ssl: true
 
  }
};
