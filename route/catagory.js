const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  if (process.addedCatagory) {
    res.send({
      code: 0,
      data: [{
        id: 'id',
        name: '我觉得还行'
      }]
    })
  } else {
    res.send({
      code: 0,
      data: []
    })
  }
})

module.exports = router;