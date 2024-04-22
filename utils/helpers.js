require("dotenv").config();
const axios = require("axios");

const getResultFromOpenAI = async (systemPrompt, userInput) => {
  try {
    const response = await axios.post(
      `https://api.openai.com/v1/chat/completions`,
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: systemPrompt,
          },
          {
            role: "user",
            content: userInput,
          },
        ],
        temperature: 0.7,
        max_tokens: 128,
        top_p: 1,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPEN_AI_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data.choices[0].message.content;
  } catch (err) {
    console.log(err);
    return err;
  }
};
module.exports = { getResultFromOpenAI };
