import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "vishwashankar1304@gmail.com",
      link: "mailto:vishwashankar1304@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98765 43210",
      link: "tel:+919876543210"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tamil Nadu, India",
      link: null
    }
  ];

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
    }
  ];

  return (
    <section className="py-20 bg-background" id="contact">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in-up">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                    <info.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-foreground font-medium hover:text-primary transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-lg font-semibold text-foreground mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 group"
                  >
                    <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-card rounded-xl p-8 shadow-card border border-border animate-fade-in-up animation-delay-300">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Let's Work Together</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Whether you have a project in mind, want to collaborate, or just want to say hello, 
              I'd love to hear from you. Let's create something amazing together!
            </p>
            
            <div className="space-y-4">
              <Button
                variant="cta"
                size="lg"
                className="w-full group"
                onClick={() => window.location.href = 'mailto:vishwashankar1304@gmail.com'}
              >
                <Mail className="w-5 h-5 group-hover:animate-bounce" />
                Send Me an Email
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="w-full group"
                onClick={() => window.open('https://drive.google.com/file/d/1UXPwS3ycv4sXt9ZBS4hSAZD-2LDtinbw/view?usp=sharing', '_blank')}
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;