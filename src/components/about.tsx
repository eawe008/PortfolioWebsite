import { Code, Rocket, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code is my priority.',
    },
    {
      icon: Rocket,
      title: 'Fast Learner',
      description: 'Always eager to learn new technologies and stay updated with industry trends.',
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Collaborative approach with excellent communication skills.',
    },
  ];

  return (
    <section id="about" className="section-wrap bg-white">
      <div className="section-inner">
        <h2 className="section-title">About Me</h2>
        <div className="section-accent" />

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Workspace"
              className="about-image"
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Passionate Developer & Problem Solver
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              With several years of experience in web development, I specialize in creating
              responsive, user-friendly applications that deliver exceptional user experiences.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              My journey in tech started with a curiosity about how things work, and it has
              evolved into a passion for building innovative solutions that make a real impact.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="highlight-card">
              <div className="icon-badge">
                <item.icon className="icon-badge-icon" size={24} />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
