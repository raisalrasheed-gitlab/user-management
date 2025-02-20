const { Schema, model } = require('mongoose');

const userSchema = Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
  },
  { timeStamps: true }
);

const User = model('users', userSchema);

module.exports = User;
