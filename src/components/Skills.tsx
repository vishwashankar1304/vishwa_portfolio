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
    <section className="py-20 bg-gradient-subtle" id="skills">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-gradient-card rounded-xl p-6 shadow-card border border-border hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-4 text-center">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-secondary/50 rounded-lg px-3 py-2 text-center text-secondary-foreground font-medium hover:bg-primary/10 hover:text-primary transition-colors duration-300"
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