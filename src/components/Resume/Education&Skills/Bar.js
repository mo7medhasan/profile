import React from "react";

export default function Bar() {
  const skills = [
    { id: 1, Name: "Javascript", long: 90 },
    { id: 2, Name: "React js", long: 85 },
    { id: 3, Name: "Angular", long: 89 },
    { id: 4, Name: "node js", long: 90 },
  ]
  return (
    <div className="bar-list move">
      <div
        className="bar"
        data-aos="fade-up"
        data-aos-duration="1200"
        data-aos-delay="200"
      >
        <div className="skill-wrapper">
          {skills.map(item => (

            <div className="skill-lt" key={item.id}>
              <h6>{item.Name}</h6>
              <span className="count-inner">
                <span>{item.long}</span>%
              </span>
              <div className="skill-bar">
                <div className="skill-bar-in" style={{ width: item.long + '%' }}></div>
              </div>
            </div>


          ))}

        </div>
      </div>
    </div>
  );
}
