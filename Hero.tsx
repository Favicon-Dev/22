import React from 'react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover opacity-30"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-digital-animation-of-a-network-27784-large.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="container mx-auto px-4 z-10 text-center">
        <img 
          src="https://yt3.googleusercontent.com/FzU9CPD_fNaQLeMEt_1KUSlP0PKAl4QKSBpsqpai3fEqXONDI1mvFm1mRy724REn39QTKV8dVw=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
          alt="Absi Banner"
          className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl mb-8"
        />
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Welcome to Absi's Community
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
          Join our vibrant community and experience entertainment like never before
        </p>
      </div>
    </section>
  );
}