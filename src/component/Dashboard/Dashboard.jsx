import React from "react";
import "./Dashboard.css";
import { useQuestionContext } from "../ContextForQuestionGen/QuestionGenContext";
import Questionreducer from "../ContextForQuestionGen/useQuestionActions";
import Header from "../Header";
import Sidebar, { menuItems } from "../Sidebar";
import DashboardMain from "./DashboardMain";
import GenerateQB from "../questionGenerater/QuestionGenerater";
import EvaluteQB from "../Evalute/EvaluteQB";
import Reports from "./Reports";
import Interactive from "./Interactive";

const Dashboard = () => {
  const { state } = useQuestionContext();
  const { updateTitle } = Questionreducer();
  const { generateQuesComOpen, content } = state;

  const handleComponent = () => {
    switch (generateQuesComOpen) {
      case menuItems[0]:
        return <DashboardMain />;
      case menuItems[1]:
        return <GenerateQB />;
      case menuItems[2]:
        return <EvaluteQB  />;
      case menuItems[3]:
        return <Reports />;
      case menuItems[4]:
        return <Interactive />;
      default:
        return <EvaluteQB />;
    }
  };
  return (
    <div className="dashboard-root">
      <Header />
      <div className="dashboard-body">
        <Sidebar />
        <main className="dashboard-main">{handleComponent()}</main>
      </div>
    </div>
  );
};

export default Dashboard;
