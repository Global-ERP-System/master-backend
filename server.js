//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(bodyParser.json());

const profile = require('./routes/users.js');

app.use('/profile', profile);

//
const studentRoute = require('./routes/student');
const departmentRoute = require('./routes/department');
const staffRoute = require('./routes/staff');
const newApplicantRoute = require('./routes/newApplicants');

app.use('/student', studentRoute);
app.use('/staff', staffRoute);
app.use('/department', departmentRoute);
app.use('/applicants', newApplicantRoute);
//

const url = 'mongodb://localhost:27017/ERP-System';
//const url ='mongodb+srv://suryansh:suryansh@cluster0-ri8lk.mongodb.net/MasterBackend';
const mon =
  'mongodb+srv://admin-ashish:<password>@cluster0.rrujf.mongodb.net/blogDB';
mongoose
  .connect(url, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log('Server Started!');
    });
  })
  .catch((err) => {
    console.log(err);
  });
