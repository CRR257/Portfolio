import React from "react";
import Nav from "../Nav/index";
import me from "../../img//general/clara.jpg";
import gala from "../../img/general/gala.jpg";
import Cv from '../../cv/cv_clara_rufi.pdf';
import "./index.scss";



function about() {
  window.scrollTo(0, 0)

    return (
      <div>
      <Nav />
        <div className="about-container" id={'about'}>
          <h1>My story</h1>
          <div className="about-content">
            <img src={me} alt="me" />
            <span>
              Hi, my name is Clara and I'm a frontend developer, but before that,
              I studied food nutrition and food and science
              technology. I worked in food laboratories for almost 6 years and I
              liked it a lot (I loved to see growing the microorganisms, their
              shapes and colors depending on the growth media formulation).
              <br />
              But, one day, a special person showed me something that I liked more
              than microorganisms... Coding!. After few little JS
              declarations and consoles.log(), few months later I decided to leave
              my job, my confort zone, be brave and start a bootcamp. There I learned
              JS, HTML, CSS, React, Node, testing and MongoDB, and here I am,
              loving to code in my free time and being a developer. 
            </span>
            <div>
            <a href={Cv} target="blank" className="cv">My Cv<i className="fas fa-file-download"></i></a>
            </div>
          </div>
        <hr />
        <h1>My hobbies</h1>
        <div className="about-content">
          <img className="gala" src={gala} alt="gala" />
          <span>
            My hobbies are going to the gym (I'm an endorphins addict (and a caffeine addict, too), being
            with my friends and family, and of course, coding with my furry supurrvisor (aka my cat)!
          </span>
        </div>
        <hr />
      </div> 
      </div>    
    );
  }

export default about;
