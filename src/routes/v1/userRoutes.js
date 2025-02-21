const express = require('express');

const {
  addUser,
  deleteUser,
  getAllUsers,
  editUser,
} = require('../../controllers/user-control');
const router = express.Router();

router.get('/', getAllUsers);
router.post('/', addUser);
router.delete('/:id', deleteUser);
router.patch('/:id', editUser);

module.exports = router;
