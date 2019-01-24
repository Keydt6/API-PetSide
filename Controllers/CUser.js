'use-strict'

const User = require('../Models/User')


function getUser(req, res) {
  let idUser = req.params.idUser

	User.findById(idUser, (err, user) => {
		if(err)
			return res.status(500).send({ messaje: `Error al realizar la peticion: ${err}` })

		if(!user)
			return res.status(404).send({ messaje: `El Usuario no existe.` })

		res.status(200).send({ user })
	})
}

function getUsers(req, res) {
	User.find({}, (err, users) => {
		if(err)
			return res.status(500).send({ messaje: `Error al realizar la peticion: ${err}` })

		if(!users)
			return res.status(404).send({ messaje: `No existen usuarios: ${err}` })

		res.status(200).send({ users })
	})
}

function saveUser(req, res) {
	console.log('POST /PetSide/Users')
	console.log(req.body)

	let user = new User()
	user.email = req.body.email
	user.password = req.body.password
    user.name = req.body.name
    user.surname = req.body.surname
    user.websites = req.body.websites
    user.biography = req.body.biography
    user.direction = req.body.direction
    user.number = req.body.number
    user.gender = req.body.gender
    user.countpublications = req.body.countpublications
    user.countFollowers = req.body.countFollowers
    user.countFollowing = req.body.countFollowing
    user.profilePicture = req.body.profilePicture
    user.coverPagePicture = req.body.coverPagePicture

	user.save((err, userStored) => {
		if(err)
			res.status(500).send({ messaje: `Error al guardar en la base de datos: ${err}`})
		
		res.status(200).send({ user: userStored })
	})	
}

function updateUser(req, res) {
	let userId = req.params.userId
	let update = req.body

	User.findByIdAndUpdate(userId, update, (err, userUpdate) => {
		if(er)
			return res.status(500).send({ messaje: `Error al actualizar el usuario: ${err}` })

		res.status(200).send({ user: userUpdate})
	})
}

function deleteUser(req, res) {
	let idUser = req.params.idUser

	User.findById(idUser, (err, user) => {
		if(err)
			res.status(500).send({ messaje: `Error al eliminar el usuario: ${err}` })

		user.remove(err => {
			if(err)
				res.status(500).send({ messaje: `Error al eliminar el usuario: ${err}` })
			
			res.status(200).send({ messaje: `El usuario ha sido eliminado.` })
		})
	})
}

module.exports = {
	getUser,
	getUsers,
	saveUser,
	updateUser,
	deleteUser
}