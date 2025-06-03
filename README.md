# 🧠 AI-Powered Question Bank Generator & Evaluator -ASK FORGE

This project is a React-based web application that allows users to **generate** a custom Question Bank using **OpenAI** and **evaluate** themselves through a simple quiz interface.

## 🔥 Features

* ✅ **Generate** question banks for any topic and difficulty level using AI (OpenAI GPT model).
* ✅ Supports multiple question types: Multiple Choice, Yes/No, True/False.
* ✅ Interactive **quiz evaluation** with immediate feedback and scoring.
* ✅ Score tracking with percentage calculation.
* ✅ Uses **React Context API** for global state management.
* ✅ Responsive UI with loading states and error handling.

## 🚀 Tech Stack

* Frontend: **React**, **JavaScript**, **CSS**
* AI Integration: **OpenAI GPT API**
* State Management: **React Context API**
* Hosting Recommendation: **Vercel** (or Netlify)

## 🛠️ How It Works - check out

1. User selects a topic and difficulty.
2. The app sends the request to OpenAI to generate a set of questions.
3. Questions are stored in context and shown in an evaluation quiz.
4. User answers one question at a time with real-time correctness feedback.
5. Final score and percentage are displayed on completion.

## 🔐 Security

* OpenAI API requests are handled through a **secure backend/serverless function** to protect the API key.
* API keys are stored in environment variables (`.env`) and never exposed to the frontend.

## 📦 Deployment

This app can be deployed using:

* **Vercel** (recommended): Seamless React support with serverless function support.
* **Netlify**: Another great option for JAMStack apps.
* Backend can be deployed using **Render**, **Railway**, or **Vercel Functions**.

## 🧑‍💻 Local Development

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
npm start
```

Create a `.env` file:

```
REACT_APP_BACKEND_URL=/api/generate
OPENAI_API_KEY=your-key-here (used only in backend/serverless functions)
```

---

Would you like me to generate a sample `vercel.json` or serverless API route as well?
