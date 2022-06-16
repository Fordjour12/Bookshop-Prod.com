import 'dotenv/config'
// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export const development = {
	debug: true,
	client: 'postgresql',
	connection: {
		database: process.env.Postgres_DB,
		user: process.env.Postgres_USER,
		password: process.env.Postgres_PASSWORD,
	},
	pool: {
		min: 2,
		max: 10,
	},
	migrations: {
		tableName: 'knex_migrations',
		directory: './db/migrations',
	},
	seeds: {
		directory: './db/seeds',
	},
}
export const staging = {
	client: 'postgresql',
	connection: {
		database: 'my_db',
		user: 'username',
		password: 'password',
	},
	pool: {
		min: 2,
		max: 10,
	},
	migrations: {
		tableName: 'knex_migrations',
	},
}
export const production = {
	client: 'postgresql',
	connection: {
		database: 'my_db',
		user: 'username',
		password: 'password',
	},
	pool: {
		min: 2,
		max: 10,
	},
	migrations: {
		tableName: 'knex_migrations',
	},
}
