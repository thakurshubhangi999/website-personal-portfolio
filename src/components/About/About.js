import React from "react";
import "./About.css"; // Import the CSS file
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className="about-container" id="about">
      <h2 className="about-title">About</h2>
      <div className="about-content">
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className="about-image"
        />
        <ul className="about-items">
          <li className="about-item">
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className="about-item-text">
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className="about-item">
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className="about-item-text">
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className="about-item">
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className="about-item-text">
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
