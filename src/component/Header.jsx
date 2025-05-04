import React from "react";
import './Header.css'; // Import the CSS file

export default function Header() {
  return (
    <header className="header">
      <div className="header-title">ASK FORGE</div>

      <div className="header-profile">
        <div className="header-icon">🔔</div>
        <div className="header-avatar"></div>
      </div>
    </header>
  );
}
