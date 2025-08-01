var express = require('express');
var router = express.Router();
var split = require('./spit')
const data = require('./data')



router.use("/split", split)
router.use('/food_calorie', data)
// router.use("/food_calorise",data)

// router.post('/', async (req, res)=>{
//   const data = await req.body;
//   console.log(data)
// })

router.post("/", (req, res) => {
  console.log("Frontend se data aaya:", req.body);
   // ✅ Yahan data dikhai dega
  res.send("Backend ne data receive kar liya");
});

module.exports = router;
