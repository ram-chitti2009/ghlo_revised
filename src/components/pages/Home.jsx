import React from 'react';

const Home = ({ setCurrentPage }) => {
  return (
    <div id="home" className="page active">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
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
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right" data-aos-duration="1000">
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight tracking-tight">
                <span className="gradient-text">WHERE WORDS SAVE LIVES</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8">We're dedicated to improving global health literacy by providing accessible education to underserved communities worldwide.</p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={() => setCurrentPage('programs')}
                  className="gradient-bg hover:opacity-90 text-white font-medium py-3 px-6 rounded-lg transition-colors text-center"
                >
                  Our Programs
                </button>
                <button 
                  onClick={() => setCurrentPage('contact')}
                  className="bg-white hover:bg-gray-100 text-primary border border-primary font-medium py-3 px-6 rounded-lg transition-colors text-center"
                >
                  Get Involved
                </button>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-10" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
              <div className="relative">
                <div className="blob gradient-bg w-64 h-64 mx-auto">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-40 h-40 text-white" viewBox="0 0 200 200" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M148.5,96.5c0,30.4-24.6,55-55,55s-55-24.6-55-55s24.6-55,55-55S148.5,66.1,148.5,96.5z"/>
                      <path d="M157.5,96.5c0,35.3-28.7,64-64,64s-64-28.7-64-64s28.7-64,64-64S157.5,61.2,157.5,96.5z M93.5,56.5c-22.1,0-40,17.9-40,40s17.9,40,40,40s40-17.9,40-40S115.6,56.5,93.5,56.5z"/>
                      <path d="M93.5,76.5c-11,0-20,9-20,20s9,20,20,20s20-9,20-20S104.5,76.5,93.5,76.5z"/>
                    </svg>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute top-0 left-0 blob-spin" style={{animationDuration: '15s'}}>
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30" cy="30" r="30" fill="#6366F1" fillOpacity="0.2"/>
                    <path d="M30 15V45M15 30H45" stroke="#6366F1" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="absolute bottom-0 right-0 blob-spin" style={{animationDuration: '20s'}}>
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="40" cy="40" r="40" fill="#EC4899" fillOpacity="0.2"/>
                    <path d="M25 40H55M40 25V55" stroke="#EC4899" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">What We Do</h2>
            <div className="w-24 h-1 gradient-bg mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">We create innovative health literacy programs that empower communities to make informed health decisions.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6 card-hover" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-center mb-3">Education Programs</h3>
              <p className="text-gray-600 text-center">We develop culturally appropriate health education programs for diverse communities worldwide.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6 card-hover" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-center mb-3">Community Training</h3>
              <p className="text-gray-600 text-center">We support passionate community members in teaching their communities.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white rounded-xl shadow-lg p-6 card-hover" data-aos="fade-up" data-aos-delay="300">
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h6v4H9V4zm9 16H6V4h1v5h10V4h1v16z"/>
                  <path d="M9 12h6v2H9zm0 4h6v2H9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-center mb-3">Resource Development</h3>
              <p className="text-gray-600 text-center">We create accessible health education materials in multiple languages and formats.</p>
            </div>
          </div>
          
          <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="400">
            <button 
              onClick={() => setCurrentPage('programs')}
              className="gradient-bg hover:opacity-90 text-white font-medium py-3 px-8 rounded-lg transition-colors inline-block"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12" data-aos="zoom-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Stat 1 */}
              <div className="text-center">
                <div className="text-4xl font-heading font-bold gradient-text mb-2">5</div>
                <p className="text-gray-600">International Chapters</p>
              </div>
              
              {/* Stat 2 */}
              <div className="text-center">
                <div className="text-4xl font-heading font-bold gradient-text mb-2">90+</div>
                <p className="text-gray-600">Organization Members</p>
              </div>
              
              {/* Stat 3 */}
              <div className="text-center">
                <div className="text-4xl font-heading font-bold gradient-text mb-2">Global</div>
                <p className="text-gray-600">Health Impact</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white" data-aos="zoom-in">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-lg mb-8">Join us in our mission to improve health literacy and empower communities worldwide.</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => setCurrentPage('contact')}
                className="bg-white text-primary hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors"
              >
                Get Involved
              </button>
              <a href="https://hcb.hackclub.com/donations/start/global-health-literacy-outreach" target="_blank" className="bg-transparent hover:bg-white/10 text-white border border-white font-medium py-3 px-8 rounded-lg transition-colors">
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;