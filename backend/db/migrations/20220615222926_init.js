/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
	return knex.schema.createTable('Person', (table) => {
		table.increments('id')
		table.string('name', 100).notNullable()
		table.string('email').notNullable().unique()
		table.timestamp('created_at').defaultTo(knex.fn.now())
	})
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
	return knex.schema.dropTableIfExists('Person')
}
