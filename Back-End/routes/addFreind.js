const express = require('express');
const router = express.Router();
const {searchUser,addUser} = require('../controllers/addFreind');

router.route('/').get(searchUser).patch(addUser);

module.exports = router;