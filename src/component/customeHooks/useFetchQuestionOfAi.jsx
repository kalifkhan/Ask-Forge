import React, { useEffect, useState } from "react";

const useFetchQuestionOfAi = () => {
  const [loading, setLoading] = useState(false);
  const [error, serError] = useState(false);
  const [responseOfData, setResponse] = useState();

  async function handleQuestiongGenRequest(payload) {
    // const payload = {
    //   context: "A lion is a large, powerful wild animal.",
    //   prompt:
    //     "from this context just create one question, give me in one line, no explanation",
    // };
    // //http://localhost:3001/submit

    try {
      setLoading(true);
      const response = await fetch("http://localhost:3001/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload), // Send the payload as JSON
      });

      const data = await response.json();
      setResponse(data);
    } catch (error) {
      serError(true);
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  }

  return {
    responseOfData,
    handleQuestiongGenRequest,
    loading,
    error,
  };
};

export default useFetchQuestionOfAi;
