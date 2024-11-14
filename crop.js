// server/models/Crop.js

const mongoose = require('mongoose');

const CropSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  price: Number
});

module.exports = mongoose.model('Crop', CropSchema);