// server/Routes/Auth/auth.routes.js
const express = require("express");
const authRouter = express.Router();
const User = require("../../models/Auth/auth.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const verifyToken = require("../../middlewares/token/verifyToken");
require("dotenv").config();
const { SECRET_KEY } = process.env;

// REGISTER
authRouter.post("/register", async (req, res) => {
  const { firstName, lastName, email, password, role } = req.body;
  try {
    const emailCheck = await User.findOne({ email });
    if (emailCheck) return res.status(400).json({ msg: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ firstName, lastName, email, password: hashedPassword, role });
    await user.save();
    res.status(200).json({ msg: "User Registered Successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Internal server error", error });
  }
});

// LOGIN
authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ msg: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ msg: "Invalid credentials" });

    // Include role in JWT payload
    const payload = { id: user._id, role: user.role };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "7d" });

    res.status(200).json({ msg: "Login successful", token });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

// PROFILE
authRouter.get("/profile", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ msg: "User not found" });

    res.json({ user, session: req.user }); // session contains role & id
  } catch (error) {
    res.status(500).json({ msg: "Error fetching profile", error });
  }
});

module.exports = authRouter;
