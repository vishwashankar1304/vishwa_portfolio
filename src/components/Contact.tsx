
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react";

const Contact = () => {
  // State for status message
  const [status, setStatus] = useState<{ message: string; type: "success" | "error" | null }>({ message: "", type: null });
  const [showPopup, setShowPopup] = useState(false);
  // Ref for the form
  const formRef = useRef<HTMLFormElement>(null);
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


  // EmailJS config
  const EMAILJS_SERVICE_ID = "service_n69fpov";
  const EMAILJS_TEMPLATE_ID = "template_9iz7jna";
  const EMAILJS_PUBLIC_KEY = "m2mTMzc9aJz_asPq_";

  // Validate email format
  function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    const form = formRef.current;
    const firstName = (form.elements.namedItem("firstName") as HTMLInputElement)?.value.trim();
    const lastName = (form.elements.namedItem("lastName") as HTMLInputElement)?.value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value.trim();
    const subject = (form.elements.namedItem("subject") as HTMLInputElement)?.value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value.trim();

    // Validate fields
    if (!firstName || !lastName || !email || !subject || !message) {
      setStatus({ message: "Please fill in all fields.", type: "error" });
      return;
    }
    if (!validateEmail(email)) {
      setStatus({ message: "Please enter a valid email address.", type: "error" });
      return;
    }

    // Send email via EmailJS
    setStatus({ message: "Sending...", type: null });
    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus({ message: "Your message has been sent successfully!", type: "success" });
        setShowPopup(true);
        form.reset();
      })
      .catch(() => {
        setStatus({ message: "An error occurred. Please try again later.", type: "error" });
      });
  };

  return (
    <section className="py-20 bg-transparent" id="contact">
      {/* Popup notification */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full text-center">
            <h3 className="text-xl font-bold mb-2 text-green-600">Mail Received!</h3>
            <p className="mb-4 text-gray-700">Thank you for reaching out. I have received your message and will reply soon.</p>
            <button
              className="mt-2 px-4 py-2 bg-primary text-white rounded hover:bg-primary-glow transition"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className="container max-w-2xl mx-auto px-4">
        <div className="text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-6 transition-colors duration-300 text-[#f3f4f6]/50 hover:text-primary-glow hover:drop-shadow-[0_2px_12px_rgba(0,180,255,0.7)]">Get in Touch</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Feel free to reach out by filling the form below. I'll get back to you as soon as possible!
          </p>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input id="firstName" name="firstName" type="text" placeholder="Your FirstName" className="w-full px-4 py-3 rounded-lg bg-[#23263a] text-[#f3f4f6] placeholder-[#bfc9e0] focus:outline-none focus:ring-2 focus:ring-primary" />
              <input id="lastName" name="lastName" type="text" placeholder="Your LastName" className="w-full px-4 py-3 rounded-lg bg-[#23263a] text-[#f3f4f6] placeholder-[#bfc9e0] focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input id="email" name="email" type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg bg-[#23263a] text-[#f3f4f6] placeholder-[#bfc9e0] focus:outline-none focus:ring-2 focus:ring-primary" />
              <input id="subject" name="subject" type="text" placeholder="Your Subject" className="w-full px-4 py-3 rounded-lg bg-[#23263a] text-[#f3f4f6] placeholder-[#bfc9e0] focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <textarea id="message" name="message" placeholder="Your Message" rows={6} className="w-full px-4 py-3 rounded-lg bg-[#23263a] text-[#f3f4f6] placeholder-[#bfc9e0] focus:outline-none focus:ring-2 focus:ring-primary" />
            <button type="submit" className="w-full mt-4 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg shadow-card hover:bg-primary-glow hover:drop-shadow-[0_2px_12px_rgba(0,180,255,0.7)] transition-colors duration-300">Send</button>
            {status.message && (
              <div className={`mt-4 text-${status.type === "success" ? "green" : "red"}-500 font-semibold`}>{status.message}</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;