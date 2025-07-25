import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import aiCancerProject from "@/assets/ai-cancer-project.jpg";
import passwordManager from "@/assets/password-manager.jpg";
import ecommerceApp from "@/assets/ecommerce-app.jpg";
import portfolioProject from "@/assets/portfolio-project.jpg";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Cervical Cancer Treatment Planner",
      description: "Hybrid model using Vision Transformer, MedFormer, and ClinicalBERT for diagnosis and treatment planning with explainable AI. Built with Python, PyTorch, and React.",
      tech: ["Python", "PyTorch", "React", "Vision Transformer", "ClinicalBERT"],
      github: "https://github.com/vishwashankar1304",
      demo: "https://github.com/vishwashankar1304",
      image: aiCancerProject,
      featured: true
    },
    {
      title: "Password Manager App",
      description: "Secure, encrypted password vault with login and storage functionality, built using modern web technologies with a focus on security and user experience.",
      tech: ["React", "Node.js", "Encryption", "JWT"],
      github: "https://github.com/vishwashankar1304",
      demo: "https://github.com/vishwashankar1304",
      image: passwordManager
    },
    {
      title: "E-commerce Shopping App (Snitch-like)",
      description: "A prototype shopping application featuring modern UI/UX design, product browsing, cart functionality, and responsive design principles.",
      tech: ["React", "Firebase", "CSS3", "JavaScript"],
      github: "https://github.com/vishwashankar1304",
      demo: "https://github.com/vishwashankar1304",
      image: ecommerceApp
    },
    {
      title: "Portfolio Website",
      description: "This portfolio website showcasing my projects and skills, built with modern web technologies and featuring responsive design and smooth animations.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Lovable"],
      github: "https://github.com/vishwashankar1304",
      demo: "https://vishwa-portfolio.lovable.app",
      image: portfolioProject
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
              className={`group relative bg-gradient-card rounded-2xl overflow-hidden shadow-card border border-border hover:shadow-neon transition-all duration-500 transform hover:-translate-y-4 hover:scale-[1.02] animate-fade-in-up ${
                project.featured ? "md:col-span-2" : ""
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-glow">
                    ⭐ Featured
                  </span>
                </div>
              )}

              {/* Project Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                
                {/* Overlay with links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-background/20 backdrop-blur-sm">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.github, '_blank')}
                    className="bg-background/80 hover:bg-background border-primary/50 hover:border-primary group/btn backdrop-blur-sm"
                  >
                    <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                    Code
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => window.open(project.demo, '_blank')}
                    className="group/btn shadow-glow"
                  >
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    Demo
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-secondary/80 text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium border border-border/50 hover:border-primary/50 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
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