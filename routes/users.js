const express = require('express');
const users = express.Router();
var verifyToken = require('../auth/verify-token');

const _ = require('lodash');
var { authenticate } = require('../auth/authenticate')

const { User } = require('../models/user');

// get the specific user
users.get('/:id', (req, res) => {
    let id = req.params.id;
    User.findById(id).then(user => {
        res.send(user)
    })
});

// update a specific user
users.put('/:id', (req, res) => {
    let id = req.params.id;
    let body = _.pick(req.body, ['fullName','address','phoneNumber', 'bloodGroup', 'email']);
    User.findByIdAndUpdate(id, { $set: body }, { new: true })
        .then(user => {
            res.send(user)
        }).catch(err => {
            res.send(err);
        })
})



module.exports = users;
