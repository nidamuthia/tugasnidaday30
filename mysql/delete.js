const database = require('../config/database') 

let deletepetcategoryQuery = `DELETE FROM pet_category WHERE id = ?`
let data = [4]
database.query(deletepetcategoryQuery, data, function (err, deleted) {
  if (err) throw err;
  console.log(deleted);
});

let deletepetQuery = `DELETE FROM pet WHERE id = ?`
let dataPet = [10]
database.query(deletepetQuery, dataPet, function (err, deleted) {
  if (err) throw err;
  console.log(deleted);
});

let deletestoreorderQuery = `DELETE FROM store_order WHERE id = ?`
let dataorder = [2,3]
database.query(deletestoreorderQuery, dataorder, function (err, deleted) {
  if (err) throw err;
  console.log(deleted);
});

let deleteuserQuery = `DELETE FROM user WHERE id = ?`
let datauser = [6]
database.query(deleteuserQuery, datauser, function (err, deleted) {
  if (err) throw err;
  console.log(deleted);
});
