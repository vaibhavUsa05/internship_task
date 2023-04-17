const express = require("express");
const router = express.Router();
const services = require("../controllers/AddProducts");


router.post("/addProducts", services.AddProductController);


router.get("/getAllProducts",services.GetAllProductsController);



module.exports = router;