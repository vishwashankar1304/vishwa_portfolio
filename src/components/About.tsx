const About = () => {
  return (
    <section className="py-20 bg-gradient-subtle relative overflow-hidden" id="about">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-primary-glow/5 rounded-full blur-3xl"></div>
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="bg-gradient-card rounded-2xl p-8 shadow-card border border-border animate-fade-in-up">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a final-year Computer Science & Design student at{" "}
            <span className="text-primary font-semibold">Kongu Engineering College</span>, 
            passionate about full-stack development, AI-driven solutions, and software testing. 
            I am currently working on my final-year project,{" "}
            <span className="text-primary font-semibold">
              "LLMSeg and MedFormer-Driven Hybrid Modeling for Interpretable Cervical Cancer Treatment Planning,"
            </span>{" "}
            which integrates Vision Transformers, MedFormer, ClinicalBERT, and Grad-CAM to build 
            an explainable AI system.
          </p>
          <br />
          <p className="text-lg text-muted-foreground leading-relaxed">
            My journey in technology is driven by the desire to create meaningful solutions that 
            bridge the gap between complex AI technologies and real-world applications. I believe 
            in continuous learning and staying updated with the latest technological advancements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;