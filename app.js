'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const api = require('./Routes')

app.use(cors())
app.use(bodyParser.json({ limit: '10mb' }))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

app.use('/PetSide', api)

module.exports = app