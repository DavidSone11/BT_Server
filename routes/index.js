var express = require('express');
var router = express.Router();
var roleRoute = require('./role');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



// routes for role
router.post('/role',roleRoute.createRole);




// routes for user




module.exports = router;
