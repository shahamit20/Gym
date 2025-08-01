const express = require('express');
const router = express.Router();
const main = require('../model/api'); // AI model import



router.post("/", async (req, res) => {
  const { formatted , amount } = req.body;

  if (!formatted) {
    return res.status(400).json({ error: "No food data received" });
  }

  console.log("✅ Frontend se formatted data mila:", formatted);

  // Call Gemini AI
  const calorie = await main(`Only give the number of calories in ${amount} grams of ${formatted}. Do not explain.`);

  if (calorie) {
    return res.json(calorie);
  } else {
    return res.status(500).json({ error: "❌ Gemini AI se response nahi mila" });
  }
});

module.exports = router;
