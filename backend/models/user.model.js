import { Model } from 'objection'
import connection from '../config/db.config.js'

Model.knex(connection)
// Person model.

class Person extends Model {
	static get tableName() {
		return 'Person'
	}

	static get jsonSchema() {
		return {
			type: 'object',
			required: ['id', 'name', 'email'],

			properties: {
				id: { type: 'integer' },
				name: { type: 'string', minLength: 1, maxLength: 255 },
				email: { type: 'string', minLength: 1, maxLength: 255 },
			},
		}
	}
}

export default Person
