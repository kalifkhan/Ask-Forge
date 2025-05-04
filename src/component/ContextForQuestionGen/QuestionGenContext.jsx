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
};

export const QuestionGenProvider = ({ children }) => {
  const [state, dispatch] = useReducer(questionreducer, initialState);

  return (
    <questionContext.Provider value={{ state, dispatch }}>
      {children}
    </questionContext.Provider>
  );
};
