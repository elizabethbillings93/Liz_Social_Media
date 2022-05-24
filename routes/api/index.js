const router = require('express').Router();
const statusRoutes = require('./statusRoutes');
const userRoutes = require('./userRoutes');

router.use('/status', statusRoutes);
router.use('/user',userRoutes);

module.exports = router;
