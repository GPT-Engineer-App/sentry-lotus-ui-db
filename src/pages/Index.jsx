import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-white">
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
      <main className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-4xl text-deep-purple font-bold mb-4">Welcome to Lotus Sentry Security Corp</h1>
        <p className="text-black text-lg mb-8">Your gateway to real estate tokenization and investment opportunities.</p>
        <div className="space-x-4">
          <Link to="/get-started" className="bg-deep-purple text-white py-2 px-4 rounded hover:bg-gold">Get Started</Link>
          <Link to="/learn-more" className="bg-deep-purple text-white py-2 px-4 rounded hover:bg-gold">Learn More</Link>
        </div>
      </main>
      <footer className="w-full py-4 bg-deep-purple flex justify-center items-center text-white">
        © 2023 Lotus Sentry Security Corp. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;