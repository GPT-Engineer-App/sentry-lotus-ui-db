import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="w-full py-4 bg-primary flex justify-between items-center px-8">
      <div className="text-accent text-2xl font-bold">Lotus Sentry Security Corp</div>
      <nav className="space-x-4">
        <Link to="/" className="text-secondary-foreground">Home</Link>
        <Link to="/about" className="text-secondary-foreground">About Us</Link>
        <Link to="/how-it-works" className="text-secondary-foreground">How It Works</Link>
        <Link to="/features" className="text-secondary-foreground">Features</Link>
        <Link to="/investment-opportunities" className="text-secondary-foreground">Investment Opportunities</Link>
        <Link to="/market-insights" className="text-secondary-foreground">Market Insights</Link>
        <Link to="/community" className="text-secondary-foreground">Community</Link>
        <Link to="/contact" className="text-secondary-foreground">Contact Us</Link>
        <Link to="/login" className="text-secondary-foreground">Login/Sign Up</Link>
        <Link to="/wallet-connect" className="text-secondary-foreground">Wallet Connect</Link>
      </nav>
    </header>
  );
};

export default Navbar;