import React from 'react';
import './GenerateQB.css';

const levels = ['L1', 'L2', 'L3', 'L4'];

export default function ProficiencySelector({ selected, onChange }) {
  const toggleLevel = (level) => {
    if (selected.includes(level)) {
      onChange(selected.filter((l) => l !== level));
    } else {
      onChange([...selected, level]);
    }
  };

  return (
    <div className="form-group">
      <label>Proficiency Levels:</label>
      <div className="level-buttons">
        {levels.map((level) => (
          <button
            key={level}
            className={`level-button ${
              selected.includes(level) ? 'active' : ''
            }`}
            onClick={() => toggleLevel(level)}
            type="button"
          >
            {level}
          </button>
        ))}
      </div>
    </div>
  );
}
