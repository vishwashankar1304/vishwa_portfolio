const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "JavaScript", "HTML/CSS"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Node.js", "PyTorch", "Firebase"]
    },
    {
      title: "Testing & Tools",
      skills: ["Manual Testing", "Postman (API Testing)", "Selenium (Basics)", "Git/GitHub"]
    },
    {
      title: "Methodologies",
      skills: ["Agile Development", "Software Testing", "Full-Stack Development", "AI/ML Development"]
    }
  ];

  return (
    <section className="py-20 bg-background relative" id="skills">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-primary-glow/5 rounded-full blur-3xl animate-float animation-delay-1000"></div>
      </div>
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-gradient-card rounded-2xl p-8 shadow-card border border-border hover:shadow-neon transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 animate-fade-in-up group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:animate-glow">
                  <div className="w-8 h-8 bg-primary-foreground rounded-lg"></div>
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-secondary/70 rounded-xl px-4 py-3 text-center text-secondary-foreground font-medium hover:bg-primary/20 hover:text-primary hover:shadow-neon transition-all duration-300 transform hover:scale-105 border border-border/30 hover:border-primary/50"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;