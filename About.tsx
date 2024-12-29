import React from 'react';
import { Users, Gamepad2, Trophy } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          About Absi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-3">
              <Users className="w-full h-full text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Vibrant Community</h3>
            <p className="text-gray-400">Join thousands of active members in our growing community</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-3">
              <Gamepad2 className="w-full h-full text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Interactive Content</h3>
            <p className="text-gray-400">Experience engaging streams and entertaining content</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-3">
              <Trophy className="w-full h-full text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Special Events</h3>
            <p className="text-gray-400">Participate in exclusive events and competitions</p>
          </div>
        </div>
      </div>
    </section>
  );
}