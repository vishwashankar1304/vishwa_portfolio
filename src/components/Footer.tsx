import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/vishwashankar1304"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      url: "https://www.linkedin.com/in/vishwa-s-552247259"
    },
    {
      icon: Mail,
      label: "Email",
      url: "mailto:vishwashankar1304@gmail.com"
    }
  ];

  return (
    <footer className="bg-gradient-subtle border-t border-border py-12">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center space-y-6">
          {/* Logo/Name */}
          <div className="space-y-2">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Vishwa S
            </h3>
            <p className="text-muted-foreground">
              Aspiring Software Engineer & AI Enthusiast
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 group"
              >
                <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-border">
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              Made with 
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              by Vishwa S © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;