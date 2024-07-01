import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-background">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-4xl text-primary font-bold mb-4">Welcome to Lotus Sentry Security Corp</h1>
        <p className="text-foreground text-lg mb-8">Your gateway to real estate tokenization and investment opportunities.</p>
        <div className="space-x-4">
          <Link to="/get-started" className="bg-primary text-primary-foreground py-2 px-4 rounded hover:bg-accent">Get Started</Link>
          <Link to="/learn-more" className="bg-primary text-primary-foreground py-2 px-4 rounded hover:bg-accent">Learn More</Link>
        </div>
      </main>
      <footer className="w-full py-4 bg-primary flex justify-center items-center text-secondary-foreground">
        © 2023 Lotus Sentry Security Corp. All rights reserved.
      </footer>
    </div>
  );
};

export default Index;