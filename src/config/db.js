const mongoose = require('mongoose');
Mongo_Url = process.env.MONGO_URI || 'mongodb://0.0.0.0:27017/user-management';

mongoose
  .connect(Mongo_Url)
  .then(() => {
    console.log('[Database]: Connected to the database!');
  })
  .catch(err => {
    console.log('[Database]: Cannot connect to the database!', err);
    process.exit();
  });

module.exports.mongoose;
