const {
  DB_CLIENT,
  DB_USER,
  DB_PORT,
  DB_HOST,
  DB_NAME,
  DB_PASSWORD
} = process.env;

module.exports = {
  test: {
    client: 'pg',
    connection: {
      user: DB_USER,
      port: DB_PORT,
      host: DB_HOST,
      database: DB_NAME,
      password: DB_PASSWORD
    }
  },
  development: {
    client: 'pg',
    connection: {
      user: DB_USER,
      port: DB_PORT,
      host: DB_HOST,
      database: DB_NAME,
      password: DB_PASSWORD
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
};
