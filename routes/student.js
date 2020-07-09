const router = require('express').Router();
const Student = require('../models/student.model');

router.get('/', function (req, res) {
  Student.find(function (err, students) {
    if (!err) {
      res.json(students);
    } else {
      res.json(err);
    }
  });
});

router.post('/addStudent', function (req, res) {
  const data = req.body;
  const newStudent = new Student(data);
  newStudent.save((err) => {
    if (!err) {
      res.send('Added Succesfully Student');
    } else {
      res.send(err);
    }
  });
});

router.get('/:name', function (req, res) {
  const name = req.params.name;
  Student.find({ departmentName: name }, { info: 1 }, function (err, students) {
    if (!err) {
      res.json(students);
    } else {
      res.json(err);
    }
  });
});

module.exports = router;
