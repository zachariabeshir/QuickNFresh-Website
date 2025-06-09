const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.connect(process.env.DATABASE_URI).catch((err) => console.log(err));
};

module.exports = { connectDB };
