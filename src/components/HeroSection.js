import React from "react";
import Navbar from "./Navbar";
const HeroSection = ({ contactRef, servicesRef }) => {
  
  return (
    <div>
      <Navbar  />
      <div  id="home"
        className="position-relative py-5 text-white"
        style={{ minHeight: "500px" }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="w-100 h-100 object-fit-cover position-absolute"
    style={{ filter: "brightness(0.5)", zIndex: "-1" }}
  >
    <source src="/images/Monu-Electricals.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

        <div
          className="container d-flex flex-column justify-content-center align-items-center text-center position-relative py-5"
          style={{ minHeight: "500px" }}
        >
          <h1 className="display-1 fw-bold mb-4">Monu Electricals</h1>
          <p className="lead mb-4">
            Your trusted partner in premium electrical retail and services.
            Bringing you the world's leading brands with expert guidance and
            support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
