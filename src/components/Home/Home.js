import React from "react";
import "./Home.css"; // Import the CSS file
import profileImage from "./heroImage.png";
import Typewriter from "./Typewriter";

export const Home = () => {
  return (
    <section className="container">
      <div className="content">
        <h1 className="title">Hi, I'm Shubhangi</h1>
        {/* <h3 className="title">Frontend Engineer</h3> */}
        <Typewriter className="title" text="Frontend Engineer" speed={150} />
        <p className="description">I build things for the web.</p>
        <p className="description">
          I like working on the front-end of the web.
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
