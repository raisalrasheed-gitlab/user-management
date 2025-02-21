const express = require('express');

const {
  addUser,
  deleteUser,
  getAllUsers,
} = require('../../controllers/user-control');
const router = express.Router();

router.get('/', getAllUsers);
router.post('/', addUser);
router.delete('/:id', deleteUser);

module.exports = router;
