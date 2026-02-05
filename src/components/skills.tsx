const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js', 'HTML/CSS'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB', 'RESTful APIs'],
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Agile', 'Testing'],
    },
  ];

  return (
    <section id="skills" className="section-wrap bg-white">
      <div className="section-inner">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="section-accent" />

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                {category.category}
              </h3>

              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-lg p-8 bg-linear-to-r from-blue-50 to-gray-50">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Always Learning
          </h3>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Technology evolves rapidly, and so do I. Currently exploring AI/ML integration,
            serverless architectures, and advanced React patterns to stay at the cutting edge of
            web development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
