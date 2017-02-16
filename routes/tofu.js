var express = require('express');
var router = express.Router();

router.get(':idx', function(req, res, next){
    res.render('result' + req.params.idx + '.ejs');
});

module.exports = router;
