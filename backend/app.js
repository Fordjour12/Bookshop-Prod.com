import 'dotenv/config'
import express, { json, urlencoded } from 'express'
import compression from 'compression'
import helmet from 'helmet'
import cors from 'cors'
import volleyball from 'volleyball'
import createError from 'http-errors'

const app = express()
const Port = process.env.PORT

// middlewares
app.use(cors())
app.use(volleyball)
app.use(compression())
app.use(helmet())
app.use(json())
app.use(urlencoded({ extended: false }))

app.get('/', async (_request, response, next) => {
	response.send('Hello world')

	next()
})

app.use(async (_request, _response, next) => {
	next(createError.NotFound())
})

// error middleware catches all error
app.use((error, _request, response) => {
	const status = error.statusCode || 500
	const message = error.message
	const data = error.data
	response.status(status).json({ message: message, data: data })
})

app.listen(Port, () => {
	console.log(`Server Running on http://localhost:${Port}`)
})
