import React, { useState } from "react";
import "./Generate.css";

const GenerateQueBank = (props) => {
  const { title, iconComponent, description, cardbtn, cardBtntext, count } =
    props;

    const [res, setRes]= useState();

  
    async function handlePostRequest() {
      const payload = {
        context: "A lion is a large, powerful wild animal.",
        prompt: "from this context just create one question, give me in one line, no explanation",
      };
    
      try {
        const response = await fetch('http://localhost:3001/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload), // Send the payload as JSON
        });
    
        const data = await response.json();
        console.log('Server Response:', data); // Log the server's response
        setRes(data)
      } catch (error) {
        console.error('Error:', error); // Catch and log any errors
      }
    }
    
    console.log(res?.data?.kwargs?.content);




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
              handlePostRequest();
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
