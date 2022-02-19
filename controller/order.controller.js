const database = require("../config/database");
const moment = require("moment");

const date = new Date();
const getHours = date.getHours();

// post store order
const addStoreOrder = (req, res) => {
  let orderdata = {
   pet_id: req.body.pet_id,
   quantity: req.body.quantity,
   ship_date:req.body.ship_date,
   status: req.body.status,
   complete: req.body.complete
  };

if (!orderdata.pet_id){
res.send({message:'pet_id is required'})
} else {
  let insertQuery = `INSERT INTO store_order SET ?;`;
  database.query(insertQuery, orderdata, function (error, results, fields) {
    if (error) throw error;
  });
  res.send({ message: 'order has been inserted', orderdata: orderdata});
}
 };
  

// get store order by id
const getStoreOrder = (req, res) => {
  const id = parseInt(req.params.id);  
  const selectQuery = `SELECT so.id, p.name AS pet_name, so.quantity, so.ship_date, so.status, so.complete FROM store_order AS so JOIN pet AS p ON so.pet_id = p.id WHERE so.id = ?;`;

  database.query(selectQuery, [id], (error, results) => {
    if (error) {
      res.status(500).json(error);
    } else {
      res.status(200).json(results);
    }
  });
};

// delete store order by id
const deleteStoreOrder = (req, res) => {
  const id = req.body.id;
  const deleteQuery = `DELETE FROM store_order WHERE id = ${id};`;


  database.query(deleteQuery, [id], (error, results) => {
    if (error) {
      res.status(500).json(error);
    } else {
        res.status(200).json(results);
      }
    });
  };
  
module.exports = {
  addStoreOrder,
  getStoreOrder,
  deleteStoreOrder,
};
