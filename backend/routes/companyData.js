const express = require("express");
const router = express.Router();
const { validateJWT } = require("../middleware/verifyJWT");
const {
  getAllCompanyData,
  createCompanyData,
  editCompanyData,
  deleteCompanyData,
} = require("../controllers/editAllData");

router.get("/", validateJWT, getAllCompanyData); // To get all companies
router.post("/", validateJWT, createCompanyData); // To create new company
router.put("/:id", validateJWT, editCompanyData); // To update existing company
router.delete("/:id", validateJWT, deleteCompanyData); // To delete a company

module.exports = router;
