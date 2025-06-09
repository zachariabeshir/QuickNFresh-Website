const bcrypt = require("bcrypt");

async function hashPassword(password) {
  try {
    const saltRounds = 10; // The computational cost
    const salt = await bcrypt.genSalt(saltRounds); // Generate a unique salt
    const hashedPassword = await bcrypt.hash(password, salt); // Hash your password
    console.log("Hashed Password:", hashedPassword); // Log the result
    return hashedPassword; // Return the hashed password
  } catch (error) {
    console.error("Error hashing password:", error); // Handle any errors
  }
}

// Example usage:
hashPassword("Yeoxnw234i0"); // Replace with your actual password
