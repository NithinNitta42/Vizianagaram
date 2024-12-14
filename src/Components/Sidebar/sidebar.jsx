import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        ✖ Close
      </button>
      <nav>
        <ul>
          <li>
            <a href="#howtoreach" onClick={toggleSidebar}>
              How to Reach
            </a>
          </li>
          <li>
            <a href="#tourist" onClick={toggleSidebar}>
              Tourist Places
            </a>
          </li>
          <li>
            <a href="#religion" onClick={toggleSidebar}>
              Religious Places
            </a>
          </li>
          <li>
            <a href="#cultural" onClick={toggleSidebar}>
              Cultural Places
            </a>
          </li>
          <li>
            <a href="#festival" onClick={toggleSidebar}>
              Festivals
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
