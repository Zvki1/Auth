const express = require('express');
const router = express.Router();
const getProfile = require('../controllers/profile');
const handleDisconnect = require('../controllers/handleDisconnect')
router.route('/').get(getProfile);
router.route('/disconnect').patch(handleDisconnect);


module.exports = router;