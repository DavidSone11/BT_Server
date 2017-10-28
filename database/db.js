var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/btserverdb', function(error) {
    if (error) {
        console.log('Error in Connection', error);
    } else {
        console.log('db Connected Successfully');
    }
});

