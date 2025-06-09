const { OpenAI } = require("openai");
require("dotenv").config();

// Set up the OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function getAIResponse(question) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4", // Or use "gpt-3.5-turbo" if you need that
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant for a produce business.",
        },
        { role: "user", content: question },
      ],
      max_tokens: 100,
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("OpenAI error:", error.message);
    throw new Error("AI response failed.");
  }
}

module.exports = { getAIResponse };
