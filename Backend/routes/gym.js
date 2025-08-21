var express = require('express');
var router = express.Router();
var addgym = require("./addgym")
const gym = require('../model/gymdata');

router.use("/addgym", addgym)


router.get('/', async (req, res) => {
    try {
        const gyms = await gym.find().sort({ createdAt: -1 }); // Get all gyms from DB
        res.status(200).json(gyms);    // Send to frontend
        console.log(gyms)
    } catch (err) {
        console.error("❌ Error fetching gyms:", err);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
