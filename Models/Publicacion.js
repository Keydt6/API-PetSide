'use-strict'

const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)
const Schema = mongoose.Schema

const PublicacionSchema = new Schema({
	description: String,    
    creationDate: {type: Date, default: Date.now},
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
    photo: {type:String}
})

module.exports = mongoose.model('Publicacion', PublicacionSchema)