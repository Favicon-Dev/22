import React from 'react';
import { Twitch, Youtube, Instagram, Twitter } from 'lucide-react';

const platforms = [
  {
    name: 'Kick',
    description: 'Join live streams with interactive gameplay and engaging community events',
    url: 'https://kick.com/absi',
    icon: Twitch,
    color: 'from-green-500 to-emerald-600'
  },
  {
    name: 'TikTok',
    description: 'Catch the most entertaining short-form content and viral moments',
    url: 'https://www.tiktok.com/@3absi1999',
    color: 'from-pink-500 to-purple-600'
  },
  {
    name: 'Community Hub',
    description: 'Be part of our amazing community and connect with fellow fans',
    url: 'https://discord.com/invite/3absi',
    color: 'from-indigo-500 to-blue-600'
  },
  {
    name: 'Instagram',
    description: 'Follow for behind-the-scenes content and daily updates',
    url: 'https://www.instagram.com/hanialqablan/',
    icon: Instagram,
    color: 'from-pink-500 to-red-600'
  },
  {
    name: 'Twitter',
    description: 'Stay updated with the latest news and announcements',
    url: 'https://x.com/absi_151',
    icon: Twitter,
    color: 'from-blue-400 to-blue-600'
  },
  {
    name: 'YouTube',
    description: 'Watch exclusive content, highlights, and special moments',
    url: 'https://www.youtube.com/@3absi2',
    icon: Youtube,
    color: 'from-red-500 to-red-700'
  }
];

export function SocialPlatforms() {
  return (
    <section id="platforms" className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Connect With Absi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-xl bg-gradient-to-br bg-opacity-10 backdrop-blur-lg border border-gray-800 hover:border-purple-500 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${platform.color} p-2 mb-4`}>
                {platform.icon && <platform.icon className="w-full h-full text-white" />}
              </div>
              <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {platform.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}