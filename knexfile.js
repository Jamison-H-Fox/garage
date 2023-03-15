const common = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: { directory: './backend/data/migrations' },
  seeds: { directory: './backend/data/seeds' },
}

module.exports = {

  development: {
    ...common,
    connection: {
      filename: './backend/data/wishlist.db3'
    }
  },
};