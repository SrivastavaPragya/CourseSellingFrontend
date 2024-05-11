import React from "react";
import "./Home.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const HeroPage = () => {
  return (
    <Carousel className="Herocarousel" showStatus={false}
    showArrows={false}
    autoPlay={true}
    showThumbs={false}
    interval={2000}
    infiniteLoop={true}>
      <div className="HeaderCaoursel1">
          <div className="img1Content">
            <h1>Education Everywhere</h1>
            <h2>Over 1900 online classes</h2>
            <button className="Learn">Learn now</button>
            <button className="explore">Explore eLearny</button>
        </div>
      </div>
      <div className="HeaderCaoursel2">
        <div className="img2Content">
          <h1> <span className="learnspan">Learn</span> Anything</h1>
          <p>Get Acess for Award winning online course</p>
          <div className="img2button">
          <button className="discover">Discover courses</button>
          <button className="talk">talk to us</button>
          </div>
         
        </div>
      </div>
      <div className="HeaderCaoursel3">
       

        <div className="img3Content">
<h1>eLearning for all</h1>
<h2><i class="fas fa-book-open"></i> Online Lessons</h2>
<h2><i class="fas fa-video"></i> Live Courses</h2>
<h2><i class="fas fa-certificate"></i> Certified Lessons</h2>
<button className="view">View Courses</button>
        </div>


        <div className="img3">
<img src="/phone-img.webp" alt="" />
        </div>
        
      </div>
    </Carousel>
  );
};

export default HeroPage;
