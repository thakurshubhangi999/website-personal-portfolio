import React from "react";
import "./Home.css"; // Import the CSS file
import { getImageUrl } from "../../utils";

export const Home = () => {
  return (
    <section className="container">
      <div className="content">
        <h1 className="title">Hi, I'm Ada</h1>
        <p className="description">
          I'm a full-stack developer with 5 years of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:myemail@email.com" className="contactBtn">
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className="heroImg"
      />
      <div className="topBlur" />
      <div className="bottomBlur" />
    </section>
  );
};
