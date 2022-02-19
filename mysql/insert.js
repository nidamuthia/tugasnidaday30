const database = require("../config/database");

const dataPetCategory = [{ name: "Dog" }, { name: "Cat" }, { name: "Rabbit" }, { name: "Frog" }];

dataPetCategory.forEach((value) => {
  const insertQuery = `INSERT INTO pet_category (name) VALUES (?);`;

  database.query(insertQuery, [value.name], (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log(`Data pet_category: "${value.name}" inserted!`);
    }
  });
});


dataPetCategory.forEach((value) => {
  const insertQuery = `INSERT INTO pet_category (name) VALUES (?);`;

  database.query(insertQuery, [value.name], (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log(`Data pet_category: "${value.name}" inserted!`);
    }
  });
});

const dataPet = [
  {
    category_id: 1,
    name: "Poodle",
    status: "available",
    quantity: 4,
  },
  {
    category_id: 1,
    name: "Husky Siberia",
    status: "available",
    quantity: 4,
  },
  {
    category_id: 1,
    name: "Buldog",
    status: "available",
    quantity: 2,
  },
  {
    category_id: 1,
    name: "Cihuahua",
    status: "available",
    quantity: 10,
  },
  {
    category_id: 2,
    name: "Ragdoll",
    status: "available",
    quantity: 14,
  },
  {
    category_id: 2,
    name: "Persian",
    status: "available",
    quantity: 10,
  },
  {
    category_id: 2,
    name: "Siamese",
    status: "available",
    quantity: 15,
  },
  {
    category_id: 2,
    name: "Sphynxes",
    status: "available",
    quantity: 12,
  },
  {
    category_id: 3,
    name: "Cashmere Lop",
    status: "available",
    quantity: 20,
  },
{
  category_id: 3,
  name: "Himalaya",
  status: "available",
  quantity: 10,
},
];

dataPet.forEach((value) => {
  const insertQuery = `INSERT INTO pet (category_id, name, status, quantity) VALUES (?, ?, ?, ?);`;

  database.query(
    insertQuery,
    [value.category_id, value.name, value.status, value.quantity],
    (err, result) => {
      if (err) {
        throw err;
      } else {
        console.log(`Data pet: "${value.name}" inserted!`);
      }
    }
  );
});

const dataStoreOrder = [
	{
    pet_id: 1,
    quantity: 1,
	ship_date: "2022-02-19 00:00:01",
	status:"placed",
	complete:1,
  },
  {
    pet_id: 3,
    quantity: 1,
	ship_date: "2022-02-20 01:00:01",
	status:"placed",
	complete:0,
  },
  {
    pet_id: 5,
    quantity: 1,
	ship_date: "2022-02-20 00:00:05",
	status:"placed",
	complete:0,
  },
];

dataStoreOrder.forEach((value) => {
	const insertQuery = `INSERT INTO store_order (pet_id, quantity, ship_date, status, complete) VALUES (?, ?, ?, ?, ?);`;
  
	database.query(
	  insertQuery,
	  [value.pet_id, value.quantity, value.ship_date, value.status, value.complete],
	  (err, result) => {
		if (err) {
		  throw err;
		} else {
		  console.log(`Data store_id: "${value.status}" inserted!`);
		}
	  }
	);
  });
  
const dataUser = [
  {
    username: "dony",
    first_name: "andrean",
    last_name: "dony",
    email: "donydiny@gmail.com",
    password: "jager2345",
    phone: "0812456356",
  },
  {
    username: "lucinta",
    first_name: "lucinta",
    last_name: "luna",
    email: "moonluna@gmail.com",
    password: "qwijuy45",
    phone: "0856456971259",
  },
  {
    username: "indra",
    first_name: "Jeger",
    last_name: "Indra",
    email: "Naon@gmail.com",
    password: "q452fsdfa",
    phone: "08574132453",
  },
  {
    username: "Maya",
    first_name: "Jeger",
    last_name: "Maya",
    email: "Mayaaa@gmail.com",
    password: "q4634dfa",
    phone: "08574345653",
  },
  {
    username: "Lesti",
    first_name: "Jeger",
    last_name: "Lesti",
    email: "Lesti@gmail.com",
    password: "q4524564fa",
    phone: "08574164553",
  },
  {
    username: "tatang",
    first_name: "kusuma",
    last_name: "tatang",
    email: "tatangga@gmail.com",
    password: "q4474sdfa",
    phone: "081234532453",
  },
];

dataUser.forEach((value) => {
  const insertQuery = `INSERT INTO user (username, first_name, last_name, email, password, phone) VALUES (?, ?, ?, ?, ?, ?);`;

  database.query(
    insertQuery,
    [
      value.username,
      value.first_name,
      value.last_name,
      value.email,
      value.password,
      value.phone,
    ],
    (err, result) => {
      if (err) {
        throw err;
      } else {
        console.log(`Data user: "${value.username}" inserted!`);
      }
    }
  );
});