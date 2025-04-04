import React from "react";
import { useNavigate } from "react-router-dom";

import "./Bookdetail.css";

const Bookdetail = () => {
  let navigate = useNavigate();
  return (
    <div className="app-container">
        <main className="container">
        <div className="content-box">
          
          <div className="back-btn" onClick={()=>navigate('/home')}>
            <img src="arrow.png" alt="<-"className="arrow"/>
            <span>Back</span>
          </div>

          {/* detail container */}
          <div className="content-grid">
            {/* Left Column */}

            <div className="left-column">
              <div className="zoom-controls">
                <div className="sidebar">
                  <svg className="sidescroll" width="79" height="300" viewBox="0 0 72 488" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="135" width="32" height="32" fill="#EEF1FC" stroke="#1C0071" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="preview-box" />
            </div>
            {/* Right Column */}
            <div className="right-column">
              <div className="tags">
                <span>TextBook</span>
                <span>Prob & Stats</span>
              </div>
              <h1>Lorem ipsum dolor sit</h1>
              <h2>Author Name</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="author">
                <div className="author-pic" />
                <img src="pfp.png"/>
                <span>John Doe</span>
              </div>
              <div className="valid-date">Valid Until: 16/02/2025</div>
            </div>
          </div>
        </div>
      </main>
    </div>
    
  );
};

export default Bookdetail;
