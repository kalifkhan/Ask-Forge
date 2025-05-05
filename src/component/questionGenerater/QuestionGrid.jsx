import React from 'react';
import './GenerateQB.css';

export default function QuestionGrid({ questions }) {
  if (!questions?.length) return null;

  return (
    <table className="question-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Question</th>
          <th>Level</th>
          <th>Complexity</th>
        </tr>
      </thead>
      <tbody>
        {questions?.map((q, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{q.question}</td>
            <td>{q.level}</td>
            <td>{q.complexity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
