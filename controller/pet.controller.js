const database = require("../config/database");

const getAllPetData = (req, res) => {
  const selectQuery = `SELECT p.id, pc.name AS category, p.name, p.status, p.quantity FROM pet as p JOIN pet_category as pc ON p.category_id = pc.id;`;

  database.query(selectQuery, (error, results) => {
    if (error) {
      res.status(500).json(error);
    } else {
      res.status(200).json(results);
    }
  });
};

// get pet data by id
const getPetDataById = (req, res) => {
  const id = parseInt(req.params.id);
  const selectQuery = `SELECT p.id, pc.name AS category, p.name, p.status, p.quantity FROM pet as p JOIN pet_category as pc ON p.category_id = pc.id WHERE p.id = ?;`
  database.query(selectQuery, [id], (error, results) => {
    if (error) {
      res.status(500).json(error);
    } else {
      res.status(200).json(results);
    }
  });
};

// get pet data by status
const getPetDataByStatus = (req, res) => {
  const status = req.query.status;
  const selectQuery = `SELECT p.id, pc.name AS category, p.name, p.status, p.quantity FROM pet as p JOIN pet_category as pc ON p.category_id = pc.id WHERE p.status = ?;`;

  database.query(selectQuery, [status], (error, results) => {
    if (error) {
      res.status(500).json(error);
    } else {
        res.status(200).json(results);
      }
    });
  };
  
    // add new pet data
   const addPetData = (req, res) => {
    let petdata = {
     category_id: req.body.category_id,
     name: req.body.name,
      status: req.body.status,
      quantity: req.body.quantity,
      id: parseInt(req.params.id)
    };
if (!petdata.name){
  res.send({message:'name is required'})
} else {
    let insertQuery = `INSERT INTO pet SET ?;`;
    database.query(insertQuery, petdata, function (error, results, fields) {
      if (error) throw error;
    });
    res.send({ message: 'Data has been inserted', petdata: petdata});
  }
   };

//update pet data

const updatePetData = (req, res) => {
  let dataupdate = {
   category_id: req.body.category_id,
   name: req.body.name,
   status: req.body.status,
   quantity: req.body.quantity,
  };

  let id= req.params.id;

  let updateQuery = `UPDATE pet SET ? WHERE id= ${id};`;
  database.query(updateQuery, dataupdate, function (error, results, fields) {
    if (error) throw error;
  });
  res.send({ message: 'Data has been updated', dataupdate : dataupdate});
};

// delete existing pet data
const deletePetData = (req, res) => {
  const id = req.body.id;
  const deleteQuery = `DELETE FROM pet WHERE id = ${id};`;


  database.query(deleteQuery, [id], (error, results) => {
    if (error) {
      res.status(500).json(error);
    } else {
        res.status(200).json(results);
      }
    });
  };
  

module.exports = {
  getAllPetData,
  getPetDataById,
  getPetDataByStatus,
  addPetData,
  updatePetData,
  deletePetData
}