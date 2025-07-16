var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'This is schedule Page data from backend' });
});

module.exports = router;
