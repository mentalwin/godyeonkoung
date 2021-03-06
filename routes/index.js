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

router.get('/tofu2', function(req, res, next){
    res.render('tofu2');
});
router.get('/tofu3', function(req, res, next){
    res.render('tofu3');
});
router.get('/testcolor', function(req, res, next){
    res.render('threecolor.ejs')  ;
});
router.get('/redirect', function(req, res, next){
    res.render('redirect.ejs');
});
router.get('/tofu/:idx', function(req, res, next){
    var routeIdx = req.params.idx;
    res.render('result'+ routeIdx + '.ejs');
});
module.exports = router;
