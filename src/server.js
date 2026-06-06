const e = require('express');
const express = require('express');

const app = express();

const productos = [
  { id: 1, nombre: 'Laptop', categoria: 'electronica' },
  { id: 2, nombre: 'Silla', categoria: 'muebles' },
  { id: 3, nombre: 'Monitor', categoria: 'electronica' },
];

const usuarios = [
  { id: 1, nombre: 'Juan' },
  { id: 2, nombre: 'Maria' },
  { id: 3, nombre: 'Pedro' },
];

// TODO: Define tus rutas aquí
const router = express.Router(); // Crea un router para manejar las rutas de la API

// Rutas para productos
router.get('/productos', (req, res) => {
  //filtro cuando se ingresa un query string con el nombre de la categoría
  const categoria = req.query.categoria;
  if (categoria) {
    const productosFiltrados = productos.filter((p) => p.categoria === categoria); // Filtra los productos por categoría si se proporciona el query string
    res.json(productosFiltrados);
  } else {
    res.json(productos);
  }
});

router.get('/usuarios', (req, res) => {
  res.json(usuarios);
});
router.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

router.get('/usuarios/:id', (req, res) => {
  // filtro cuando se ingresa un id por parámetro de ruta
  const id = parseInt(req.params.id);
  const usuario = usuarios.find((u) => u.id === id);
  if (usuario) {
    res.json(usuario);
  } else {
    res.status(404).json({ error: 'Usuario no encontrado.' });
  }
});

router.get('/', (req, res) => {
  res.send('Bienvenid@s a nuestro servidor Express!');
});

app.use('/', router); // Agrega el router a la aplicación, con el prefijo '/'

app.use((req, res) => {
  res.status(404).json({ error: 'No se ha encontrado la ruta ingresada.' });
});
module.exports = app;
