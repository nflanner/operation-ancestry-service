const router = require('express').Router();
const operationRoutes = require('./operation-routes');

router.use('/operation-routes', operationRoutes);

module.exports = router;