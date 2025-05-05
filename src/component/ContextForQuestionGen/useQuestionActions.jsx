import { useQuestionContext } from "./QuestionGenContext";

const useQuestionActions = () => {
  const { dispatch } = useQuestionContext();

  const setTitle = (payload) => dispatch({ type: "SET_TITLE", payload });
  const setName = (payload) => dispatch({ type: "SET_NAME", payload });
  const setGrade = (payload) => dispatch({ type: "SET_GRADE", payload });
  const setComplexity = (payload) =>
    dispatch({ type: "SET_COMPLEXITY", payload });
  const setComplexityType = (payload) =>
    dispatch({ type: "SET_COMPLEXITY_TYPE", payload });
  const setQuestion = (payload) => dispatch({ type: "SET_QUESTION", payload });
  const setResponseType = (payload) =>
    dispatch({ type: "SET_RESPONSE_TYPE", payload });
  const setDescription = (payload) =>
    dispatch({ type: "SET_DESCRIPTION", payload });
  const setContent = (payload) => dispatch({ type: "SET_CONTENT", payload });
  const setGenareteOpen = (payload) =>
    dispatch({ type: "SET_generateQuesComOpen", payload });
  const setQuestionList = (payload) =>
    dispatch({ type: "SET_QUESTIONLIST", payload });

  return {
    setTitle,
    setName,
    setGrade,
    setComplexity,
    setComplexityType,
    setQuestion,
    setResponseType,
    setDescription,
    setContent,
    setGenareteOpen,
    setQuestionList
  };
};

export default useQuestionActions;
