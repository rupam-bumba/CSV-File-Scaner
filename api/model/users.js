const mongoose = require("mongoose");

const users = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId, 
  Login_email: { type: String },
  Identifier: { type: String },
  One_time_password: { type: String },
  Recovery_code: { type: String },
  First_name: { type: String },
  Last_name: { type: String },
  Department: { type: String },
  Location: { type: String },
  
});

module.exports = mongoose.model("users", users);
