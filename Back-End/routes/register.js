const express = require('express');
const router = express.Router();
// importing the controller
const {registerUser,getUsers} = require('../controllers/register');

// routes
router.route('/').post(registerUser).get(getUsers);

module.exports = router;