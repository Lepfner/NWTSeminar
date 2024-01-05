const mongoose = require('mongoose');

const chocolateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
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