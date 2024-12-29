import React from 'react';

export function Header() {
  return (
    <header className="fixed w-full bg-black/50 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="https://cdn.discordapp.com/avatars/1141672468512256130/e93c359cefa26342e51990ace4b2389f.png?size=1024" 
            alt="Absi Logo" 
            className="w-10 h-10 rounded-full"
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Absi
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#home" className="hover:text-purple-500 transition-colors">Home</a>
          <a href="#platforms" className="hover:text-purple-500 transition-colors">Platforms</a>
          <a href="#about" className="hover:text-purple-500 transition-colors">About</a>
        </nav>
      </div>
    </header>
  );
}