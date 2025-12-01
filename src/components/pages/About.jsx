import React from 'react';

const About = () => {
  return (
    <div id="about" className="page">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">About Us</h1>
            <div className="w-24 h-1 gradient-bg mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">We believe that health literacy is a fundamental right, not a privilege. Our organization works to bridge the knowledge gap in underserved communities worldwide.</p>
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
              <h2 className="text-3xl font-heading font-bold text-primary mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-6">To empower communities worldwide with the knowledge and resources they need to make informed health decisions, prevent disease, and improve quality of life.</p>
              
              <h2 className="text-3xl font-heading font-bold text-primary mb-4">Our Vision</h2>
              <p className="text-gray-700 mb-6">A world where everyone, regardless of location or socioeconomic status, has access to clear, accurate health information that enables them to lead healthier lives.</p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-20" data-aos="fade-up">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-bold mb-2">Accessibility</h3>
                <p className="text-gray-600">Making health information available to all, regardless of literacy level or background.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-bold mb-2">Cultural Sensitivity</h3>
                <p className="text-gray-600">Respecting diverse backgrounds and beliefs in all our educational materials and approaches.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-heading font-bold mb-2">Evidence-Based</h3>
                <p className="text-gray-600">Using proven approaches and accurate information in all our educational programs.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center" data-aos="fade-up">
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">GHLO was founded in August 2024 with the mission of improving health literacy across the globe and eliminating stigmas in health information. According to the US Department of Health and Human Service, nearly 9 out of 10 adults have difficulty using the everyday health information that is routinely available in our health care facilities, retail outlets, media, and communities. As a first generation English speaker, Cindy have the first-hand experience of the difficulties in receiving the help she needed in the hospital due to language barriers. The lack of knowledge of medical terms makes it very difficult to communicate with the doctors. Adding on to that, there is great stigma in understanding and utilizing modern western medicine in the country where Cindy came from. Thus, she and her partner from China co-founded this organization in efforts to advocate and improve the health literacy of the general public.</p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Throughout the year, we recruited 20 highly motivated high school students as the core leadership of our organization. Over the past few months, we expanded our branches and membership across the nation and the globe, reaching people from 5 states in the US and 3 countries. We hosted various workshops and events. In December, we hosted Christmas Bakesale with the topic of being mindful towards end of the year burnout. In April, we hosted the event World Health Day: Healthy Beginnings, Hopeful Futures in collaboration with several health clubs at CCA. We host different interactive information tables and workshops centered around maternal health and general health. In May, we hosted the Wall of Kindness with CCA PALS. Students wrote positive messages on the wall to promote mental health awareness. In June, we hosted the Alzheimer's Disease and Brain Health Awareness Month in collaboration with IYNA to spread early Alzheimer's Awareness.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;