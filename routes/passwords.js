var bcrypt = require('bcrypt');
var Authentication = require('../models/security');
var mongoose = require('mongoose');

exports.pwmanager = function (req, res) {
	res.render('pwmanager', {title: 'Password Manager'});
}

exports.post = function (req, res) {
	console.log(req.body);
	var pw = req.body.password;
	var un = req.body.username;

	var auth = Authentication.findOne({name: req.body.name}).exec(function (err, data) {
		if (err) {
			res.redirect('/');
		} else if (!data) {
			bcrypt.genSalt(10, function (err, salt) {
				bcrypt.hash(pw, salt, function (err, hash) {
					var user = new Authentication({
						name: un,
						password: hash
					});
					user.save(function (err) {
						if (err) {
							res.redirect('/');
						} else {
							res.redirect('/pwview');
						}
					})
				})
			})
		} else {
			res.redirect('/');
		}
	});

}

exports.view = function(req, res) {

	var all = Authentication.find({}).sort('username').exec(function (err, response) {
		if (err) {
			console.log("Error finding all authenticated users", err);
		} else {
			res.send(response);
		}
	});

};

exports.authdelete = function(req, res) {
	var authdelete = Authentication.find({}).remove({}, function (err) {
		res.redirect('/pwview');
	});
};


// function login(req, res, user) {
//     req.session.username = req.body.username;
//     return res.redirect('/');
// }