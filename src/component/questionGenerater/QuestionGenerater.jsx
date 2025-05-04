import React, { useState } from "react";
import ComplexitySelector from "./ComplexitySelector";
import ProficiencySelector from "./ProficiencySelector";
import QuestionGrid from "./QuestionGrid";
import "./GenerateQB.css";
import useQuestionActions from "../ContextForQuestionGen/useQuestionActions";
import { useQuestionContext } from "../ContextForQuestionGen/QuestionGenContext";

function generatePromptFromPayload({ content, complexity, levels }) {
  const levelDescriptions = {
    L1: "Beginner - understands basic concepts and syntax.",
    L2: "Intermediate - able to apply concepts and solve problems.",
    L3: "Advanced - can design and optimize systems or processes.",
    L4: "Expert - mastery level including edge cases, performance, and architecture.",
  };

  const levelSection = levels
    .map((level) => `${level}: ${levelDescriptions[level]}`)
    .join("\n");

  return `
You are a Subject Matter Expert (SME) helping to generate assessment questions.

Context:
${content}

Instruction:
Based on the above context, generate questions with the following requirements:
- Complexity: ${complexity}
- Proficiency Levels: ${levels.join(", ")}
- Each level should have at least 3 unique questions.
- Every set of 5 questions should include at least 1 Yes/No type question.
- Each question should include answer options.
- Avoid duplication, ensure variety in question types.

Proficiency Level Definitions:
${levelSection}

Output:
For each level, return questions in this format:
{
  "level": "L1",
  "complexity": "${complexity}",
  "question": "What is encapsulation in Java?",
  "response_type": "Single/Multiple/YesNo",
  "question_type": "Scenario/Syntax/Conceptual/etc.",
  "options": ["Option A", "Option B", "Option C", "Option D"],
  "correct_answer": "Option A"
}
`.trim();
}

export default function GenerateQB() {
  const [complexity, setComplexity] = useState("");
  const [levels, setLevels] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [contextLocal, setContextLocal] = useState("");
  const { setContent } = useQuestionActions();
  const { state } = useQuestionContext();

  const handleGenerate = () => {
    setContent(contextLocal);
    const payloadOFApiCall = {
      complexity: complexity ?? "Easy",
      levels: levels ?? ["L1"],
      content: contextLocal,
    };
    //here generate prompts

    const prompt = generatePromptFromPayload(payloadOFApiCall);

    console.log("Generated Prompt:\n", prompt);
    setComplexity("");
    setLevels([]);
    setContextLocal('')

    // const mockQuestions = Array.from({ length: 10 }, (_, i) => ({
    //   id: i + 1,
    //   text: `Sample question ${i + 1} for ${complexity}`,
    //   level: levels.join(", "),
    //   complexity: ["Easy", "Medium", "Hard"][i % 3],
    // }));
    // setQuestions(mockQuestions);
  };

  // const handleContextSubmit = () => {
  //   setContent(contextLocal);
  //   setContextLocal("");
  //   alert("Context submitted successfully!");
  // };

  const disabledGeneratteBtn =
  contextLocal.length == 0 || complexity.length == 0 || levels.length == 0;

  return (
    <div className="generateqb-container">
      <h2 className="generateqb-title">Generate Question Bank</h2>

      <div className="generateqb-comment-box">
        <label htmlFor="context">Enter Context / Description:</label>
        <textarea
          id="context"
          className="context-textarea"
          value={contextLocal}
          onChange={(e) => setContextLocal(e.target.value)}
          rows={15}
          placeholder="Enter up to 500 lines of context here..."
        />
        {/* <button className="generateqb-button" onClick={handleContextSubmit}>
          Submit Context
        </button> */}
      </div>

      <div className="generateqb-controls">
        <ComplexitySelector value={complexity} onChange={setComplexity} />
        <ProficiencySelector selected={levels} onChange={setLevels} />
        <button
          className="generateqb-button"
          onClick={handleGenerate}
          disabled={disabledGeneratteBtn}
        >
          Generate
        </button>
      </div>

      <QuestionGrid questions={questions} />
    </div>
  );
}
