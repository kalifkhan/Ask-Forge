import { ChatOllama } from "@langchain/ollama";

// Initialize the model
const model = new ChatOllama({
  model: "gemma3:latest",
});

export default async function generateReview( context) {
  try {
    // Send the combined prompt and context to the model
    const response = await model.invoke(context);
    
    return response; 
  } catch (err) {
    console.error("Ollama error:", err);
    return { error: "Failed to get response from model" };
  }
}
