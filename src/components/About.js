import React from "react";
import AboutBackground from "../Assets/about-background.png";
// import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        {/* <img src={AboutBackgroundImage} alt="" /> */}
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          We Offer Premium Coffee and We Are Prepared to Deliver
        </h1>
        <p className="primary-text">
          Whether the weather is warm or cold you can enjoy our coffee in hot
          and cold brew
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More!</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
