const express = require('express');
const router = express.Router();

const generalMessages = require('../controllers/generalMessages');

router.route('/').get(generalMessages);
module.exports = router;