import React, { useState, useEffect } from 'react';
import Header from './Header';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Programs from './pages/Programs';
import Footer from './Footer';

const MainSite = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'team':
        return <Team />;
      case 'resources':
        return <Resources />;
      case 'contact':
        return <Contact />;
      case 'programs':
        return <Programs />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div id="main-site">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div id="main-content">
        {renderPage()}
      </div>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default MainSite;