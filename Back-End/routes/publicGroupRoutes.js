const express = require('express');
const router = express.Router();

const deleteGroup = require('../controllers/deleteGroup');
const createGroup = require('../controllers/createGroup');
const getGroup = require('../controllers/getGroup');
const addGroupMembers = require('../controllers/addGroupMembers');
const deleteGroupMember = require('../controllers/deleteGroupMember');
const editGroup = require('../controllers/editGroup');
router.route('/').post(createGroup).delete(deleteGroup).get(getGroup).patch(addGroupMembers);
router.route('/groupMembers').patch(deleteGroupMember)
router.route('/editGroup').patch(editGroup)

module.exports = router;

