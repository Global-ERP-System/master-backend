const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  departmentName: { type: String, required: true },
  info: {
    designation: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true },
    qualification: { type: String, required: true },
    specialization: { type: String, required: true }
  }
});

const StaffInfo = mongoose.model('StaffInfo', staffSchema);

module.exports = StaffInfo;
