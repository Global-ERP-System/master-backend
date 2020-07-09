const router = require('express').Router();
const Department = require('../models/department.model');

router.get('/', function (req, res) {
  Department.find(function (err, departments) {
    if (!err) {
      res.json(departments);
    } else {
      res.json(err);
    }
  });
});

router.post('/addDepartment', function (req, res) {
  const departmentName = req.body.departmentName;
  const newDep = new Department({
    departmentName
  });
  newDep.save((err) => {
    if (!err) {
      res.send('Added Succesfully department');
    } else {
      res.send(err);
    }
  });
});

module.exports = router;
