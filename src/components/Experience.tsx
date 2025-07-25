import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Java Full Stack Development",
      company: "Wipro TalentNext Project-Based Learning Program",
      period: "Ongoing",
      location: "Remote",
      description: "Project-based learning program focusing on Java full-stack development, including hands-on experience with enterprise-level applications and modern development practices.",
      skills: ["Java", "Spring Boot", "React", "Database Management", "RESTful APIs"]
    },
    {
      title: "Software Developer",
      company: "Siva Traders - Consultancy Project",
      period: "2024",
      location: "Remote",
      description: "Built comprehensive tools for inventory management and business process optimization, improving operational efficiency and data management capabilities.",
      skills: ["Full-Stack Development", "Database Design", "Business Analysis", "Process Automation"]
    }
  ];

  const education = {
    degree: "B.E. Computer Science & Design",
    institution: "Kongu Engineering College",
    period: "2021 – 2025",
    location: "Tamil Nadu, India",
    highlights: ["Final Year Project on AI-driven Healthcare Solutions", "Focus on Software Engineering and AI/ML"]
  };

  return (
    <section className="py-20 bg-gradient-subtle" id="experience">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <div className="w-2 h-8 bg-gradient-primary rounded-full"></div>
              Professional Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-gradient-card rounded-xl p-6 shadow-card border border-border hover:shadow-elegant transition-all duration-300"
                >
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <h4 className="text-xl font-semibold text-foreground">{exp.title}</h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-primary font-medium">
                      <span>{exp.company}</span>
                      <span className="text-muted-foreground">•</span>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-secondary/50 text-secondary-foreground px-3 py-1 rounded-lg text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="animate-fade-in-up animation-delay-300">
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <div className="w-2 h-8 bg-gradient-primary rounded-full"></div>
              Education
            </h3>
            
            <div className="bg-gradient-card rounded-xl p-6 shadow-card border border-border hover:shadow-elegant transition-all duration-300">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h4 className="text-xl font-semibold text-foreground">{education.degree}</h4>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {education.period}
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-primary font-medium">
                  <span>{education.institution}</span>
                  <span className="text-muted-foreground">•</span>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {education.location}
                  </div>
                </div>

                <div className="space-y-2">
                  <h5 className="text-sm font-semibold text-foreground">Key Highlights:</h5>
                  <ul className="space-y-1">
                    {education.highlights.map((highlight, index) => (
                      <li key={index} className="text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;