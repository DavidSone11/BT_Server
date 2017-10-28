


var usermodel = require("../models/user");


var userobj = {

    createUser: function (req, res) {
        var userobj = {
            username: req.body.username,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            password: req.body.password,
            email: req.body.email,
        };

        usermodel.create(userobj, function (err, result) {

            if (err)
                throw err;
            else {
                res.json({
                    message: 'user created successfully'
                });
            }

        });
    },

    deleteUser: function (req, res) {

        var id = req.query.id;

        usermodel.remove({ _id: id }, function (err) {
            if (err) {
                throw err;
            }
            else {
                res.status(201);
                res.json({
                    'status': 200,
                    'message': 'success deleted User!!!!'
                });
            }
        });


    }

};

module.exports = userobj;