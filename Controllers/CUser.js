'use-strict'

const User = require('../Models/User')
//const service = require('../Services')

function getUserById(req, res) {
  	let idUser = req.params.idUser

	User.findById(idUser, (err, user) => {
		if(err)
			return res.status(500).send({ messaje: `Error al realizar la peticion: ${err}` })

		if(!user)
			return res.status(404).send({ messaje: `El Usuario no existe.` })

		res.status(200).send({ usuario: user })
	})
}

function getUsers(req, res) {
	User.find({}, (err, users) => {
		if(err)
			return res.status(500).send({ message: `Error al realizar la peticion: ${err}` })

		if(!users)
			return res.status(404).send({ message: `No existen usuarios: ${err}` })

		res.status(200).send({ usuario: users })
	})
}

function getUserByEmail(req,res){
	let email = req.body.email
	User.findOne({ email }, (err, user) => {
		if(err)
			return res.status(500).send({ message: `Error al realizar la peticion: ${err}` })
		if (!user)
			return res.status(404).send({ message: `No existe el usuario con este email: ${err}` })
		
		res.json({ user });
	})
}

function getUserByName(req,res){
	let name = req.params.name
	User.findOne({ name }, (err,user) => {
		if(err)
			return res.status(500).send({ message: `Error al realizar la peticion: ${err}` })
		if (!user)
			return res.status(404).send({ message: `No existen usuarios con este nombre: ${err}` })
		
			res.status(200).send({ usuario: user })
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
			res.status(500).send({ message: `Error al guardar en la base de datos: ${err}`})
		
		res.status(200).send({ usuario: userStored })
	})	
}

function updateUser(req, res) {
	let userId = req.params.idUser
	let update = req.body

	User.findByIdAndUpdate(userId, update, (err, userUpdate) => {
		if(err)
			return res.status(500).send({ messaje: `Error al actualizar el usuario: ${err}` })

		res.status(200).send({ usuario: userUpdate})
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

function signUp(req, res) {
	let user = new User()
		user.email = req.body.email
		user.password = req.body.password
    	user.name = req.body.name
	    user.countpublications= 0
	    user.countFollowers = 0
	    user.countFollowing = 0
	    //user.surname = req.body.surname

	    console.log(user)

	user.save((err, userStored) => {
		if(err)
			res.status(500).send({ messaje: `Error al guardar en la base de datos: ${err}`})
		
		res.status(200).send({ usuario: userStored })

		//return res.status(200).send({ token: service.createToken(user) })
	})
}

function signIn(req, res) {
	User.findOne({ email: req.body.email, password: req.body.password }, (err, user) => {
		if(err)
			return res.status(500).send({ message: err, status: 500})

		if(!user)
			return res.status(404).send({ message: 'No existe el usuario.', status: 404 })

		/*req.user = user
		res.status(200).send({ 
			message: 'Has ingresado correctamente.',
			token: service.createToken(user)
		})*/
		console.log(user)
		res.status(200).send({ usuario: user })
		
	})
}

module.exports = {
	getUserById,
	getUsers,
	saveUser,
	updateUser,
	deleteUser,
	signIn,
	signUp,
	getUserByEmail,
	getUserByName
}