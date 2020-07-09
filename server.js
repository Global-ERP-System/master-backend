//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
var cors = require('cors')
var port = process.env.PORT || 5000

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(bodyParser.json());

const profile = require ('./routes/users.js');

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

app.use('/users', Users)

mongoose.connect("http://localhost:3000/", {useNewUrlParser: true,
useFindAndModify : false});
.then(() => {
        app.listen(process.env.PORT || 3000, ()=>{
            console.log("Server Started!");
        });
    })
    .catch(err => {
        console.log(err);
    });
