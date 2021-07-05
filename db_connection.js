const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hara', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});