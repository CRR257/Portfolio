import React, { useEffect, useState } from 'react';
import projectsData from './projects-data.json';
import './index.scss';
import { CarouselProjects, Project } from '../../models/project';

function Carousel() {
  const projects: CarouselProjects = {
    screenWidth: window.innerWidth,
    projectShow: projectsData.Projects,
    showCards: [],
    firstIndexProject: 0,
    indexProject: 0,
    mobile: false,
    tablet: false,
    desktop: false
  }
  const [projectState, setState] = useState(projects);
  

  useEffect(() => {
    if (projectState.screenWidth < 700) {
      setState({
        ...projectState,
        indexProject: 1,
        mobile: true,
        tablet: false,
        desktop: false,
      })
    } else if (projectState.screenWidth > 700 && projectState.screenWidth < 1024) {
      setState({
        ...projectState,
        indexProject: 2,
        mobile: false,
        tablet: true,
        desktop: false,
      });
    } else {
      setState(cs => ({
        ...cs,
        indexProject: 3,
        mobile: false,
        tablet: false,
        desktop: true,
      }));
    }
  }, [])
  

  function handleShowNextProject() {
    if (projectState.mobile) {
      setState({
        ...projectState,
        firstIndexProject: projectState.firstIndexProject + 1,
        indexProject: projectState.indexProject + 1
      });
    } else if (projectState.tablet) {
      setState({
        ...projectState,
        firstIndexProject: projectState.firstIndexProject + 2,
        indexProject: projectState.indexProject + 2
      });
    } else {
      setState({
        ...projectState,
        firstIndexProject: projectState.firstIndexProject + 3,
        indexProject: projectState.indexProject + 3
      });
    }
  }

  function handleShowLastProject() {
    if (projectState.mobile) {
      setState({
        ...projectState,
        firstIndexProject: projectState.firstIndexProject - 1,
        indexProject: projectState.indexProject - 1
      });
    } else if (projectState.tablet) {
      setState({
        ...projectState,
        firstIndexProject: projectState.firstIndexProject - 2,
        indexProject: projectState.indexProject - 2
      });
    } else {
      setState({
        ...projectState,
        firstIndexProject: projectState.firstIndexProject - 3,
        indexProject: projectState.indexProject - 3
      });
    }
  }

    const showCards = projectState.projectShow
      .slice(projectState.firstIndexProject, projectState.indexProject)
      .map((project, index) => (
        <div className="project" key={index}>
          <span className="project-title">{project.title}</span>
          <img
            className="project-image"
            src={require("assets/img/projects/" + project.imageProject)}
            alt={project.title}
          />
          <div className="project-description">
            <span>{project.description}</span>
          </div>
          <div className="project-content">
            <div className="project-links">
              <a href={project.href} target="_blank" rel="noopener noreferrer">Live demo</a>
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub repo</a>
            </div>
            <ul className="project-technology">
              {project.iconsTechnology.map((icon, index) => {
                return (
                  <li key={index} className="img--tooltip">
                    <img
                      className="project-technology__icon"
                      src={require("../../assets/technology/" + icon.name)}
                      alt=""
                    />
                     <span className="img--tooltiptext icons">{icon.title}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ));
  
    return (
        <div className="projects" id={"projects"}>
          <div className="projects-container">
          <p className="projects-title">My projects</p>
            <div className="projects-container__smallsize">
              <button
                disabled={projectState.firstIndexProject < 1}
                className="button-showprojects"
                onClick={handleShowLastProject}
              >
                {'\u003c'}
              </button>
              {!projectState.mobile && showCards}
              <button
                disabled={projectState.indexProject > projectState.projectShow.length - 1}
                className="button-showprojects"
                onClick={handleShowNextProject}
              >
                {'\u003e'}
              </button>
            </div>
            {projectState.mobile && showCards}
          </div>
        </div>
    );
}

export default Carousel;
