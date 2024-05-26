const express = require('express');
const router = express.Router();
const { getNotifications, archiveNotification } = require('../controllers/Notifications');

router.route('/').get(getNotifications).patch(archiveNotification)

module.exports = router;