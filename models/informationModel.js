const mongoose = require('mongoose');

const InformationSchema = new mongoose.Schema({
  head:{
    firstname: String,
    lastname: String,
    title: String,
    city: String,
    country: String,
    zipcode: String,
    mobile: String,
    email: String,
    linkedin: String,
  },
  summery:{
    type: String
  },
  education:[{
      schoolName: String,
      schoolLocation: String,
      degree: String,
      course: String,
      start: Date,
      end: Date,
      current: Boolean
  }],
  experience: {
    type: [{
      title: String,
      employer: String,
      city: String,
      country: String,
      start: Date,
      end: Date,
      current: Boolean,
      description: String
    }]
  },
  skills: {
    type: [String]
  },
  competencies: {
    type: [String]
  },
  hobbies: {
    type: [String]
  },
  email:{
    type: String
  }
})

module.exports = Information = mongoose.model('resume_information', InformationSchema);