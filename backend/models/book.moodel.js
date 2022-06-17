import { Model } from 'objection'
import tablesConfig from '../config/tables.config'

class Book extends Model {
	static get tableName() {
		return tablesConfig.book
	}
}

export default Book
