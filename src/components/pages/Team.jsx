import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: "Cindy Li",
      position: "Executive Director",
      description: "Cindy is a 12th grader leading GHLO with vision and purpose.",
      image: "https://i.postimg.cc/zv2G358Z/Cindy-Li.png"
    },
    {
      name: "Zarius Hong",
      position: "Senior Director of Education and Culture",
      description: "Zarius is passionate about educating communities on health literacy and cultural understanding.",
      image: "https://i.postimg.cc/prrqKYbh/Zarius-Hong.webp"
    },
    {
      name: "Esther Lam",
      position: "Senior Director of Advocacy",
      description: "Esther advocates for health literacy policies that empower youth and communities.",
      image: "https://i.postimg.cc/d0zy52yZ/Esther-Lam.webp"
    },
    {
      name: "Iris Tong",
      position: "Chief Operating Director",
      description: "Iris oversees operations and ensures projects run smoothly across GHLO.",
      image: "https://i.postimg.cc/66Ytf9RC/Iris-Tong.webp"
    },
    {
      name: "Harini Iyer",
      position: "Senior Director of Health Communications",
      description: "Harini translates complex health topics into clear, accessible messages.",
      image: null,
      initials: "HI"
    },
    {
      name: "Joyce Tan",
      position: "Senior Director of Policy",
      description: "Joyce leads the development of policies that support health education and equity.",
      image: "https://i.postimg.cc/pXdCmtK0/joyce-ghlo.jpg"
    },
    {
      name: "Anish Kurra",
      position: "Senior Director of Internal Operations",
      description: "Anish ensures efficient operations and collaboration across departments.",
      image: "https://i.postimg.cc/NfPF6VPf/Screenshot-2025-08-03-at-2-49-43-PM.png"
    },
    {
      name: "Rahul Vinoth",
      position: "Web Development Intern",
      description: "Rahul developed this website and finally brought it to life, currently improves and maintains website.",
      image: "https://i.postimg.cc/2SsWqT5X/IMG-0057.jpg"
    },
    {
      name: "Sahana Karthik",
      position: "Director of Health Initiatives",
      description: "Sahana leads projects that promote community health education and wellness.",
      image: "https://i.postimg.cc/vHzMbYTT/Sahana-Karthik.jpg"
    },
    {
      name: "Katherine Jeon",
      position: "Senior Director of Outreach",
      description: "Katherine builds connections and partnerships to expand GHLO's impact.",
      image: "https://i.postimg.cc/htTdjCZy/Katherine-Jeon.jpg"
    },
    {
      name: "Aneisa Rampersaud",
      position: "Director of Chapters",
      description: "Aneisa coordinates GHLO chapters across schools and regions.",
      image: "https://i.postimg.cc/bvhgzhBC/download.png"
    },
    {
      name: "Venkata Ram Kaushik Chitti",
      position: "Co-Director of IT",
      description: "Ram supports the technical side of GHLO's mission, helping develop and maintain the organization's digital infrastructure.",
      image: "https://i.postimg.cc/PqM8ngDj/20250731-190956.jpg"
    }
  ];

  return (
    <div id="team" className="page py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">⭐️ Leadership & Team ⭐️</h1>
        <p className="mt-4 text-gray-600">Meet the passionate team behind Global Health Literacy Outreach.</p>
      </div>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white/40 backdrop-blur-md border border-white/30 rounded-xl shadow-lg overflow-hidden" data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="relative h-64 flex items-center justify-center">
              <div className="w-40 h-40 rounded-full border-4 border-primary shadow-lg overflow-hidden">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="bg-gray-100 text-primary font-bold text-3xl flex items-center justify-center w-full h-full">
                    {member.initials}
                  </div>
                )}
              </div>
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-heading font-bold text-primary mb-1">{member.name}</h3>
              <p className="text-secondary font-medium mb-2">{member.position}</p>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;