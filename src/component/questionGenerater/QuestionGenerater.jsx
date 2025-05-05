import React, { useEffect, useState } from "react";
import ComplexitySelector from "./ComplexitySelector";
import ProficiencySelector from "./ProficiencySelector";
import QuestionGrid from "./QuestionGrid";
import "./GenerateQB.css";
import useQuestionActions from "../ContextForQuestionGen/useQuestionActions";
import { useQuestionContext } from "../ContextForQuestionGen/QuestionGenContext";
import useFetchQuestionOfAi from "../customeHooks/useFetchQuestionOfAi";
import generatePromptFromPayload from "../customeHooks/useGeneratePromptFromPayload";

export default function GenerateQB() {
  const [complexity, setComplexity] = useState("");
  const [levels, setLevels] = useState([]);
  const [contextLocal, setContextLocal] = useState("");
  const { setContent, setQuestionList } = useQuestionActions();
  const { state } = useQuestionContext();
  const { generateQuesComOpen, content, description, questionList } = state;
  const [promtsGen, setPromtsGen] = useState();
  const { handleQuestiongGenRequest, responseOfData, loading, error } =
    useFetchQuestionOfAi();

  const handleGenerate = () => {
    setContent(contextLocal);
    const payloadOFApiCall = {
      complexity: complexity ?? "Easy",
      levels: levels ?? ["L1"],
      content: contextLocal,
    };

    //here generate prompts
    const prompt = generatePromptFromPayload(payloadOFApiCall);
    setPromtsGen(prompt);

    console.log("Generated Prompt:\n", prompt);
    setComplexity("");
    setLevels([]);
    setContextLocal("");
  };

  const handleAIApi = () => {
    handleQuestiongGenRequest({ context: promtsGen });
  };
  useEffect(() => {
    if (responseOfData?.data?.kwargs?.content) {
      try {
        // Extract JSON string from content
        const match =
          responseOfData.data.kwargs.content.match(/```json([\s\S]*?)```/);
        const jsonString = match ? match[1].trim() : null;

        if (!jsonString) throw new Error("No JSON block found");

        const parsedQuestions = JSON.parse(jsonString);
        setQuestionList(parsedQuestions);
      } catch (error) {
        console.error("Error parsing questions:", error);
      }
    }
  }, [responseOfData]);

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
       <div>  <button
          className="generateqb-button"
          onClick={handleGenerate}
          disabled={disabledGeneratteBtn}
        >
          Generate Promts
        </button>
        </div>
      </div>
      <div>
        {promtsGen ? ( <div style={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center", gap:"10px"}}>
          <span style={{color:"#2563eb", fontWeight:"700"}}>Promts is geneareted successfully! </span>
          
          <button
            style={{width:"100%"}}
            className="generateqb-button"
            onClick={() => {
              handleAIApi();
            }}
            disabled={loading }
          >
            Generate Question Bank
          </button>
          {loading ? <div><span style={{color:"#2563eb", fontWeight:"700"}}> Loading....... </span></div> : null}
          </div>
        ) : null}
        
      </div>
      

      <QuestionGrid questions={questionList} />
    </div>
  );
}
