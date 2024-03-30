const express = require('express');
const router = express.Router();
const getFreindsList = require('../controllers/messages');

router.route('/').get(getFreindsList);

module.exports = router;