import { Button } from "@/components/ui/button";
import { Github, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-visible">
      {/* Main container */}
      <div className="container mx-auto px-6 text-center relative z-10 overflow-visible">
        <div className="max-w-5xl mx-auto pt-8 space-y-8">
          
          {/* Name */}
          <h1 className="text-6xl md:text-8xl font-space-grotesk font-bold leading-[1.05] break-words">
            <span className="block text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text">
              T Neeraj
            </span>
            <span className="block text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text">
              Kalkoor
            </span>
          </h1>

          {/* Subtitle */}
          <div className="relative">
            <p className="text-2xl md:text-3xl text-pink-400 font-medium mb-4">
              Data Enthusiast & Web Developer
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 opacity-25 blur-xl -z-10"></div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-inter">
            Third-year AI & Data Science student passionate about building intelligent systems 
            and scalable web applications. I solve problems through data and create innovative web solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">

            {/* Get In Touch */}
            <Button 
              size="lg" 
              className="group glass bg-white text-black hover:text-white hover:shadow-glow transition-all duration-500 font-medium relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Mail className="mr-3 h-5 w-5 relative z-10" />
              <span className="relative z-10">Get In Touch</span>
            </Button>

            {/* View Github */}
            <Button 
              size="lg" 
              variant="outline" 
              className="group glass border-white/20 bg-white text-black hover:text-white hover:shadow-glow transition-all duration-500 font-medium relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Github className="mr-3 h-5 w-5 relative z-10" />
              <span className="relative z-10">View Github</span>
            </Button>

            {/* Resume */}
            <Button 
              size="lg" 
              variant="outline" 
              className="group glass border-white/20 bg-white text-black hover:text-white hover:shadow-glow transition-all duration-500 font-medium relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Download className="mr-3 h-5 w-5 relative z-10" />
              <span className="relative z-10">Resume</span>
            </Button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
