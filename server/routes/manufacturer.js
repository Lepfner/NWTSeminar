const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const Manufacturer = require("../models/Manufacturer");

router.get('/manufacturers', async (req, res) => {
  try {
    const manufacturers = await Manufacturer.find();
    res.status(200).json(manufacturers);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.get('/manufacturer/:id', async (req, res) => {
  try {
    const manufacturer = await Manufacturer.findById(req.params.id);

    if (!manufacturer) {
      return res.status(404).json({ message: 'Manufacturer not found' });
    }
    res.status(200).json(manufacturer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/manufacturerCreate", async (req, res) => {
  try {
    const newManufacturer = await Manufacturer.create({
      name: req.body.name,
      city: req.body.city,
      description: req.body.description,
      logo: req.body.logo,
      year: req.body.year
    });
    res.status(201).json(newManufacturer);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.put("/manufacturers/:id", async (req, res) => {
  try {
    const updatedManufacturer = await Manufacturer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedManufacturer) {
      return res.status(404).json({ message: "Manufacturer not found" });
    }
    res.status(200).json(updatedManufacturer);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.delete("/manufacturers/:id", async (req, res) => {
  try {
    const deletedManufacturer = await Manufacturer.findByIdAndDelete(
      req.params.id
    );
    if (!deletedManufacturer) {
      return res.status(404).json({ message: "Manufacturer not found" });
    }
    res.status(200).json({ message: "Manufacturer deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

module.exports = router;
