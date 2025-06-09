require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const corsOptions = require("./config/corsOptions.js");
const { logger } = require("./middleware/logEvents.js");
const errorHandler = require("./middleware/errorHandler.js");
// const verifyJWT = require("./middleware/verifyJWT.js");
const cookieParser = require("cookie-parser");
const credentials = require("./middleware/credentials.js");
const mongoose = require("mongoose");
const { connectDB } = require("./config/dbConn.js");
const PORT = process.env.PORT || 3500;

// Connect to MongoDB
connectDB();

// Custom middleware logger
app.use(logger);

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

// Cross-Origin Resource Sharing
app.use(cors(corsOptions));

// Built-in middleware to handle URL-encoded form data
app.use(express.urlencoded({ extended: false }));

// Built-in middleware for JSON
app.use(express.json());

// Middleware for cookies
app.use(cookieParser());

// Serve static files (React App build)
app.use(express.static(path.join(__dirname, "..", "frontend", "build")));

// Handle React routes
const reactRoutes = [
  "/",
  "/about",
  "/products",
  "/contact",
  "/admin",
  "/dash",
  "/privacy",
];
reactRoutes.forEach((route) => {
  app.get(route, (req, res) => {
    res.sendFile(path.join(__dirname, "..", "frontend", "build", "index.html"));
  });
});

// API routes
app.use("/api/front", require("./routes/addData.js"));
app.use("/api", require("./routes/askAI.js"));
app.use("/api/admin", require("./routes/auth.js"));
app.use("/admin/data", require("./routes/getData.js"));
app.use("/admin/company", require("./routes/companyData.js"));
app.use("/logoutUser", require("./routes/logout.js"));

// Error handling for 404
app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ error: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

// Run Error Handler
app.use(errorHandler);

// Connect With Database before anything
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
  );
});
