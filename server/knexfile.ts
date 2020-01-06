module.exports = {

    client: process.env.DB_CLIENT,
    connection: {
      user: process.env.DB_USER,
      port: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
 
  }
};
