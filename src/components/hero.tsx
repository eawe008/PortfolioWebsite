import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-50 pt-16">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            Hi, I'm <span className="text-blue-600">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Full Stack Developer | Creative Problem Solver | Tech Enthusiast
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
            I build exceptional digital experiences that make people's lives easier.
            Passionate about creating elegant solutions to complex problems.
          </p>

          <div className="flex items-center justify-center gap-6 mb-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all"
            >
              <Github className="text-gray-800" size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all"
            >
              <Linkedin className="text-blue-600" size={24} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all"
            >
              <Mail className="text-gray-800" size={24} />
            </a>
          </div>

          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all hover:scale-105 shadow-lg"
          >
            Get In Touch
          </button>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="text-gray-400" size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
