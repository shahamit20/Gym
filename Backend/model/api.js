const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");

dotenv.config();

const ai = new GoogleGenerativeAI(process.env.API_KEY);
const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" });

async function main(foodItem) {
  const prompt = foodItem;

  try {
    const response = await model.generateContent(prompt);
    const result = response.response.candidates[0].content.parts[0].text;
    // console.log('data kab dega', result)
    return result;
  } catch (err) {
    console.error("Gemini AI error:", err);
    return null;
  }
}

module.exports = main;
