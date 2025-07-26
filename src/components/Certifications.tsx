const Certifications = () => (
  <section className="py-20 bg-transparent" id="certifications">
    <div className="container max-w-4xl mx-auto px-4">
      <div className="text-center mb-12 animate-fade-in-up">
        <h2 className="text-4xl font-bold text-[#f3f4f6] mb-4 transition-colors duration-300 hover:text-primary-glow hover:drop-shadow-[0_2px_12px_rgba(0,180,255,0.7)]" style = {{color:"rgba(255, 255, 255, 0.5)"}}>Certifications & Achievements</h2>
        <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
      </div>
      <div className="bg-[#181A20] rounded-2xl p-8 shadow-card border border-border animate-fade-in-up transition-all duration-300 hover:shadow-neon hover:border-primary/70">
        <ul className="list-disc pl-6 space-y-3 text-lg">
          <li className="text-[#a1a1aa] transition-colors duration-300 hover:text-primary-glow hover:drop-shadow-[0_2px_12px_rgba(0,180,255,0.7)]">1<sup>st</sup> – Code Debugging, Christ the King Engineering College (Oct 2023)</li>
          <li className="text-[#a1a1aa] transition-colors duration-300 hover:text-primary-glow hover:drop-shadow-[0_2px_12px_rgba(0,180,255,0.7)]">2<sup>nd</sup> – UI/UX Design, Kongu Engineering College (Mar 2024)</li>
          <li className="text-[#a1a1aa] transition-colors duration-300 hover:text-primary-glow hover:drop-shadow-[0_2px_12px_rgba(0,180,255,0.7)]">2<sup>nd</sup> – Tech Quiz and Web Design, Erode Sengunthar Engineering College (Apr 2024)</li>
          <li className="text-[#a1a1aa] transition-colors duration-300 hover:text-primary-glow hover:drop-shadow-[0_2px_12px_rgba(0,180,255,0.7)]">3<sup>rd</sup> – Paper Presentation, Sairam Engineering College (Nov 2023)</li>
          <li className="text-[#a1a1aa] transition-colors duration-300 hover:text-primary-glow hover:drop-shadow-[0_2px_12px_rgba(0,180,255,0.7)]">Finalist – UI/UX Hackathon, Kongu Engineering College (May 2024)</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Certifications;
