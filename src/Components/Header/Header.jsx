import React, { useState, useEffect } from 'react';
import css from './header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Work', id: 'work' },
    { name: 'Education', id: 'education' },
    { name: 'Projects', id: 'projects' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`${css.header} ${isScrolled ? css.scrolled : ''}`}>
      <div className={css.container}>
        <div className={css.logo}>
          <span className={css.logoText}>GSG</span>
        </div>
        
        <button 
          className={`${css.menuButton} ${isMenuOpen ? css.active : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${css.nav} ${isMenuOpen ? css.active : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={css.navItem}
              onClick={() => scrollToSection(item.id)}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;