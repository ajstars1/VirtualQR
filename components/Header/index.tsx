
import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { cn } from '@/lib/utils';
import Button from '../Button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  // const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-10 py-4',
        isScrolled ? 'glassmorphism shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          href="/" 
          className="flex items-center"
        >
          <span className="font-bold text-xl tracking-tight gradient-text">XR Card</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-1">
          <Link 
            href="/" 
            className={cn(
              'px-4 py-2 rounded-full text-sm font-medium transition-colors',
              isActive('/') 
                ? 'text-primary' 
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            Home
          </Link>
          <Link 
            href="/features" 
            className={cn(
              'px-4 py-2 rounded-full text-sm font-medium transition-colors',
              isActive('/features') 
                ? 'text-primary' 
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            Features
          </Link>
          <Link 
            href="/pricing" 
            className={cn(
              'px-4 py-2 rounded-full text-sm font-medium transition-colors',
              isActive('/pricing') 
                ? 'text-primary' 
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            Pricing
          </Link>
          <Button to="/scan/9x3xaj6" variant="secondary" size="md" className="ml-4">
            Start Scanning
          </Button>
        </nav>
        
        <Button to="/scan/9x3xaj6" variant="primary" size="sm" className="md:hidden">
          Scan
        </Button>
      </div>
    </header>
  );
};

export default Header;