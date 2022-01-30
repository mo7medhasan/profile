import React from "react";

export default function Bar() {
  return (
    <div className="bar-list">
      <div
        className="bar"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="200"
      >
        <div className="skill-wrapper">
          <div className="skill-lt">
            <h6>HTML5</h6>
            <span className="count-inner">
              <span>92</span>%
            </span>
            <div className="skill-bar">
              <div className="skill-bar-in" style={{width:' 92%'}}></div>
            </div>
          </div>
          <div className="skill-lt">
            <h6>HTML5</h6>
            <span className="count-inner">
              <span>92</span>%
            </span>
            <div className="skill-bar">
              <div className="skill-bar-in" style={{width:' 92%'}}></div>
            </div>
          </div>
             <div className="skill-lt">
            <h6>HTML5</h6>
            <span className="count-inner">
              <span>92</span>%
            </span>
            <div className="skill-bar">
              <div className="skill-bar-in" style={{width:' 92%'}}></div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
