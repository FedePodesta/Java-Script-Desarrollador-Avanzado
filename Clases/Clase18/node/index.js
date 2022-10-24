const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const api = require('./api/api.router');

app.use((req, res, next) => {
  req.data = {
    usuarios: [
      { nombre: 'jonathan', clave: '1234', id: 1 },
      { nombre: 'carlos', clave: '1234', id: 2 },
      { nombre: 'juan', clave: '1234', id: 3 },
      { nombre: 'pepe', clave: '1234', id: 4 }
    ],
    posts: [
      { id: 1, userId: 1, titulo: 'Post 01 Usuario 01', mensaje: 'Este post habla sobre HTML5' },
      { id: 2, userId: 1, titulo: 'Post 02 Usuario 01', mensaje: 'Este post habla sobre CSS3' },
      { id: 3, userId: 1, titulo: 'Post 03 Usuario 01', mensaje: 'Este post habla sobre Javascript' },
      { id: 4, userId: 1, titulo: 'Post 04 Usuario 01', mensaje: 'Este post habla sobre Node' },
      { id: 5, userId: 1, titulo: 'Post 05 Usuario 01', mensaje: 'Este post habla sobre Express' },
      { id: 6, userId: 2, titulo: 'Post 01 Usuario 02', mensaje: 'Este post habla sobre Angular' },
      { id: 7, userId: 3, titulo: 'Post 01 Usuario 03', mensaje: 'Este post habla sobre React' },
      { id: 8, userId: 3, titulo: 'Post 02 Usuario 03', mensaje: 'Este post habla sobre Vue' },
    ],
    comentarios: [
      { id: 1, userId: 2, postId: 1, texto: 'No opino igual' },
      { id: 1, userId: 3, postId: 1, texto: 'Excelente articulo' },
    ]
  }

  next();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log('URL: ', req.url);
  next();
});

app.use(express.static('public'));

app.use('/api', api);

app.get('/', (req, res) => {
  res.send('index.html');
});

app.listen(3000, () => {
  console.log('Running at port 3000');
})