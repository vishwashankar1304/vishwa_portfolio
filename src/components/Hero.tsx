import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#181A20] px-4 py-20">
      {/* Removed animated background elements for plain format */}
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-primary-glow text-lg font-medium">Hello, I'm</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                <span className="block" style={{ color: "white" }}>Vishwa S</span>
              </h1>
              <h1 className="text-3xl lg:text-2xl font-bold text-foreground leading-tight">
                 <span className="text-white">And, I'm a</span><span className="text-primary-glow"> Software Engineer</span>
              </h1>
                
              {/* Remove or blend the white line/divider here for seamless background */}
            </div>
            
            <p className="text-lg text-foreground max-w-2xl leading-relaxed" style = {{ color: "white" }}>
              I am a software engineer passionate about building useful and reliable applications. I enjoy solving problems and working on projects that make a real impact. 
              Currently, I’m focused on creating innovative solutions in the healthcare domain.
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
            <div className="relative z-10 group">
              <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-neon group-hover:shadow-glow transition-all duration-500 group-hover:scale-105">
                  <img
                    src={heroImage}
                    alt="Vishwa S - Developer"
                    className="w-full h-full object-cover animate-float"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;