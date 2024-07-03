import React from "react";
import "./Projects.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className="project-container" id="projects">
      <h2 className="project-title">Projects</h2>
      <div className="project-projects">
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
};
