const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  departmentName: { type: String, required: true },
  info: {
    name: { type: String, required: true },
    rollno: { type: Number, required: true },
    year: { type: String, required: true }
  }
});

const StudentInfo = mongoose.model('StudentInfo', studentSchema);

module.exports = StudentInfo;
