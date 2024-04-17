const express = require('express');
const router = express.Router();
const getPublicGroups = require('../controllers/getPublicGroups');

router.route('/').get(getPublicGroups);



module.exports = router;