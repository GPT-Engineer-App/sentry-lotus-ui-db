import React from 'react';

const About = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-background">
      <header className="w-full py-4 bg-primary flex justify-between items-center px-8">
        <div className="text-accent text-2xl font-bold">Lotus Sentry Security Corp</div>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-4xl text-primary font-bold mb-4">About Us</h1>
        <p className="text-foreground text-lg mb-8">Learn more about our mission and vision.</p>
      </main>
      <footer className="w-full py-4 bg-primary flex justify-center items-center text-secondary-foreground">
        © 2023 Lotus Sentry Security Corp. All rights reserved.
      </footer>
    </div>
  );
};

export default About;