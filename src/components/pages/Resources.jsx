import React from 'react';

const Resources = () => {
  const resources = [
    {
      title: "Comparing Global Health Policies",
      description: "Comparison of health policies from all around the world",
      url: "https://i.postimg.cc/t4wvZCX9/IMG-0056.png"
    },
    {
      title: "Pocket Health Guide",
      description: "Knowledge we believe is essential to be shared with the general public",
      url: "https://drive.google.com/file/d/1XJIj9qBmZre5nCAGBM2wITujFZ9aOBAd/view?usp=drivesdk"
    }
  ];

  return (
    <div id="resources" className="page">
      <section className="py-16 bg-white/40 backdrop-blur-md border-t border-white/30">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-primary mb-8">Resources</h2>
          <p className="text-gray-700 mb-12">
            Explore research and educational content developed by our team to promote global health literacy.
          </p>

          <div className="grid gap-6 md:grid-cols-2 text-left">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white/60 rounded-xl shadow-md p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-primary mb-2">{resource.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
                <a 
                  href={resource.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 transition"
                >
                  View Resource →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;