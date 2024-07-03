import React from "react";
import "./Home.css"; // Import the CSS file
import heroImage from "./heroImage.png";

export const Home = () => {
  return (
    <section className="container">
      <div className="content">
        <h1 className="title">Hi, I'm Shubhangi</h1>
        <h1 className="intro">Welcome to my portfolio website</h1>
        <p className="description">
          I'm a Frontend Engineer with 2 years of experience specializing in
          responsive web design and front-end development using React and React
          UI frameworks.
        </p>
        <p className="description">
          I have professional expertise in HTML, CSS, and JavaScript, creating
          visually appealing and intuitive websites with ReactJS.
        </p>
        <a href="mailto:myemail@email.com" className="contactBtn">
          Contact Me
        </a>
      </div>
      <img src={heroImage} alt="Hero image of me" className="profile-image" />
      <div className="topBlur" />
      <div className="bottomBlur" />
    </section>
  );
};
