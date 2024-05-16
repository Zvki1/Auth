const express = require('express');
const router = express.Router();

const createTicket = require("../controllers/createTickets");
const getTickets =require ("../controllers/getTickets")

router.route('/').post(createTicket).get(getTickets);

module.exports = router;