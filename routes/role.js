var rolemodel = require("../models/role");


module.exports = {

    createRole: function (req, res) {

        var roleCode = req.body.rodecode;

        rolemodel.create(roleCode, function (err, result) {

            if (err)
                throw err;
            else {
                res.json({
                    message: 'role created successfully'
                });
            }

        });



    }
};