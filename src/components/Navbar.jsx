import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const getLinkClasses = (path, isMobile = false) => {
    const isActive = location.pathname === path;
    const base = isMobile
      ? "font-body-md text-body-md font-bold py-2 transition-all duration-300 ease-in-out border-l-2 pl-3"
      : "font-body-md text-body-md font-bold pb-1 transition-all duration-300 ease-in-out border-b-2";
    
    if (isActive) {
      return `${base} text-secondary ${isMobile ? 'border-secondary bg-secondary/5 rounded-r-md' : 'border-secondary'} active`;
    }
    return `${base} text-on-surface-variant border-transparent hover:text-secondary hover:opacity-80`;
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-white/20 shadow-[0_20px_40px_rgba(59,130,246,0.08)] transition-all duration-300">
      <nav className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        <div className="flex items-center gap-4">
          <Link to="/" className="font-headline-md text-headline-md font-bold tracking-tight text-primary hover:opacity-80 transition-opacity duration-300 ease-in-out">SYNQUORA</Link>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/features" className={getLinkClasses('/features')}>Features</Link>
          <Link to="/architecture" className={getLinkClasses('/architecture')}>Architecture</Link>
          <Link to="/working" className={getLinkClasses('/working')}>Working</Link>
          <Link to="/tech-stack" className={getLinkClasses('/tech-stack')}>Tech Stack</Link>
          <Link to="/contact" className={getLinkClasses('/contact')}>Contact</Link>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2 text-primary hover:text-secondary transition-colors focus:outline-none flex items-center justify-center rounded-lg hover:bg-surface-container-low"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <span className="material-symbols-outlined text-[28px]">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-outline-variant/20 bg-surface/95 backdrop-blur-xl ${
          isOpen ? 'max-h-[300px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-4 px-margin-mobile">
          <Link to="/features" onClick={() => setIsOpen(false)} className={getLinkClasses('/features', true)}>Features</Link>
          <Link to="/architecture" onClick={() => setIsOpen(false)} className={getLinkClasses('/architecture', true)}>Architecture</Link>
          <Link to="/working" onClick={() => setIsOpen(false)} className={getLinkClasses('/working', true)}>Working</Link>
          <Link to="/tech-stack" onClick={() => setIsOpen(false)} className={getLinkClasses('/tech-stack', true)}>Tech Stack</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className={getLinkClasses('/contact', true)}>Contact</Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
