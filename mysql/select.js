const database = require('../config/database') 

let selectpetQuery = `SELECT * FROM pet`
database.query(selectpetQuery, function (error, results, fields) {
  if (error) throw error;
  console.log('Pet: ', results);
});

let selectpetcategoryQuery = `SELECT * FROM pet_category`
database.query(selectpetcategoryQuery, function (error, results, fields) {
  if (error) throw error;
  console.log('Pet Category: ', results);
});

let selectorderQuery = `SELECT * FROM store_order`
database.query(selectorderQuery, function (error, results, fields) {
  if (error) throw error;
  console.log('Store order: ', results);
});

let selectuserQuery = `SELECT * FROM user`
database.query(selectuserQuery, function (error, results, fields) {
  if (error) throw error;
  console.log('user: ', results);
});

let selectQuery = `SELECT * FROM user`
database.query(selectQuery, function (error, results, fields) {
  if (error) throw error;
  console.log('User: ', results);
});