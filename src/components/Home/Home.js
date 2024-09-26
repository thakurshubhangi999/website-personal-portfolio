import React from "react";
import "./Home.css"; // Import the CSS file
import profileImage from "./heroImage.png";

export const Home = () => {
  return (
    <section className="container">
      <div className="content">
        <h1 className="title">Hello, I'm Shubhangi</h1>
        <h2 className="title">FRONTEND ENGINEER</h2>
        <p className="description">Step into my digital world.</p>
        <p className="description">
        Your vision, my expertise. Transforming ideas into stunning web interfaces.
        </p>
        <p className="description">
          Over the course of my career, I have had the opportunity to work at
          various companies, including:{" "}
          <a href="#experience" className="exp-link">
            Experience
          </a>
        </p>
        <a
          href="https://drive.google.com/uc?export=download&id=1hAbPYnocU4amrLjGPXKV7uue5HzDxGU5"
          className="contactBtn"
        >
          Download CV
        </a>
      </div>
      <img src={profileImage} alt="ProfileImage" className="profile-image" />
      {/* <div className="topBlur" />
      <div className="bottomBlur" /> */}
    </section>
  );
};
