import React from "react";
import "./Home.css"; // Import the CSS file
import profileImage from "./heroImage.png";

export const Home = () => {
  return (
    <section className="container">
      <div className="content">
        <h1 className="title">Hello, I'm Shubhangi</h1>
        <p className="description">Welcome to my portfolio website</p>
        <p className="description">
          I'm a Frontend Engineer with 2 years of experience specializing in
          responsive web design and front-end development using Reactjs and
          React UI frameworks.
        </p>
        <p className="description">
          I have professional expertise in HTML, CSS, and JavaScript, creating
          visually appealing and intuitive websites with ReactJS.
        </p>
        <a href="https://drive.google.com/uc?export=download&id=1hAbPYnocU4amrLjGPXKV7uue5HzDxGU5" className="contactBtn">
            Download CV
        </a>
      </div>
      <img src={profileImage} alt="ProfileImage" className="profile-image" />
      <div className="topBlur" />
      <div className="bottomBlur" />
    </section>
  );
};
