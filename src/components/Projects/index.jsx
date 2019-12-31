import React from "react";
import Nav from "../Nav/index";
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
  // to change this.state.screenwindow if the window's change directon or resize
  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
    this.handleShowProjects();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ screenWidth: window.innerWidth });
    this.handleShowProjects();
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
  componentDidMount() {
    this.handleShowProjects();
  }

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
      ));

    return (
      <div>
        <Nav />
        <div className="projects" id={"projects"}>
          <h1>My projects</h1>
          <div className="projects-container">
            {this.state.firstIndexProject > 0 && (
              <button
                className="showprojects"
                onClick={this.handleShowLastProject}
              >
                {'\u003c'}
              </button>
            )}
            {showCards}
            {this.state.indexProject < this.state.projectShow.length && (
              <button
                className="showprojects"
                onClick={this.handleShowNextProject}
              >
                {'\u003e'}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;