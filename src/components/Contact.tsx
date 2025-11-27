import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Download, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "neerajtkalkoor@gmail.com",
      action: "Send Email",
      href: "mailto:neerajtkalkoor@gmail.com",
      gradient: "from-neon-purple to-neon-pink"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/NEERAJKALKOOR",
      action: "View Profile",
      href: "https://github.com/NEERAJKALKOOR",
      gradient: "from-neon-blue to-neon-cyan"
    },
    {
      icon: Download,
      title: "Resume",
      value: "Download latest resume",
      action: "Download PDF",
      href: "/resume.pdf", // <-- Set to your resume file in public folder
      gradient: "from-neon-cyan to-neon-purple"
    }
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
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
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl font-space-grotesk font-bold text-transparent bg-gradient-secondary bg-clip-text mb-6">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-secondary mx-auto rounded-full mb-8"></div>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Ready to collaborate on innovative projects or discuss exciting opportunities? 
              I'm always open to connecting with fellow developers and industry professionals.
            </p>
          </div>
          
          <Card className="glass border-white/10 shadow-intense hover:shadow-glow transition-all duration-700 mb-12">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-3 gap-8">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <div 
                      key={index} 
                      className="group text-center space-y-6 p-6 glass rounded-2xl hover:shadow-glow transition-all duration-500"
                    >
                      <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${method.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-glow`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      
                      <div className="space-y-3">
                        <h3 className="text-xl font-space-grotesk font-semibold text-white">{method.title}</h3>
                        <p className="text-sm text-white/70 break-all">{method.value}</p>
                      </div>
                      
                      <Button 
                        size="sm" 
                        className="glass hover:shadow-glow transition-all duration-300 border border-white/20 w-full group"
                        asChild
                      >
                        {method.title === "Resume" ? (
                          <a href={method.href} download className="inline-flex items-center justify-center">
                            {method.action}
                          </a>
                        ) : (
                          <a href={method.href} className="inline-flex items-center justify-center">
                            {method.action}
                          </a>
                        )}
                      </Button>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white/60">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-neon-cyan" />
                    <span>Bangalore, India</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-neon-pink" />
                    <span>Available for opportunities</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to action */}
          <div className="text-center">
            <p className="text-white/60 mb-6">
              Interested in working together? Let's start a conversation.
            </p>
            <Button 
              size="lg" 
              className="group glass hover:shadow-intense transition-all duration-500 font-medium relative overflow-hidden"
              asChild
            >
              <a href="mailto:neerajtkalkoor@gmail.com" className="inline-flex items-center">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Mail className="mr-3 h-5 w-5 relative z-10" />
                <span className="relative z-10">Start a Conversation</span>
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;