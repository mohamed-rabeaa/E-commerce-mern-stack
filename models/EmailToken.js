const mongoose = require('mongoose')

const EmailTokenSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId, 
    required: true, 
    ref: "User",
    unique: true
  },
  token: {
    type: String, 
    required: true
  },
  createdAt: {
    type: Date, 
    default: Date.now(), 
    expires: 3600
  }
});

module.exports = mongoose.model("EmailToken", EmailTokenSchema);