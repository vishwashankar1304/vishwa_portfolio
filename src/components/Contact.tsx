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
      value: "9865236886",
      link: "tel:9865236886"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Erode, Tamil Nadu",
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
      url: "https://linkedin.com/in/vishwa-s-552247259"
    },
    {
      icon: Mail,
      label: "Email",
      url: "mailto:vishwashankar1304@gmail.com"
    }
  ];

  return (
    <section className="py-20 bg-transparent" id="contact">
      <div className="container max-w-2xl mx-auto px-4">
        <div className="text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-6 transition-colors duration-300 text-[#f3f4f6]/50 hover:text-primary-glow hover:drop-shadow-[0_2px_12px_rgba(0,180,255,0.7)]">Get in Touch</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Feel free to reach out by filling the form below. I'll get back to you as soon as possible!
          </p>
          <form className="space-y-6 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Your FirstName" className="w-full px-4 py-3 rounded-lg bg-[#23263a] text-[#f3f4f6] placeholder-[#bfc9e0] focus:outline-none focus:ring-2 focus:ring-primary" />
              <input type="text" placeholder="Your LastName" className="w-full px-4 py-3 rounded-lg bg-[#23263a] text-[#f3f4f6] placeholder-[#bfc9e0] focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg bg-[#23263a] text-[#f3f4f6] placeholder-[#bfc9e0] focus:outline-none focus:ring-2 focus:ring-primary" />
              <input type="text" placeholder="Your Subject" className="w-full px-4 py-3 rounded-lg bg-[#23263a] text-[#f3f4f6] placeholder-[#bfc9e0] focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <textarea placeholder="Your Message" rows={6} className="w-full px-4 py-3 rounded-lg bg-[#23263a] text-[#f3f4f6] placeholder-[#bfc9e0] focus:outline-none focus:ring-2 focus:ring-primary" />
            <button type="submit" className="w-full mt-4 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg shadow-card hover:bg-primary-glow hover:drop-shadow-[0_2px_12px_rgba(0,180,255,0.7)] transition-colors duration-300">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;