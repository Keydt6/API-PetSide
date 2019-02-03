'use-strict'

const Publicacion = require('../Models/Publicacion')

function getPublications(req, res) {
	Publicacion.find({},(err, publications) => {
		if(err)
			return res.status(500).send({ message: `Error al realizar la peticion: ${err}` })

		if(!publications)
			return res.status(404).send({ message: `No existen publicaciones: ${err}` })
		
		res.status(200).send({ publications });
	})
}

function getPublicationById(req, res) {
	let id = req.params.id
    Publicacion.findById(id, (err, publication) => {
        if (err) 
        	return res.status(500).send({ messaje: `Error al realizar la peticion: ${err}` })

        if(!publication)
			return res.status(404).send({ messaje: `El Usuario no tiene publicaciones.` })
          
        res.status(200).send({ publication });
    })
}

function getPublicationsUser(req, res) {
	let id = req.params.id
    Publicacion.find({ userId: id }, (err, publications) => {
        if (err) 
        	return res.status(500).send({ messaje: `Error al realizar la peticion: ${err}` })

        if(!publications)
			return res.status(404).send({ messaje: `El Usuario no tiene publicaciones.` })
          
        res.status(200).send({ publications });
    })
}


function addPublication(req, res) {
	let publicacion = new Publicacion()
	publicacion.description = req.body.description
    publicacion.userId = req.body.userId
    publicacion.photo = req.body.photo

	console.log(publicacion);
	publicacion.save((err, userStored) => {
		if(err)
			return res.status(500).send({ messaje: `Error al guardar en la base de datos: ${err}`})
		
		res.status(200).send({ userStored })
	})
}

function updatePublication(req, res) {
	let id = req.params.id
	let update = req.body

	Publicacion.findByIdAndUpdate(id, update, (err, publicationUpdate) => {
		if(err)
			return res.status(500).send({ messaje: `Error al actualizar la publicacion: ${err}` })

		res.status(200).send({ publicationUpdate })
	})
}

function deletePublication(req, res) {
	let id = req.params.id

	Publicacion.findById(id, (err, publication) => {
		if(err)
			res.status(500).send({ messaje: `Error al eliminar la publicacion: ${err}` })

		publication.remove(err => {
			if(err)
				res.status(500).send({ messaje: `Error al eliminar la publicacion: ${err}` })
			
			res.status(200).send({ messaje: `la publicacion ha sido eliminado.` })
		})
	})
}

module.exports = {
	getPublicationsUser,
	getPublicationById,
	getPublications,
	addPublication,
	updatePublication,
	deletePublication
}