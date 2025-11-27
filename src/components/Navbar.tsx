import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-white/10 shadow-intense"
          : "bg-black/80"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="text-2xl font-space-grotesk font-extrabold text-transparent bg-gradient-primary bg-clip-text tracking-tight">
            T Neeraj Kalkoor
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="font-inter text-lg text-white/80 hover:text-white transition-all duration-300 font-semibold relative group tracking-tight"
              >
                {item.label}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
            <a href="/resume.pdf" download className="flex">
              <Button
                size="sm"
                className="font-inter text-base font-semibold glass hover:shadow-glow transition-all duration-300 border border-white/20"
              >
                Download Resume
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-white/10"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 glass border-t border-white/10 animate-fade-in">
            <div className="flex flex-col space-y-6">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="font-inter text-lg font-semibold text-white/80 hover:text-white transition-all duration-300 px-4 py-2 hover:bg-white/5 rounded-lg tracking-tight"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a href="/resume.pdf" download className="flex mx-4">
                <Button
                  size="sm"
                  className="font-inter text-base font-semibold glass hover:shadow-glow transition-all duration-300 border border-white/20"
                >
                  Download Resume
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
