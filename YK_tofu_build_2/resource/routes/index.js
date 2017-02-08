var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/tofu', function(req, res, next){
    res.render('tofu');
});

router.get('/testing', function(req, res, next) {
    res.render('testing');
});
module.exports = router;
