const express = require('express');
const router = express.Router();

/* GET posts index, /posts */
router.get('/', function(req, res, next) {
  res.send('/posts');
  //res.send('Shivams Shopping site');
});

/* GET posts new, /posts/new/ */
router.get('/new', function(req, res, next) {
  res.send('NEW /posts/new/');
  //res.send('Shivams Shopping site');
});

/* POST posts create, /posts */
router.post('/', function(req, res, next) {
  res.send('CREATE /posts');
  //res.send('Shivams Shopping site');
});

/* GET posts show, /posts/:id */
router.get('/:id', function(req, res, next) {
  res.send('SHOW /posts/:id');
  //res.send('Shivams Shopping site');
});

/* GET posts edit, /posts/:id/edit */
router.get('/:id/edit', function(req, res, next) {
  res.send('EDIT /posts/:id/edit');
  //res.send('Shivams Shopping site');
});

/* PUT posts update, /posts/:id */
router.put('/:id', function(req, res, next) {
  res.send(' UPDATE /posts/:id');
  //res.send('Shivams Shopping site');
});

/* DELETE posts destroy, /posts/:id */
router.delete('/:id', function(req, res, next) {
  res.send(' DELETE /posts/:id');
  //res.send('Shivams Shopping site');
});

module.exports = router;
