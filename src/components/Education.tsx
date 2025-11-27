import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Education = () => {
  const coursework = [
    "Web Development", "Data Structures & Algorithms", "Artificial Intelligence"
  ];

  const certifications = [
    { name: "Coursera Full Stack Developer", year: "2024" },
    { name: "Coursera Version Control", year: "2024" }
  ];

  return (
    <section id="education" className="py-32 relative overflow-hidden font-inter">
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-space-grotesk font-bold text-transparent bg-gradient-secondary bg-clip-text mb-6">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-secondary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Degree */}
            <Card className="glass border-white/10 shadow-intense hover:shadow-glow transition-all duration-700 group font-inter">
              <CardContent className="p-8 font-inter">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-space-grotesk font-semibold text-white font-inter">Academic Background</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="text-xl font-semibold text-neon-purple font-inter">B.E. in Artificial Intelligence & Data Science</h4>
                    <div className="flex items-center text-white/80 font-inter">
                      <MapPin className="h-4 w-4 mr-2 text-neon-cyan" />
                      <span>M S Ramaiah Institute of Technology</span>
                    </div>
                    <div className="flex items-center text-white/70 font-inter">
                      <Calendar className="h-4 w-4 mr-2 text-neon-pink" />
                      <span>2023 – 2027</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h5 className="font-medium text-white text-lg font-inter">Relevant Coursework</h5>
                    <div className="flex flex-wrap gap-3">
                      {coursework.map((course, index) => (
                        <Badge 
                          key={index} 
                          variant="outline" 
                          className="glass border-neon-blue/30 text-neon-blue hover:shadow-glow transition-all duration-300 font-inter"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="glass border-white/10 shadow-intense hover:shadow-glow transition-all duration-700 group font-inter">
              <CardContent className="p-8 font-inter">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-space-grotesk font-semibold text-white font-inter">Certifications</h3>
                </div>
                
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="glass p-4 rounded-xl border border-white/10 hover:border-neon-purple/30 transition-all duration-300 group font-inter">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-gradient-primary rounded-full mr-4 group-hover:animate-pulse"></div>
                          <div>
                            <span className="text-white font-medium font-inter">{cert.name}</span>
                            <div className="text-sm text-white/60 font-inter">{cert.year}</div>
                          </div>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Award className="h-4 w-4 text-neon-purple" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;