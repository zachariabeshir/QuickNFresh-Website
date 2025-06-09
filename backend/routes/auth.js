const express = require("express");
const router = express.Router();
const { authenticateUser } = require("../controllers/userController");

router.post("/", authenticateUser);

module.exports = router;
