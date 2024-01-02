const mongoose = require('mongoose');

const chocolateSchema = new mongoose.Schema({
  price: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String], // Assuming multiple ingredients in an array
    required: true,
  },
  manufacturer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Manufacturer',
    required: true,
  },
});

const Chocolate = mongoose.model('Chocolate', chocolateSchema);

module.exports = Chocolate;