import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="w-full py-4 bg-deep-purple flex justify-between items-center px-8">
      <div className="text-gold text-2xl font-bold">Lotus Sentry Security Corp</div>
      <nav className="space-x-4">
        <Link to="/" className="text-white">Home</Link>
        <Link to="/about" className="text-white">About Us</Link>
        <Link to="/how-it-works" className="text-white">How It Works</Link>
        <Link to="/features" className="text-white">Features</Link>
        <Link to="/investment-opportunities" className="text-white">Investment Opportunities</Link>
        <Link to="/market-insights" className="text-white">Market Insights</Link>
        <Link to="/community" className="text-white">Community</Link>
        <Link to="/contact" className="text-white">Contact Us</Link>
        <Link to="/login" className="text-white">Login/Sign Up</Link>
        <Link to="/wallet-connect" className="text-white">Wallet Connect</Link>
      </nav>
    </header>
  );
};

export default Navbar;