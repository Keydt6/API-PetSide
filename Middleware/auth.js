'use-strict'

const services = require('../Services/')

function isAuth(req, res, next) {
	if(!req.headers.authorization)
		return res.status(403).send({ message: 'No tienes autorazación' })

	const token = req.headers.authorization.split(' ')[1]
	
	services.decodeToken(token).then(response => {
		req.user = response
		next()
	}, reject => {
		res.status(reject.status)
	})
}

module.exports = isAuth