const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Shopping: Home' });
});

/* GET /register. */
router.get('/register', function(req, res, next) {
  res.send('GET /register');
});

/* POST /register. */
router.post('/register', function(req, res, next) {
  res.send('POST /register');
});

/* GET /login */
router.get('/login', function(req, res, next) {
  res.send('GET /login');
});

/* POST /login */
router.post('/login', function(req, res, next) {
  res.send('POST /login');
});

/* GET /profile */
router.get('/profile', function(req, res, next) {
  res.send('GET /profile');
});

/* PUT /profile/user_id */
router.put('/profile/:user_id',function(req,res,next){
  res.send('PUT /profile/:user_id');
});

/* GET /forgot-pw */
router.get('/forgot-pw', function(req, res, next) {
  res.send('GET /forgot-pw');
});

/* PUT /forgot-pw */
router.put('/forgot-pw', function(req, res, next) {
  res.send('PUT /forgot-pw');
});

/* GET /reset-pw */
router.get('/reset-pw/:token', function(req, res, next) {
  res.send('GET /forgot-pw/:token');
});

/* PUT /reset-pw */
router.put('/reset-pw/:token', function(req, res, next) {
  res.send('PUT /forgot-pw/:token');
});

module.exports = router;
