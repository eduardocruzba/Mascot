const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')

app.use(morgan('dev'))
app.use(bodyParser.json())
const ACCESS_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQ5Njc2NDk0NGQ2MGYyMjc1ZWRlNmViZjliYzhjMTU4M2M1MTIyNDhhOWQwYjcxMzU2MGYwOTA3ZmVjZjViZDc0YzY2ZDJhMmQwNjYzODZmIn0.eyJhdWQiOiJPeW1md2NnM3VsakdwQTcyT2dzZTNwT0d5NWJWanpybkR3TnZ6RUNuTEpiTmI5S3U0RiIsImp0aSI6ImQ5Njc2NDk0NGQ2MGYyMjc1ZWRlNmViZjliYzhjMTU4M2M1MTIyNDhhOWQwYjcxMzU2MGYwOTA3ZmVjZjViZDc0YzY2ZDJhMmQwNjYzODZmIiwiaWF0IjoxNTYxNTg3OTMzLCJuYmYiOjE1NjE1ODc5MzMsImV4cCI6MTU2MTU5MTUzMywic3ViIjoiIiwic2NvcGVzIjpbXX0.C4bQYqFsvD2zq2dk3Ki0rfNWROo4fKFQDSpN72B0BvU1loYbYwzeju57kxe0YSdeS2_IgYmQZpWkyJll45XzuTLb-KZOVLmvqRSDmMkWWXW1S8s-JoR18azbwdA2mgor-vKeaTRWG4G5yJDGxNQ0tAEqsEowEELIj9Bro4hRmkHZRHo8xiYowA5AN4lufTjDF3A6xO3Y7byX3OC8rXRNi7ATxc5dVzXsi1Et0_N2y3m9fvlbI1qXeICbWS5QvvdYzCxe_agLWSwWz57LtJHDZcIyjf95-6Th6kdpmlQhkkdFxqUgR7TRl4AJITDB6pvEhh7XsbZxwLFuiA2oP_NW7g'

app.post('/token', (req, res) => {
	req.body.username = 'petfinder';
    req.body.password ='petfinder02';
	if (!req.body.username) { return res.status(422).json({ error: 'Missing username param'}) }
	if (!req.body.password) { return res.status(422).json({ error: 'Missing password param'}) }


	if (req.body.username !== 'petfinder') { return res.status(403).json({ error: 'Invalid username or password'}) }
	if (req.body.password !== 'petfinder02') { return res.status(403).json({ error: 'Invalid username or password'}) }

	res.json({
		accessToken: ACCESS_TOKEN,
		type: 'Bearer'
	})
})

app.listen('3000', () => {
	console.log('server running')
})
