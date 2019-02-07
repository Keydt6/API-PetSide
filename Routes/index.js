'use-strict'

const express = require('express')
const api = express.Router()
const UserCtrl = require('../Controllers/CUser')
const PublicationCtrl = require('../Controllers/CPublicacion')
const auth = require('../Middleware/auth')

//Rutas de Usuario
api.get('/findUsers', UserCtrl.getUsers)
api.post('/findUserByEmail', UserCtrl.getUserByEmail)
api.put('/updateUser/:idUser', UserCtrl.updateUser)
api.post('/SingUp', UserCtrl.signUp)
api.post('/SingIn', UserCtrl.signIn)

api.get('/findUserById/:idUser', UserCtrl.getUserById)
api.post('/saveUser', UserCtrl.saveUser)
api.delete('/deleteUser/:idUser', UserCtrl.deleteUser)
api.get('/findUserByName/:name', UserCtrl.getUserByName)


//Rutas de Publicacion
api.post("/savePublication/:id", PublicationCtrl.addPublication)
api.get("/findPublications", PublicationCtrl.getPublications)
api.get("/findPublicationsByUser/:id", PublicationCtrl.getPublicationsUser)
api.get("/findPublicationById/:id", PublicationCtrl.getPublicationById)
api.put("/updatePublication/:id", PublicationCtrl.updatePublication)
api.delete("/deletePublication/:id", PublicationCtrl.deletePublication)

module.exports = api