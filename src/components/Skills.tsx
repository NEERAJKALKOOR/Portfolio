import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Monitor, Server, Database, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      skills: ["Python", "C", "Java", "JavaScript", "CSS"],
      gradient: "from-neon-purple to-neon-pink"
    },
    {
      title: "AI / Machine Learning",
      icon: Brain,
      skills: ["PyTorch", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "NLTK"],
      gradient: "from-neon-blue to-neon-cyan"
    },
    {
      title: "Frontend",
      icon: Monitor,
      skills: ["React", "HTML", "CSS", "Bootstrap"],
      gradient: "from-neon-cyan to-neon-blue"
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Django"],
      gradient: "from-neon-pink to-neon-purple"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "MongoDB"],
      gradient: "from-neon-purple to-neon-blue"
    },
    {
      title: "Tools & Workflow",
      icon: Wrench,
      skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook"],
      gradient: "from-neon-cyan to-neon-pink"
    }
  ];

  return (
    <section id="skills" className="py-32 relative">
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
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-space-grotesk font-bold text-transparent bg-gradient-accent bg-clip-text mb-6">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={index} 
                  className="glass border-white/10 shadow-intense hover:shadow-glow transition-all duration-700 group cursor-pointer"
                >
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center text-white">
                      <div className={`w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-all duration-300 shadow-glow`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <span className="font-space-grotesk">{category.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex}
                          variant="secondary"
                          className="glass hover:shadow-glow transition-all duration-300 border-white/20 text-white font-medium px-3 py-1 hover:scale-105"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;