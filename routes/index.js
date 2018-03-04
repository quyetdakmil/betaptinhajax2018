var express = require('express');
var router = express.Router();


/* GET home page. */

router.get('/', function(req, res, next) {
 var dau = req.query.dau;
 var num1 = parseFloat(req.query.num1);
 var num2 = parseFloat(req.query.num2);
 
 var kq;

 switch(dau) {
   case "+":
   kq = num1+num2;
   break;
   case "-":
   kq = num1-num2;
   break;
   case "*":
   kq = num1*num2;
   break;
   case "/":
   kq = num1/num2;
   break;
 }

 res.render('index', { SoA: num1,
   SoB: num2,
   kq: kq });
});

module.exports = router;
