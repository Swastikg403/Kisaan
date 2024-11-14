// server/routes/farmers.js

const express = require('express');
const router = express.Router();
const Crop = require('../models/Crop');

// Endpoint to add a crop
router.post('/add-crop', async (req, res) => {
  const { name, quantity, price } = req.body;

  try {
    const newCrop = new Crop({ name, quantity, price });
    await newCrop.save();
    res.json({ message: 'Crop added successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding crop' });
  }
});

// Endpoint to get all crops
router.get('/crops', async (req, res) => {
  try {
    const crops = await Crop.find();
    res.json(crops);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving crops' });
  }
});

module.exports = router;