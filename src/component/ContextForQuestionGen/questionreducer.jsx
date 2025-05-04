export const questionreducer = (state, action) => {
  switch (action.type) {
    case "SET_TITLE":
      return { ...state, title: action.payload };
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_GRADE":
      return { ...state, grade: action.payload };
    case "SET_COMPLEXITY":
      return { ...state, complexity: action.payload };
    case "SET_COMPLEXITY_TYPE":
      return { ...state, complexityType: action.payload };
    case "SET_QUESTION":
      return { ...state, quesion: action.payload };
    case "SET_RESPONSE_TYPE":
      return { ...state, responseType: action.payload };
    case "SET_DESCRIPTION":
      return { ...state, decsription: action.payload };
    case "SET_CONTENT":
      return { ...state, content: action.payload };
    case "SET_generateQuesComOpen":
      return { ...state, generateQuesComOpen: action.payload };
    default:
      return state;
  }
};
