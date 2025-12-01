import React from 'react';

const About = () => {
  return (
    <div id="about" className="page">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">About Us</h1>
            <div className="w-24 h-1 gradient-bg mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">Global Health Literacy Outreach (GHLO) is a 501(c)(3) nonprofit dedicated to fostering increased understanding of health information and enhancing equity in health literacy, especially through the lens of bridging traditional remedies and modern science. Through outreach and communication, we aim to establish connections with health professionals and raise awareness of crucial health information.</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center mb-20">
            <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right">
              <div className="relative">
                <div className="blob bg-primary/20 w-64 h-64 mx-auto">
                  <svg className="w-full h-full text-primary" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M47.7,-57.2C59.9,-45.8,66.8,-29.1,68.8,-12.1C70.9,4.9,68.1,22.2,59.4,36.3C50.7,50.3,36,61.1,19.2,67.3C2.4,73.5,-16.6,75,-32.5,68.5C-48.5,61.9,-61.5,47.3,-68.2,30.1C-74.9,12.9,-75.3,-7,-68.5,-23.5C-61.7,-40,-47.7,-53.2,-33,-61.4C-18.3,-69.6,-2.9,-72.8,11.9,-70.1C26.7,-67.4,35.5,-68.7,47.7,-57.2Z" transform="translate(100 100)" />
                  </svg>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-40 h-40 text-primary" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12" data-aos="fade-left">
              <h2 className="text-3xl font-heading font-bold text-primary mb-4">Mission</h2>
              <p className="text-gray-700 mb-6">GHLO envisions creating a community through outreach where the understanding and communication of health is strengthened, leading towards a more informed and healthier society.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-20" data-aos="fade-up">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6 text-center">What is Health Literacy?</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8 text-center">Health literacy is the degree to which individuals have the capacity to obtain, process, and understand basic health information and services needed to make appropriate health decisions.</p>
            
            <div className="mt-10">
              <h3 className="text-2xl font-heading font-bold text-primary mb-6 text-center">Why Does This Matter?</h3>
              <p className="text-lg text-gray-700 mb-6 max-w-4xl mx-auto">Nearly 9 out of 10 adults have difficulty using the everyday health information that is routinely available in our health care facilities, retail outlets, media, and communities.</p>
              <p className="text-lg text-gray-700 mb-8 max-w-4xl mx-auto">For the first time, the 2003 NAAL also studied health literacy. From the more than 19,000 adults surveyed, only 12 percent demonstrated proficient health literacy.</p>
              
              <div className="max-w-4xl mx-auto">
                <p className="text-lg font-semibold text-gray-800 mb-4">Certain populations are most likely to experience limited health literacy:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700 list-disc list-inside mb-8">
                  <li>Adults over the age of 65 years</li>
                  <li>Racial and ethnic groups other than White</li>
                  <li>Recent refugees and immigrants</li>
                  <li>People with less than a high school degree or GED</li>
                  <li>People with incomes at or below the poverty level</li>
                  <li>Non-native speakers of English</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-20" data-aos="fade-up">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">Our Work</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">At GHLO, we develop innovative health literacy programs that empower communities to make informed health decisions. Our work includes educational outreach, community training, and creating accessible health resources.</p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Health literacy affects every aspect of our lives, and building a health-aware community starts with all of us.</p>
          </div>

          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl shadow-lg p-8 text-white text-center" data-aos="fade-up">
            <h2 className="text-3xl font-heading font-bold mb-4">Support Our Mission</h2>
            <p className="text-lg mb-6 max-w-3xl mx-auto">You can support our mission by spreading awareness among your family and friends or by contributing directly to our work through a donation.</p>
            <a 
              href="https://hcb.hackclub.com/donations/start/global-health-literacy-outreach" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white hover:bg-gray-100 text-primary font-medium py-3 px-8 rounded-lg transition-colors inline-block mb-4"
            >
              Donate Now
            </a>
            <p className="text-lg font-semibold">Your support truly makes a difference. Thank you for your kindness.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;