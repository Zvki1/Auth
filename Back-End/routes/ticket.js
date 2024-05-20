const express = require('express');
const router = express.Router();

const getTicket = require('../controllers/getTicket');
const postRemarque = require('../controllers/postRemarque');
router.route('/').get(getTicket).post(postRemarque);


module.exports = router;