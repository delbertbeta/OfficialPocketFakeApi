const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  res.send({
    "code": 0
  })
  global.addedCatagory = true;
})

module.exports = router;