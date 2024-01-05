const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../Models/user");

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    console.log(user);
    if (!user) return res.status(401).json({ message: "User not found" });

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.dataValues.password_digest
    );

    if (!validPassword)
      return res.status(401).json({ message: "Authentication failed" });

    res.status(200).json(user);
  } catch (error) {
    res.send(error);
  }
});

router.post("/register", async (req, res) => {
  const emailTaken = await User.findOne({ where: { email: req.body.email } });
  console.log("a")
  if (emailTaken)
    return res.status(500).json({ message: "Email already in use" });
  else {
    try {
      //Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      const newUser = await User.create({
        email: req.body.email,
        password: String(hashedPassword),
        is_admin: true,
      });

      res.status(201).json(newUser);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
});

module.exports = router;