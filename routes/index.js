// routes/index.js
const express = require('express');
const router = express.Router();
const proyectosController = require('../controllers/proyectosController');

module.exports = function () {
    router.get('/', proyectosController.proyectosHome);
    router.get('/nosotros', proyectosController.proyectosNosotros);

    // Nueva ruta para agregar proyectos
    router.post('/agregar-proyecto', proyectosController.agregarProyecto);

    return router;
};
