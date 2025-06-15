import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/98 backdrop-blur-md shadow-sm' : 'bg-white/95 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img 
              src="https://bannerton.ae/wp-content/uploads/2025/02/cropped-logo2x-300x31.png" 
              alt="Bannerton PR Logo" 
              className="h-8"
            />
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-bannerton-gray hover:text-bannerton-navy transition-colors duration-300 font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-bannerton-gray hover:text-bannerton-navy transition-colors duration-300 font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-bannerton-gray hover:text-bannerton-navy transition-colors duration-300 font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('process')}
                className="text-bannerton-gray hover:text-bannerton-navy transition-colors duration-300 font-medium"
              >
                Process
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-bannerton-gray hover:text-bannerton-navy transition-colors duration-300 font-medium"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('awards')}
                className="text-bannerton-gray hover:text-bannerton-navy transition-colors duration-300 font-medium"
              >
                Awards
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-bannerton-navy text-white px-6 py-2 rounded-full hover:bg-bannerton-blue transition-colors duration-300 font-medium"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-bannerton-gray hover:text-bannerton-navy"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-3 py-2 text-bannerton-gray hover:text-bannerton-navy"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-3 py-2 text-bannerton-gray hover:text-bannerton-navy"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-3 py-2 text-bannerton-gray hover:text-bannerton-navy"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="block w-full text-left px-3 py-2 text-bannerton-gray hover:text-bannerton-navy"
            >
              Process
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left px-3 py-2 text-bannerton-gray hover:text-bannerton-navy"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('awards')}
              className="block w-full text-left px-3 py-2 text-bannerton-gray hover:text-bannerton-navy"
            >
              Awards
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-3 py-2 text-bannerton-gray hover:text-bannerton-navy"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
