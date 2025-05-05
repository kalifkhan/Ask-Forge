import { createContext, useContext, useReducer, useState } from "react";
import { questionreducer } from "./Questionreducer";

const questionContext = createContext();

export const useQuestionContext = () => useContext(questionContext);

const initialState = {
  title: "soshin school",
  name: "name",
  grade: "p1",
  complexity: "",
  complexityType: "Easy",
  quesion: "",
  responseType: "Single",
  decsription: "write own contenct decsiption",
  content: "",
  generateQuesComOpen: "",
  questionList:[ {
    "level": "L1",
    "complexity": "Easy",
    "question": "What type of animal is a lion?",
    "response_type": "Multiple",
    "question_type": "Conceptual",
    "options": [
        "A) Bird",
        "B) Reptile",
        "C) Mammal",
        "D) Fish"
    ],
    "correct_answer": "C"
},
{
    "level": "L1",
    "complexity": "Easy",
    "question": "Lions primarily communicate through body language and vocalizations.  True or False?",
    "response_type": "YesNo",
    "question_type": "Fact",
    "options": [
        "True",
        "False"
    ],
    "correct_answer": "True"
}
],
};

export const QuestionGenProvider = ({ children }) => {
  const [state, dispatch] = useReducer(questionreducer, initialState);

  return (
    <questionContext.Provider value={{ state, dispatch }}>
      {children}
    </questionContext.Provider>
  );
};
