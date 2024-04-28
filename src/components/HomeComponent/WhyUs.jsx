// import React, { useState } from 'react';
// import './Home.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLightbulb, faRocket, faFlask, faCertificate } from '@fortawesome/free-solid-svg-icons';
// const WhyUs = () => {
//   // State to keep track of the active selector item
//   const [activeIndex, setActiveIndex] = useState(null);

//   // Function to handle clicking a selector item
//   const handleSelectorClick = (index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <section className="why-us">
//       <div className="upperPart">
//         <h1>Know why we are best</h1>
//         <h5>LEARNING VIA APP NEVER GETS EASIER</h5>
//       </div>
//       <div className="middlePart">
//         <div className="line"></div>
     
//           <div
//             className={`selector-item ${activeIndex === 0 ? 'active' : ''}`}
//             onClick={() => handleSelectorClick(0)}
//           >
//             <div className="selector-circle"></div>
//             <p>Creating a Better Future for you</p>
//           </div>
//           <div
//             className={`selector-item ${activeIndex === 1 ? 'active' : ''}`}
//             onClick={() => handleSelectorClick(1)}
//           >
//             <div className="selector-circle"></div>
//             <p>Learn why eLearnly is Best</p>
//           </div>
//           <div
//             className={`selector-item ${activeIndex === 2 ? 'active' : ''}`}
//             onClick={() => handleSelectorClick(2)}
//           >
//             <div className="selector-circle"></div>
//             <p>Our Simple & Effective Process</p>
//           </div>

         
//         </div>

//         <div className="lowerpart">
//             <div className="lowerRight">
//                 <div className="rightHeading">
//                     <h1>The Prodigious eLearning Courses <span className='rightHeadingStyle'>for you</span> </h1>    
//                     <p>Sit amet, consecqua. Ut enim ad minim veniam, quis nostrud exercitation. do eiusmod tempor incididunt. Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
//                 </div>
//                 <div className="rightIcons">
//       <div className="iconTextPair">
//         <FontAwesomeIcon icon={faLightbulb} className='StyleIcon' />
//         <span>Creative Study Pattern</span>
//       </div>
//       <div className="iconTextPair">
//         <FontAwesomeIcon icon={faRocket} className='StyleIcon' />
//         <span>Quick Crash Courses</span>
//       </div>
//       <div className="iconTextPair">
//         <FontAwesomeIcon icon={faFlask}className='StyleIcon'  />
//         <span>Provided with Experimental Examples</span>
//       </div>
//       <div className="iconTextPair">
//         <FontAwesomeIcon icon={faCertificate} className='StyleIcon'  />
//         <span>Certification Awarded</span>
//       </div>
//     </div>
//     <div className="lowerRightbutton">
//       <button>Discover new courses</button>
//     </div>

//             </div>

//             <div className="lowerLeft">
//               <div className="lowerPartLeft">
// <img src="/man-laptop.jpg" alt="" />
//               </div>

//             <div className="lowerPartRight">
// <img src="/girl-ipad.jpg" alt="" />
//             </div>


//             </div>
//         </div>
   
//     </section>
//   );
// };

// export default WhyUs;



import React, { useState } from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faRocket, faFlask, faCertificate } from '@fortawesome/free-solid-svg-icons';

const WhyUs = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const [images, setImages] = useState({
    0: ["/girl.jpg", "/man.jpg"], 
    1: ["/home2.jpg","/home4.jpg"], 
    2: ["/image-for-process.jpg"]
  });

  // Function to handle clicking a selector item
  const handleSelectorClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="why-us">
      <div className="upperPart">
        <h1>Know why we are best</h1>
        <h5>LEARNING VIA APP NEVER GETS EASIER</h5>
      </div>
      <div className="middlePart">
        <div className="line"></div>
        <div
          className={`selector-item ${activeIndex === 0 ? 'active' : ''}`}
          onClick={() => handleSelectorClick(0)}
        >
          <div className="selector-circle"></div>
          <p>Creating a Better Future for you</p>
        </div>
        <div
          className={`selector-item ${activeIndex === 1 ? 'active' : ''}`}
          onClick={() => handleSelectorClick(1)}
        >
          <div className="selector-circle"></div>
          <p>Learn why eLearnly is Best</p>
        </div>
        <div
          className={`selector-item ${activeIndex === 2 ? 'active' : ''}`}
          onClick={() => handleSelectorClick(2)}
        >
          <div className="selector-circle"></div>
          <p>Our Simple & Effective Process</p>
        </div>
      </div>

      <div className="lowerpart">
        <div className="lowerRight">
          <div className="rightHeading">
            <h1>The Prodigious eLearning Courses <span className='rightHeadingStyle'>for you</span></h1>    
            <p>Sit amet, consecqua. Ut enim ad minim veniam, quis nostrud exercitation. do eiusmod tempor incididunt. Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
          </div>
          <div className="rightIcons">
            <div className="iconTextPair">
              <FontAwesomeIcon icon={faLightbulb} className='StyleIcon' />
              <span>Creative Study Pattern</span>
            </div>
            <div className="iconTextPair">
              <FontAwesomeIcon icon={faRocket} className='StyleIcon' />
              <span>Quick Crash Courses</span>
            </div>
            <div className="iconTextPair">
              <FontAwesomeIcon icon={faFlask} className='StyleIcon' />
              <span>Provided with Experimental Examples</span>
            </div>
            <div className="iconTextPair">
              <FontAwesomeIcon icon={faCertificate} className='StyleIcon' />
              <span>Certification Awarded</span>
            </div>
          </div>
          <div className="lowerRightbutton">
            <button>Discover new courses</button>
          </div>
        </div>

        <div className="lowerLeft">
          <div className="lowerPartLeft">
            <img src={activeIndex !== null && images[activeIndex][0] ? images[activeIndex][0] : ''} alt="" />
          </div>
          <div className="lowerPartRight">
            <img src={activeIndex !== null && images[activeIndex][1] ? images[activeIndex][1] : ''} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
