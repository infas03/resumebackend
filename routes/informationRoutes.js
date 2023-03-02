const express = require("express");
const Information = require("../controllers/informationController.js");

const router = express.Router();

// Create a new user
router.post("/create", Information.addDetails);
//view all information
router.get("/view/:email", Information.viewByEmail);

router.put("/update/:email", Information.updateDetails);

module.exports = router;