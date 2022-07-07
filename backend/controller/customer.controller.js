import createError from 'http-errors'
import bcrypt from 'bcrypt'

import Customer from '../models/customer.models.js'

const getRegister = async (Request, Response, Next) => {
	try {
		let userInfo = Customer.fromJson(Request.body)
		const userData = await Customer.query().findOne(userInfo)

		if (userData) {
			throw createError.Conflict(`${userInfo.username} Already Exist`)
		}

		const passwordHash = bcrypt.hashSync(Request.body.password, 12)

		const Data = await Customer.query().insert(
			Object.assign(userInfo, { password: passwordHash })
		)

		Response.status(201).send({
			message: 'New Customer Created',
			data: Data,
		})
	} catch (error) {
		if (!error.statusCode || error) {
			error.statusCode = createError[400]
		}

		Next(error)
	}
}

const getLoggedIn = async (Request, Response, Next) => {
	try {
		const userInfo = Customer.fromJson(Request.body)

		const userData = await Customer.query().first().where({
			email: userInfo.email,
		})

		if (!userData) {
			throw createError.NotFound('User Not found in Database')
		}
		console.log(userData)

		const validPassword = await bcrypt.compare(
			Request.body.password,
			userData.password
		)
		if (!validPassword) {
			throw createError.Unauthorized('Password not valid')
		}

		Response.status(200).send({
			message: 'Successful',
			data: userData,
		})
	} catch (error) {
		if (!error.statusCode || error) {
			error.statusCode = createError[400]
		}

		Next(error)
	}
}

export { getRegister, getLoggedIn }
