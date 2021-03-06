const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/basicnodeprojectsetup_developmentenv');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connection to mongodb'));

db.once('open', function() {
    console.log('Connected to database successfully');
});

module.exports = db;