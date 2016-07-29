var mongoose = require('mongoose');

mongoose.connect('mongodb://mongo/test');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

var visitSchema = mongoose.Schema({
      date: String
  });

module.exports.Visit = mongoose.model('Visit', visitSchema);


db.once('open', function() {
  // we're connected!
  console.log('Funciona! :D');

});
