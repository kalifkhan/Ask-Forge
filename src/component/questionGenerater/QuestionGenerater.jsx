import React, { useState } from "react";
import ComplexitySelector from "./ComplexitySelector";
import ProficiencySelector from "./ProficiencySelector";
import QuestionGrid from "./QuestionGrid";
import "./GenerateQB.css";
import useQuestionActions from "../ContextForQuestionGen/useQuestionActions";

export default function GenerateQB() {
  const [complexity, setComplexity] = useState("");
  const [levels, setLevels] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [contextLocal, setContextLocal] = useState("");
  const { setContent } = useQuestionActions();

  console.log(levels);
  console.log(complexity)

  const handleGenerate = () => {
    const mockQuestions = Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      text: `Sample question ${i + 1} for ${complexity}`,
      level: levels.join(", "),
      complexity: ["Easy", "Medium", "Hard"][i % 3],
    }));
    setQuestions(mockQuestions);
  };

  const handleContextSubmit = () => {
    setContent(contextLocal);
    setContextLocal("");
    alert("Context submitted successfully!");
  };

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
        <button className="generateqb-button" onClick={handleContextSubmit}>
          Submit Context
        </button>
      </div>

      <div className="generateqb-controls">
        <ComplexitySelector value={complexity} onChange={setComplexity} />
        <ProficiencySelector selected={levels} onChange={setLevels} />
        <button className="generateqb-button" onClick={handleGenerate}>
          Generate
        </button>
      </div>

      <QuestionGrid questions={questions} />
    </div>
  );
}
