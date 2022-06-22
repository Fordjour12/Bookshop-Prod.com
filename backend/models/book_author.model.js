import { Model } from 'objection'
import tablesConfig from '../config/tables.config'
import connection from '../config/db.config'

// initializing the db config
Model.knex(connection)

// Book Author model.
class BookAuthor extends Model {
	static get tableName() {
		return tablesConfig.book_author
	}

	static relationMappings = {}

	static get jsonSchema() {
		return {
			type: 'object',
			required: ['book_Id', 'author_Id'],

			properties: {
				book_Id: { type: 'uuid' },
				author_Id: { type: 'uuid' },
			},
		}
	}
}

export default BookAuthor
