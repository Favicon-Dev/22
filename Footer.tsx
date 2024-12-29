import React from 'react';

export function Footer() {
  return (
    <footer className="bg-black/50 py-8">
      <div className="container mx-auto px-4 text-center">
        <img 
          src="https://cdn.discordapp.com/avatars/1141672468512256130/e93c359cefa26342e51990ace4b2389f.png?size=1024" 
          alt="Absi Logo" 
          className="w-16 h-16 mx-auto mb-4 rounded-full"
        />
        <p className="text-gray-400">
          © {new Date().getFullYear()} Absi Community. All rights reserved.
        </p>
      </div>
    </footer>
  );
}