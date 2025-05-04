import "./App.css";
import { QuestionGenProvider } from "./component/ContextForQuestionGen/QuestionGenContext";
import Dashboard from "./component/Dashboard/Dashboard";
import QuestionGenerater from "./component/questionGenerater/QuestionGenerater";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <QuestionGenProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router>
    </QuestionGenProvider>
  );
}

export default App;
