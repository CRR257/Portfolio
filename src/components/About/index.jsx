import React from 'react';
import clara from '../../img/general/clara.png';
import salmonella from '../../img/general/salmonella.jpg';
import salmonella2 from '../../img/general/salmonella2.jpg';
import gala from '../../img/general/gala.jpg';
import Cv from '../../cv/cv.pdf';
import './index.scss';

const about = () => {
  window.scrollTo({top: 0, behavior: 'smooth'});

  return (
    <div className="about" id={"about"}>
      <div className="about-container">
        <p className="about-title">My story</p>
        <div className="about-content">
          <img src={clara} alt="clara" className="img--size" />
          <span>
            Hi, my name is Clara and I'm a frontend developer, but before that,
            I studied food nutrition and food and science technology. I worked
            in food laboratories for almost 6 years and I liked it a lot (I
            loved to see growing the microorganisms and their shapes and colors
            depending on the growth media formulation).
          </span>
        </div>
        <div className="about-images">
          <div className="img--tooltip">
            <img
              src={salmonella}
              alt="salmonella"
              className="about-images__micro"
            />
            <span className="img--tooltiptext micro">Salmonella on ASAP</span>
          </div>
          <div className="img--tooltip">
            <img
              src={salmonella2}
              alt="salmonella"
              className="about-images__micro"
            />
            <span className="img--tooltiptext micro">Salmonella on XLD</span>
          </div>
        </div>
        <div className="about-content">
          <span>
            But, one day, a special person showed me something that I liked more
            than microorganisms... Coding! ^^ <br />
            After few little JS declarations and consoles.log(), few months
            later I decided to leave my job, my confort zone, be brave and start
            a bootcamp. There I learned JS, HTML, CSS, React, Node, testing and
            MongoDB, and here I am, loving to code in my free time and being a
            developer!
          </span>
        </div>
        <div>
          <a href={Cv} target="blank" className="cv">
            My Cv<i className="fas fa-file-download icon"></i>
          </a>
          <hr />
        </div>
        <p className="about-title">My hobbies</p>
        <div className="about-content">
          <img className="img--size" src={gala} alt="gala" />
          <span>
            My hobbies are going to the gym (I'm an endorphins addict (and a
            caffeine addict, too), being with my friends and family, and of
            course, coding with my furry supurrvisor (aka my cat)! <br />I love
            animals, specially cats and tortoises, it's the reason why a lot of
            projects are about them :)
          </span>
        </div>
      </div>
    </div>
  );
};

export default about;
