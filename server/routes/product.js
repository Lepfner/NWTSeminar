const express = require("express");
const router = express.Router();
const Chocolate = require("../models/Chocolate");

router.get('/chocolates', async (req, res) => {
  try {
    const chocolates = await Chocolate.find();
    res.status(200).json(chocolates);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.post("/chocolates", async (req, res) => {
  try {
    const newChocolate = await Chocolate.create(req.body);
    res.status(201).json(newChocolate);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
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
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.delete("/chocolates/:id", async (req, res) => {
  try {
    const deletedChocolate = await Chocolate.findByIdAndRemove(req.params.id);

    if (!deletedChocolate) {
      return res.status(404).json({ message: "Chocolate not found" });
    }

    res.status(200).json({ message: "Chocolate deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
