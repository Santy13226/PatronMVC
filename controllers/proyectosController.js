// controllers/proyectosController.js
const Proyecto = require('../models/proyecto');

let proyectos = [];

exports.proyectosHome = (req, res) => {
    res.render('index', { title: 'Inicio', proyectos });
};

exports.proyectosNosotros = (req, res) => {
    res.render('nosotros', { title: 'Nosotros' });
};

exports.agregarProyecto = (req, res) => {
    // Verificar si req.body existe antes de desestructurar
    if (req.body) {
        const { nombre, descripcion } = req.body;
        const nuevoProyecto = new Proyecto(nombre, descripcion);
        proyectos.push(nuevoProyecto);

        // Imprimir los datos en la consola del navegador
        console.log('Nuevo Proyecto Agregado:', { nombre, descripcion });
    }

    res.redirect('/');
};
