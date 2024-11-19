
const mongoose = require('mongoose');

// Define the footballer schema
const footballerSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  position: { type: String, required: true },
  club: { type: String, required: true },
  country: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  imageUrl: { type: String, required: false } // Optional field
});

// Create and export the model
module.exports = mongoose.model('Footballer', footballerSchema);