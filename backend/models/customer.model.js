import { Model } from 'objection'
import tablesConfig from '../config/tables.config'
// Person model.

class Customer extends Model {
	static get tableName() {
		return tablesConfig.customer
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

export default Customer
