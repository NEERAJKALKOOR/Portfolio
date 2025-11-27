import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Newspaper, ShoppingBag, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
  title: "Parallel Web Crawler",
  description: "High-performance multi-threaded web crawler with real-time progress tracking, SEO analysis, and an interactive React dashboard for visualizing crawl metrics, broken links, and site health.",
  tech: ["Python", "Flask", "React", "Tailwind", "Recharts"],
  icon: TrendingUp,
  gradient: "from-neon-purple to-neon-pink",
  features: [
    "Parallel Crawling (8/16/32 threads)",
    "SEO & Health Scoring",
    "Live Crawl Monitoring",
    "Interactive Dashboards",
    "Broken Link Detection"
  ]
},

    {
      title: "Online Clothing Store",
      description: "A comprehensive full-stack eCommerce platform designed for modern clothing retail. Features include user authentication, product catalog, shopping cart, and secure payment processing.",
      tech: ["HTML", "CSS", "JavaScript", "MongoDB"],
      icon: ShoppingBag,
      gradient: "from-neon-purple to-neon-pink",
      features: ["Responsive Design", "Secure Payments", "User Authentication", "Product Management"]
    },
    {
  title: "Web News Fetching & Aggregation",
  description: "Automated news extraction system that scrapes multiple media sources, categorizes articles using NLP, and generates a unified feed with real-time updates and topic-level insights.",
  tech: ["Python", "BeautifulSoup", "NLP", "Flask", "React"],
  icon: Newspaper,
  gradient: "from-neon-purple to-neon-pink",
  features: [
    "Multi-source Web Scraping",
    "Real-time News Aggregation",
    "NLP-based Topic Classification",
    "Sentiment Analysis",
    "Search & Filtering Engine"
  ]
}
,
    {
      title: "Bank Transaction Analysis",
      description: "Advanced data analysis project focused on synthetic bank transactions to identify spending patterns, fraud detection, and financial trends across multiple categories using machine learning.",
      tech: ["Python", "Pandas", "Power BI"],
      icon: TrendingUp,
      gradient: "from-neon-purple to-neon-pink",
      features: ["Pattern Recognition", "Data Visualization", "Trend Analysis", "ML Integration"]
    }
  ];

  return (
    <section id="projects" className="py-32 relative overflow-hidden font-inter">
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
            <h2 className="text-5xl md:text-6xl font-space-grotesk font-bold text-transparent bg-gradient-primary bg-clip-text mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-lg text-white/70 mt-6 max-w-2xl mx-auto">
              Showcasing innovative solutions that blend creativity with cutting-edge technology
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-10">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card 
                  key={index} 
                  className="glass border-white/10 shadow-intense hover:shadow-glow transition-all duration-700 group cursor-pointer overflow-hidden font-inter"
                >
                  <CardHeader className="relative">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-glow`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex gap-3">
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="glass border-white/20 text-white hover:shadow-glow transition-all duration-300 p-2 font-inter"
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="glass border-white/20 text-white hover:shadow-glow transition-all duration-300 p-2 font-inter"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-space-grotesk text-white mb-4">{project.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-white/80 leading-relaxed font-inter">
                      {project.description}
                    </p>
                    
                    <div className="space-y-4">
                      <h4 className="text-sm font-medium text-white/90 uppercase tracking-wider font-inter">Key Features</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm text-white/70 font-inter">
                            <div className="w-1.5 h-1.5 bg-gradient-primary rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="text-sm font-medium text-white/90 uppercase tracking-wider font-inter">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex}
                            variant="outline"
                            className="glass border-white/20 text-white hover:shadow-glow transition-all duration-300 text-xs font-inter"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
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

export default Projects;