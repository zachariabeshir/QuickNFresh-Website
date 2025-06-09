const Company = require("../model/Company");

const getAllCompanyData = async (req, res) => {
  try {
    const companies = await Company.find(); // Fetch all companies from the database
    return res.status(200).json({ data: companies });
  } catch (err) {
    console.error("Error fetching companies:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const createCompanyData = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      companyName,
      companyEmail,
      companyAddress,
      phoneNumber,
      messSubject,
      messBody,
    } = req.body;

    // Validation (basic example)
    if (
      !firstName ||
      !lastName ||
      !companyName ||
      !companyEmail ||
      !companyAddress ||
      !phoneNumber ||
      !messSubject ||
      !messBody
    ) {
      return res.status(400).json({ message: "Please Fill in All Fields." });
    }

    // Create new company
    const newCompany = new Company({
      firstName,
      lastName,
      companyName,
      companyEmail,
      companyAddress,
      phoneNumber,
      messSubject,
      messBody,
      dateSubmitted: new Date(),
    });

    // Save to the database
    await newCompany.save();

    return res
      .status(201)
      .json({ message: "Company created successfully", data: newCompany });
  } catch (err) {
    console.error("Error creating company:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const editCompanyData = async (req, res) => {
  try {
    const { id } = req.params; // Get company ID from route params
    const {
      firstName,
      lastName,
      companyName,
      companyEmail,
      companyAddress,
      phoneNumber,
      messSubject,
      messBody,
    } = req.body;

    // Check if any fields are missing
    if (
      !firstName ||
      !lastName ||
      !companyName ||
      !companyEmail ||
      !companyAddress ||
      !phoneNumber ||
      !messSubject ||
      !messBody
    ) {
      return res.status(400).json({ message: "Please Fill in All Fields." });
    }

    // Find company by ID and update
    const updatedCompany = await Company.findByIdAndUpdate(
      id,
      {
        firstName,
        lastName,
        companyName,
        companyEmail,
        companyAddress,
        phoneNumber,
        messSubject,
        messBody,
      },
      { new: true } // Return the updated document
    );

    if (!updatedCompany) {
      return res.status(404).json({ message: "Company not found" });
    }

    return res
      .status(200)
      .json({ message: "Company updated successfully", data: updatedCompany });
  } catch (err) {
    console.error("Error updating company:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const deleteCompanyData = async (req, res) => {
  try {
    const { id } = req.params; // Get company ID from route params

    // Find and delete the company
    const deletedCompany = await Company.findByIdAndDelete(id);

    if (!deletedCompany) {
      return res.status(404).json({ message: "Company not found" });
    }

    return res.status(200).json({ message: "Company deleted successfully" });
  } catch (err) {
    console.error("Error deleting company:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAllCompanyData,
  createCompanyData,
  editCompanyData,
  deleteCompanyData,
};
