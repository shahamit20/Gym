var express = require('express');
var router = express.Router();
const data = require('./data')
const ownplan = require('./ownplan')


router.use('/food_calorie', data)
router.use('/ownplan', ownplan)

router.post("/", (req, res) => {
  console.log("Frontend se data aaya:", req.body);
  res.send("Backend ne data receive kar liya");
});

module.exports = router;
