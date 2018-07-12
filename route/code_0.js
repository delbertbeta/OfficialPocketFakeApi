const express = require('express');
const router = express.Router();

const route = router.use((req, res, next) => {
    res.send({
        code: 0
    })
})

module.exports = route;