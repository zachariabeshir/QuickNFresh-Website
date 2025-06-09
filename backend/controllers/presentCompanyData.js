const Company = require("../model/Company");

const presentData = async (req, res) => {
  try {
    const data = await Company.find();
    res.json({ data }); // Send data in an object with 'data' key
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { presentData };
