const db = require('./models.js');
const socket = require('./socket.js');

/**
socket.notify -> notifies all spies new count
*/
module.exports.visits = function(req, res, next) {
  
    // extraer info
    const currentVisit = new db.Visit({ip: req.ip});

    // guardarla en mongo
    currentVisit.save(function(err, currentVisit){
      if (err) return console.error(err);
      console.log(currentVisit);

      db.Visit.count(function(err, c) {
        socket.notify(c);
      });
      renderCount(res);
    });

};

module.exports.spy = function(req, res, next) {

    renderCount(res);

  
};

function renderCount(res) {

  // setear el contador
  db.Visit.count(function(err, c) {
    res.render('index', { count: c || 0 });
  });

}