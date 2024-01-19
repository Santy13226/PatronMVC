const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser'); // Agregado

const app = express();

// Donde cargar archivos estaticos
app.use(express.static('public'));

// Habilitar body-parser
app.use(bodyParser.urlencoded({ extended: true })); // Agregado

// Habilitar Pug
app.set('view engine', 'pug');
// Añadir la carpeta de las vistas
app.set('views', path.join(__dirname, './views'));

app.use('/', routes());

app.listen(3000);
