import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SocialPlatforms } from './components/SocialPlatforms';
import { About } from './components/About';
import { ContactForm } from './components/ContactForm/ContactForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Header />
      <Hero />
      <SocialPlatforms />
      <About />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;