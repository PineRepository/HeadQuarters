var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

});

router.get('/q/*', function(req, res, next) {
  var path = req.params[0] ? req.params[0] : 'index.html';
  res.sendFile(path, {root: './lab/Quadraralho/public'});
});

module.exports = router;
