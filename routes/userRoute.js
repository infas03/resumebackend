const express = require("express");
const User = require("../controllers/userController.js");

const router = express.Router();

// Create a new user
router.post("/create", User.signup);
// Login to user
router.post("/login", User.login);

module.exports = router;