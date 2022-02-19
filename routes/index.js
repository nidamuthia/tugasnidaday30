const express = require("express");
const petRoutes = require("../controller/pet.controller");
const storeOrderRoutes = require("../controller/order.controller");
const userRoutes = require("../controller/user.controller");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Pet Store API Server.",
  });
});

router.get("/pet", petRoutes.getAllPetData);
router.get("/pet/findByStatus", petRoutes.getPetDataByStatus);
router.get("/pet/:id", petRoutes.getPetDataById);
router.post("/pet", petRoutes.addPetData);
router.put("/pet/:id", petRoutes.updatePetData);
router.delete("/pet/:id", petRoutes.deletePetData);

router.post("/store/order", storeOrderRoutes.addStoreOrder);
router.get("/store/order/:id", storeOrderRoutes.getStoreOrder);
router.delete("/store/order/:id", storeOrderRoutes.deleteStoreOrder);

router.post("/user", userRoutes.addUser);
router.get("/user/:username", userRoutes.getUser);
router.put("/user/:username", userRoutes.updateUser);
router.delete("/user/:username", userRoutes.deleteUser);

module.exports = router;



