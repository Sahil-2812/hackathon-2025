// server/models/Auth/auth.model.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["ngo", "donor"], default: "donor" }, // role-based
});

module.exports = mongoose.model("User", userSchema);
