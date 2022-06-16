import { Router } from 'express'

import Person from '../models/user.model.js'

const router = Router()

/* GET users listing. */
router.get('/', async (request, response) => {
	const user = await Person.query()
	response.json(user)
})

export default router
