const express = require('express');
const router = express.Router();
const getProfile = require('../controllers/profile');
const handleDisconnect = require('../controllers/handleDisconnect')
const updateProfile = require('../controllers/updateProfile')

router.route('/').get(getProfile);
router.route('/disconnect').patch(handleDisconnect);
router.route('/update').patch(updateProfile)

module.exports = router;