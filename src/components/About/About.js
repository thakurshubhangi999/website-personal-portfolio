import React from "react";
import "./About.css"; // Import the CSS file

export const About = () => {
  return (
    <section className="about-container" id="about">
      <h2 className="about-title">About</h2>
      <div className="about-content">
        <ul className="about-items">
          <li className="about-item">
            <div className="about-item-text">
              <h3>Frontend Engineer | 2+ Years of Experience</h3>
              <p>
                I'm a Frontend Engineer with 2+ years of experience in creating
                responsive web apps using React. Skilled in developing custom
                components. I focus on building dynamic forms, data
                visualizations, and use Redux for state management to optimize
                performance. My work ensures high-quality code and seamless
                collaboration with teams to create intuitive, visually appealing
                user interfaces.
              </p>
            </div>
          </li>
          <li className="about-item">
            <div className="about-item-text">
              <h3>Key Responsibilities</h3>
              <p>
                Built responsive web apps with React, collaborating with design
                and backend teams.
              </p>
              <p>
                Optimized state management using React hooks and Redux for
                better performance.
              </p>
              <p>
                Ensured clean, maintainable code by following best practices.
              </p>
            </div>
          </li>
          <li className="about-item">
            <div className="about-item-text">
              <h3>Technical Expertise</h3>
              <p>
                I possess a strong foundation in various frontend technologies:
              </p>
              <ul className="about-list">
                <li>
                  <strong>Languages:</strong> JavaScript
                </li>
                <li>
                  <strong>Markup:</strong> HTML, CSS
                </li>
                <li>
                  <strong>Frameworks:</strong> ReactJS, Material UI
                </li>
                <li>
                  <strong>Libraries:</strong> Redux Toolkit, React Router, Formik, Yup, Sentry
                </li>
                <li>
                  <strong>Dev Tools:</strong> Git, GitHub, JIRA, Postman, VS
                  Code
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
