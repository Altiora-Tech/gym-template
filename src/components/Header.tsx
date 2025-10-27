import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX, FiInstagram, FiTwitter, FiFacebook } from './icons';

const NavLink: React.FC<{ to: string; children: React.ReactNode; onClick?: () => void; }> = ({ to, children, onClick }) => (
  <Link 
    to={to} 
    onClick={onClick} 
    className="text-foreground-light dark:text-foreground-dark hover:text-primary-DEFAULT dark:hover:text-primary-DEFAULT transition-colors duration-300 font-medium block py-2 px-4"
  >
    {children}
  </Link>
);

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "/about", label: "Nosotros" },
    { href: "/classes", label: "Clases" },
    // { href: "/schedule", label: "Horarios" },
    // { href: "/trainers", label: "Entrenadores" },
    { href: "/memberships", label: "Membresías" },
    { href: "/contact", label: "Contacto" }
  ];

  return (
    <header id="header" className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl font-bold text-primary">
            GymFlex
          </Link>
          
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map(link => (
              <NavLink key={link.href} to={link.href}>{link.label}</NavLink>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
             {/* <div className="hidden md:flex items-center space-x-3 text-muted-light dark:text-muted-dark">
                <a href="#" className="hover:text-primary-DEFAULT transition-colors"><FiFacebook size={20} /></a>
                <a href="#" className="hover:text-primary-DEFAULT transition-colors"><FiTwitter size={20} /></a>
                <a href="#" className="hover:text-primary-DEFAULT transition-colors"><FiInstagram size={20} /></a>
            </div> */}

            <button 
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            id="theme-toggle"
            name="theme-toggle"
            type="button"
            className="p-2 rounded-full text-foreground-light dark:text-foreground-dark hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
            </button>
            <Link to="/memberships" className="hidden sm:inline-block bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105">
              Únete Ahora
            </Link>
            <div className="lg:hidden">
              <button 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Mobile Menu"
              id="mobile-menu-toggle"
              name="mobile-menu-toggle"
              type="button"
              className="text-foreground-light dark:text-foreground-dark">
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} bg-background-light dark:bg-background-dark absolute w-full shadow-lg`}>
        <nav className="flex flex-col items-center space-y-4 py-6">
          {navLinks.map(link => (
            <NavLink key={link.href} to={link.href} onClick={() => setIsOpen(false)}>{link.label}</NavLink>
          ))}
          <Link 
            to="/memberships" 
            onClick={() => setIsOpen(false)} 
            className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-xl transform hover:scale-105 w-full text-center max-w-xs block mx-auto"
          >
            Únete Ahora
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;