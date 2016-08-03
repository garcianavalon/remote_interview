var db = require('./mongo.js');

module.exports.visits = function(req, res, next) {
    
    // extraer info
    const currentVisit = new db.Visit({ip: req.ip});

    // guardarla en mongo
    currentVisit.save(function(err, currentVisit){
      if (err) return console.error(err);
      console.log(currentVisit);

      renderCount(res);
    });

};

module.exports.spy = function(req, res, next) {

    renderCount(res, 'spy');
  
};

function renderCount(res, template) {

  // setear el contador
  db.Visit.count(function(err, c) {
    res.render(template || 'index', { count: c || 0 });
  });

}