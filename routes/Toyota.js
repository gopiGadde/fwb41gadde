var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Toyota', { title: 'Search Results by Toyota' });
});

module.exports = router;
