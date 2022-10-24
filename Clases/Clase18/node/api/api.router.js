const express = require('express');
const router = express.Router();

router.get('/posts', (req, res) => {
  console.log('QUERY: ', req.query);
  // El Parametro del userId llega en req.query (req.query.userId)
  const userId = Number(req.query.userId);

  const posts = req.data.posts.filter(post => {
    return post.userId === userId;
  })

  res.json(posts);
});

router.post('/login', (req, res) => {
  console.log('BODY: ', req.body);
  const encontrado = req.data.usuarios.find(usuario => {
    return usuario.nombre === req.body.usuario && usuario.clave === req.body.clave;
  });

  if (encontrado) {
    res.json(encontrado);
  } else {
    res.status(401).end();
  }  
});

// router.get('/comments', (req, res) => {
//   const postid = Number(req.query.postid);

//   const comentarios = req.data.comentarios.filter(c => c.postId === postid);

//   res.json(comentarios);
// });

router.get('/comments/:postid', (req, res) => {
  console.log('Params: ', req.params);

  const postid = Number(req.params.postid);

  const comentarios = req.data.comentarios.filter(c => c.postId === postid);

  res.json(comentarios);
});

// router.get('/users', (req, res) => {}) <--- obtener todos los usuarios
// router.post('/users', (req, res) => {}) <--- crear un usuario

// router.get('/users/:id', (req, res) => {}) <--- obtener el usuario req.params.id
// router.delete('/users/:id', (req, res) => {}) <-- eliminar el usuario req.params.id
// router.put('/users/:id', (req, res) => {}) <--- reemplazar el usuario req.params.id
// router.patch('/users/:id', (req, res) => {}) <--- actualizar el usuario req.params.id

module.exports = router;
