const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("Logout request received");
  console.log("Cookies before clearing:", req.cookies); // Check if token exists

  res.cookie("token", "", { maxAge: 0 }); // Expire the cookie
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Lax",
    path: "/",
  });

  console.log("Cookies after clearing:", req.cookies); // Check if it's gone
  return res.status(200).json({ message: "Successfully logged out" });
});

module.exports = router;
