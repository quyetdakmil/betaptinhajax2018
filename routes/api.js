var express = require('express');
var router = express.Router();


/* GET home page. */

router.get('/tinh', function(req, res, next) {
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
	var result =  {};
	result.result = kq;
	res.status(200).json(result);
});

module.exports = router;
