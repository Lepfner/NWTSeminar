const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const Chocolate = require("../Models/chocolate");

router.get('/chocolates', async (req, res) => {
  try {
    const chocolates = await Chocolate.find();
    res.status(200).json(chocolates);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.get('/chocolate/:id', async (req, res) => {
  try {
    const chocolate = await Chocolate.findById(req.params.id);
    if (!chocolate) {
      return res.status(404).json({ message: 'Chocolate not found' });
    }
    res.status(200).json(chocolate);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/chocolateCreate", async (req, res) => {
  try {
    const newChocolate = await Chocolate.create({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      logo: req.body.logo,
      type: req.body.type,
      ingredients: req.body.ingredients,
      manufacturer: req.body.manufacturer
    });
    res.status(201).json(newChocolate);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.put("/chocolates/:id", async (req, res) => {
  try {
    const updatedChocolate = await Chocolate.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedChocolate) {
      return res.status(404).json({ message: "Chocolate not found" });
    }
    res.status(200).json(updatedChocolate);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.delete("/chocolates/:id", async (req, res) => {
  try {
    const deletedChocolate = await Chocolate.findByIdAndDelete(req.params.id);
    if (!deletedChocolate) {
      return res.status(404).json({ message: "Chocolate not found" });
    }
    res.status(200).json({ message: "Chocolate deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

module.exports = router;
