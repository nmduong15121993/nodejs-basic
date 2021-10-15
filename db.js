const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json')
const db = low(adapter)

// Set default data
db.defaults({ dataUsers: [], sessions: [] })
  .write();

module.exports = db;