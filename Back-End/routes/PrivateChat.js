const express = require('express');
const router = express.Router();

const freindInfos = require('../controllers/PrivateChat');

router.route('/').get(freindInfos);

module.exports = router;