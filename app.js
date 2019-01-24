'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const api = require('./Routes')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/PetSide', api)

module.exports = app