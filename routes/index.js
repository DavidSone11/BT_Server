var express = require('express');
var router = express.Router();
var roleRoute = require('./role');
var userRoute = require('./user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



// routes for role
router.post('/role/create',roleRoute.createRole);




// routes for user
router.post('/user/create',userRoute.createUser);
router.delete('/user/create/:id',userRoute.deleteUser);




module.exports = router;
