import React, { useEffect, useState } from 'react';
import projectsData from './projects-data.json';
import './index.scss';
import { CarouselProjects, Project } from '../../models/project';
// class Projects extends React.Component { // canviar x Carousel
// function Carousel() {
//
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       screenWidth: window.innerWidth,
//       projectShow: [],
//       showCards: [],
//       firstIndexProject: 0,
//       indexProject: 0,
//       mobile: false,
//       tablet: false,
//       desktop: false
//     };
//   }
//   componentDidMount() {
//     this.handleShowProjects();
//     window.scrollTo(0, 0)
//   }
//
//   // to change this.state.screenwindow if the window's change directon or resize
//   componentWillMount() {
//     window.addEventListener("resize", this.handleWindowSizeChange);
//   }
//
//   componentWillUnmount() {
//     window.removeEventListener("resize", this.handleWindowSizeChange);
//   }
//
//   handleWindowSizeChange = () => {
//     this.setState({ screenWidth: window.innerWidth });
//   };
//
//   handleShowProjects = () => {
//     this.setState({ projectShow: projectsData.Projects });
//     if (this.state.screenWidth < 700) {
//       this.setState({
//         indexProject: 1,
//         mobile: true,
//         tablet: false,
//         desktop: false
//       });
//     } else if (this.state.screenWidth > 700 && this.state.screenWidth < 1024) {
//       this.setState({
//         indexProject: 2,
//         mobile: false,
//         tablet: true,
//         desktop: false
//       });
//     } else {
//       this.setState({
//         indexProject: 3,
//         mobile: false,
//         tablet: false,
//         desktop: true
//       });
//     }
//   };
//
//   handleShowNextProject = () => {
//     if (this.state.mobile) {
//       this.setState({
//         firstIndexProject: this.state.firstIndexProject + 1,
//         indexProject: this.state.indexProject + 1
//       });
//     } else if (this.state.tablet) {
//       this.setState({
//         firstIndexProject: this.state.firstIndexProject + 2,
//         indexProject: this.state.indexProject + 2
//       });
//     } else {
//       this.setState({
//         firstIndexProject: this.state.firstIndexProject + 3,
//         indexProject: this.state.indexProject + 3
//       });
//     }
//   };
//
//   handleShowLastProject = () => {
//     if (this.state.mobile) {
//       this.setState({
//         firstIndexProject: this.state.firstIndexProject - 1,
//         indexProject: this.state.indexProject - 1
//       });
//     } else if (this.state.tablet) {
//       this.setState({
//         firstIndexProject: this.state.firstIndexProject - 2,
//         indexProject: this.state.indexProject - 2
//       });
//     } else {
//       this.setState({
//         firstIndexProject: this.state.firstIndexProject - 3,
//         indexProject: this.state.indexProject - 3
//       });
//     }
//   };
//
//   render() {
//     const showCards = this.state.projectShow
//       .slice(this.state.firstIndexProject, this.state.indexProject)
//       .map((project, index) => (
//         <div className="project" key={index}>
//           <span className="project-title">{project.title}</span>
//           <img
//             className="project-image"
//             src={require("assets/img/projects/" + project.imageProject)}
//             alt={project.name}
//           />
//           <div className="project-description">
//             <span>{project.description}</span>
//           </div>
//           <div className="project-content">
//             <div className="project-links">
//               <a href={project.href} target="_blank" rel="noopener noreferrer">Live demo</a>
//               <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub repo</a>
//             </div>
//             <ul className="project-technology">
//               {project.iconsTechnology.map((icon, index) => {
//                 return (
//                   <li key={index} className="img--tooltip">
//                     <img
//                       className="project-technology__icon"
//                       src={require("../../assets/technology/" + icon.name)}
//                       alt=""
//                     />
//                      <span className="img--tooltiptext icons">{icon.title}</span>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         </div>
//       ));
//
//     return (
//         <div className="projects" id={"projects"}>
//           <div className="projects-container">
//           <p className="projects-title">My projects</p>
//             <div className="projects-container__smallsize">
//               <button
//                 disabled={this.state.firstIndexProject < 1}
//                 className="button-showprojects"
//                 onClick={this.handleShowLastProject}
//               >
//                 {'\u003c'}
//               </button>
//               {!this.state.mobile && showCards}
//               <button
//                 disabled={this.state.indexProject > this.state.projectShow.length - 1}
//                 className="button-showprojects"
//                 onClick={this.handleShowNextProject}
//               >
//                 {'\u003e'}
//               </button>
//             </div>
//             {this.state.mobile && showCards}
//           </div>
//         </div>
//     );
//   }
// }

function Carousel() {
  const projects: CarouselProjects = {
    screenWidth: window.innerWidth,
    projectShow: projectsData.Projects,
    // screenWidth: window.innerWidth,
    // screenWidth: 0,
    // projectShow: projectsData.Projects,
    // projectShow: [],
    showCards: [],
    firstIndexProject: 0,
    indexProject: 0,
    mobile: false,
    tablet: false,
    desktop: false
  }
  const [projectState, setState] = useState(projects);//
  
  useEffect(() => {
    // handleShowProjects();
    window.scrollTo(0, 0);
    // window.addEventListener("resize", handleWindowSizeChange); // cal?
    // window.removeEventListener("resize", handleWindowSizeChange);
    // setState(prevState => {
    //   return {
    //     ...prevState,
    //     screenWidth: window.innerWidth,
    //     projectShow: projectsData.Projects,
    //     firstIndexProject: 34
    //   }
    // })

    console.log('45', projectState)
  }, [] )
  
  // componentDidMount() {
  //   this.handleShowProjects();
  //   window.scrollTo(0, 0)
  // }

  
  // to change this.state.screenwindow if the window's change directon or resize
  // componentWillMount() {
  //   window.addEventListener("resize", this.handleWindowSizeChange);
  // }
  //
  // componentWillUnmount() {
  //   window.removeEventListener("resize", this.handleWindowSizeChange);
  // }

 function handleWindowSizeChange() {
    setState({ ...projectState, screenWidth: window.innerWidth });
  }

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
      console.log('else!!!!!')
      setState(cs => ({
        ...cs,
        indexProject: 3,
        mobile: false,
        tablet: false,
        desktop: true,
      }));
      console.log('else 22', projectState)
    }
  }, [])
  
  // function handleShowProjects() {
  //   // console.log('projectsData', projectsData.Projects)
  //   // let projects2 = projectsData.Projects.map((project) => project)
  //   // console.log(projects)
  //   // setState({
  //   //   ...projectState,
  //   //   projectShow: projectsData.Projects
  //   // });
  //   // console.log(projectState)
  //   if (projectState.screenWidth < 700) {
  //     setState({
  //       ...projectState,
  //       indexProject: 1,
  //       mobile: true,
  //       tablet: false,
  //       desktop: false,
  //     })
  //   } else if (projectState.screenWidth > 700 && projectState.screenWidth < 1024) {
  //     setState({
  //       ...projectState,
  //       indexProject: 2,
  //       mobile: false,
  //       tablet: true,
  //       desktop: false,
  //     });
  //   } else {
  //     console.log('else!!!!!')
  //     setState(cs => ({
  //       ...cs,
  //       indexProject: 3,
  //       mobile: false,
  //       tablet: false,
  //       desktop: true,
  //     }));
  //     console.log('else 22', projectState)
  //   }
  // }

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

  // render() {
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
  // }
}

export default Carousel;
