import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Cervical Cancer Treatment Planner",
      description: "Hybrid model using Vision Transformer, MedFormer, and ClinicalBERT for diagnosis and treatment planning with explainable AI. Built with Python, PyTorch, and React.",
      tech: ["Python", "PyTorch", "React", "Vision Transformer", "ClinicalBERT"],
      github: "https://github.com/vishwashankar1304",
      demo: "https://github.com/vishwashankar1304",
      featured: true
    },
    {
      title: "Password Manager App",
      description: "Secure, encrypted password vault with login and storage functionality, built using modern web technologies with a focus on security and user experience.",
      tech: ["React", "Node.js", "Encryption", "JWT"],
      github: "https://github.com/vishwashankar1304",
      demo: "https://github.com/vishwashankar1304"
    },
    {
      title: "E-commerce Shopping App (Snitch-like)",
      description: "A prototype shopping application featuring modern UI/UX design, product browsing, cart functionality, and responsive design principles.",
      tech: ["React", "Firebase", "CSS3", "JavaScript"],
      github: "https://github.com/vishwashankar1304",
      demo: "https://github.com/vishwashankar1304"
    },
    {
      title: "Portfolio Website",
      description: "This portfolio website showcasing my projects and skills, built with modern web technologies and featuring responsive design and smooth animations.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Lovable"],
      github: "https://github.com/vishwashankar1304",
      demo: "https://vishwa-portfolio.lovable.app"
    }
  ];

  return (
    <section className="py-20 bg-background" id="projects">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in full-stack development, AI, and modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative bg-gradient-card rounded-xl p-6 shadow-card border border-border hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {project.featured && (
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                </div>
              )}

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-secondary/50 text-secondary-foreground px-3 py-1 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.github, '_blank')}
                    className="group/btn"
                  >
                    <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                    Code
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => window.open(project.demo, '_blank')}
                    className="group/btn"
                  >
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;