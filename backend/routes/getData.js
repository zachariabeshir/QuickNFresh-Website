const express = require("express");
const router = express.Router();
const { validateJWT } = require("../middleware/verifyJWT");
const { presentData } = require("../controllers/presentCompanyData");

router.get("/", validateJWT, presentData);

module.exports = router;
