import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenerativeAI(process.env.Api_key);
const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" });
const prompt = "Only give the number of calories in 100 grams of cooked white rice. Do not explain.";


async function main() {
  try {
    const response = await model.generateContent(prompt);
    const result = response.response.candidates[0].content.parts[0].text;
    console.log(result);
    return result; // ✅ This is what Express will send
  } catch (err) {
    console.log(err);
    return null;
  }
}

export default main;
