const express = require("express");
const mongoose = require('mongoose');
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../Models/user");
const jwt = require('jsonwebtoken');

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(401).json({ message: "User not found" });
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword)
      return res.status(401).json({ message: "Authentication failed" });

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      'your-secret-key',
      { expiresIn: '1h' }
    );

    res.status(200).json({ token, user: user });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get('/user/:id', async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ is_admin: user.is_admin });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.post("/register", async (req, res) => {
  const emailTaken = await User.findOne({ where: { email: req.body.email } });
  if (emailTaken)
    return res.status(500).json({ message: "Email already in use" });
  else {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      const newUser = await User.create({
        email: req.body.email,
        password: String(hashedPassword),
        is_admin: false,
      });

      res.status(201).json(newUser);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
});

module.exports = router;