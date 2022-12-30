import React from 'react';
import Nav from 'components/Nav';
import TypeWriter from 'components/TypeWriter';
import About from 'components/About';
import Projects from 'components/Carousel';
import Contact from 'components/Contact';
import Footer from 'components/Footer';

export default function HomePage() {
  return (
    <div>
      <Nav />
      <TypeWriter />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};
