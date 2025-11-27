import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const About = () => {
  const softSkills = [
    "Teamwork", "Adaptability", "Problem-Solving", 
    "Communication", "Creativity", "Brainstorming"
  ];

  return (
    <section id="about" className="py-32 relative font-inter">
      <motion.div
        className="container mx-auto px-6 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-space-grotesk font-bold text-transparent bg-gradient-primary bg-clip-text mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          <Card className="glass border-white/10 shadow-intense hover:shadow-glow transition-all duration-700 group font-inter">
            <CardContent className="p-12 font-inter">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-white/90 leading-relaxed font-inter">
                    I'm a third-year AI & Data Science student at M S Ramaiah Institute of Technology (2023–2027), 
                    passionate about building intelligent systems and scalable web applications.
                  </p>
                  
                  <p className="text-lg text-white/80 leading-relaxed font-inter">
                    I thrive on solving complex problems through data analysis and creating innovative web solutions 
                    that make a real impact. My journey combines the analytical power of AI with the creativity of web development.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-2xl font-space-grotesk font-semibold text-white mb-6 font-inter">Soft Skills</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {softSkills.map((skill, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="glass hover:glass-glow transition-all duration-300 px-4 py-2 text-sm font-medium border-neon-purple/20 text-neon-purple justify-center font-inter"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
};
export default About;