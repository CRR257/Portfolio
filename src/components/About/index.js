import React from "react";
import Nav from "../Nav/index";
import me from "../../img/clara.jpg";
import gala from "../../img/gala.jpg";
import js from "../../img/js.jpg";
import express from "../../img/express.png";
import firebase from "../../img/firebase.png";
import graphql from "../../img/graphql.png";
import heroku from "../../img/heroku.png";
import mongo from "../../img/mongo.jpeg";
import node from "../../img/node.png";
import react from "../../img/react.jpg";
import apolloclient from "../../img/apolloclient.png";
import Cv from '../../cv/cv_clara_rufi.pdf';
import "./index.css";


function about() {

    return (
      <div>
      <Nav />
        <div className="about" id={'about'}>
          <h1>My story</h1>
          <div className="content">
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
            <a href={Cv} target="blank" className="cv">My Cv</a>
            </div>
          </div>
        <hr />
        <h1>My hobbies</h1>
        <div className="content">
          <img className="gala" src={gala} alt="gala" />
          <span>
            My hobbies are going to the gym (I'm an endorphins addict (and a caffeine addict, too), being
            with my friends and family, and of course, coding with my furry supurrvisor (aka my cat)!
          </span>
        </div>
        <hr />
        <h1>My projects</h1>
        <div className="content-project">
          <a target="_blank" rel="noopener noreferrer" href="http://smart-fridge-pro.surge.sh" className="content-project__title">Smart fridge</a>
          <span>
          Aplication to calculate the amount of calories users need everyday, depends on their gender, 
          age, weight, height and lifestyle(daily exercise).
          </span>
      
          <div className="content-project__technologies">
          <div className="tooltip">
            <img className="technologie tooltip" src={js} alt="" /> 
            <span className = "tooltiptext">JS</span>
          </div>
          <div className="tooltip">
            <img className="technologie tooltip" src={react} alt="" />   
            <span className = "tooltiptext">ReactJS</span>
          </div>
          <div className="tooltip">
            <img className="technologie tooltip" src={heroku} alt="" />  
            <span className = "tooltiptext">Heroku</span>
          </div>
      
          </div>
        </div>
        <div className="content-project">
          <a target="_blank" rel="noopener noreferrer" href="http://st-james-vet.surge.sh" className="content-project__title">St James Vet</a>
          <span>Application to manage owners and pets of a veterinary clinic.</span>
          <span className="content-project__credentials">
            <span className="content-project__credentials--title">Login:</span>
            <br/>
            email: vet@stjames.com 
            <br/>
            password: vet
          </span>
          <div className="content-project__technologies">
            <div className="tooltip">
              <img className="technologie tooltip" src={js} alt="" /> 
              <span className = "tooltiptext">JS</span>
            </div>
            <div className="tooltip">
              <img className="technologie" src={react} alt="" />
              <span className = "tooltiptext">ReactJS</span>
            </div>
            <div className="tooltip">
              <img className="technologie" src={express} alt="" />
              <span className = "tooltiptext">ExpressJS</span>
            </div>
            <div className="tooltip">
              <img className="technologie" src={mongo} alt="" />
              <span className = "tooltiptext">MongoDB</span>
            </div>
            <div className="tooltip">
              <img className="technologie" src={node} alt="" />
              <span className = "tooltiptext">NodeJS</span>
            </div>
            <div className="tooltip">
              <img className="technologie" src={heroku} alt="" />
              <span className = "tooltiptext">Heroku</span>
            </div>
          </div>
        </div>
        <div className="content-project">
          <a target="_blank" rel="noopener noreferrer" href="https://rickmortyweb.web.app/" className="content-project__title">Rick & Morty</a>
          <span>Web to show information about some Rick and Morty's characters.User can search by character's name.</span>
          <div className="content-project__technologies">
            <div className="tooltip">
              <img className="technologie" src={js} alt="" />
              <span className = "tooltiptext">JS</span>
            </div>
            <div className="tooltip">
              <img className="technologie" src={react} alt="" />
              <span className = "tooltiptext">ReactJS</span>
            </div>
            <div className="tooltip">
              <img className="technologie" src={graphql} alt="" />
              <span className = "tooltiptext">GraphQL</span>
            </div>
            <div className="tooltip">
              <img className="technologie" src={apolloclient} alt="" />
              <span className = "tooltiptext">Apollo Client</span>
            </div>
            <div className="tooltip">
              <img className="technologie" src={firebase} alt="" />
              <span className = "tooltiptext">Firebase</span>
            </div>     
          </div>
        </div>
      </div> 
      </div>    
    );
  }


export default about;
