const express = require('express');
const router = express.Router();

const createAlert = require('../controllers/createAlert');
const getAlerts = require('../controllers/getAlerts');

router.route('/').post(createAlert).get(getAlerts);

module.exports = router;