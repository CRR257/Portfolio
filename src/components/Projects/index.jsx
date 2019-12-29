import React from "react";
import Nav from "../Nav/index";
import projectsdata from "./projectsdata";
import "./index.scss";

function projects() {
  return (
    <div>
      <Nav />
      <div className="projects" id={"projects"}>
        <h1>My projects</h1>
        <div className="projects-container">
          {projectsdata.Projects.map((project, i) => {
            return (
              <div className="project">
                <span className="project-title">{project.title}</span>
                <img
                  className="project-image"
                  src={require("../../img/projects/" + project.imageProject)}
                  alt={project.name}
                />
                <span>{project.description}</span>
                <div className="project-links">
                <a href={project.href}>Live demo</a>
                <a href={project.github}>GitHub repo</a>
                </div>
                <ul className="project-technology tooltip">
                  {project.images.map(image => {
                    return (
                      <li>
                        <img
                          className="project-technology__image tooltip"
                          src={require("../../img/technology/" + image)}
                          alt=""
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default projects;
