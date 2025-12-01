import React, { useEffect } from 'react';

const TitlePage = ({ onEnterSite }) => {
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    setTimeout(() => {
      fadeElements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('appear');
        }, index * 300);
      });
    }, 300);
  }, []);

  return (
    <div id="title-page" className="title-page">
      <div className="circle-pattern"></div>
      {/* Decorative elements */}
      <div className="doodle doodle-1">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60 10C30 10 10 30 10 60C10 90 30 110 60 110C90 110 110 90 110 60C110 30 90 10 60 10Z" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeDasharray="5 5"/>
        </svg>
      </div>
      <div className="doodle doodle-2">
        <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 75C20 45 45 20 75 20C105 20 130 45 130 75C130 105 105 130 75 130C45 130 20 105 20 75Z" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeDasharray="8 8"/>
        </svg>
      </div>
      <div className="doodle doodle-3">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 50C30 38.954 38.954 30 50 30C61.046 30 70 38.954 70 50C70 61.046 61.046 70 50 70C38.954 70 30 61.046 30 50Z" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4"/>
        </svg>
      </div>
      <div className="doodle doodle-4">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 40C10 23.431 23.431 10 40 10C56.569 10 70 23.431 70 40C70 56.569 56.569 70 40 70C23.431 70 10 56.569 10 40Z" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" strokeDasharray="6 6"/>
        </svg>
      </div>
      <div className="container mx-auto px-4 text-center">
        {/* Logo Frame */}
        <div className="logo-frame h-32 w-32 mx-auto mb-8 fade-in">
          <img src="https://i.postimg.cc/k5tFCzj1/IMG-0036.png" alt="GHLO Logo" className="rounded-full h-28 w-28 object-cover" />
        </div>
        <h1 className="text-6xl md:text-8xl font-heading font-bold mb-6 tracking-tight fade-in">
          <span className="gradient-text">WHERE WORDS SAVE LIVES</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-12 fade-in">
          Global Health Literacy Outreach
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 fade-in">
          <button onClick={onEnterSite} className="gradient-bg hover:opacity-90 text-white font-medium py-4 px-8 rounded-lg transition-colors text-lg">
            Enter Site
          </button>
          <a href="https://hcb.hackclub.com/donations/start/global-health-literacy-outreach" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-100 text-primary border border-primary font-medium py-4 px-8 rounded-lg transition-colors text-lg">
            Support Our Mission
          </a>
        </div>
      </div>
      <div className="scroll-down text-gray-500" onClick={onEnterSite} style={{cursor: 'pointer'}}>
        <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default TitlePage;
