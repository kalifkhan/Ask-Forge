import "./App.css";
import { QuestionGenProvide } from "./component/ContextForQuestionGen/QuestionGenContext";
import Dashboard from "./component/Dashboard/Dashboard";
import QuestionGenerater from "./component/questionGenerater/QuestionGenerater";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <QuestionGenProvide>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/questiongenerate" element={<QuestionGenerater />} /> */}
        </Routes>
      </Router>
    </QuestionGenProvide>
  );
}

export default App;
