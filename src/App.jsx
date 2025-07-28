import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-neutral-light text-neutral-dark font-sans">
      <Header />
      <main>
        <div id="inicio">
          <Hero />
        </div>
        <div id="sobre">
          <About />
        </div>
        <div id="servicos">
          <Services />
        </div>
        <div id="contato">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
