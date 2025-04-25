import { useState } from "react";
import { Link } from "wouter";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 glass-effect shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              {/* Logo and Brand with animation */}
              <div className="text-eldritch-accent font-mono font-bold text-xl">
                <span className="eldritch-text-purple inline-block hover:animate-float">E</span>
                <span className="eldritch-text-red inline-block hover:animate-float">l</span>
                <span className="eldritch-text-yellow inline-block hover:animate-float">d</span>
                <span className="eldritch-text-green inline-block hover:animate-float">r</span>
                <span className="eldritch-text-cyan inline-block hover:animate-float">i</span>
                <span className="eldritch-text-blue inline-block hover:animate-float">t</span>
                <span className="eldritch-text-pink inline-block hover:animate-float">c</span>
                <span className="eldritch-text-purple inline-block hover:animate-float">h</span>
              </div>
            </div>
            <div className="hidden md:ml-8 md:flex md:space-x-8">
              <a 
                href="#palette" 
                className="border-transparent hover:eldritch-border-purple eldritch-text-foreground inline-flex items-center px-2 pt-1 border-b-2 text-sm font-medium transition-all duration-300 hover:text-white hover:translate-y-[-2px]"
              >
                Colors
              </a>
              <a 
                href="#preview" 
                className="border-transparent hover:eldritch-border-purple eldritch-text-foreground inline-flex items-center px-2 pt-1 border-b-2 text-sm font-medium transition-all duration-300 hover:text-white hover:translate-y-[-2px]"
              >
                Preview
              </a>
              <a 
                href="#examples" 
                className="border-transparent hover:eldritch-border-purple eldritch-text-foreground inline-flex items-center px-2 pt-1 border-b-2 text-sm font-medium transition-all duration-300 hover:text-white hover:translate-y-[-2px]"
              >
                Examples
              </a>
              <a 
                href="#installation" 
                className="border-transparent hover:eldritch-border-purple eldritch-text-foreground inline-flex items-center px-2 pt-1 border-b-2 text-sm font-medium transition-all duration-300 hover:text-white hover:translate-y-[-2px]"
              >
                Installation
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <a 
              href="https://github.com/eldritch-theme" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-md eldritch-text-foreground hover:eldritch-bg-purple/20 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
            <div className="md:hidden ml-2">
              <button 
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-gray-400 hover:eldritch-text-purple hover:bg-gray-800/50 focus:outline-none transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu with animation */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-effect-light animate-float-slow">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            <a href="#palette" className="eldritch-text-foreground hover:eldritch-text-purple hover:bg-gray-800/50 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300">Colors</a>
            <a href="#preview" className="eldritch-text-foreground hover:eldritch-text-purple hover:bg-gray-800/50 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300">Preview</a>
            <a href="#examples" className="eldritch-text-foreground hover:eldritch-text-purple hover:bg-gray-800/50 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300">Examples</a>
            <a href="#installation" className="eldritch-text-foreground hover:eldritch-text-purple hover:bg-gray-800/50 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300">Installation</a>
          </div>
        </div>
      )}
    </nav>
  );
}
