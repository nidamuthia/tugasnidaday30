const database = require('../config/database');

let updatepetQuery = `UPDATE pet SET quantity=? WHERE id=?`;
let datapet = [3,1]

database.query(updatepetQuery, datapet, function (err, updated) {
    if (err) throw err;
    console.log(updated);
});


let updateuserQuery = `UPDATE user SET username=? WHERE id=?`;
let datauser = ["Maimunah",5 ]

database.query(updateuserQuery, datauser, function (err, updated) {
  if (err) throw err;
  console.log(updated);
});