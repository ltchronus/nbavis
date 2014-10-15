var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET event page. */
router.get('/event', function(req, res) {
  res.render('event', { title: 'Express|Event' });
});

module.exports = router;
