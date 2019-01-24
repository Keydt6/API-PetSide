'use-strict'

const express = require('express')
const api = express.Router()
const UserCtrl = require('../Controllers/CUser')

api.get('/Users', UserCtrl.getUsers)
api.get('/Users/:idUser', UserCtrl.getUser)
api.post('/Users', UserCtrl.saveUser)
api.delete('/Users/:idUser', UserCtrl.deleteUser)
api.put('/Users/:idUser', UserCtrl.updateUser)

module.exports = api