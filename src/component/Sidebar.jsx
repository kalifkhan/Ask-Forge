import React from "react";
import "./Sidebar.css";
import { questionreducer } from "./ContextForQuestionGen/Questionreducer";
import useQuestionActions from "./ContextForQuestionGen/useQuestionActions";

export const menuItems = [
  "Dashboard",
  "Generate QB",
  "Evaluate QB",
  "Reports",
  "Interactive Q&A",
];

export default function Sidebar() {
  const { setGenareteOpen } = useQuestionActions();
  const handleSidebarCom = (label) => {
    switch (label) {
      case "Dashboard":
        setGenareteOpen(label);
        return;
      case "Generate QB":
        setGenareteOpen(label);
        return;
      case "Evaluate QB":
        setGenareteOpen(label);
        return;
      case "Reports":
        setGenareteOpen(label);
        return;
      case "Interactive Q&A":
        setGenareteOpen(label);
        return;
      default:
        return;
    }
  };
  return (
    <aside className="sidebar">
      <div className="sidebar-header">ASK FORGE AI</div>

      <nav className="sidebar-nav">
        {menuItems.map((label, index) => (
          <button
            key={index}
            className="sidebar-button"
            onClick={() => {
              handleSidebarCom(label);
            }}
          >
            {label}
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">1.0.0 • School </div>
    </aside>
  );
}
