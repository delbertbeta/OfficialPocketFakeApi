const express = require('express');
const router = express.Router();

const route = router.use((req, res, next) => {
    res.send({
        openId: 'hello'
    })
})

module.exports = route;