// import tablesConfig from '../../config/tables.config.js'
// import {
// 	createTableName,
// 	createTableNameInt,
// 	references,
// 	referencesUUID,
// } from '../../config/tableUtil.config.js'

// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
// export async function up(knex) {
// 	await Promise.all([
// 		knex.schema.createTable(tablesConfig.customer, (table) => {
// 			table
// 				.uuid('customer_Id')
// 				.defaultTo(knex.raw('gen_random_uuid()'))
// 				.notNullable()
// 				.unique()
// 			table.string('name', 250).notNullable()
// 			table.string('email', 255).notNullable().unique()
// 		}),

// 		createTableName(knex, tablesConfig.author),

// 		createTableNameInt(knex, tablesConfig.publisher),

// 		knex.schema.createTable(tablesConfig.books_language, (table) => {
// 			table.integer('language_Id').primary()
// 			table.string('language_code', 8).notNullable()
// 			table.string('language_name', 300).notNullable().unique()
// 		}),

// 		knex.schema.createTable(tablesConfig.book, (table) => {
// 			table
// 				.uuid('book_Id')
// 				.primary()
// 				.notNullable()
// 				.defaultTo(knex.raw('gen_random_uuid()'))
// 			table.string('title', 400).notNullable().unique()
// 			table.string('isbn13')
// 			table.integer('num_pages')
// 			table.date('publication_date')
// 			references(table, 'books_language', true, 'language')
// 			references(table, 'publisher', true, 'publisher')
// 		}),

// 		knex.schema.createTable(tablesConfig.book_author, (table) => {
// 			referencesUUID(table, 'book', true, 'book')
// 			referencesUUID(table, 'author', true, 'author')
// 		}),

// 		createTableNameInt(knex, tablesConfig.region),

// 		knex.schema.createTable(tablesConfig.address, (table) => {
// 			table.integer('address_Id').primary()
// 			table.string('street_name')
// 			table.string('city')
// 			table.string('GPS_address')
// 			references(table, tablesConfig.region, true, 'region')
// 		}),

// 		knex.schema.createTable(tablesConfig.address_status, (table) => {
// 			table.integer('status_Id').notNullable().primary()
// 			table.string('address_status', 40)
// 		}),

// 		knex.schema.createTable(tablesConfig.customer_address, (table) => {
// 			referencesUUID(table, 'customer', true, 'customer')
// 			references(table, tablesConfig.address_status, true, 'status')
// 			references(table, 'address', true).primary()
// 		}),

// 		knex.schema.createTable(tablesConfig.shipping_method, (table) => {
// 			table.integer('method_Id').primary().notNullable()
// 			table.string('method_name')
// 			table.decimal('cost')
// 		}),

// 		knex.schema.createTable(tablesConfig.customer_order, (table) => {
// 			table.uuid('order_Id').primary().notNullable()
// 			// table.string('dest_address')
// 			table
// 				.datetime('order_date', { precision: 6 })
// 				.defaultTo(knex.fn.now(6))
// 			referencesUUID(table, tablesConfig.customer, true, 'customer')
// 			references(table, tablesConfig.shipping_method, true, 'method')
// 			references(table, tablesConfig.address, true, 'address')
// 		}),

// 		knex.schema.createTable(tablesConfig.order_line, (table) => {
// 			table.uuid('line_Id').primary().notNullable()
// 			referencesUUID(table, tablesConfig.customer_order, true, 'order')
// 			referencesUUID(table, tablesConfig.book, true, 'book')
// 			table.decimal('price').notNullable()
// 		}),

// 		knex.schema.createTable(tablesConfig.order_status, (table) => {
// 			table.integer('status_Id').primary()
// 			table.string('status_value', 90)
// 		}),

// 		knex.schema.createTable(tablesConfig.order_history, (table) => {
// 			table.uuid('history_Id').primary().notNullable()
// 			table.date('status_date')
// 			referencesUUID(table, tablesConfig.customer_order, true, 'order')
// 			references(table, tablesConfig.order_status, true, 'status')
// 		}),
// 	])
// }

// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
// export async function down(knex) {
// 	await Promise.all(
// 		[
// 			tablesConfig.book_author,
// 			tablesConfig.author,
// 			tablesConfig.order_line,
// 			tablesConfig.order_history,
// 			tablesConfig.order_status,
// 			tablesConfig.customer_order,
// 			tablesConfig.customer_address,
// 			tablesConfig.customer,
// 			tablesConfig.book,
// 			tablesConfig.books_language,
// 			tablesConfig.address,
// 			tablesConfig.publisher,
// 			tablesConfig.region,
// 			tablesConfig.shipping_method,
// 			tablesConfig.address_status,
// 		].map((tableConfig) => knex.schema.dropTableIfExists(tableConfig))
// 	)
// }
