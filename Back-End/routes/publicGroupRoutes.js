const express = require('express');
const router = express.Router();

const deleteGroup = require('../controllers/deleteGroup');
const createGroup = require('../controllers/createGroup');
const getGroup = require('../controllers/getGroup');
const addGroupMembers = require('../controllers/addGroupMembers');

router.route('/').post(createGroup).delete(deleteGroup).get(getGroup).patch(addGroupMembers);

module.exports = router;

