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

router.get('/depName/:name', function (req, res) {
  const name = req.params.name;
  Staff.find({ departmentName: name }, function (err, staffs) {
    if (!err) {
      res.json(staffs);
    } else {
      res.json(err);
    }
  });
});

router.get('/status/:status', function (req, res) {
  const status = req.params.status;
  Staff.find({ status: status }, function (err, staffs) {
    if (!err) {
      res.json(staffs);
    } else {
      res.json(err);
    }
  });
});

router
  .route('/:id')
  .delete(function (req, res) {
    const id = req.params.id;
    Staff.deleteOne({ _id: id }, function (err) {
      if (!err) {
        res.json('Deleted Succesfully.');
      } else {
        res.json(err);
      }
    });
  })

  .patch(function (req, res) {
    Staff.findByIdAndUpdate(req.params.id, { $set: req.body }, (err) => {
      if (!err) {
        res.json('Updated Successfully.');
      } else {
        res.json(err);
      }
    });
  });

module.exports = router;
