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
                I am a Frontend Engineer with over 2 years of experience
                specializing in building responsive web applications with React.
                My expertise includes developing custom components for account
                management, enhancing user experience through robust import and
                export functionalities. I excel in creating dynamic forms and
                data visualizations, utilizing state management with Redux to
                ensure efficient data handling. Committed to delivering
                high-quality, maintainable code, I collaborate effectively with
                design and development teams to create visually appealing and
                user-friendly interfaces.
              </p>
            </div>
          </li>
          <li className="about-item">
            <div className="about-item-text">
              <h3>Key Responsibilities</h3>
              <p>
                Visually Appealing Designs: Create responsive and visually
                appealing web applications using HTML, CSS, and JavaScript
                frameworks like React, collaborating closely with designers and
                backend developers to deliver high-quality user experiences.
              </p>
              <p>
                Efficient State Management: Utilized state management with React
                hooks and Redux to efficiently handle data fetching and loading
                states, improving responsiveness during user interactions.
              </p>
              <p>
                Clean and Maintainable Code: Adhered to coding standards and
                best practices, resulting in a well-structured and easily
                maintainable codebase.
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
                <li>
                  Libraries: Redux Toolkit, React Router, React Hook Form, Yup,
                  Sentry
                </li>
                <li>
                  Dev Tools: Git, GitHub, JIRA, Postman, Visual Studio Code
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
