import React, { useState } from "react";
import "./Generate.css";
import useQuestionActions from "../ContextForQuestionGen/useQuestionActions";

const GenerateQueBank = (props) => {
  const { title, iconComponent, description, cardbtn, cardBtntext, count } =
    props;
    const { setGenareteOpen } = useQuestionActions();

    async function handlePostRequest(cardBtntext) {
      if(cardBtntext === "Generate"){
        setGenareteOpen("Generate QB")
      }else if(cardBtntext === "Evalute"){
        setGenareteOpen("Evaluate QB")
      }
    }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "250px",
        height: "180px",
        background: "#ece7e7",
        padding: "12px",
        gap: "10px",
        borderRadius: "10px",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {iconComponent}
        <span style={{ fontSize: "16px", fontWeight: 600 }}>{title}</span>
      </div>

      <div
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 3, // max 3 lines
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          fontSize: "14px",
          color: "#333",
        }}
      >
        {description}
      </div>

      <div>
        {cardbtn ? (
          <button
            className="generatebutton"
            onClick={() => {
              handlePostRequest(cardBtntext);
            }}
          >
            {cardBtntext}
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default GenerateQueBank;
