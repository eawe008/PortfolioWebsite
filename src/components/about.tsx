import { Code, Rocket, Users } from 'lucide-react';
import '../globals.css';

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
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">About Me</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Workspace"
              className="rounded-lg shadow-xl"
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
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="text-blue-600" size={24} />
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
