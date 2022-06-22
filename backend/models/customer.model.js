import { Model } from 'objection'
import tablesConfig from '../config/tables.config'
import connection from '../config/db.config'

// initializing the db config
Model.knex(connection)

// Customer model.
class Customer extends Model {
	static get tableName() {
		return tablesConfig.customer
	}

	static relationMappings = {}

	static get jsonSchema() {
		return {
			type: 'object',
			required: ['customer_Id', 'name', 'email'],

			properties: {
				customer_id: { type: 'uuid' },
				name: { type: 'string', minLength: 1, maxLength: 250 },
				email: { type: 'string', minLength: 1, maxLength: 255 },
			},
		}
	}
}

export default Customer
