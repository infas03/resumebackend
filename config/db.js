const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const URI = "mongodb+srv://hminfas:12345@infastest.vr8vw.mongodb.net/infas_cv_builder?retryWrites=true&w=majority"

const connectDB = async () => {
  await mongoose.connect(URI, {
    useNewUrlParser: true
  });
  console.log('db connected..!');
};

module.exports = connectDB;