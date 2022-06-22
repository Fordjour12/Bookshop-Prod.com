import { Model } from 'objection'
import connection from '../config/db.config'
import tablesConfig from '../config/tables.config'

// db initialization
Model.knex(connection)

// Publisher Model
class Publisher extends Model {
	static get tableName() {
		return tablesConfig.publisher
	}

	static relationMappings = {}

	static get jsonSchema() {
		return {
			type: 'object',
			required: ['publisher_Id', 'publisher_name'],

			properties: {
				publisher_Id: { type: 'uuid' },
				publisher_name: {
					type: 'string',
					minLength: 1,
					maxLength: 255,
				},
			},
		}
	}
}

export default Publisher
