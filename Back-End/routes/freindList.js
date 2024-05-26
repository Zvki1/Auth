const express = require('express');
const router = express.Router();

const getFreindList = require('../controllers/freindList');
const deletefreind = require('../controllers/deleteFreind');
router.route('/').get(getFreindList).patch(deletefreind);


module.exports = router;