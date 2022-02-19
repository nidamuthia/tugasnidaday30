var mysql      = require('mysql');
var database = mysql.createConnection({
  host     :'localhost',
  user     : 'root',
  password : '',
  database : 'nidaday30tugas',
  port     : '3306'
});

module.exports = database