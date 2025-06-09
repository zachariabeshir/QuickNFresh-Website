const express = require("express"); // Corrected typo here
const router = express.Router();
const { getAIResponse } = require("../controllers/openAI/getAIResponse");

// Handle POST request to /askAI endpoint
router.post("/askAI", async (req, res) => {
  try {
    const question = req.body.question; // Get the question from the request body
    const answer = await getAIResponse(question); // Call the AI response function
    res.json({ answer }); // Send the answer back in the response
  } catch (error) {
    console.error("Error occurred while processing the AI response:", error);
    res.status(500).json({ error: "Failed to get AI response" }); // Send an error response if something goes wrong
  }
});

module.exports = router;
