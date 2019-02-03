'use-strict'

const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')

const UserSchema = new Schema({
	email: { type: String, unique: true, lowercase: true },
	password: { type: String, select: false},
    name: String,
    surname: String,
    websites: String,
    biography: String,
    direction: String,
    number: String,
    gender: String,
    countpublications: Number,
    countFollowers:Number,
    countFollowing:Number,
    profilePicture: String,
    coverPagePicture: String 
})

/*UserSchema.pre('save', (next) => {
	let user = this
	if(!user.isModified('password'))
		return next()

	bcrypt.genSalt(10, (err, salt) => {
		if(err)
			return next(err)

		bcrypt.hash(user.password, salt, null, (err, hash) => {
			if(err)
				return next(err)

			user.password = hash
			next()
		})
	 })
})*/

module.exports = mongoose.model('User', UserSchema)