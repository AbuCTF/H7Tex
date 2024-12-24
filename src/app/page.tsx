// pages/page.tsx
'use client';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Terminal, Trophy, Target, Flag } from 'lucide-react';

// Import our custom components
import MatrixRain from '../components/MatrixRain';
import CTFTimeline from '../components/CTFTimeline';
import Achievements from '../components/Achievements';

// Define team members with their roles
const members = [
  { name: 'Abu', role: 'Founder' },
  { name: 'N1sh', role: 'Member' },
  { name: 'PattuSai', role: 'Member' },
  { name: 'MrGhost', role: 'Member' },
  { name: 'Rohmat', role: 'Member' },
  { name: 'SHL', role: 'Member' },
  { name: 'I Think DFIRently', role: 'Member' },
  { name: 'Josh', role: 'Member' },
  { name: 'Cook1e', role: 'Member' },
  { name: 'Owatron', role: 'Member' }
];

export default function Home() {
  // State for the typing animation effect
  const [typedText, setTypedText] = useState('');
  const textToType = 'We Learn. We Hack. We Dominate.';
  
  // Typing animation effect
  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= textToType.length) {
        setTypedText(textToType.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-500">
      {/* Add Matrix Rain effect as background */}
      <MatrixRain />
      
      <Head>
        <title>H7Tex</title>
        <meta name="description" content="H7Tex - Upcoming CTF Guild" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="border-b border-green-800 p-4 relative z-10">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Terminal size={24} />
            <span className="text-xl font-mono">H7Tex</span>
          </div>
          <div className="space-x-6 font-mono">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#achievements" className="hover:text-white">Achievements</a>
            <a href="#timeline" className="hover:text-white">Timeline</a>
            <a href="#team" className="hover:text-white">Team</a>
            <a href="https://ctftime.org/team/281844" className="hover:text-white">CTFTime</a>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold font-mono mb-6">
            <span className="text-white">H7</span>Tex
          </h1>
          <div className="h-8">
            <p className="text-xl font-mono">{typedText}</p>
          </div>
        </div>

        {/* About Section */}
        <section id="about" className="mb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-mono mb-6 text-white">About Us</h2>
            <div className="bg-gray-900 p-6 rounded-lg font-mono">
              <p className="mb-2">
              Started around February 2024, inspired by PPP[Plaid Parliament of Pwning] dominating DEF CON. Fast forward 10 months, and we’ve climbed to rank #7 in India and 100+ CTFs under the belt. We aspire to become a stronghold in the International CTF community. That said, enough stalking come join our Discord to have a chat. We'd love to hear from you. Finding the Discord invite is the first challenge you must face before meeting us HAHA.
              </p>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="mb-20">
          <Achievements />
        </section>

        {/* Timeline Section */}
        <section id="timeline" className="mb-20">
          <CTFTimeline />
        </section>

        {/* Team Section */}
        <section id="team" className="mb-20">
          <h2 className="text-2xl font-mono mb-6 text-white">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member) => (
              <div 
                key={member.name}
                className="bg-gray-900 p-6 rounded-lg font-mono hover:bg-gray-800 
                         transition-colors duration-300"
              >
                <h3 className="text-xl mb-2">{member.name}</h3>
                <p className="text-green-400">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTFTime Link Section */}
        <section className="text-center">
          <a 
            href="https://ctftime.org/team/281844"
            className="inline-block bg-green-500 text-black font-mono py-3 px-6 
                     rounded-lg hover:bg-green-400 transition-colors duration-300"
          >
            View Us on CTFTime
          </a>
        </section>
      </main>

      <footer className="border-t border-green-800 mt-20 py-8 relative z-10">
        <div className="container mx-auto px-4 text-center font-mono">
          <p>&copy; 2024 H7Tex. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}