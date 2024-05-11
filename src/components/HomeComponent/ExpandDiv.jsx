import React, { useState } from 'react';
import './Home.css'
const ExpandDiv = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(prevIndex => prevIndex === index ? null : index);
  };

  const content = [
    { title: "1. Great Online Instructors", text: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" },
    { title: "2. Get Learnly Certified Awards", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { title: "3. Exclusive Course Materials", text: "Pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus." },
    { title: "4. In-depth Course Analysis", text: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus." }
  ];

  return (
    <div className="expandImg">

  
    <div className="ExpandContainer">
    <h1>
Learn with these award winning courses
</h1>1.
      {content.map((item, index) => (
        <div key={index}>
          <button className={`TitleButton ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleIndex(index)}>
            {item.title}
          </button>
          {activeIndex === index && (
            <div className="Content">
              {item.text}
            </div>
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default ExpandDiv;
