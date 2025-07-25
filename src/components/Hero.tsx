import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-subtle px-4 py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Vishwa S
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                Final Year Computer Science & Design Student | Aspiring Software Engineer & AI Enthusiast
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Passionate about full-stack development, AI-driven solutions, and software testing. 
              Currently working on cutting-edge AI research for healthcare applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="hero" 
                size="lg"
                className="group"
                onClick={() => window.open('https://drive.google.com/file/d/1UXPwS3ycv4sXt9ZBS4hSAZD-2LDtinbw/view?usp=sharing', '_blank')}
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-4">
              <a 
                href="https://github.com/vishwashankar1304" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/vishwa-s-552247259" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:vishwashankar1304@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in-up animation-delay-300">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Vishwa S - Developer"
                className="rounded-2xl shadow-elegant w-full h-auto max-w-lg mx-auto animate-float"
              />
            </div>
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl blur-3xl transform scale-105"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;