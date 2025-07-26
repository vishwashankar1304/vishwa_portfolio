import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import aiCancerProject from "@/assets/ai-cancer-project.jpg";
import passwordManager from "@/assets/password-manager.jpg";
import ecommerceApp from "@/assets/ecommerce-app.jpg";
import portfolioProject from "@/assets/portfolio-project.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Final Year Project – Cervical Cancer Treatment Planner (Ongoing)",
      description: "I am building an AI tool to help doctors plan treatment for cervical cancer. The system analyzes MRI scans and patient details to predict the stage of cancer, and highlights the tumor area on the scan to make diagnosis and decision-making faster and more accurate.",
      tech: ["Python", "AI", "React", "Vision Transformer", "MedFormer", "ClinicalBERT"],
      github: "https://github.com/vishwashankar1304/cervical-cancer-treatment-planning",
      demo: "https://github.com/vishwashankar1304/cervical-cancer-treatment-planning",
      image: aiCancerProject,
      featured: true
    },
    {
      title: "Password Manager",
      description: "I created a secure website where users can safely store and manage their passwords. The passwords are protected using strong encryption, and users can easily add, view, or delete their credentials. The website works smoothly on both computers and mobile devices.",
      tech: ["React", "Node.js", "Encryption", "JWT"],
      github: "https://github.com/vishwashankar1304/passwordmanager",
      demo: "https://github.com/vishwashankar1304/passwordmanager",
      image: passwordManager
    },
    {
      title: "Siva Traders Platform (Consultancy Project)",
      description: "I developed a complete online store for electronics where customers can browse and purchase products, while admins can manage inventory, orders, and users through a secure login system. The platform is fast, responsive, and designed for real-time updates even with many users.",
      tech: ["React", "Node.js", "MongoDB", "Express.js"],
      github: "https://github.com/vishwashankar1304/Shiva-traders",
      demo: "https://github.com/vishwashankar1304/Shiva-traders",
      image: ecommerceApp
    },
    {
      title: "Heritage Hut (Design)",
      description: "I designed a mobile app for buying and selling handmade crafts from local artisans. The design focuses on simple browsing, easy buying, and rating features, helping local artists reach a wider audience through a modern, user-friendly platform.",
      tech: ["Figma", "UI/UX", "Mobile Design"],
      github: "https://www.figma.com/proto/W970WSBfXEE2Q6f6YcU8Uh/Heritage_Hut?node-id=1-2&t=Bzgo7lrvBQ0PJHna-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
      demo: "https://www.figma.com/proto/W970WSBfXEE2Q6f6YcU8Uh/Heritage_Hut?node-id=1-2&t=Bzgo7lrvBQ0PJHna-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
      image: portfolioProject
    }
  ];

  return (
    <section className="py-20 bg-transparent" id="projects">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4 transition-colors duration-300 text-[#f3f4f6]/50 hover:text-primary-glow hover:drop-shadow-[0_2px_12px_rgba(0,180,255,0.7)]">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-lg text-[#f3f4f6] mt-4 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in full-stack development, AI, and modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative bg-[#181A20] rounded-2xl overflow-hidden shadow-card border border-border hover:shadow-neon transition-all duration-500 transform hover:-translate-y-4 hover:scale-[1.02] animate-fade-in-up ${
                project.featured ? "md:col-span-2" : ""
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >


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
                <h3 className="text-xl font-bold text-[#f3f4f6] transition-colors duration-300 group-hover:text-primary-glow group-hover:drop-shadow-[0_2px_12px_rgba(0,180,255,0.7)]">
                  {project.title}
                </h3>
                
                <p className="text-[#f3f4f6] leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-secondary/80 text-[#f3f4f6] px-3 py-1 rounded-full text-xs font-medium border border-border/50 hover:border-primary/50 transition-colors duration-300"
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