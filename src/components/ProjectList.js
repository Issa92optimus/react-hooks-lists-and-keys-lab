import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects[0].id);
  function Disp(){
    return
  }

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */}
        {projects.map(project => (
          <h1 key={project.id}>{project.name}</h1>
          
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
