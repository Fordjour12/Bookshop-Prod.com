/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
	// Deletes ALL existing entries
	await knex('Person').del()
	await knex('Person').insert([
		{
			id: 1,
			name: 'Leanne Graham',
			email: 'Sincere@april.biz',
		},
		{
			id: 2,
			name: 'Ervin Howell',
			email: 'Shanna@melissa.tv',
		},
		{
			id: 3,
			name: 'Clementine Bauch',
			email: 'Nathan@yesenia.net',
		},
		{
			id: 4,
			name: 'Patricia Lebsack',
			email: 'Julianne.OConner@kory.org',
		},
		{
			id: 5,
			name: 'Chelsey Dietrich',
			email: 'Lucio_Hettinger@annie.ca',
		},
		{
			id: 6,
			name: 'Mrs. Dennis Schulist',
			email: 'Karley_Dach@jasper.info',
		},
		{
			id: 7,
			name: 'Kurtis Weissnat',
			email: 'Telly.Hoeger@billy.biz',
		},
	])
}
