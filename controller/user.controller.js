const database = require("../config/database");

// add new user
const addUser = (req, res) => {
  let userdata = {
   username: req.body.username,
   first_name: req.body.first_name,
   last_name:req.body.last_name,
   email: req.body.email,
   password: req.body.password,
   phone:req.body.phone
  };

if (!userdata.username){
res.send({message:'username is required'})
} else {
  let insertQuery = `INSERT INTO user SET ?;`;
  database.query(insertQuery, userdata, function (error, results, fields) {
    if (error) throw error;
  });
  res.send({ message: 'user has been inserted', userdata: userdata});
}
 };
  
// get user by username
const getUser = (req, res) => {
  const username = req.params.username;

  const selectQuery = `SELECT username, first_name, last_name, email, phone FROM user WHERE username = ?;`;

    database.query(selectQuery, username, (error, results) => {
      if (error) {
        res.status(500).json(error);
      } else {
        res.status(200).json(results);
      }
    });
  };

// update existing user
const updateUser = (req, res) => {

  const userObj = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
  };
  const username= req.params.username;

  let updateQuery = `UPDATE user SET ? WHERE username= ${username};`;
  database.query(updateQuery, userObj, function (error, results, fields) {
    if (error) throw error;
  });
  res.send({ message: 'User has been updated', userObj : userObj});
};



// delete exiting user
const deleteUser = (req, res) => {
  const username = req.params.username;
  const deleteQuery = `DELETE FROM user WHERE username = ${username};`;


  database.query(deleteQuery, username, (error, results) => {
    if (error) {
      res.status(500).json(error);
    } else {
        res.status(200).json(results);
      }
    });
  };
  


module.exports = {
  addUser,
  getUser,
  updateUser,
  deleteUser,
};
