const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');

// Create Schema
const UserSchema = new Schema({
  fullName: {
    type: String,
    required: [true,"No Name"]
  },
  address: {
    type: String
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  bloodGroup: {
    type: String,
    required: true
  },
  email : {
    type: String,
    required: true,

  }
})

UserSchema.methods.generateAuthToken = function () {
    var user = this
    var access = 'auth'
    var token = jwt.sign({_id: user._id.toHexString(), access}, 'secret').toString()


    user.tokens = [{ access, token }] // replaces old token with new one

    return user.save().then(() => {
        return token
    })
}


UserSchema.statics.findByCredentials = function(email, password) {
    var User = this

    return User.findOne({ email }).then((user) => {
        if (!user) {
            return Promise.reject()
        }

        return new Promise((resolve, reject) => {

            bcrypt.compare(password, user.password, (err, res) => {

                if (res) {
                    resolve(user)
                } else {
                    reject();
                }
            })
        })
    })
}

UserSchema.pre('save', function(next) {
    var user = this

    if(user.isModified('password')) {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                user.password = hash
                next()
            })
        })
    } else {
        next()
    }
})

const User = mongoose.model('User', UserSchema)

module.exports = {
    User
}
