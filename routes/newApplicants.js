const router = require('express').Router();
const NewApplicants = require('../models/newApplicants');

router.get('/', function (req, res) {
  NewApplicants.find(function (err, forms) {
    if (!err) {
      res.json(forms);
    } else {
      res.json(err);
    }
  });
});

router.post('/addApplication', function (req, res) {
  const data = req.body;
  const applicant = new NewApplicants(data);
  applicant.save((err) => {
    if (!err) {
      res.json('Successfully Added');
    } else {
      res.json(err);
    }
  });
});

module.exports = router;
