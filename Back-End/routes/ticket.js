const express = require('express');
const router = express.Router();

const getTicket = require('../controllers/getTicket');
const postRemarque = require('../controllers/postRemarque');
const finaliserTicket = require('../controllers/finaliserTicket');

router.route('/').get(getTicket).post(postRemarque).patch(finaliserTicket)


module.exports = router;