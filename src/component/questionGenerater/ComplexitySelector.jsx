import React from 'react';
import './GenerateQB.css';

const Complexity = ['Easy', 'Medium', 'Hard'];

export default function ComplexitySelector({ value, onChange }) {
  return (
    <div className="form-group">
      <label>Complexity:</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="form-select"
      >
        <option value="">Select Complexity</option>
        {Complexity.map((Complexity) => (
          <option key={Complexity} value={Complexity}>
            {Complexity}
          </option>
        ))}
      </select>
    </div>
  );
}
