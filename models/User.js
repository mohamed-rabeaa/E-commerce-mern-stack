const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  firstName: {type: String, required: true, trim: true},
  lastName: {type: String, required: true, trim: true},
  email: {type: String, required: true, trim: true, unique: true},
  password: {type: String, required: true},
  admin: {type: Boolean, default: false},
  img: String,
  verify: {type: Boolean, default: false},
},
  {timestamps: true}
);

module.exports = mongoose.model("User", UserSchema);