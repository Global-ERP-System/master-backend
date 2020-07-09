const mongoose = require('mongoose');

const newApplicantsSchema = new mongoose.Schema({
  applicationNo: { type: String, required: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  phone: { type: Number, required: true },
  email: { type: String, required: true },
  previousWork: { type: String, required: true },
  experience: { type: String, required: true },
  postApplied: { type: String, required: true },
  educationStatus: { type: String, required: true }
});

const NewApplicants = mongoose.model('NewApplicants', newApplicantsSchema);

module.exports = NewApplicants;
