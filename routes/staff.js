const router = require('express').Router();
const Staff = require('../models/staff.model');

router.get('/', function (req, res) {
  Staff.find(function (err, staffs) {
    if (!err) {
      res.json(staffs);
    } else {
      res.json(err);
    }
  });
});

router.post('/addStaff', function (req, res) {
  const data = req.body;
  const newStaff = new Staff(data);
  newStaff.save((err) => {
    if (!err) {
      res.send('Added Succesfully Staff');
    } else {
      res.send(err);
    }
  });
});

router.get('/:name', function (req, res) {
  const name = req.params.name;
  Staff.find({ departmentName: name }, { info: 1 }, function (err, staffs) {
    if (!err) {
      res.json(staffs);
    } else {
      res.json(err);
    }
  });
});

module.exports = router;
