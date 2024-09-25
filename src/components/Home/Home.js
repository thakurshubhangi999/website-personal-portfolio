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
          I am a qualified Frontend Engineer with over 2 years of experience
          specializing in responsive web design and front-end development. My
          expertise lies in utilizing HTML, CSS, and JavaScript to create
          visually appealing and user-friendly websites. Proficient in ReactJS
          and Material-UI, I focus on driving customer engagement and
          contributing to overall business success.
        </p>
        <p className="description">
          I am passionate about embracing new opportunities, expanding my skill
          set in web development, and creating impactful solutions that enhance
          user experience.
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
      <div className="topBlur" />
      <div className="bottomBlur" />
    </section>
  );
};
