// knexfile.js (ES Module format)
export default {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './db/migrations', // Directory for migration files
    },
    seeds: {
      directory: './db/seeds', // Directory for seed files
    },
  },
  // Add staging and production environments as needed
}
