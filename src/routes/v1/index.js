const express = require('express');
const UserRoutes = require('../v1/userRoutes');
const router = express.Router();

router.use('/user', UserRoutes);
module.exports = router;
