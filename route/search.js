const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    res.send({
      "code": 0,
      "data": [
          {
              "id": "SCUTgenie",
              "name": "华工小灯神",
              "face": "https://img01.sogoucdn.com/app/a/100520090/oIWsFtxxB3SfuEqY1UGHPh8rh-SM",
              "description": "我是小灯神，这是一个神奇的...",
              "subscribed": global.subscribed
          }
      ]
  })
})

module.exports = router;