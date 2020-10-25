import React from "react";
import projectsdata from "./projectsdata";
import "./index.scss";

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      screenWidth: window.innerWidth,
      projectShow: [],
      showCards: [],
      firstIndexProject: 0,
      indexProject: 0,
      mobile: false,
      tablet: false,
      desktop: false
    };
  }
  componentDidMount() {
    this.handleShowProjects();
    window.scrollTo(0, 0)
  }

  // to change this.state.screenwindow if the window's change directon or resize
  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ screenWidth: window.innerWidth });
  };

  handleShowProjects = () => {
    this.setState({ projectShow: projectsdata.Projects });
    if (this.state.screenWidth < 700) {
      this.setState({
        indexProject: 1,
        mobile: true,
        tablet: false,
        desktop: false
      });
    } else if (this.state.screenWidth > 700 && this.state.screenWidth < 1024) {
      this.setState({
        indexProject: 2,
        mobile: false,
        tablet: true,
        desktop: false
      });
    } else {
      this.setState({
        indexProject: 3,
        mobile: false,
        tablet: false,
        desktop: true
      });
    }
  };

  handleShowNextProject = () => {
    if (this.state.mobile) {
      this.setState({
        firstIndexProject: this.state.firstIndexProject + 1,
        indexProject: this.state.indexProject + 1
      });
    } else if (this.state.tablet) {
      this.setState({
        firstIndexProject: this.state.firstIndexProject + 2,
        indexProject: this.state.indexProject + 2
      });
    } else {
      this.setState({
        firstIndexProject: this.state.firstIndexProject + 3,
        indexProject: this.state.indexProject + 3
      });
    }
  };

  handleShowLastProject = () => {
    if (this.state.mobile) {
      this.setState({
        firstIndexProject: this.state.firstIndexProject - 1,
        indexProject: this.state.indexProject - 1
      });
    } else if (this.state.tablet) {
      this.setState({
        firstIndexProject: this.state.firstIndexProject - 2,
        indexProject: this.state.indexProject - 2
      });
    } else {
      this.setState({
        firstIndexProject: this.state.firstIndexProject - 3,
        indexProject: this.state.indexProject - 3
      });
    }
  };

  render() {
    const showCards = this.state.projectShow
      .slice(this.state.firstIndexProject, this.state.indexProject)
      .map(project => (
        <div className="project" key={project}>
          <span className="project-title">{project.title}</span>
          <img
            className="project-image"
            src={require("../../img/projects/" + project.imageProject)}
            alt={project.name}
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
              {project.iconsTechnology.map(icon => {
                return (
                  <li key={icon} className="img--tooltip">
                    <img
                      className="project-technology__icon"
                      src={require("../../img/technology/" + icon.name)}
                      alt=""
                    />
                     <span class="img--tooltiptext icons">{icon.title}</span>
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
                disabled={this.state.firstIndexProject < 1}
                className="button-showprojects"
                onClick={this.handleShowLastProject}
              >
                {'\u003c'}
              </button>
              {!this.state.mobile && showCards}
              <button
                disabled={this.state.indexProject > this.state.projectShow.length - 1}
                className="button-showprojects"
                onClick={this.handleShowNextProject}
              >
                {'\u003e'}
              </button>
            </div>
            {this.state.mobile && showCards}
          </div>
        </div>
    );
  }
}

export default Projects;