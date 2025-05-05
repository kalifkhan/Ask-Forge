import express from "express";
import cors from "cors";
import generateReview from "./review.js"; // Ensure this is imported

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post("/submit", async (req, res) => {
  const {context } = req.body; // Expecting both prompt and context in the request body

  // Ensure both prompt and context are provided
  if (!context) {
    return res
      .status(400)
      .json({ message:  "context are required." });
  }
  console.log("Received context:", context);

  try {
    // Call the generateReview function to get the response
    const response = await generateReview( context);
    
    res.json({ message: "Content is received", data: response });
  } catch (error) {
    // Improved error handling
    console.error("Error during request processing:", error);
    res
      .status(500)
      .json({ message: "Error processing the request", error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
