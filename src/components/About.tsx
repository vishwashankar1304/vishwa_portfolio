const About = () => {
  return (
    <section className="py-20 bg-transparent relative overflow-hidden" id="about">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-primary-glow/5 rounded-full blur-3xl"></div>
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4 transition-colors duration-300 text-[#f3f4f6]/50 hover:text-primary-glow hover:drop-shadow-[0_2px_12px_rgba(0,180,255,0.7)]">About Me</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>
        <div className="bg-[#181A20] rounded-2xl p-8 shadow-card border border-border animate-fade-in-up transition-all duration-300 hover:shadow-neon hover:border-primary/70">
          <p className="text-lg text-[#f3f4f6] leading-relaxed">
            Passionate about using technology to solve problems and drive innovation. Skilled in modern tools and frameworks, and eager to contribute to impactful projects through teamwork and continuous learning.
          </p>
          <br />
          <p className="text-lg text-[#f3f4f6] leading-relaxed">
            <b>Education:</b> B.E. in Computer Science and Design<br/>
            <span className="text-primary font-semibold">Kongu Engineering College, Erode</span> (Nov 2022 – Apr 2026)<br/>
            CGPA: 7.91 (till 6th semester)
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;