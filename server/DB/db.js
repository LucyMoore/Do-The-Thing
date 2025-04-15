import knex from 'knex'
import config from '../../knexfile.js'

const environment = process.env.NODE_ENV || 'development' // Default to development
const db = knex(config[environment])

export default db
