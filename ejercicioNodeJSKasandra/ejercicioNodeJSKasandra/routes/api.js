const router = require('express').Router();
/* const { serverlogs } = require('../helpers/middlewares'); */

router.use('/clientes', require('./api/cliente'));
router.use('/hoteles', require('./api/hotel'));
router.use('/viajes', require('./api/viaje'));

module.exports = router;