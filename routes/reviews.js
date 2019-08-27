const express = require('express');
const router = express.Router({mergeParams: true});

/* GET reviews index, /posts/:id/reviews */
router.get('/', function(req, res, next) {
  res.send('INDEX /posts/:id/reviews');
  //res.send('Shivams Shopping site');
});

/*
/* GET reviews new, /posts/:id/reviews/new/
router.get('/new', function(req, res, next) {
  res.send('NEW /posts/:id/reviews/new/');
  //res.send('Shivams Shopping site');
});
*/

/* POST reviews create, /posts/:id/reviews/ */
router.post('/', function(req, res, next) {
  res.send('CREATE /posts');
  //res.send('Shivams Shopping site');
});

/* GET reviews show, /posts/:id/reviews/:review_id */
router.get('/:review_id', function(req, res, next) {
  res.send('SHOW /posts/:id');
  //res.send('Shivams Shopping site');
});

/* GET posts edit, /reviews/:review_id/edit */
router.get('/:review_id/edit', function(req, res, next) {
  res.send('EDIT /reviews/:review_id/edit');
  //res.send('Shivams Shopping site');
});

/* PUT posts update, /reviews/:review_id
router.put('/:review_id', function(req, res, next) {
  res.send(' UPDATE /reviews/:review_id');
  //res.send('Shivams Shopping site');
});
*/

/* DELETE posts destroy, /reviews/:review_id */
router.delete('/:review_id/delete', function(req, res, next) {
  res.send(' DELETE /reviews/:review_id');
  //res.send('Shivams Shopping site');
});

module.exports = router;
