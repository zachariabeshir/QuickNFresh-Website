const jwt = require("jsonwebtoken");
require("dotenv").config();

const validateJWT = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(403).json({ message: "Access denied" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(403).json({ message: "Access denied" });
    } else {
      next();
    }
  } catch (err) {
    console.error("Invalid token:", err);
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};

module.exports = { validateJWT };
