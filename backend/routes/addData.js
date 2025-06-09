const express = require("express");
const router = express.Router();
const { addCompany } = require("../controllers/addCompany");

router.post("/", addCompany);

module.exports = router;
