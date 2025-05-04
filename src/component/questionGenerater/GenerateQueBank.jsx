import React from "react";
import "./Generate.css";

const GenerateQueBank = (props) => {
  const { title, iconComponent, description, cardbtn, cardBtntext, count } =
    props;

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
          <button className="generatebutton">{cardBtntext}</button>
        ) : null}
      </div>
    </div>
  );
};

export default GenerateQueBank;
