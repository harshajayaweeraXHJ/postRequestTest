var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
  res.send('test response');
});

router.post('/testpost', function(req, res, next) {
  res.send('testpost response');
});





module.exports = router;
