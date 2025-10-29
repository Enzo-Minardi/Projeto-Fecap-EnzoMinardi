import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Impact from './components/Impact';
import Transparency from './components/Transparency';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Impact />
      <Transparency />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;