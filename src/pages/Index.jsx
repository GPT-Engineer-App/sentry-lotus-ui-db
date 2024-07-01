import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-background">
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
      <main className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-4xl text-primary font-bold mb-4">Welcome to Lotus Sentry Security Corp</h1>
        <p className="text-foreground text-lg mb-8">Your gateway to real estate tokenization and investment opportunities.</p>
        <div className="space-x-4">
          <Link to="/get-started" className="bg-primary text-secondary-foreground py-2 px-4 rounded hover:bg-accent">Get Started</Link>
          <Link to="/learn-more" className="bg-primary text-secondary-foreground py-2 px-4 rounded hover:bg-accent">Learn More</Link>
        </div>
      </main>
      <footer className="w-full py-4 bg-primary flex justify-center items-center text-secondary-foreground">
        © 2023 Lotus Sentry Security Corp. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;