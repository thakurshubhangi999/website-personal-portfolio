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
                Highly motivated Frontend Engineer with 2+ years of experience
                creating user-friendly web applications using ReactJS, HTML,
                CSS, and JavaScript. Passionate about building intuitive,
                responsive web experiences that cater to diverse user needs.
              </p>
            </div>
          </li>
          <li className="about-item">
            <div className="about-item-text">
              <h3>Key Responsibilities</h3>
              <p>
                Web Development: Create responsive and visually appealing web
                applications using HTML, CSS, and JavaScript frameworks.
              </p>
              <p>
                Collaboration: Work closely with designers, backend developers
                to deliver high-quality user experiences.
              </p>
              <p>
                Code Quality: Write clean, maintainable code; conduct reviews
                and participate in testing and debugging.
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
                <li>Languages: JavaScript</li>
                <li>Markup Languages: HTML, CSS</li>
                <li>Frameworks: ReactJS, Material UI</li>
                <li>Libraries: React Router, Redux Toolkit, Formik, Yup, React Query, Sentry</li>
                <li>Dev Tools: Git, GitHub, JIRA, Visual Studio Code</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
