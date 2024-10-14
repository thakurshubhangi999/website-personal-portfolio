import React from "react";
import "./Home.css"; // Import the CSS file
import profileImage from "./heroImage.png";
import Typewriter from "./Typewriter";

export const Home = () => {
  return (
    <section className="container">
      <div className="content">
        <h1 className="title">Hi, I'm Shubhangi</h1>
        <Typewriter text="Frontend Engineer" speed={150} />
        <p className="description">I like to craft solid and scalable frontend products with great user experience.</p>
        <p className="description">Uncover my career journey 👇</p>
        <a
          href="https://drive.google.com/file/d/1eXEtqKj2-eJonfiL5hhkjC9uNb1fCm9R/view?usp=sharing"
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
