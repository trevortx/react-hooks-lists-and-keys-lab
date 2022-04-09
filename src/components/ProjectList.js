import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const projectList = projects.map(project => {
    return (
      <div key={project.id}>
        <h3>{project.name}</h3>
        <p>{project.about}</p>
        <ProjectItem technologies={project.technologies}/>
      </div>
    )
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectList}</div>
    </div>
  );
}

export default ProjectList;
