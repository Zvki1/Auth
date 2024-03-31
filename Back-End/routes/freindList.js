const express = require('express');
const router = express.Router();

const getFreindList = require('../controllers/freindList');

router.route('/').get(getFreindList)


module.exports = router;