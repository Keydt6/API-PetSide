CUser.js
'use-strict'

const User = require('./Models/User')


function getUser(req, res) {

}

function getUsers(req, res) {
	User.find({}, (err, users) => {
		if(err)
			return res.status(500).send(messaje: `Error al realizar la peticion: ${err}`)

		if(!users)
			return res.status(404).send(messaje: `No existen usuarios: ${err}`)

		res.status(200).send({users})
	})
}

function updateUser(req, res) {
	let userId = req.params.userId
	let update = req.body

	User.findByIdAndUpdate(userId, update, (err, userUpdate) => {
		if(er)
			return res.status(500).send(messaje: `Error al actualizar el usuario: ${err}`)

		res.status(200).send({ user: userUpdate})
	})
}

function deleteUser(req, res) {

}

molude.exports = {
	getUser,
	getUsers,
	updateUser,
	deleteUser
}