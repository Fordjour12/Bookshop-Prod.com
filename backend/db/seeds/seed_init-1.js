// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> }
//  */
// export async function seed(knex) {
// 	// Deletes ALL existing entries
// 	await knex('order_status').del()
// 	await knex('order_status').insert([
// 		{ status_Id: 1, status_value: 'Order Received' },
// 		{ status_Id: 2, status_value: 'Pending Delivery' },
// 		{ status_Id: 3, status_value: 'Delivery In Progress' },
// 		{ status_Id: 4, status_value: 'Delivered' },
// 		{ status_Id: 5, status_value: 'Cancelled' },
// 		{ status_Id: 6, status_value: 'Returned' },
// 	])

// 	// Deletes ALL existing entries
// 	await knex('shipping_method ').del()
// 	await knex('shipping_method ').insert([
// 		{ method_Id: 1, method_name: 'Standard', cost: 5.9 },
// 		{ method_Id: 2, method_name: 'Priority', cost: 8.9 },
// 		{ method_Id: 3, method_name: 'Express', cost: 11.9 },
// 		{ method_Id: 4, method_name: 'International', cost: 24.5 },
// 	])

// 	await knex('region').del()
// 	await knex('region ').insert([
// 		{ region_Id: 1, region_name: 'AHAFO' },
// 		{ region_Id: 2, region_name: 'ASHANTI' },
// 		{ region_Id: 3, region_name: 'BONO EAST' },
// 		{ region_Id: 5, region_name: 'BRONG AHAFO' },
// 		{ region_Id: 6, region_name: 'CENTRAL' },
// 		{ region_Id: 7, region_name: 'EASTERN' },
// 		{ region_Id: 8, region_name: 'GREATER ACCRA' },
// 		{ region_Id: 9, region_name: 'NORTH EAST' },
// 		{ region_Id: 10, region_name: 'NORTHERN' },
// 		{ region_Id: 11, region_name: 'OTI' },
// 		{ region_Id: 12, region_name: 'SAVANNAH' },
// 		{ region_Id: 13, region_name: 'UPPER EAST' },
// 		{ region_Id: 14, region_name: 'UPPER WEST' },
// 		{ region_Id: 15, region_name: 'WESTERN' },
// 		{ region_Id: 16, region_name: 'WESTERN NORTH' },
// 		{ region_Id: 17, region_name: 'VOLTA' },
// 	])

// 	// Deletes ALL existing entries
// 	await knex('address_status').del()
// 	await knex('address_status').insert([
// 		{ status_Id: 1, address_status: 'Active' },
// 		{ status_Id: 2, address_status: 'Inactive' },
// 	])

// 	// Deletes ALL existing entries
// 	await knex('books_language').del()
// 	await knex('books_language').insert([
// 		{ language_Id: 1, language_code: 'eng', language_name: 'English' },
// 		{
// 			language_Id: 2,
// 			language_code: 'en-US',
// 			language_name: 'United States English',
// 		},
// 		{ language_Id: 3, language_code: 'fre', language_name: 'French' },
// 		{ language_Id: 4, language_code: 'spa', language_name: 'spanish' },
// 		{
// 			language_Id: 5,
// 			language_code: 'en-GB',
// 			language_name: 'British English',
// 		},
// 		{
// 			language_Id: 6,
// 			language_code: 'mul',
// 			language_name: 'Multiple Languages',
// 		},
// 		{ language_Id: 7, language_code: 'grc', language_name: 'Greek' },
// 		{
// 			language_Id: 8,
// 			language_code: 'enm',
// 			language_name: 'Middle English',
// 		},
// 		{
// 			language_Id: 9,
// 			language_code: 'en-CA',
// 			language_name: 'Canadian English',
// 		},
// 		{ language_Id: 10, language_code: 'ger', language_name: 'German' },
// 		{ language_Id: 11, language_code: 'jpn', language_name: 'Japanese' },
// 		{ language_Id: 12, language_code: 'ara', language_name: 'Arabic' },
// 		{ language_Id: 13, language_code: 'nl', language_name: 'Dutch' },
// 		{ language_Id: 14, language_code: 'zho', language_name: 'Chinese' },
// 		{ language_Id: 15, language_code: 'lat', language_name: 'Latin' },
// 		{ language_Id: 16, language_code: 'por', language_name: 'Portuguese' },
// 		{ language_Id: 17, language_code: 'srp', language_name: 'Serbian' },
// 		{ language_Id: 18, language_code: 'ita', language_name: 'Italian' },
// 		{ language_Id: 19, language_code: 'rus', language_name: 'Russian' },
// 		{ language_Id: 20, language_code: 'msa', language_name: 'Malaysian' },
// 		{ language_Id: 21, language_code: 'glg', language_name: 'Galician' },
// 		{ language_Id: 22, language_code: 'wel', language_name: 'Welsh' },
// 		{ language_Id: 23, language_code: 'swe', language_name: 'Swedish' },
// 		{ language_Id: 24, language_code: 'nor', language_name: 'Norwegian' },
// 		{ language_Id: 25, language_code: 'tur', language_name: 'Turkish' },
// 		{ language_Id: 26, language_code: 'gla', language_name: 'Gaelic' },
// 		{ language_Id: 27, language_code: 'ale', language_name: 'Aleut' },
// 	])

	
// }
