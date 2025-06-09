const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticateUser = async (req, res) => {
  try {
    const { accessCode } = req.body; // Extract the access code from URL params

    if (!accessCode) {
      return res.status(400).json({ message: "Access code is required" });
    }

    // Compare the provided access code with the hashed access code
    const isMatch = await bcrypt.compare(accessCode, process.env.ACCESS_CODE);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid access code" });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { code: "admin" }, // Example payload
      process.env.JWT_SECRET,
      { expiresIn: "1hr" }
    );

    // Store the token in an HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // switch to true in production
      sameSite: "Lax", // CSRF protection, switch to "Strict" in production
      maxAge: 60 * 60 * 1000, // 1 hour
    });

    // Send success response
    return res
      .status(200)
      .json({ message: "Authentication successful!", token });
  } catch (error) {
    console.error("Error authenticating user:", error);
    return res
      .status(500)
      .json({ message: "Internal server error. Please Try Again Later" });
  }
};

module.exports = { authenticateUser };
