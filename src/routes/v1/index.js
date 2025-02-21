const express = require('express');
const UserRoutes = require('../v1/userRoutes');
const router = express.Router();

router.use('/users', UserRoutes);
module.exports = router;
