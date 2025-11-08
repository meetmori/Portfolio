import React, { useState, useEffect } from 'react';

const navLinks = [
  { id: 'home', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'skills', title: 'Skills' },
  { id: 'projects', title: 'Projects' },
  { id: 'experience', title: 'Experience' },
  { id: 'contact', title: 'Contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      const sections = navLinks.map(link => document.getElementById(link.id));
      let currentSection = 'home';
      
      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - 100) {
            currentSection = section.id;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close menu on navigation
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#10101A]/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Meet Mori.</a>
        </div>
        
        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a 
                href={`#${link.id}`} 
                onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                className={`text-lg font-medium transition-colors duration-300 ${activeSection === link.id ? 'text-[#F75023]' : 'text-gray-300 hover:text-[#F75023]'}`}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#10101A]">
          <ul className="flex flex-col items-center py-4">
            {navLinks.map((link) => (
              <li key={link.id} className="py-2">
                <a 
                  href={`#${link.id}`} 
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                  className={`text-lg font-medium transition-colors duration-300 ${activeSection === link.id ? 'text-[#F75023]' : 'text-gray-300 hover:text-[#F75023]'}`}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;