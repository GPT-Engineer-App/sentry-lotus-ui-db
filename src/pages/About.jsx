import React from 'react';

const About = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-white">
      <header className="w-full py-4 bg-deep-purple flex justify-between items-center px-8">
        <div className="text-gold text-2xl font-bold">Lotus Sentry Security Corp</div>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-4xl text-deep-purple font-bold mb-4">About Us</h1>
        <p className="text-black text-lg mb-8">Learn more about our mission and vision.</p>
      </main>
      <footer className="w-full py-4 bg-deep-purple flex justify-center items-center text-white">
        © 2023 Lotus Sentry Security Corp. All rights reserved.
      </footer>
    </div>
  );
};

export default About;