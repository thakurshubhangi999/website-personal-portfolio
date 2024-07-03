import React from "react";
import "./ProjectCard.css"
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className="projectcard-container">
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className="image"
      />
      <h3 className="projectcard-title">{title}</h3>
      <p className="projectcard-description">{description}</p>
      <ul className="projectcard-skills">
        {skills.map((skill, id) => (
          <li key={id} className="projectcard-skill">
            {skill}
          </li>
        ))}
      </ul>
      <div className="projectcard-links">
        <a href={demo} className="projectcard-link">
          Demo
        </a>
        <a href={source} className="projectcard-link">
          Source
        </a>
      </div>
    </div>
  );
};
