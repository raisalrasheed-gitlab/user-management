const express = require('express');

const { addUser } = require('../../controllers/user-control');
const router = express.Router();

router.post('/', addUser);

module.exports = router;
