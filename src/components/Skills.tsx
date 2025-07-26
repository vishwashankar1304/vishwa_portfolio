const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      skills: ["C", "Java", "SQL", "HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB"]
    },
    {
      title: "Tools",
      skills: ["VSCode", "Postman", "Google Colab", "GitHub", "Figma", "Canva"]
    },
    {
      title: "Soft Skills",
      skills: ["Leadership", "Teamwork", "Time Management"]
    }
  ];

  return (
    <section className="py-20 bg-transparent relative" id="skills">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-primary-glow/5 rounded-full blur-3xl animate-float animation-delay-1000"></div>
      </div>
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 transition-colors duration-300 text-[#f3f4f6]/50 hover:text-primary-glow hover:drop-shadow-[0_2px_12px_rgba(0,180,255,0.7)]">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center mx-auto w-fit">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-[#181A20] rounded-2xl p-8 shadow-card border border-border animate-fade-in-up transition-all duration-300 hover:shadow-neon hover:border-primary/70 group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-center mb-6 flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:animate-glow">
                  <div className="w-8 h-8 bg-primary-foreground rounded-lg"></div>
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-3 justify-items-center">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-secondary/70 rounded-xl px-4 py-3 text-center text-secondary-foreground font-medium hover:bg-primary/20 hover:text-primary hover:shadow-neon transition-all duration-300 transform hover:scale-105 border border-border/30 hover:border-primary/50 w-full max-w-xs mx-auto"
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