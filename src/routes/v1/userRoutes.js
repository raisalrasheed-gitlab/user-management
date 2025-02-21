const express = require('express');

const { addUser, deleteUser } = require('../../controllers/user-control');
const router = express.Router();

router.post('/', addUser);
router.delete('/:id', deleteUser);

module.exports = router;
