import { Model } from 'objection'
import tablesConfig from '../config/tables.config,js'
import connection from '../config/db.config'

// initializing the db config
Model.knex(connection)

class Book extends Model {
	static get tableName() {
		return tablesConfig.book
	}
}

export default Book
