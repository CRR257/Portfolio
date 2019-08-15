import React from "react";
import Nav from "../Nav/index";
import me from "../../img/clara.jpg";
import gala from "../../img/gala.jpg";
import "./index.css";


class About extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="about">
      <Nav />
        <h1>My story</h1>
        <div className="content"  id={'about'}>
          <img src={me} alt="me" />
          <span>
            Hi, my name is Clara and I'm a frontend developer, but before that,
            I studied food nutrition and food and cience
            technology. I worked in food laboratories for almost 6 years and I
            liked it a lot (I loved to see growing the microorganisms, their
            shapes and colors depen on the growth media formulation).
            <br />
            But, one day, a special person showed me something that I liked more
            than microorganisms..it was coding!. After few little Js
            declarations and consoles.log, few months later I decided to leave
            my job, my confort zone, be brave and do a bootcamp. There I learned
            Js, HTML, CSS, React, Node, testing and MongoDb, and here I'm,
            loving code in my free time and loving beeing a developer.
          </span>
        </div>
        <h1>My hobbies</h1>
        <div className="content">
          <img src={gala} alt="gala" />
          <span>
            My hobbies are going to the gym (I'm an endorphins addict (and a caffeine addict, too), being
            with my friends and family, and of course, coding with my cat!
          </span>
        </div>
        <h1>My projects</h1>
        <div className="content-projects">
          <a target="blank" href="http://st-james-vet.surge.sh" className="project">St James Vet</a>
          <span>Application to manage owners and pets of a veterinary clinic.</span>
          <span>
          Login:
          <br/>
          email: vet@stjames.com 
          <br/>
          password: vet
          </span>
          <br/>
          <a target="blank" href="http://smart-fridge-pro.surge.sh" className="project">Smart fridge</a>
          <span>
          Aplication to calculate the amount of calories users need everyday, depends on their gender, 
          age, weight, height and lifestyle(daily exercise).
          </span>
          </div>
        </div>     
    );
  }
}

export default About;
