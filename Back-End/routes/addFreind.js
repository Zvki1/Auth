const express = require('express');
const router = express.Router();
const searchUser = require('../controllers/addFreind');

router.route('/').get(searchUser);

module.exports = router;