const router = require('express').Router();
const statusRoutes = require('./statusRoutes');
const userRoutes = require('./userRoutes');

router.use('/statuses', statusRoutes);
router.use('/users',userRoutes);

module.exports = router;
