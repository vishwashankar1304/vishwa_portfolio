import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Media Team Coordinator",
      company: "Computer Society of India (CSI), KEC",
      period: "2023 – Present",
      location: "Erode, Tamil Nadu",
      description: "Coordinated media and communications for CSI events, managed publicity, and contributed to event organization and execution.",
      skills: ["Leadership", "Teamwork", "Event Management"]
    },
    {
      title: "Executive Member",
      company: "Computer Science and Design Association, KEC",
      period: "2023 – Present",
      location: "Erode, Tamil Nadu",
      description: "Active member contributing to technical events, workshops, and collaborative projects within the department.",
      skills: ["Collaboration", "Technical Leadership"]
    },
    {
      title: "Full-Stack E-commerce App Team Lead",
      company: "KEC Project Team",
      period: "2024",
      location: "Erode, Tamil Nadu",
      description: "Led a team to build and deploy a full-stack e-commerce app, demonstrating collaborative and technical leadership.",
      skills: ["Full-Stack Development", "Team Leadership"]
    }
  ];

  const education = {
    degree: "B.E. in Computer Science and Design",
    institution: "Kongu Engineering College, Erode",
    period: "Nov 2022 – Apr 2026",
    location: "Tamil Nadu, India",
    highlights: [
      "CGPA: 7.91 (till 6th semester)"
    ]
  };

  const twelfth = {
    degree: "12th Grade",
    institution: "Bharani Park Matric Hr Sec School, Karur",
    period: "2021 – 2022",
    location: "Tamil Nadu, India",
    highlights: [
      "Percentage: 82%"
    ]
  };

  return (
    <section className="py-20 bg-transparent" id="experience">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 transition-colors duration-300 text-[#f3f4f6]/50 hover:text-primary-glow hover:drop-shadow-[0_2px_12px_rgba(0,180,255,0.7)]">Experience & Education</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-semibold text-[#f3f4f6] mb-6 flex items-center gap-2 transition-colors duration-300 hover:text-primary-glow hover:drop-shadow-[0_2px_12px_rgba(0,180,255,0.7)]">
              <div className="w-2 h-8 bg-gradient-primary rounded-full"></div>
              Professional Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                 className="bg-[#181A20] rounded-xl p-6 shadow-card border border-border animate-fade-in-up transition-all duration-300 hover:shadow-neon hover:border-primary/70"
                >
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <h4 className="text-xl font-semibold text-[#f3f4f6]">{exp.title}</h4>
                      <div className="flex items-center gap-2 text-sm text-[#a1a1aa]">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-primary font-medium">
                      <span>{exp.company}</span>
                      <span className="text-[#f3f4f6]">•</span>
                      <div className="flex items-center gap-1 text-[#a1a1aa]">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-[#f3f4f6] leading-relaxed">
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
            <h3 className="text-2xl font-semibold text-[#f3f4f6] mb-6 flex items-center gap-2 transition-colors duration-300 hover:text-primary-glow hover:drop-shadow-[0_2px_12px_rgba(0,180,255,0.7)]">
              <div className="w-2 h-8 bg-gradient-primary rounded-full" > </div>
              Education
            </h3>
            
            {/* Degree Card */}
            <div className="bg-[#181A20] rounded-xl p-6 shadow-card border border-border animate-fade-in-up transition-all duration-300 hover:shadow-neon hover:border-primary/70 mb-6">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h4 className="text-xl font-semibold text-[#f3f4f6]">{education.degree}</h4>
                  <div className="flex items-center gap-2 text-sm text-[#a1a1aa]">
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
                  <h5 className="text-sm font-semibold text-[#a1a1aa]">Key Highlights:</h5>
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
            {/* 12th Grade Card */}
            <div className="bg-[#181A20] rounded-xl p-6 shadow-card border border-border animate-fade-in-up transition-all duration-300 hover:shadow-neon hover:border-primary/70">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h4 className="text-xl font-semibold text-[#f3f4f6]">{twelfth.degree}</h4>
                  <div className="flex items-center gap-2 text-sm text-[#a1a1aa]">
                    <Calendar className="w-4 h-4" />
                    {twelfth.period}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-primary font-medium">
                  <span>{twelfth.institution}</span>
                  <span className="text-muted-foreground">•</span>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {twelfth.location}
                  </div>
                </div>
                <div className="space-y-2">
                  <h5 className="text-sm font-semibold text-[#a1a1aa]">Key Highlights:</h5>
                  <ul className="space-y-1">
                    {twelfth.highlights.map((highlight, index) => (
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