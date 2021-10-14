const db = require('../db');

module.exports.index = function(req, res) {
  const pageNumber = parseInt(req.query.page) || 1; // n
  const pageSize = 8; // x

  const start = (pageNumber - 1) * pageSize;
  const end = pageNumber * pageSize;

  const drop = (pageNumber -1 ) * pageSize;

  res.render('products/index', {
    // products: db.get('products').value().slice(start, end)
    products: db.get('products').drop(drop).take(pageSize).value()
  });
};

