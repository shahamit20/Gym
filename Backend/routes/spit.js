const express = require('express');
const route = express.Router(); // ✅ FIXED
const split = require("../model/spiltdb");
const user = require("../model/users")

route.post('/', async (req, res) => {

  try {
    const { userId, splitName, days } = req.body;

    // Save each day as a separate document
    const savedDays = await Promise.all(
      days.map(async (day) => {
        const newDay = new split({
          userId,
          splitName,
          days
        });
        return await newDay.save();
      })
    );

    res.status(200).json({ message: 'All split days saved successfully!', data: savedDays });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error saving split' });
  }
});

module.exports = route;
