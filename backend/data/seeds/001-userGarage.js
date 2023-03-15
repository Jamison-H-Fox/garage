const users = [
  {
    username: 'jamison',
    password: '1234'
  },
]

exports.seed = async function(knex) {
  return knex('users')
    .truncate()
    .then(() => {
      return knex('users').insert(users)
    })
};